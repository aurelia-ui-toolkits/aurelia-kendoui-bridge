'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, ColorPalette;

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
      _export('ColorPalette', ColorPalette = (_dec = customElement(constants.attributePrefix + 'color-palette'), _dec2 = generateBindables('kendoColorPalette'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ColorPalette(element, widgetBase) {
          _classCallCheck(this, ColorPalette);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
        }

        ColorPalette.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ColorPalette.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ColorPalette.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ColorPalette.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ColorPalette.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ColorPalette;
      }()) || _class) || _class) || _class));

      _export('ColorPalette', ColorPalette);
    }
  };
});
//# sourceMappingURL=../dist/dev/colorpalette/colorpalette.js.map
