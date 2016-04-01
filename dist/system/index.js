System.register(['./config-builder', 'jquery'], function (_export) {
  'use strict';

  var KendoConfigBuilder;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(KendoConfigBuilder);

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (resources.length > 0) {
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