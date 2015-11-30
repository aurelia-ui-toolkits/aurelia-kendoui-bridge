System.register(['aurelia-logging'], function (_export) {
  'use strict';

  var LogManager, logger, KendoConfigBuilder;

  _export('configure', configure);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function configure(aurelia, configCallback) {
    var builder = new KendoConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.resources.length === 0) {
      logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
      builder.core();
    }

    var resources = builder.resources;

    resources = resources.map(function (r) {
      return r + '/' + r;
    });

    aurelia.globalResources(resources);
  }

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      logger = LogManager.getLogger('aurelia-kendoui-plugin');

      KendoConfigBuilder = (function () {
        function KendoConfigBuilder() {
          _classCallCheck(this, KendoConfigBuilder);

          this.resources = [];
        }

        KendoConfigBuilder.prototype.core = function core() {
          this.kendoButton().kendoTabStrip();
          return this;
        };

        KendoConfigBuilder.prototype.pro = function pro() {
          this.core().kendoAutoComplete();
          return this;
        };

        KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
          this.resources.push('button');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
          this.resources.push('tabstrip');
          return this;
        };

        KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
          this.resources.push('autocomplete');
          return this;
        };

        return KendoConfigBuilder;
      })();
    }
  };
});