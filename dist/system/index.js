System.register(['aurelia-logging', './config-builder', 'jquery'], function (_export) {
  'use strict';

  var LogManager, KendoConfigBuilder, logger;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = new KendoConfigBuilder();

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

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_jquery) {}],
    execute: function () {
      logger = LogManager.getLogger('aurelia-kendoui-bridge');
    }
  };
});