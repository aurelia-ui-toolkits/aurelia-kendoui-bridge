define(['exports', 'aurelia-logging'], function (exports, _aureliaLogging) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var logger = _aureliaLogging.getLogger('aurelia-kendoui-plugin');

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

  var KendoConfigBuilder = (function () {
    function KendoConfigBuilder() {
      _classCallCheck(this, KendoConfigBuilder);

      this.resources = [];
    }

    KendoConfigBuilder.prototype.core = function core() {
      this.kendoButton().kendoTabStrip().kendoMenu();
      return this;
    };

    KendoConfigBuilder.prototype.pro = function pro() {
      this.core().kendoGrid().kendoAutoComplete();
      return this;
    };

    KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
      this.resources.push('autocomplete');
      return this;
    };

    KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
      this.resources.push('button');
      return this;
    };

    KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
      this.resources.push('menu');
      return this;
    };

    KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
      this.resources.push('combobox');
      return this;
    };

    KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
      this.resources.push('dropdownlist');
      return this;
    };

    KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
      this.resources.push('grid');
      return this;
    };

    KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
      this.resources.push('scheduler');
      return this;
    };

    KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
      this.resources.push('tabstrip');
      return this;
    };

    KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
      this.resources.push('toolbar');
      return this;
    };

    return KendoConfigBuilder;
  })();
});