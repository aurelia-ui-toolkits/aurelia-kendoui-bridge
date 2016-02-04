var gulp = require('gulp');
var request = require('request');
var runSequence = require('run-sequence');
var typedoc = require('gulp-typedoc');
var paths = require('../paths');
var typedocExtractor = require('gulp-typedoc-extractor');
var vinylPaths = require('vinyl-paths');
var fs = require('fs');
var source = require('vinyl-source-stream')


gulp.task('bindables:download', function () {
  return request('https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/kendo-ui/kendo-ui.d.ts')
  .pipe(source('kendo-ui.d.ts'))
  .pipe(gulp.dest('./temp'));
});

gulp.task('bindables:typedoc', function(){
    console.log("NOTE: The 'jquery.d.ts' not found error is expected");

    return gulp.src(['./temp/kendo-ui.d.ts'])
    .pipe(typedoc({
      target: 'es6',
      includeDeclarations: true,
      json: './temp/kendo-api.json',
      name: paths.packageName + '-docs',
      mode: 'modules',
      excludeExternals: true,
      ignoreCompilerErrors: true,
      version: true
    }));
});

gulp.task('bindables:extract', function (cb) {
  var optionClasses = [];

  var json = JSON.parse(fs.readFileSync('./temp/kendo-api.json', 'utf-8'));
  // the first child contains typedoc information about Kendo
  var kendo = json.children[0];

  // get the kendo module
  var kendoModule = kendo.children.find(function(i) { return i.name === "kendo" });
  var jQueryInterface = kendo.children.find(function(i) { return i.name === "JQuery" && i.kindString === "Interface" });
  var kendoMethods = jQueryInterface.children;

  // loop over all kendo methods declarations:
  // kendoAutoComplete(options: kendo.ui.AutoCompleteOptions): JQuery;
  // kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;
  // and for each kendo method, find the id of the Options class (DraggableOptions, AutoCompleteOptions)
  for(var _methodIndex in kendoMethods) {
    var _method = kendoMethods[_methodIndex];
    if(_method.name.startsWith('kendo')) {
      var signatures = _method.signatures;
      for(var _signatureIndex in signatures) {
        var signature = signatures[_signatureIndex];
        if(signature.parameters && signature.parameters.length > 0) {
          optionClasses.push({
            method: _method.name, // kendoButton, kendoGrid
            id: signature.parameters[0].type.id // id of the options class
          });
        }
      }
    }
  }

  // iterate over all modules and classes
  // of every class matching an id we found above, add the properties to an array
  for(var _moduleIndex in kendoModule.children) {
    var _module = kendoModule.children[_moduleIndex];

    // loop through all classes such as kendo.data.DataSource
    iterativeOptionsLookup(_module, optionClasses);
  }


  // sort a-z on method name (for readability)
  optionClasses.sort(function(a,b) {
    return (a.method > b.method) ? 1 : ((b.method > a.method) ? -1 : 0);
  });


  // create a flatter object so it can be easily read out by the plugin
  var jsObj = {};
  for(var _optionClassIndex in optionClasses) {
    var _optionClass = optionClasses[_optionClassIndex];
    jsObj[_optionClass.method] = _optionClass.properties;
  }

  var content = "export let bindables = " + JSON.stringify(jsObj);

  // write the js file to the file system
  fs.writeFile("./src/common/bindables.js", content, function (err) {
    if(err) {
      return console.log(err);
    }

    console.log("Bindables saved to ./src/common/bindables.js")
    cb();
  });
});


// iterate over all modules and classes
// of every class matching an id we found earlier, add the properties to an array
function iterativeOptionsLookup(_class, optionClasses) {
  // if the kind is a module, iterate over all classes and modudules in there as well
  if(_class.kindString === "Module") {
    for(var _itemIndex in _class.children) {
      var _item = _class.children[_itemIndex];
      iterativeOptionsLookup(_item, optionClasses)
    }
  }

  // these are classes/interfaces etc
  // find an interface matching the id of an Options class we collected earlier
  // of that interface, put all the propertynames of that interface into an array
  for(var _itemIndex in _class.children) {
    var _item = _class.children[_itemIndex];

    for(var _optionClass in optionClasses) {
      var optionClass = optionClasses[_optionClass];
      if(_item.id === optionClass.id && _item.kindString === "Interface") {

        optionClass.properties = [];

        for(var _propertyIndex in _item.children) {
          var _property = _item.children[_propertyIndex];

          if(_property.kindString === "Property") {
            optionClass.properties.push(_property.name);
          }
        }
      }
    }
  }
}

gulp.task('bindables', function (cb) {
  return runSequence(
    'bindables:download',
    'bindables:typedoc',
    'bindables:extract',
    cb);
});
