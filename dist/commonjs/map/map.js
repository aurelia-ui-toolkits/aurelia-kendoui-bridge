'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = exports.Map = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'map'), _dec2 = (0, _decorators.generateBindables)('kendoMap'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Map(element, widgetBase) {
    _classCallCheck(this, Map);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMap').useElement(this.element).linkViewModel(this);
  }

  Map.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Map.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Map.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Map.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Map.prototype.detached = function detached() {
    this.destroy();
  };

  return Map;
}()) || _class) || _class) || _class);