'use strict';

System.register(['./config-builder', 'aurelia-templating-resources', 'aurelia-logging', './common/decorators'], function (_export, _context) {
  "use strict";

  var KendoConfigBuilder, RepeatStrategyLocator, ArrayRepeatStrategy, LogManager;
  return {
    setters: [function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_aureliaTemplatingResources) {
      RepeatStrategyLocator = _aureliaTemplatingResources.RepeatStrategyLocator;
      ArrayRepeatStrategy = _aureliaTemplatingResources.ArrayRepeatStrategy;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_commonDecorators) {
      var _exportObj = {};

      for (var _key in _commonDecorators) {
        if (_key !== "default") _exportObj[_key] = _commonDecorators[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
        var builder = aurelia.container.get(KendoConfigBuilder);
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
          var repeatStrategyLocator = aurelia.container.get(RepeatStrategyLocator);
          repeatStrategyLocator.addStrategy(function (items) {
            return items instanceof kendo.data.ObservableArray;
          }, new ArrayRepeatStrategy());
        }
      }

      _export('configure', configure);
    }
  };
});