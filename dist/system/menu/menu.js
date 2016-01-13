System.register(['aurelia-framework', '../common/widget-base', '../common/decorators', 'kendo-ui/js/kendo.menu.min'], function (_export) {
  'use strict';

  var customElement, bindable, inject, WidgetBase, generateBindables, Menu;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_kendoUiJsKendoMenuMin) {}],
    execute: function () {
      Menu = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(Menu, _WidgetBase);

        _createDecoratedClass(Menu, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'kDataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Menu(element) {
          _classCallCheck(this, _Menu);

          _WidgetBase.call(this, 'kendoMenu', element);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);
        }

        Menu.prototype.bind = function bind(ctx) {
          _WidgetBase.prototype.bind.call(this, ctx);

          this._initialize();
        };

        Menu.prototype._initialize = function _initialize() {
          var ul = $(this.element).find('ul');
          if (ul.has()) {
            this.target = $(this.element).find('ul').first();
          } else {
            this.target = $(this.element).appendChild('<ul></ul>');
          }

          _WidgetBase.prototype._initialize.call(this);
        };

        var _Menu = Menu;
        Menu = inject(Element)(Menu) || Menu;
        Menu = generateBindables('kendoMenu')(Menu) || Menu;
        Menu = customElement('k-menu')(Menu) || Menu;
        return Menu;
      })(WidgetBase);

      _export('Menu', Menu);
    }
  };
});