System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.datepicker.min'], function (_export) {
  'use strict';

  var inject, customAttribute, bindable, WidgetBase, generateBindables, constants, DatePicker;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoDatepickerMin) {}],
    execute: function () {
      DatePicker = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(DatePicker, [{
          key: 'kEnabled',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'kReadOnly',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function DatePicker(element, widgetBase) {
          _classCallCheck(this, _DatePicker);

          _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDatePicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly').useValueBinding();
        }

        DatePicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DatePicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DatePicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        DatePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        DatePicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _DatePicker = DatePicker;
        DatePicker = inject(Element, WidgetBase)(DatePicker) || DatePicker;
        DatePicker = generateBindables('kendoDatePicker')(DatePicker) || DatePicker;
        DatePicker = customAttribute(constants.attributePrefix + 'datepicker')(DatePicker) || DatePicker;
        return DatePicker;
      })();

      _export('DatePicker', DatePicker);
    }
  };
});