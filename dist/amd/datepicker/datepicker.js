define(['exports', 'aurelia-framework', '../common/widget-base', '../common/decorators', 'kendo-ui/js/kendo.datepicker.min'], function (exports, _aureliaFramework, _commonWidgetBase, _commonDecorators, _kendoUiJsKendoDatepickerMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var DatePicker = (function (_WidgetBase) {
    var _instanceInitializers = {};

    _inherits(DatePicker, _WidgetBase);

    _createDecoratedClass(DatePicker, [{
      key: 'kValue',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'kDisableDates',
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

    function DatePicker(element) {
      _classCallCheck(this, _DatePicker);

      _WidgetBase.call(this, 'kendoDatePicker', element);

      _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
    }

    DatePicker.prototype.bind = function bind(ctx) {
      _WidgetBase.prototype.bind.call(this, ctx);

      this._initialize();
    };

    DatePicker.prototype._beforeInitialize = function _beforeInitialize(options) {
      return Object.assign({}, options, { disableDates: this.kDisableDates });
    };

    DatePicker.prototype._initialize = function _initialize() {
      _WidgetBase.prototype._initialize.call(this);
    };

    DatePicker.prototype.close = function close(value) {
      if (this.widget) {
        return this.widget.close(value);
      }
    };

    DatePicker.prototype.destroy = function destroy() {
      if (this.widget) {
        return this.widget.destroy();
      }
    };

    DatePicker.prototype.enable = function enable(newValue) {
      if (this.widget) {
        this.widget.enable(newValue);
      }
    };

    DatePicker.prototype.readonly = function readonly(value) {
      if (this.widget) {
        this.widget.readonly(value);
      }
    };

    DatePicker.prototype.max = function max(value) {
      if (this.widget) {
        return this.widget.max(value);
      }
    };

    DatePicker.prototype.min = function min(value) {
      if (this.widget) {
        return this.widget.min(value);
      }
    };

    DatePicker.prototype.open = function open() {
      if (this.widget) {
        this.widget.open();
      }
    };

    DatePicker.prototype.setOptions = function setOptions(options) {
      if (this.widget) {
        this.widget.setOptions(options);
      }
    };

    DatePicker.prototype.value = function value(newValue) {
      if (this.widget) {
        if (newValue) {
          this.widget.value(newValue);
        } else {
          return this.widget.value();
        }
      }
    };

    DatePicker.prototype.kValueChanged = function kValueChanged() {
      if (this.widget) {
        this.widget.value(this.kValue);
      }
    };

    var _DatePicker = DatePicker;
    DatePicker = _commonDecorators.generateBindables('kendoDatePicker')(DatePicker) || DatePicker;
    DatePicker = _aureliaFramework.inject(Element)(DatePicker) || DatePicker;
    DatePicker = _aureliaFramework.customAttribute('k-datepicker')(DatePicker) || DatePicker;
    return DatePicker;
  })(_commonWidgetBase.WidgetBase);

  exports.DatePicker = DatePicker;
});