System.register(['aurelia-framework', 'aurelia-logging', '../common/events', '../common/options', 'jquery', 'kendo-ui/js/kendo.grid.min'], function (_export) {
  'use strict';

  var customElement, bindable, inject, getLogger, fireEvent, pruneOptions, $, Grid;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }, function (_commonOptions) {
      pruneOptions = _commonOptions.pruneOptions;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_kendoUiJsKendoGridMin) {}],
    execute: function () {
      Grid = (function () {
        function Grid() {
          _classCallCheck(this, _Grid);

          var logger = getLogger('aurelia-kendoui');

          if (!Kendo.ui.Grid) {
            logger.error('Kendo.ui.Grid is not defined. Ensure that the professional version of Kendo UI is installed.');

            return;
          }

          this.logger = logger;
        }

        Grid.prototype.attached = function attached() {
          this._component = $(this.host).kendoGrid(this.getOptions()).data("kendoGrid");
        };

        Grid.prototype.detached = function detached() {
          if (this._component) this._component.destroy();
        };

        Grid.prototype.getOptions = function getOptions() {
          var options = pruneOptions({
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
        Grid = inject(Element)(Grid) || Grid;
        Grid = customElement("au-kendo-grid")(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});