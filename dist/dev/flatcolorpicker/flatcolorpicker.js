'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, FlatColorPicker;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('FlatColorPicker', FlatColorPicker = (_dec = customElement(constants.attributePrefix + 'flat-color-picker'), _dec2 = generateBindables('kendoFlatColorPicker'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function FlatColorPicker(element, widgetBase) {
          _classCallCheck(this, FlatColorPicker);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
        }

        FlatColorPicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        FlatColorPicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        FlatColorPicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        FlatColorPicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return FlatColorPicker;
      }()) || _class) || _class) || _class));

      _export('FlatColorPicker', FlatColorPicker);
    }
  };
});
//# sourceMappingURL=../dist/dev/flatcolorpicker/flatcolorpicker.js.map
