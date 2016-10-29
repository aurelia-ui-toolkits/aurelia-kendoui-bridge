define(['exports', './version', './common/decorators', './config-builder', 'aurelia-logging'], function (exports, _version, _decorators, _configBuilder, _aureliaLogging) {
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
  }
});