var path = require('path');
var fs = require('fs');

var emitter = require('events');
emitter.defaultMaxListeners = 20;

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

var paths = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: appRoot + '**/*.css',
  json: appRoot + '**/*.json',
  output: 'devbuild/',
  releaseOutput: 'dist/',
  sample: 'sample',
  sampleSrc: './sample/src/**/*.js',


  doc:'./doc',
  unit: 'test/unit/**/*.js',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  packageName: pkg.name,
  ignore: [],
  useTypeScriptForDTS: false,
  importsToAdd: [],
  sort: false
};


paths.files = [
  "src/**/*.js"
];

module.exports = paths;
