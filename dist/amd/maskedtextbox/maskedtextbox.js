define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo-ui/js/kendo.maskedtextbox.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoUiJsKendoMaskedtextboxMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MaskedTextBox = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MaskedTextBox, [{
      key: 'kDisableDates',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaTemplating.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MaskedTextBox(element, widgetBase) {
      _classCallCheck(this, _MaskedTextBox);

      _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMaskedTextBox').linkViewModel(this).useValueBinding();
    }

    MaskedTextBox.prototype.bind = function bind(ctx) {
      this.$parent = ctx;

      this.recreate();
    };

    MaskedTextBox.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    MaskedTextBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    MaskedTextBox.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _MaskedTextBox = MaskedTextBox;
    MaskedTextBox = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(MaskedTextBox) || MaskedTextBox;
    MaskedTextBox = _commonDecorators.generateBindables('kendoMaskedTextBox')(MaskedTextBox) || MaskedTextBox;
    MaskedTextBox = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'maskedtextbox')(MaskedTextBox) || MaskedTextBox;
    return MaskedTextBox;
  })();

  exports.MaskedTextBox = MaskedTextBox;
});