'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.dataviz.barcode.min');

var Barcode = (function () {
  function Barcode(element, widgetBase) {
    _classCallCheck(this, _Barcode);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoBarcode').linkViewModel(this);
  }

  Barcode.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Barcode.prototype.attached = function attached() {
    this.recreate();
  };

  Barcode.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Barcode.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Barcode = Barcode;
  Barcode = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Barcode) || Barcode;
  Barcode = _commonDecorators.generateBindables('kendoBarcode')(Barcode) || Barcode;
  Barcode = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'barcode')(Barcode) || Barcode;
  return Barcode;
})();

exports.Barcode = Barcode;