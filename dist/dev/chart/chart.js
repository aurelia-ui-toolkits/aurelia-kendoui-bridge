'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.chart.min', 'kendo.dataviz.chart.polar.min', 'kendo.dataviz.chart.funnel.min'], function (_export, _context) {
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
    }, function (_kendoDatavizChartMin) {}, function (_kendoDatavizChartPolarMin) {}, function (_kendoDatavizChartFunnelMin) {}],
    execute: function () {
      _export('Chart', Chart = (_dec = customElement(constants.elementPrefix + 'chart'), _dec2 = generateBindables('kendoChart'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Chart(element, widgetBase) {
          _classCallCheck(this, Chart);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this);
        }

        Chart.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Chart.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Chart.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Chart.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Chart;
      }()) || _class) || _class) || _class));

      _export('Chart', Chart);
    }
  };
});
//# sourceMappingURL=../dist/dev/chart/chart.js.map
