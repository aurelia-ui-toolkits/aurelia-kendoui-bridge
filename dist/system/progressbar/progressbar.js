System.register(['aurelia-framework', '../common/index', 'kendo-ui/js/kendo.progressbar.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, WidgetBase, generateBindables, ProgressBar;

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
    }, function (_kendoUiJsKendoProgressbarMin) {}],
    execute: function () {
      ProgressBar = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(ProgressBar, _WidgetBase);

        _createDecoratedClass(ProgressBar, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function ProgressBar(element) {
          _classCallCheck(this, _ProgressBar);

          _WidgetBase.call(this, 'kendoProgressBar', element);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
          this.options = {};
        }

        ProgressBar.prototype.bind = function bind() {
          this._initialize();
        };

        ProgressBar.prototype.enableChanged = function enableChanged(newValue) {
          if (this.widget) {
            this.widget.enable(newValue);
          }
        };

        ProgressBar.prototype.valueChanged = function valueChanged(newValue) {
          this.widget.value(newValue);
        };

        var _ProgressBar = ProgressBar;
        ProgressBar = inject(Element)(ProgressBar) || ProgressBar;
        ProgressBar = generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
        ProgressBar = customAttribute('k-progress-bar')(ProgressBar) || ProgressBar;
        return ProgressBar;
      })(WidgetBase);

      _export('ProgressBar', ProgressBar);
    }
  };
});