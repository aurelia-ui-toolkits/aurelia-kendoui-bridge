define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.barcode.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoDatavizBarcodeMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
      if (!this.kNoInit) {
        this.recreate();
      }
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
});