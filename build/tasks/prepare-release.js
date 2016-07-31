var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var conventionalChangelog = require('gulp-conventional-changelog');
var fs = require('fs');
var bump = require('gulp-bump');
var args = require('../args');

gulp.task('bump-version', function(){
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type:args.bump })) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

gulp.task('version.js', function (cb) {
  var pkg = require('../../package.json');
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

gulp.task('prepare-release', function(callback){
  paths.output = paths.releaseOutput;

  return runSequence(
    'lint',
    'bump-version',
    'version.js',
    'build-release',
    // 'doc',
    'changelog',
    callback
  );
});
