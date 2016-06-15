define(['exports', './common/decorators', './config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min'], function (exports, _decorators, _configBuilder, _aureliaTemplatingResources) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  Object.keys(_decorators).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _decorators[key];
      }
    });
  });
  function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(_configBuilder.KendoConfigBuilder);

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (resources.length > 0) {
      aurelia.globalResources(resources);
    }

    if (builder.registerRepeatStrategy) {
      var repeatStrategyLocator = aurelia.container.get(_aureliaTemplatingResources.RepeatStrategyLocator);
      repeatStrategyLocator.addStrategy(function (items) {
        return items instanceof kendo.data.ObservableArray;
      }, new _aureliaTemplatingResources.ArrayRepeatStrategy());
    }
  }
});