define(['exports', './common/decorators', './config-builder', 'aurelia-templating-resources', 'aurelia-logging', 'jquery', 'kendo.data.min'], function (exports, _decorators, _configBuilder, _aureliaTemplatingResources, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.delayed = exports.generateBindables = undefined;
  exports.configure = configure;
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

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(_configBuilder.KendoConfigBuilder);

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var logger = LogManager.getLogger('aurelia-kendoui-bridge');
    logger.warn('This version of aurelia-kendoui-bridge has been deprecated. Please update to the 1.0.0 version or above');

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