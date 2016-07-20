'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, _dec, _dec2, _dec3, _class, Stock;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
    }],
    execute: function () {
      _export('Stock', Stock = (_dec = customElement(constants.elementPrefix + 'stock'), _dec2 = generateBindables('kendoStockChart'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Stock(element, widgetBase) {
          _classCallCheck(this, Stock);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this);
        }

        Stock.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Stock.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
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

        return Stock;
      }()) || _class) || _class) || _class));

      _export('Stock', Stock);
    }
  };
});
//# sourceMappingURL=../dist/dev/chart/stock.js.map
