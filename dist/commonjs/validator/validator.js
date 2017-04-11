'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = exports.Validator = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'validator'), _dec2 = (0, _decorators.generateBindables)('kendoValidator'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Validator(element, widgetBase) {
    _classCallCheck(this, Validator);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoValidator').useElement(this.element).linkViewModel(this);
  }

  Validator.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  Validator.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Validator.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Validator.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  Validator.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Validator.prototype.detached = function detached() {
    this.destroy();
  };

  return Validator;
}()) || _class) || _class) || _class);