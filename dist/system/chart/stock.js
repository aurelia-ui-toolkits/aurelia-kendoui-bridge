System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.stock.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, Stock;

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
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoDatavizStockMin) {}],
    execute: function () {
      Stock = (function () {
        function Stock(element, widgetBase) {
          _classCallCheck(this, _Stock);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this);
        }

        Stock.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Stock.prototype.attached = function attached() {
          this.recreate();
        };

        Stock.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Stock.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Stock = Stock;
        Stock = inject(Element, WidgetBase)(Stock) || Stock;
        Stock = generateBindables('kendoStockChart')(Stock) || Stock;
        Stock = customElement(constants.elementPrefix + 'stock')(Stock) || Stock;
        return Stock;
      })();

      _export('Stock', Stock);
    }
  };
});