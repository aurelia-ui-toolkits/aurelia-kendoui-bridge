'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabStrip = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TabStrip = exports.TabStrip = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'tabstrip'), _dec2 = (0, _decorators.generateBindables)('kendoTabStrip'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function TabStrip(element, widgetBase) {
    _classCallCheck(this, TabStrip);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTabStrip').useElement(this.element).linkViewModel(this);
  }

  TabStrip.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  TabStrip.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  TabStrip.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  TabStrip.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  TabStrip.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  TabStrip.prototype.detached = function detached() {
    this.destroy();
  };

  return TabStrip;
}()) || _class) || _class) || _class);