define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Barcode = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Barcode = exports.Barcode = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'barcode'), _dec2 = (0, _decorators.generateBindables)('kendoBarcode'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Barcode(element, widgetBase) {
      _classCallCheck(this, Barcode);

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

    return Barcode;
  }()) || _class) || _class) || _class);
});