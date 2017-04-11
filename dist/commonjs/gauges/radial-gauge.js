'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialGauge = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadialGauge = exports.RadialGauge = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'radial-gauge'), _dec2 = (0, _decorators.generateBindables)('kendoRadialGauge'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function RadialGauge(element, widgetBase) {
    _classCallCheck(this, RadialGauge);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRadialGauge').useElement(this.element).linkViewModel(this).useValueBinding();
  }

  RadialGauge.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  RadialGauge.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  RadialGauge.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  RadialGauge.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  RadialGauge.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  RadialGauge.prototype.detached = function detached() {
    this.destroy();
  };

  return RadialGauge;
}()) || _class) || _class) || _class);