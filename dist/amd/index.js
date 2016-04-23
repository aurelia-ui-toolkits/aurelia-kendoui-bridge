define(['exports', './config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min'], function (exports, _configBuilder, _aureliaTemplatingResources, _jquery, _kendoDataMin) {
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

    if (builder.registerRepeatStrategy) {
      var repeatStrategyLocator = aurelia.container.get(_aureliaTemplatingResources.RepeatStrategyLocator);
      repeatStrategyLocator.addStrategy(function (items) {
        return items instanceof kendo.data.ObservableArray;
      }, new _aureliaTemplatingResources.ArrayRepeatStrategy());
    }
  }
});