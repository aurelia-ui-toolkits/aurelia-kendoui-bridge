define(['exports', 'aurelia-framework', '../common/widget-base', '../common/decorators', '../common/events', 'kendo-ui/js/kendo.autocomplete.min', 'kendo-ui/js/kendo.virtuallist.min'], function (exports, _aureliaFramework, _commonWidgetBase, _commonDecorators, _commonEvents, _kendoUiJsKendoAutocompleteMin, _kendoUiJsKendoVirtuallistMin) {
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
      key: 'kDataSource',
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

    function AutoComplete(element) {
      _classCallCheck(this, _AutoComplete);

      _WidgetBase.call(this, 'kendoAutoComplete', element);

      _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
    }

    AutoComplete.prototype.bind = function bind(ctx) {
      _WidgetBase.prototype.bind.call(this, ctx);

      this._initialize();
    };

    AutoComplete.prototype._initialize = function _initialize() {
      var _this = this;

      _WidgetBase.prototype._initialize.call(this);

      this.widget.bind('change', function (event) {
        _this.kValue = event.sender.value();

        _commonEvents.fireEvent(_this.element, 'input');
      });

      this.widget.bind('select', function (event) {
        _this.kValue = event.sender.value();

        _commonEvents.fireEvent(_this.element, 'input');
      });
    };

    AutoComplete.prototype.kEnableChanged = function kEnableChanged() {
      if (this.widget) {
        this.widget.enable(this.kEnable);
      }
    };

    AutoComplete.prototype.enable = function enable(newValue) {
      if (this.widget) {
        return this.widget.enable(newValue);
      }
    };

    AutoComplete.prototype.value = function value(newValue) {
      if (this.widget) {
        if (newValue) {
          this.widget.value(newValue);
          this.widget.trigger('change');
        } else {
          return this.widget.value();
        }
      }
    };

    AutoComplete.prototype.search = function search(value) {
      if (this.widget) {
        this.widget.search(value);
      }
    };

    AutoComplete.prototype.close = function close(value) {
      if (this.widget) {
        return this.widget.close(value);
      }
    };

    AutoComplete.prototype.dataItem = function dataItem(value) {
      if (this.widget) {
        return this.widget.dataItem(value);
      }
    };

    AutoComplete.prototype.destroy = function destroy() {
      if (this.widget) {
        return this.widget.destroy();
      }
    };

    AutoComplete.prototype.focus = function focus() {
      if (this.widget) {
        return this.widget.focus();
      }
    };

    AutoComplete.prototype.readonly = function readonly(value) {
      if (this.widget) {
        return this.widget.readonly(value);
      }
    };

    AutoComplete.prototype.refresh = function refresh() {
      if (this.widget) {
        return this.widget.refresh();
      }
    };

    AutoComplete.prototype.select = function select(value) {
      if (this.widget) {
        return this.widget.select(value);
      }
    };

    AutoComplete.prototype.setDataSource = function setDataSource(value) {
      if (this.widget) {
        return this.widget.setDataSource(value);
      }
    };

    AutoComplete.prototype.suggest = function suggest(value) {
      if (this.widget) {
        return this.widget.suggest(value);
      }
    };

    var _AutoComplete = AutoComplete;
    AutoComplete = _commonDecorators.generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
    AutoComplete = _aureliaFramework.inject(Element)(AutoComplete) || AutoComplete;
    AutoComplete = _aureliaFramework.customAttribute('k-autocomplete')(AutoComplete) || AutoComplete;
    return AutoComplete;
  })(_commonWidgetBase.WidgetBase);

  exports.AutoComplete = AutoComplete;
});