System.register(['aurelia-framework', '../common/index', 'jquery', 'kendo-ui/js/kendo.dropdownlist.min', 'kendo-ui/js/kendo.virtuallist.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, fireEvent, WidgetBase, TemplateCompiler, generateBindables, DropDownList;

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
      fireEvent = _commonIndex.fireEvent;
      WidgetBase = _commonIndex.WidgetBase;
      TemplateCompiler = _commonIndex.TemplateCompiler;
      generateBindables = _commonIndex.generateBindables;
    }, function (_jquery) {}, function (_kendoUiJsKendoDropdownlistMin) {}, function (_kendoUiJsKendoVirtuallistMin) {}],
    execute: function () {
      DropDownList = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(DropDownList, _WidgetBase);

        _createDecoratedClass(DropDownList, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'dataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function DropDownList(element, templateCompiler) {
          _classCallCheck(this, _DropDownList);

          _WidgetBase.call(this, 'kendoDropDownList', element);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          this.templateCompiler = templateCompiler;
        }

        DropDownList.prototype.bind = function bind(ctx) {
          this.templateCompiler.initialize(ctx);

          this._initialize();
        };

        DropDownList.prototype.recreate = function recreate() {
          this._initialize();
        };

        DropDownList.prototype._initialized = function _initialized() {
          var _this = this;

          this.widget.bind('change', function (event) {
            _this.value = event.sender.value();
            _this.text = event.sender.text();

            fireEvent(_this.element, 'input');
          });

          this.widget.bind('select', function (event) {
            _this.value = event.sender.value();
            _this.text = event.sender.text();

            fireEvent(_this.element, 'input');
          });

          this.widget.trigger('change');
        };

        DropDownList.prototype.enableChanged = function enableChanged(newValue) {
          if (this.widget) {
            this.widget.enable(newValue);
          }
        };

        DropDownList.prototype.valueChanged = function valueChanged(newValue) {
          if (this.widget) {
            this.widget.value(newValue);
            this.widget.trigger('change');
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
        DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
        DropDownList = inject(Element, TemplateCompiler)(DropDownList) || DropDownList;
        DropDownList = customAttribute('k-drop-down-list')(DropDownList) || DropDownList;
        return DropDownList;
      })(WidgetBase);

      _export('DropDownList', DropDownList);
    }
  };
});