System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.barcode.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Barcode;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoDatavizBarcodeMin) {}],
    execute: function () {
      Barcode = (function () {
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
        Barcode = inject(Element, WidgetBase)(Barcode) || Barcode;
        Barcode = generateBindables('kendoBarcode')(Barcode) || Barcode;
        Barcode = customAttribute(constants.attributePrefix + 'barcode')(Barcode) || Barcode;
        return Barcode;
      })();

      _export('Barcode', Barcode);
    }
  };
});