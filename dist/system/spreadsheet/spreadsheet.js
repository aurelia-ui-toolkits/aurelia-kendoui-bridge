System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.spreadsheet.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, Spreadsheet;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoSpreadsheetMin) {}],
    execute: function () {
      Spreadsheet = (function () {
        function Spreadsheet(element, widgetBase) {
          _classCallCheck(this, _Spreadsheet);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSpreadsheet').linkViewModel(this);
        }

        Spreadsheet.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Spreadsheet.prototype.attached = function attached() {
          this.recreate();
        };

        Spreadsheet.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Spreadsheet.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Spreadsheet = Spreadsheet;
        Spreadsheet = inject(Element, WidgetBase)(Spreadsheet) || Spreadsheet;
        Spreadsheet = generateBindables('kendoSpreadsheet')(Spreadsheet) || Spreadsheet;
        Spreadsheet = customElement(constants.elementPrefix + 'spreadsheet')(Spreadsheet) || Spreadsheet;
        return Spreadsheet;
      })();

      _export('Spreadsheet', Spreadsheet);
    }
  };
});