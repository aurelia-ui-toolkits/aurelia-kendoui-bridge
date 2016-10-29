'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = exports.generateBindables = undefined;
exports.configure = configure;

var _decorators = require('./common/decorators');

Object.defineProperty(exports, 'generateBindables', {
  enumerable: true,
  get: function get() {
    return _decorators.generateBindables;
  }
});
Object.defineProperty(exports, 'delayed', {
  enumerable: true,
  get: function get() {
    return _decorators.delayed;
  }
});

var _configBuilder = require('./config-builder');

var _aureliaTemplatingResources = require('aurelia-templating-resources');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('jquery');

require('kendo.data.min');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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