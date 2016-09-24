'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _pdf = require('../pdf/pdf');

require('kendo.dataviz.chart.min');

require('kendo.dataviz.chart.polar.min');

require('kendo.dataviz.chart.funnel.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chart = exports.Chart = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'chart'), _dec2 = (0, _decorators.generateBindables)('kendoChart'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
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

  Chart.prototype.unbind = function unbind() {
    this.widgetBase.destroy(this.kWidget);
  };

  return Chart;
}()) || _class) || _class) || _class);