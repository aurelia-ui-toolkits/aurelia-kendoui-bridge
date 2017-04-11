'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearGauge = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinearGauge = exports.LinearGauge = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'linear-gauge'), _dec2 = (0, _decorators.generateBindables)('kendoLinearGauge'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function LinearGauge(element, widgetBase) {
    _classCallCheck(this, LinearGauge);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoLinearGauge').useElement(this.element).linkViewModel(this).useValueBinding();
  }

  LinearGauge.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  LinearGauge.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  LinearGauge.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  LinearGauge.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  LinearGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  LinearGauge.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  LinearGauge.prototype.detached = function detached() {
    this.destroy();
  };

  return LinearGauge;
}()) || _class) || _class) || _class);