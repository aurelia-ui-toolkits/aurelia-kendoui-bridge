'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QRCode = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QRCode = exports.QRCode = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'qrcode'), _dec2 = (0, _decorators.generateBindables)('kendoQRCode'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function QRCode(element, widgetBase) {
    _classCallCheck(this, QRCode);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoQRCode').useElement(this.element).linkViewModel(this);
  }

  QRCode.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  QRCode.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  QRCode.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  QRCode.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  QRCode.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  QRCode.prototype.detached = function detached() {
    this.destroy();
  };

  return QRCode;
}()) || _class) || _class) || _class);