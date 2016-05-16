'use strict';

exports.__esModule = true;
exports.configure = configure;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _configBuilder = require('./config-builder');

var _aureliaTemplatingResources = require('aurelia-templating-resources');

require('jquery');

require('kendo.data.min');

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

var _commonDecorators = require('./common/decorators');

_defaults(exports, _interopExportWildcard(_commonDecorators, _defaults));