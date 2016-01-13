define(['exports', 'aurelia-framework', 'aurelia-logging', './config-builder', 'jquery'], function (exports, _aureliaFramework, _aureliaLogging, _configBuilder, _jquery) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  var logger = _aureliaLogging.getLogger('aurelia-kendoui-plugin');

  function configure(aurelia, configCallback) {
    var builder = new _configBuilder.KendoConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.resources.length === 0) {
      logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
      builder.core();
    }

    var resources = builder.resources;

    if (builder.useGlobalResources) {
      aurelia.globalResources(resources);
    }
  }
});