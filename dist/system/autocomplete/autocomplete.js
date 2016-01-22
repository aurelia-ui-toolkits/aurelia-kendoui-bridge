System.register(['aurelia-framework', '../common/widget-base', '../common/decorators', '../common/events', 'kendo-ui/js/kendo.autocomplete.min', 'kendo-ui/js/kendo.virtuallist.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, WidgetBase, generateBindables, fireEvent, AutoComplete;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }, function (_kendoUiJsKendoAutocompleteMin) {}, function (_kendoUiJsKendoVirtuallistMin) {}],
    execute: function () {
      AutoComplete = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(AutoComplete, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AutoComplete(element, widgetBase) {
          _classCallCheck(this, _AutoComplete);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).setDefaultBindableValues();
        }

        AutoComplete.prototype.bind = function bind(ctx) {
          this.$parent = ctx;

          this.recreate();
        };

        AutoComplete.prototype.recreate = function recreate() {
          var _this = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });

          this.kWidget.bind('change', function (event) {
            _this.kValue = event.sender.value();

            fireEvent(_this.element, 'input');
          });

          this.kWidget.bind('select', function (event) {
            _this.kValue = event.sender.value();

            fireEvent(_this.element, 'input');
          });
        };

        AutoComplete.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _AutoComplete = AutoComplete;
        AutoComplete = inject(Element, WidgetBase)(AutoComplete) || AutoComplete;
        AutoComplete = generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
        AutoComplete = customAttribute('k-autocomplete')(AutoComplete) || AutoComplete;
        return AutoComplete;
      })();

      _export('AutoComplete', AutoComplete);
    }
  };
});