'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.dataviz.qrcode.min');

var QRCode = (function () {
  function QRCode(element, widgetBase) {
    _classCallCheck(this, _QRCode);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoQRCode').linkViewModel(this);
  }

  QRCode.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  QRCode.prototype.attached = function attached() {
    this.recreate();
  };

  QRCode.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  QRCode.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _QRCode = QRCode;
  QRCode = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(QRCode) || QRCode;
  QRCode = _commonDecorators.generateBindables('kendoQRCode')(QRCode) || QRCode;
  QRCode = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'qrcode')(QRCode) || QRCode;
  return QRCode;
})();

exports.QRCode = QRCode;