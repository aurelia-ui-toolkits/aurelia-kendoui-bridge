define(['exports', 'aurelia-framework', '../common/index', 'kendo-ui/js/jquery.min', 'kendo-ui/js/kendo.slider.min'], function (exports, _aureliaFramework, _commonIndex, _kendoUiJsJqueryMin, _kendoUiJsKendoSliderMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Slider = (function (_WidgetBase) {
    var _instanceInitializers = {};

    _inherits(Slider, _WidgetBase);

    _createDecoratedClass(Slider, [{
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function Slider(element) {
      _classCallCheck(this, _Slider);

      _WidgetBase.call(this, 'kendoSlider', element);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.options = {};
    }

    Slider.prototype.attached = function attached() {
      this._initialize();
    };

    Slider.prototype.enableChanged = function enableChanged(newValue) {
      if (this.widget) {
        this.widget.enable(newValue);
      }
    };

    var _Slider = Slider;
    Slider = _aureliaFramework.inject(Element)(Slider) || Slider;
    Slider = _commonIndex.generateBindables('kendoSlider')(Slider) || Slider;
    Slider = _aureliaFramework.customAttribute('k-slider')(Slider) || Slider;
    return Slider;
  })(_commonIndex.WidgetBase);

  exports.Slider = Slider;
});