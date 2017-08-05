System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, _dec, _dec2, _dec3, _class, Chart;

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
      _export('Chart', Chart = (_dec = customElement(constants.elementPrefix + 'chart'), _dec2 = generateBindables('kendoChart'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Chart(element, widgetBase) {
          _classCallCheck(this, Chart);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoChart').useElement(this.element).linkViewModel(this);
        }

        Chart.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Chart.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Chart.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Chart.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Chart.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Chart.prototype.detached = function detached() {
          this.destroy();
        };

        return Chart;
      }()) || _class) || _class) || _class));

      _export('Chart', Chart);
    }
  };
});
//# sourceMappingURL=../dist/dev/chart/chart.js.map
