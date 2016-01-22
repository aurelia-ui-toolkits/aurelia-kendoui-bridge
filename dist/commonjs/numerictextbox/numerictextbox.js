'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

require('kendo-ui/js/kendo.numerictextbox.min');

var NumericTextBox = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(NumericTextBox, _WidgetBase);

  _createDecoratedClass(NumericTextBox, [{
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function NumericTextBox(element) {
    _classCallCheck(this, _NumericTextBox);

    _WidgetBase.call(this, 'kendoNumericTextBox', element);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
  }

  NumericTextBox.prototype.bind = function bind(ctx) {
    _WidgetBase.prototype.bind.call(this, ctx);

    this._initialize();
  };

  NumericTextBox.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  NumericTextBox.prototype.enable = function enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  NumericTextBox.prototype.readonly = function readonly(value) {
    if (this.widget) {
      this.widget.readonly(value);
    }
  };

  NumericTextBox.prototype.focus = function focus() {
    if (this.widget) {
      this.widget.focus();
    }
  };

  NumericTextBox.prototype.max = function max(value) {
    if (this.widget) {
      return this.widget.max(value);
    }
  };

  NumericTextBox.prototype.min = function min(value) {
    if (this.widget) {
      return this.widget.min(value);
    }
  };

  NumericTextBox.prototype.step = function step(value) {
    if (this.widget) {
      return this.widget.step(value);
    }
  };

  NumericTextBox.prototype.value = function value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
      } else {
        return this.widget.value();
      }
    }
  };

  NumericTextBox.prototype.kValueChanged = function kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  };

  var _NumericTextBox = NumericTextBox;
  NumericTextBox = _commonDecorators.generateBindables('kendoNumericTextBox')(NumericTextBox) || NumericTextBox;
  NumericTextBox = _aureliaFramework.inject(Element)(NumericTextBox) || NumericTextBox;
  NumericTextBox = _aureliaFramework.customAttribute('k-numerictextbox')(NumericTextBox) || NumericTextBox;
  return NumericTextBox;
})(_commonWidgetBase.WidgetBase);

exports.NumericTextBox = NumericTextBox;