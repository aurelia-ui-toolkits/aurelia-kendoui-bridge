'use strict';

System.register(['./config-builder', 'aurelia-templating-resources', 'jquery', 'kendo.data.min', './common/decorators'], function (_export, _context) {
  "use strict";

  var KendoConfigBuilder, RepeatStrategyLocator, ArrayRepeatStrategy;
  return {
    setters: [function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_aureliaTemplatingResources) {
      RepeatStrategyLocator = _aureliaTemplatingResources.RepeatStrategyLocator;
      ArrayRepeatStrategy = _aureliaTemplatingResources.ArrayRepeatStrategy;
    }, function (_jquery) {}, function (_kendoDataMin) {}, function (_commonDecorators) {
      var _exportObj = {};

      for (var _key in _commonDecorators) {
        if (_key !== "default") _exportObj[_key] = _commonDecorators[_key];
      }

      _export(_exportObj);
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