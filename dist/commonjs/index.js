'use strict';

exports.__esModule = true;
exports.configure = configure;

var _configBuilder = require('./config-builder');

require('jquery');

function configure(aurelia, configCallback) {
  var builder = new _configBuilder.KendoConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}