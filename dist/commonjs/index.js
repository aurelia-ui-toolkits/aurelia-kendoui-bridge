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