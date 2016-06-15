'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.barcode.min'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Barcode;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
      _export('Barcode', Barcode = (_dec = customAttribute(constants.attributePrefix + 'barcode'), _dec2 = generateBindables('kendoBarcode'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
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
      }()) || _class) || _class) || _class));

      _export('Barcode', Barcode);
    }
  };
});