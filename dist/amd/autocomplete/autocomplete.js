define(['exports', 'aurelia-framework', '../common/index', 'jquery', 'kendo-ui/js/kendo.autocomplete.min', 'kendo-ui/js/kendo.virtuallist.min'], function (exports, _aureliaFramework, _commonIndex, _jquery, _kendoUiJsKendoAutocompleteMin, _kendoUiJsKendoVirtuallistMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AutoComplete = (function (_WidgetBase) {
    var _instanceInitializers = {};

    _inherits(AutoComplete, _WidgetBase);

    _createDecoratedClass(AutoComplete, [{
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }, {
      key: 'dataSource',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AutoComplete(element, templateCompiler) {
      _classCallCheck(this, _AutoComplete);

      _WidgetBase.call(this, 'kendoAutoComplete', element);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.templateCompiler = templateCompiler;
    }

    AutoComplete.prototype.bind = function bind(ctx) {
      this.templateCompiler.initialize(ctx);

      this._initialize();
    };

    AutoComplete.prototype.recreate = function recreate() {
      this._initialize();
    };

    AutoComplete.prototype._initialize = function _initialize() {
      var _this = this;

      _WidgetBase.prototype._initialize.call(this);

      this.widget.bind('change', function (event) {
        _this.value = event.sender.value();

        _commonIndex.fireEvent(_this.element, 'input');
      });

      this.widget.bind('select', function (event) {
        _this.value = event.sender.value();

        _commonIndex.fireEvent(_this.element, 'input');
      });
    };

    AutoComplete.prototype.enableChanged = function enableChanged(newValue) {
      if (this.widget) {
        this.widget.enable(newValue);
      }
    };

    AutoComplete.prototype.setValue = function setValue(newValue) {
      if (this.widget) {
        this.widget.value(newValue);
        this.widget.trigger('change');
      }
    };

    AutoComplete.prototype.getValue = function getValue(newValue) {
      if (this.widget) {
        return this.widget.value();
      }
    };

    AutoComplete.prototype.search = function search(value) {
      if (this.widget) {
        this.widget.search(value);
      }
    };

    var _AutoComplete = AutoComplete;
    AutoComplete = _commonIndex.generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
    AutoComplete = _aureliaFramework.inject(Element, _commonIndex.TemplateCompiler)(AutoComplete) || AutoComplete;
    AutoComplete = _aureliaFramework.customAttribute('k-autocomplete')(AutoComplete) || AutoComplete;
    return AutoComplete;
  })(_commonIndex.WidgetBase);

  exports.AutoComplete = AutoComplete;
});