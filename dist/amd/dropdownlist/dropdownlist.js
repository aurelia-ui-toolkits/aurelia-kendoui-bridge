define(['exports', 'aurelia-framework', '../common/widget-base', '../common/decorators', '../common/events', 'kendo-ui/js/kendo.dropdownlist.min', 'kendo-ui/js/kendo.virtuallist.min'], function (exports, _aureliaFramework, _commonWidgetBase, _commonDecorators, _commonEvents, _kendoUiJsKendoDropdownlistMin, _kendoUiJsKendoVirtuallistMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var DropDownList = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(DropDownList, [{
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }, {
      key: 'kValue',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function DropDownList(element, widgetBase) {
      _classCallCheck(this, _DropDownList);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).setDefaultBindableValues();
    }

    DropDownList.prototype.bind = function bind(ctx) {
      this.$parent = ctx;

      this.recreate();
    };

    DropDownList.prototype.recreate = function recreate() {
      var _this = this;

      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });

      this.kWidget.bind('change', function (event) {
        _this.kValue = event.sender.value();
        _this.kText = event.sender.text();

        _commonEvents.fireEvent(_this.element, 'input');
      });

      this.kWidget.bind('select', function (event) {
        _this.kValue = event.sender.value();
        _this.kText = event.sender.text();

        _commonEvents.fireEvent(_this.element, 'input');
      });

      this.kWidget.trigger('change');
    };

    DropDownList.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _DropDownList = DropDownList;
    DropDownList = _aureliaFramework.inject(Element, _commonWidgetBase.WidgetBase)(DropDownList) || DropDownList;
    DropDownList = _commonDecorators.generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
    DropDownList = _aureliaFramework.customAttribute('k-drop-down-list')(DropDownList) || DropDownList;
    return DropDownList;
  })();

  exports.DropDownList = DropDownList;
});