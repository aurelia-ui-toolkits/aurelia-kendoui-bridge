'use strict';

System.register(['./config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min', './version', './common/decorators'], function (_export, _context) {
  "use strict";

  var KendoConfigBuilder, RepeatStrategyLocator, ArrayRepeatStrategy;
  return {
    setters: [function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_aureliaTemplatingResources) {
      RepeatStrategyLocator = _aureliaTemplatingResources.RepeatStrategyLocator;
      ArrayRepeatStrategy = _aureliaTemplatingResources.ArrayRepeatStrategy;
    }, function (_jquery) {}, function (_kendoDataMin) {}, function (_version) {
      var _exportObj = {};
      _exportObj.version = _version.version;

      _export(_exportObj);
    }, function (_commonDecorators) {
      var _exportObj2 = {};
      _exportObj2.generateBindables = _commonDecorators.generateBindables;
      _exportObj2.delayed = _commonDecorators.delayed;

      _export(_exportObj2);
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
        var builder = aurelia.container.get(KendoConfigBuilder);

        if (configCallback !== undefined && typeof configCallback === 'function') {
          configCallback(builder);
        }

        var resources = builder.resources;

        if (resources.length > 0) {
          aurelia.globalResources(resources);
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