System.register(['aurelia-framework', '../common/index', 'aurelia-pal', 'jquery', 'kendo-ui/js/kendo.button.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, WidgetBase, generateBindables, DOM, Button;

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
      WidgetBase = _commonIndex.WidgetBase;
      generateBindables = _commonIndex.generateBindables;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_jquery) {}, function (_kendoUiJsKendoButtonMin) {}],
    execute: function () {
      Button = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(Button, _WidgetBase);

        _createDecoratedClass(Button, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Button(element) {
          _classCallCheck(this, _Button);

          _WidgetBase.call(this, 'kendoButton', element);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
        }

        Button.prototype.bind = function bind() {
          this._initialize();
        };

        Button.prototype.recreate = function recreate() {
          this._initialize();
        };

        Button.prototype.getOptions = function getOptions() {
          return {
            icon: this.icon,
            enable: this.enable,
            imageUrl: this.imageUrl,
            spriteCssClass: this.spriteCssClass
          };
        };

        Button.prototype.enableChanged = function enableChanged(newValue) {
          if (this.widget) {
            this.widget.enable(newValue);
          }
        };

        var _Button = Button;
        Button = inject(Element)(Button) || Button;
        Button = generateBindables('kendoButton')(Button) || Button;
        Button = customAttribute('k-button')(Button) || Button;
        return Button;
      })(WidgetBase);

      _export('Button', Button);
    }
  };
});