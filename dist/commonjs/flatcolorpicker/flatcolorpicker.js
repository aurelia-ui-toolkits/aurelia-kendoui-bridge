'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatColorPicker = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlatColorPicker = exports.FlatColorPicker = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.attributePrefix + 'flat-color-picker'), _dec2 = (0, _decorators.generateBindables)('kendoFlatColorPicker'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function FlatColorPicker(element, widgetBase) {
    _classCallCheck(this, FlatColorPicker);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoFlatColorPicker').useElement(this.element).linkViewModel(this);
  }

  FlatColorPicker.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  FlatColorPicker.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  FlatColorPicker.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  FlatColorPicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  FlatColorPicker.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  FlatColorPicker.prototype.detached = function detached() {
    this.destroy();
  };

  return FlatColorPicker;
}()) || _class) || _class) || _class);