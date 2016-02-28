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
  var json = JSON.parse(fs.readFileSync('./temp/kendo-api.json', 'utf-8'));

  var jsObj = {};
  extractOptions(jsObj, json);
  extractInterfaces(jsObj, json);

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


function extractOptions(jsObj, json) {
  var optionClasses = [];

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
  kendoMethods.forEach(function (method) {
    if(method.name.startsWith('kendo')) {
      var signatures = method.signatures;
      signatures.forEach(function (signature) {
        if(signature.parameters && signature.parameters.length > 0) {
          optionClasses.push({
            method: method.name, // kendoButton, kendoGrid
            id: signature.parameters[0].type.id // id of the options class
          });
        }
      });
    }
  });

  // iterate over all modules and classes
  // of every class matching an id we found above, add the properties to an array
  kendoModule.children.forEach(function (module) {
    // loop through all classes such as kendo.data.DataSource
    iterativeOptionsLookup(module, optionClasses);
  });

  // sort a-z on method name (for readability)
  optionClasses.sort(function(a,b) {
    return (a.method > b.method) ? 1 : ((b.method > a.method) ? -1 : 0);
  });


  // create a flatter object so it can be easily read out by the plugin
  optionClasses.forEach(function (optionClass) {
    jsObj[optionClass.method] = optionClass.properties;
  });
}


function extractInterfaces(jsObj, json) {
  var findInterfaces = ["GridColumn", "TreeListColumn", "ToolBarItem"];

  var kendo = json.children[0];
  var kendoModule = kendo.children.find(function(i) { return i.name === "kendo" && i.kindString === "Module" });
  var kendoUI = kendoModule.children.find(function(i) { return i.name === "ui" && i.kindString === "Module" });
  var interfaces = kendoUI.children.filter(function(i) { return findInterfaces.indexOf(i.name) > -1 && i.kindString === "Interface"});

  interfaces.forEach(function (interface) {
    jsObj[interface.name] = [];

    interface.children.forEach(function (property) {
      if(property.kindString === "Property" || property.kindString === "Method") {
        jsObj[interface.name].push(property.name);
      }
    });
  });
}


// iterate over all modules and classes
// of every class matching an id we found earlier, add the properties to an array
function iterativeOptionsLookup(_class, optionClasses) {
  // if the kind is a module, iterate over all classes and modudules in there as well
  if(_class.kindString === "Module") {
    if(_class.children) {
      _class.children.forEach(function (item) {
        iterativeOptionsLookup(item, optionClasses)
      });
    }
  }

  // these are classes/interfaces etc
  // find an interface matching the id of an Options class we collected earlier
  // of that interface, put all the propertynames of that interface into an array
   if(_class.children) {
     _class.children.forEach(function (item) {
       optionClasses.forEach(function (optionClass) {
         if(item.id === optionClass.id && item.kindString === "Interface") {

           optionClass.properties = [];

           item.children.forEach(function (property) {
             if(property.kindString === "Property") {
               optionClass.properties.push(property.name);
             }
           });
         }
       });
     });
   }
}

gulp.task('bindables', function (cb) {
  return runSequence(
    'bindables:download',
    'bindables:typedoc',
    'bindables:extract',
    cb);
});
