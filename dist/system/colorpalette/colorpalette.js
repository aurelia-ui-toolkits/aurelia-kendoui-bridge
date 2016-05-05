System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.colorpicker.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, ColorPalette;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
    }, function (_kendoColorpickerMin) {}],
    execute: function () {
      ColorPalette = (function () {
        function ColorPalette(element, widgetBase) {
          _classCallCheck(this, _ColorPalette);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
        }

        ColorPalette.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ColorPalette.prototype.attached = function attached() {
          this.recreate();
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

        ColorPalette.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _ColorPalette = ColorPalette;
        ColorPalette = inject(Element, WidgetBase)(ColorPalette) || ColorPalette;
        ColorPalette = generateBindables('kendoColorPalette')(ColorPalette) || ColorPalette;
        ColorPalette = customElement(constants.attributePrefix + 'color-palette')(ColorPalette) || ColorPalette;
        return ColorPalette;
      })();

      _export('ColorPalette', ColorPalette);
    }
  };
});