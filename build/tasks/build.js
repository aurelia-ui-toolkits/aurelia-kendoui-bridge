var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var through2 = require('through2');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var gulpIgnore = require('gulp-ignore');
var tools = require('aurelia-tools');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var vinylPaths = require('vinyl-paths');
var tools = require('aurelia-tools');
var typedoc = require('gulp-typedoc');
var request = require('request');
var fs = require('fs');
var source = require('vinyl-source-stream')
var eslint = require('gulp-eslint');
var conventionalChangelog = require('gulp-conventional-changelog');
var bump = require('gulp-bump');
var args = require('../args');
var browserSync = require('browser-sync');
var path = require('path');
var karma = require('karma');
var gulp = require('gulp');

var jsName = paths.packageName + '.js';

// RegExp remove tags during insert.transform in build-index gulp task
var startTag = '//\\s*build-index-remove start';
var endTag = '//\\s*build-index-remove end';
var removeRegExp = new RegExp(startTag + '[^]+?' + endTag, 'g');

gulp.task('lint', function() {
  return gulp.src([paths.source, paths.unit])
  .pipe(eslint())
  .pipe(eslint.format())
  // .pipe(eslint.failOnError());
});

gulp.task('clean', function() {
  return gulp.src([paths.output], { allowEmpty : true })
    .pipe(vinylPaths(del));
});


gulp.task('update-own-deps', function(){
  tools.updateOwnDependenciesFromLocalRepositories();
});

gulp.task('build-dev-env', function () {
  tools.buildDevEnv();
});


gulp.task('build-index', function(){
  var importsToAdd = [];

  var src = gulp.src(paths.source);

  if (paths.ignore) {
    paths.ignore.forEach(function(filename){
      src = src.pipe(gulpIgnore.exclude(filename));
    });
  }

  return src
    .pipe(through2.obj(function(file, enc, callback) {
      file.contents = new Buffer(tools.extractImports(file.contents.toString("utf8"), importsToAdd));
      this.push(file);
      return callback();
    }))
    .pipe(concat(jsName))
    .pipe(insert.transform(function(contents) {
      return tools.createImportBlock(importsToAdd) + contents.replace(removeRegExp, '');
    }))
    .pipe(gulp.dest(paths.output));
});


gulp.task('build-es6-temp', function () {
    return gulp.src(paths.output + jsName)
      // .pipe(to5(assign({}, compilerOptions, {modules:'common'})))
      .pipe(to5(assign({}, compilerOptions.babelDtsGenerator())))
      .pipe(gulp.dest(paths.output + 'temp'));
});

gulp.task('build-es6', function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-commonjs', function () {
  return gulp.src(paths.source)
    // .pipe(to5(assign({}, compilerOptions, {modules:'common', plugins: []})))
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
  return gulp.src(paths.source)
    // .pipe(to5(assign({}, compilerOptions, {modules:'amd', plugins: []})))
    .pipe(to5(assign({}, compilerOptions.amd())))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
  return gulp.src(paths.source)
    // .pipe(to5(assign({}, compilerOptions, {modules:'system', plugins: []})))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-dev', function () {
  return gulp.src(paths.source)
    .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(to5(assign({}, compilerOptions, {modules:'system', plugins: []})))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(sourcemaps.write(paths.output + 'dev'))
    .pipe(gulp.dest(paths.output + 'dev'));
});

