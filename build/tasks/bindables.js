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
  var classAndOptionsRefs = [];
  var optionClasses = [];

  var json = JSON.parse(fs.readFileSync('./temp/kendo-api.json', 'utf-8'));
  // the first child contains typedoc information about Kendo
  var kendo = json.children[0];

  // get the kendo module
  var kendoModule = kendo.children.find(i => i.name === "kendo");

  // loop through all modules and all classes
  // look for a property called "options"
  // then grab the id of the type of this property (GridOptions = 5, ButtonOptions = 19 for example)
  for(var _moduleIndex in kendoModule.children) {
    var _module = kendoModule.children[_moduleIndex];

    iterativeIdLookup(_module, classAndOptionsRefs);
  }

  // iterate over all modules and classes again
  // collect the classes with an id we found earlier
  for(var _moduleIndex in kendoModule.children) {
    var _module = kendoModule.children[_moduleIndex];

    // loop through all classes such as kendo.data.DataSource
    iterativeOptionsLookup(_module, optionClasses, classAndOptionsRefs);
  }

  // filter out duplicate option classes
  var filteredOptions = [];
  for(var _optionClassIndex in optionClasses) {
    var _optionClass = optionClasses[_optionClassIndex];

    if(!filteredOptions.find(i => i.name === _optionClass.name)) {
      filteredOptions.push(_optionClass);
    }
  }

  // sort a-z on class name
  filteredOptions.sort(function(a,b) {
    return (a.class > b.class) ? 1 : ((b.class > a.class) ? -1 : 0);
  });


  // loop over every options class
  // store every property name in an array on the optionclass
  for(var _optionClassIndex in filteredOptions) {
    var _optionClass = filteredOptions[_optionClassIndex];

    _optionClass.properties = [];

    for(var _propertyIndex in _optionClass.children) {
      var _property = _optionClass.children[_propertyIndex];

      if(_property.kindString === "Property") {
        _optionClass.properties.push(_property.name);
      }
    }
  }


  var jsonObj = {};

  for(var _optionClassIndex in filteredOptions) {
    var _optionClass = filteredOptions[_optionClassIndex];
    jsonObj[getKendoClassName(_optionClass.class)] = [];

    for(var _optionIndex in _optionClass.properties) {
      jsonObj[getKendoClassName(_optionClass.class)].push(_optionClass.properties[_optionIndex])
    }
  }

  fs.writeFile("./src/common/bindables.json", JSON.stringify(jsonObj), function (err) {
    if(err) {
      return console.log(err);
    }

    console.log("Bindables saved to ./src/common/bindables.json")
    cb();
  });


});


function getKendoClassName(name) {
  return "kendo" + name;
}


function iterativeOptionsLookup(_class, optionClasses, classAndOptionsRefs) {
  if(_class.kindString === "Module") {
    for(var _itemIndex in _class.children) {
      var _item = _class.children[_itemIndex];
      iterativeOptionsLookup(_item, optionClasses, classAndOptionsRefs)
    }
  }

  for(var _itemIndex in _class.children) {
    var _item = _class.children[_itemIndex];

    for(var _classOptionIndex in classAndOptionsRefs) {
      var classOption = classAndOptionsRefs[_classOptionIndex];
      if(_item.id === classOption.optionsId && _item.kindString === "Interface") {
        _item.class = classOption.class;
        optionClasses.push(_item);
      }
    }
  }
}

function iterativeIdLookup (_class, classAndOptionsRefs) {
  if(_class.kindString === "Module") {
    for(var _itemIndex in _class.children) {
      var _item = _class.children[_itemIndex];
      iterativeIdLookup(_item, classAndOptionsRefs)
    }
  }


  for(var _itemIndex in _class.children) {
    var _item = _class.children[_itemIndex];
    if(_item.kindString === "Property" && _item.name === "options" && _item.type.type === "reference" && _item.type.id) {
      classAndOptionsRefs.push({
        class: _class.name,
        optionsId: _item.type.id
      });
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
