define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.chart.min', 'kendo.dataviz.chart.polar.min', 'kendo.dataviz.chart.funnel.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _pdfPdf, _kendoDatavizChartMin, _kendoDatavizChartPolarMin, _kendoDatavizChartFunnelMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Chart = (function () {
    function Chart(element, widgetBase) {
      _classCallCheck(this, _Chart);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this);
    }

    Chart.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Chart.prototype.attached = function attached() {
      this.recreate();
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

    var _Chart = Chart;
    Chart = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Chart) || Chart;
    Chart = _commonDecorators.generateBindables('kendoChart')(Chart) || Chart;
    Chart = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'chart')(Chart) || Chart;
    return Chart;
  })();

  exports.Chart = Chart;
});