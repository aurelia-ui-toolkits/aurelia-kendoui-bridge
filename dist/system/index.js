System.register(['./config-builder', 'jquery'], function (_export) {
  'use strict';

  var KendoConfigBuilder;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = new KendoConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (builder.useGlobalResources) {
      aurelia.globalResources(resources);
    }
  }

  return {
    setters: [function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_jquery) {}],
    execute: function () {}
  };
});