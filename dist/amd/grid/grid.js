define(['exports', 'aurelia-framework', 'aurelia-logging', '../common/events', '../common/options', 'jquery', 'kendo-ui/js/kendo.grid.min'], function (exports, _aureliaFramework, _aureliaLogging, _commonEvents, _commonOptions, _jquery, _kendoUiJsKendoGridMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Grid = (function () {
    function Grid() {
      _classCallCheck(this, _Grid);

      var logger = _aureliaLogging.getLogger('aurelia-kendoui');

      if (!Kendo.ui.Grid) {
        logger.error('Kendo.ui.Grid is not defined. Ensure that the professional version of Kendo UI is installed.');

        return;
      }

      this.logger = logger;
    }

    Grid.prototype.attached = function attached() {
      this._component = _jquery(this.host).kendoGrid(this.getOptions()).data("kendoGrid");
    };

    Grid.prototype.detached = function detached() {
      if (this._component) this._component.destroy();
    };

    Grid.prototype.getOptions = function getOptions() {
      var options = _commonOptions.pruneOptions({
        animation: this.animation,
        dataSource: this.dataSource,
        dataTextField: this.dataTextField,
        delay: this.delay,
        enable: this.enable,
        filter: this.filter,
        fixedGroupTemplate: this.fixedGroupTemplate,
        groupTemplate: this.groupTemplate,
        height: this.height,
        highlightFirst: this.highlightFirst,
        ignoreCase: this.ignoreCase,
        minLength: this.minLength,
        placeholder: this.placeholder,
        popup: this.popup,
        separator: this.separator,
        suggest: this.suggest,
        headerTemplate: this.headerTemplate,
        template: this.template,
        valuePrimitive: this.valuePrimitive,
        virtual: this.virtual
      });

      return Object.assign({}, this.options, options);
    };

    Grid.prototype.enableChanged = function enableChanged(newValue) {
      if (this._component) this._component.enable(newValue);
    };

    var _Grid = Grid;
    Grid = _aureliaFramework.inject(Element)(Grid) || Grid;
    Grid = _aureliaFramework.customElement("au-kendo-grid")(Grid) || Grid;
    return Grid;
  })();

  exports.Grid = Grid;
});