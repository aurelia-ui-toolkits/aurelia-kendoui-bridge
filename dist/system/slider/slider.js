System.register(['aurelia-framework', '../common/widget-base', '../common/decorators', 'kendo-ui/js/kendo.slider.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, WidgetBase, generateBindables, Slider;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    }, function (_kendoUiJsKendoSliderMin) {}],
    execute: function () {
      Slider = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(Slider, _WidgetBase);

        _createDecoratedClass(Slider, [{
          key: 'kValue',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Slider(element) {
          _classCallCheck(this, _Slider);

          _WidgetBase.call(this, 'kendoSlider', element);

          _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
          this.options = {};
        }

        Slider.prototype.attached = function attached() {
          this._initialize();
        };

        Slider.prototype._beforeInitialize = function _beforeInitialize(options) {
          if (!options.value && this.kValue) {
            options.value = this.kValue;
          }
        };

        Slider.prototype.kEnableChanged = function kEnableChanged(newValue) {
          if (this.widget) {
            this.widget.enable(newValue);
          }
        };

        Slider.prototype.enable = function enable(newValue) {
          if (this.widget) {
            this.widget.enable(newValue);
          }
        };

        Slider.prototype.value = function value(newValue) {
          if (this.widget) {
            return this.widget.value(newValue);
          }
        };

        Slider.prototype.destroy = function destroy() {
          if (this.widget) {
            return this.widget.destroy();
          }
        };

        Slider.prototype.resize = function resize() {
          if (this.widget) {
            return this.widget.resize();
          }
        };

        Slider.prototype.kValueChanged = function kValueChanged() {
          if (this.widget) {
            this.widget.value(this.kValue);
          }
        };

        var _Slider = Slider;
        Slider = inject(Element)(Slider) || Slider;
        Slider = generateBindables('kendoSlider')(Slider) || Slider;
        Slider = customAttribute('k-slider')(Slider) || Slider;
        return Slider;
      })(WidgetBase);

      _export('Slider', Slider);
    }
  };
});