define(['exports', './config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min', './common/constants', './common/decorators', './common/events'], function (exports, _configBuilder, _aureliaTemplatingResources, _jquery, _kendoDataMin, _commonConstants, _commonDecorators, _commonEvents) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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

  _defaults(exports, _interopExportWildcard(_commonConstants, _defaults));

  _defaults(exports, _interopExportWildcard(_commonDecorators, _defaults));

  _defaults(exports, _interopExportWildcard(_commonEvents, _defaults));
});