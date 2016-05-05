define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.spreadsheet.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoSpreadsheetMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Spreadsheet = (function () {
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
    Spreadsheet = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Spreadsheet) || Spreadsheet;
    Spreadsheet = _commonDecorators.generateBindables('kendoSpreadsheet')(Spreadsheet) || Spreadsheet;
    Spreadsheet = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'spreadsheet')(Spreadsheet) || Spreadsheet;
    return Spreadsheet;
  })();

  exports.Spreadsheet = Spreadsheet;
});