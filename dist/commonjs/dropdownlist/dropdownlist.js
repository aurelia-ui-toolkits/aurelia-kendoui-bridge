'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonEvents = require('../common/events');

require('kendo-ui/js/kendo.dropdownlist.min');

require('kendo-ui/js/kendo.virtuallist.min');

var DropDownList = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(DropDownList, _WidgetBase);

  _createDecoratedClass(DropDownList, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function DropDownList(element) {
    _classCallCheck(this, _DropDownList);

    _WidgetBase.call(this, 'kendoDropDownList', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers);
  }

  DropDownList.prototype.bind = function bind(ctx) {
    _WidgetBase.prototype.bind.call(this, ctx);

    this._initialize();
  };

  DropDownList.prototype._initialized = function _initialized() {
    var _this = this;

    this.widget.bind('change', function (event) {
      _this.kValue = event.sender.value();
      _this.kText = event.sender.text();

      _commonEvents.fireEvent(_this.element, 'input');
    });

    this.widget.bind('select', function (event) {
      _this.kValue = event.sender.value();
      _this.kText = event.sender.text();

      _commonEvents.fireEvent(_this.element, 'input');
    });

    this.widget.trigger('change');
  };

  DropDownList.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  DropDownList.prototype.kValueChanged = function kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  };

  DropDownList.prototype.value = function value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  };

  DropDownList.prototype.select = function select(index) {
    if (this.widget) {
      this.widget.select(index);

      this.widget.trigger('change');
    }
  };

  DropDownList.prototype.search = function search(value) {
    if (this.widget) {
      this.widget.search(value);

      this.widget.trigger('change');
    }
  };

  var _DropDownList = DropDownList;
  DropDownList = _commonDecorators.generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.inject(Element)(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.customAttribute('k-drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})(_commonWidgetBase.WidgetBase);

exports.DropDownList = DropDownList;