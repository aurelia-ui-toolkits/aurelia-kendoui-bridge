'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

var _pdfPdf = require('../pdf/pdf');

require('kendo.dataviz.chart.min');

require('kendo.dataviz.chart.polar.min');

require('kendo.dataviz.chart.funnel.min');

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

  var _Chart = Chart;
  Chart = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Chart) || Chart;
  Chart = _commonDecorators.generateBindables('kendoChart')(Chart) || Chart;
  Chart = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'chart')(Chart) || Chart;
  return Chart;
})();

exports.Chart = Chart;