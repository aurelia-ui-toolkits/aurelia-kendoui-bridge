define(['exports', './config-builder', 'jquery'], function (exports, _configBuilder, _jquery) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(_configBuilder.KendoConfigBuilder);

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (resources.length > 0) {
      aurelia.globalResources(resources);
    }
  }
});