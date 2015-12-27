System.register(['aurelia-framework', '../common/index', 'kendo-ui/js/kendo.colorpicker.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, WidgetBase, generateBindables, ColorPicker;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonIndex) {
      WidgetBase = _commonIndex.WidgetBase;
      generateBindables = _commonIndex.generateBindables;
    }, function (_kendoUiJsKendoColorpickerMin) {}],
    execute: function () {
      ColorPicker = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(ColorPicker, _WidgetBase);

        _createDecoratedClass(ColorPicker, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function ColorPicker(element) {
          _classCallCheck(this, _ColorPicker);

          _WidgetBase.call(this, 'kendoColorPicker', element);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
        }

        ColorPicker.prototype.bind = function bind() {
          this._initialize();
        };

        var _ColorPicker = ColorPicker;
        ColorPicker = inject(Element)(ColorPicker) || ColorPicker;
        ColorPicker = generateBindables('kendoColorPicker')(ColorPicker) || ColorPicker;
        ColorPicker = customAttribute('k-color-picker')(ColorPicker) || ColorPicker;
        return ColorPicker;
      })(WidgetBase);

      _export('ColorPicker', ColorPicker);
    }
  };
});