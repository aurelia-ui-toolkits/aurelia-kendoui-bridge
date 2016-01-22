'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

require('kendo-ui/js/kendo.numerictextbox.min');

var NumericTextBox = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(NumericTextBox, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function NumericTextBox(element, widgetBase) {
    _classCallCheck(this, _NumericTextBox);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).setDefaultBindableValues();
  }

  NumericTextBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  NumericTextBox.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  NumericTextBox.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _NumericTextBox = NumericTextBox;
  NumericTextBox = _aureliaFramework.inject(Element, _commonWidgetBase.WidgetBase)(NumericTextBox) || NumericTextBox;
  NumericTextBox = _commonDecorators.generateBindables('kendoNumericTextBox')(NumericTextBox) || NumericTextBox;
  NumericTextBox = _aureliaFramework.customAttribute('k-numerictextbox')(NumericTextBox) || NumericTextBox;
  return NumericTextBox;
})();

exports.NumericTextBox = NumericTextBox;