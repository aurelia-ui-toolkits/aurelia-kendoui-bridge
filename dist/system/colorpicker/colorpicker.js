System.register(['aurelia-framework', '../common/widget-base', '../common/decorators', 'kendo-ui/js/kendo.colorpicker.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, WidgetBase, generateBindables, ColorPicker;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_kendoUiJsKendoColorpickerMin) {}],
    execute: function () {
      ColorPicker = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(ColorPicker, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function ColorPicker(element, widgetBase) {
          _classCallCheck(this, _ColorPicker);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoColorPicker').linkViewModel(this).setDefaultBindableValues();
        }

        ColorPicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;

          this.recreate();
        };

        ColorPicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ColorPicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _ColorPicker = ColorPicker;
        ColorPicker = inject(Element, WidgetBase)(ColorPicker) || ColorPicker;
        ColorPicker = generateBindables('kendoColorPicker')(ColorPicker) || ColorPicker;
        ColorPicker = customAttribute('k-color-picker')(ColorPicker) || ColorPicker;
        return ColorPicker;
      })();

      _export('ColorPicker', ColorPicker);
    }
  };
});