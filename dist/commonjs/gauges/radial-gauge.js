'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.dataviz.gauge.min');

var RadialGauge = (function () {
  function RadialGauge(element, widgetBase, viewResources) {
    _classCallCheck(this, _RadialGauge);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
  }

  RadialGauge.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  RadialGauge.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  RadialGauge.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  RadialGauge.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _RadialGauge = RadialGauge;
  RadialGauge = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(RadialGauge) || RadialGauge;
  RadialGauge = _commonDecorators.generateBindables('kendoRadialGauge')(RadialGauge) || RadialGauge;
  RadialGauge = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'radial-gauge')(RadialGauge) || RadialGauge;
  return RadialGauge;
})();

exports.RadialGauge = RadialGauge;