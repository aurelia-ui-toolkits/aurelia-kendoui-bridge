define(['exports', './version', './common/decorators', './config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min'], function (exports, _version, _decorators, _configBuilder, _aureliaTemplatingResources) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.delayed = exports.generateBindables = exports.version = undefined;
  exports.configure = configure;
  Object.defineProperty(exports, 'version', {
    enumerable: true,
    get: function () {
      return _version.version;
    }
  });
  Object.defineProperty(exports, 'generateBindables', {
    enumerable: true,
    get: function () {
      return _decorators.generateBindables;
    }
  });
  Object.defineProperty(exports, 'delayed', {
    enumerable: true,
    get: function () {
      return _decorators.delayed;
    }
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