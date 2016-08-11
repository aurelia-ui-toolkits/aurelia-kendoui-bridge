'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = exports.generateBindables = exports.version = undefined;
exports.configure = configure;

var _version = require('./version');

Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _version.version;
  }
});

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function configure(aurelia, configCallback) {
  var builder = aurelia.container.get(_configBuilder.KendoConfigBuilder);
  var logger = LogManager.getLogger('aurelia-kendoui-bridge');

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  logger.info('Loading ' + resources.length + ' wrappers', resources);

  if (resources.length > 10) {
    logger.warn('when using many wrappers, it is recommended not to use .core(), .pro() or .dynamic()' + ' but instead to load wrappers via <require></require>.' + 'this should significantly speed up load times of your application.');
  }

  if (builder.registerRepeatStrategy) {
    if (!window.kendo) {
      throw new Error('Kendo has not been loaded. Consider loading kendo.core from main.js');
    }

    var repeatStrategyLocator = aurelia.container.get(_aureliaTemplatingResources.RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(function (items) {
      return items instanceof kendo.data.ObservableArray;
    }, new _aureliaTemplatingResources.ArrayRepeatStrategy());
  }
}