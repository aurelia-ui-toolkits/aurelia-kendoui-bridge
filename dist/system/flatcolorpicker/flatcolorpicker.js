System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.colorpicker.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, FlatColorPicker;

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
      FlatColorPicker = (function () {
        function FlatColorPicker(element, widgetBase) {
          _classCallCheck(this, _FlatColorPicker);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
        }

        FlatColorPicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        FlatColorPicker.prototype.attached = function attached() {
          this.recreate();
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

        var _FlatColorPicker = FlatColorPicker;
        FlatColorPicker = inject(Element, WidgetBase)(FlatColorPicker) || FlatColorPicker;
        FlatColorPicker = generateBindables('kendoFlatColorPicker')(FlatColorPicker) || FlatColorPicker;
        FlatColorPicker = customElement(constants.attributePrefix + 'flat-color-picker')(FlatColorPicker) || FlatColorPicker;
        return FlatColorPicker;
      })();

      _export('FlatColorPicker', FlatColorPicker);
    }
  };
});