gulp.task('build-dts', function(){
  return gulp.src(paths.output + paths.packageName + '.d.ts')
      .pipe(rename(paths.packageName + '.d.ts'))
      .pipe(gulp.dest(paths.output + 'es6'))
      .pipe(gulp.dest(paths.output + 'commonjs'))
      .pipe(gulp.dest(paths.output + 'amd'))
      .pipe(gulp.dest(paths.output + 'dev'))
      .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('copy-html', function() {
 return gulp.src(paths.html)
  .pipe(gulp.dest(paths.output + 'es6'))
  .pipe(gulp.dest(paths.output + 'commonjs'))
  .pipe(gulp.dest(paths.output + 'amd'))
  .pipe(gulp.dest(paths.output + 'dev'))
  .pipe(gulp.dest(paths.output + 'system'));

});

gulp.task('copy-css', function() {
 return gulp.src(paths.style)
  .pipe(gulp.dest(paths.output + 'es6'))
  .pipe(gulp.dest(paths.output + 'commonjs'))
  .pipe(gulp.dest(paths.output + 'amd'))
  .pipe(gulp.dest(paths.output + 'dev'))
  .pipe(gulp.dest(paths.output + 'system'));

});


gulp.task('build', gulp.series(
  'clean',
  'build-index',
  ['build-es6-temp', 'build-es6', 'build-commonjs', 'build-amd', 'build-system', 'build-dev'],
  ['copy-html', 'copy-css'],
  'build-dts'
));

gulp.task('build-release', gulp.series(function(callback) {
    paths.output = paths.releaseOutput;
    callback();
  },
  'clean',
  'build-index',
  gulp.parallel('build-es6-temp', 'build-es6', 'build-commonjs', 'build-amd', 'build-system', 'build-dev'),
  gulp.parallel('copy-html', 'copy-css'),
  'build-dts'
));


gulp.task('doc-generate', function(){
  return gulp.src([paths.output + paths.packageName + '.d.ts'])
    .pipe(typedoc({
      target: 'es6',
      includeDeclarations: true,
      moduleResolution: 'node',
      json: paths.doc + '/api.json',
      name: paths.packageName + '-docs',
      mode: 'modules',
      excludeExternals: true,
      ignoreCompilerErrors: false,
      version: true
    }));
});

gulp.task('doc-shape', function(){
  return gulp.src([paths.doc + '/api.json'])
    .pipe(through2.obj(function(file, enc, callback) {
      var json = JSON.parse(file.contents.toString('utf8')).children[0];

      json = {
        name: paths.packageName,
        children: json.children,
        groups: json.groups
      };

      file.contents = new Buffer(JSON.stringify(json));
      this.push(file);
      return callback();
    }))
    .pipe(gulp.dest(paths.doc));
});

gulp.task('doc', function(callback){
  return runSequence(
    'doc-generate',
    'doc-shape',
    callback
  );
});




gulp.task('bindables:download', function () {
  return request('https://raw.githubusercontent.com/telerik/kendo-ui-core/master/typescript/kendo.all.d.ts')
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
  var findInterfaces = ["GridColumn", "TreeListColumn", "ToolBarItem", "GanttColumn", "ToolBarItemButton", "GridToolbarItem", "GridColumnCommandItem"];

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

gulp.task('bindables', gulp.series(
    // 'bindables:download',
    'bindables:typedoc',
    'bindables:extract')
);

gulp.task('bump-version', function(){
  return gulp.src(['./package.json', './bower.json'], { allowEmpty : true })
    .pipe(bump({type:args.bump })) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

gulp.task('version.js', function (cb) {
  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  fs.writeFile('./src/version.js', `export let version = '${pkg.version}';`, cb);
});

gulp.task('changelog', function() {
  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  console.log(pkg.version);
  return gulp.src(paths.doc + '/CHANGELOG.md', {
    buffer: false
  })
  .pipe(conventionalChangelog({
    preset: 'angular',
    repository: pkg.repository.url,
    version: pkg.version
  }))
  .pipe(gulp.dest(paths.doc));
});

gulp.task('prepare-release', gulp.series(function(done){
    paths.output = paths.releaseOutput;
    done();
  },
  'lint',
  'bump-version',
  'version.js',
  'build-release',
  // 'doc',
  'changelog'
));

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', gulp.series(
  'build',
  function(done) {
  var bs = browserSync.create('Sample server');

  var options = {
    server: {
      baseDir: paths.sample,
      routes: {
        '/src/root/': './'
      },
    },
  };

  // Create a route to the build output directory so we can load the plugin from the subdir
  
  options.server.routes['/src/' + paths.packageName] = path.join(paths.output, 'system');

  bs.init(options, done);
}));


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }, function(e) {
        done();
    }).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new karma.Server({
        configFile: __dirname + '/../../karma.conf.js'
    }, function(e) {
        done();
    }).start();
});

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', gulp.series(
  'serve',
  function() {
    var bs = browserSync.get('Sample server');
    gulp.watch(paths.source, gulp.series('build-system', bs.reload)).on('change', reportChange),
    gulp.watch(paths.html, gulp.series('build-system', 'copy-html', bs.reload)).on('change', reportChange),
    gulp.watch(paths.style, gulp.series(bs.reload)).on('change', reportChange),
    gulp.watch(paths.sample + '/*', gulp.series(bs.reload)).on('change', reportChange),
    gulp.watch(paths.sample + '/src/**/*', { interval: 500 }, gulp.series(bs.reload)).on('change', reportChange)
  }
));


gulp.task('default', gulp.series(
  'lint',
  'build',
  'test'
)
);

gulp.task('ci', gulp.series('default'));