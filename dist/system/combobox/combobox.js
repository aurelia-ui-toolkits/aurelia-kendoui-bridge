System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.combobox.min', 'kendo.virtuallist.min'], function (_export) {
  'use strict';

  var inject, customElement, bindable, children, ViewResources, WidgetBase, generateBindables, constants, ComboBox;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function getSelectNode(element) {
    return element.querySelectorAll('select');
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoComboboxMin) {}, function (_kendoVirtuallistMin) {}],
    execute: function () {
      ComboBox = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(ComboBox, [{
          key: 'kEnabled',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'kReadOnly',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'templates',
          decorators: [children(constants.elementPrefix + 'template')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function ComboBox(element, widgetBase, viewResources) {
          _classCallCheck(this, _ComboBox);

          _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoComboBox').linkViewModel(this).useValueBinding().useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        ComboBox.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ComboBox.prototype.attached = function attached() {
          this.recreate();
        };

        ComboBox.prototype.recreate = function recreate() {
          var selectNode = getSelectNode(this.element);
          this.widgetBase.useTemplates(this, 'kendoComboBox', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: selectNode.length > 0 ? selectNode[0] : this.element,
            parentCtx: this.$parent
          });
        };

        ComboBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ComboBox.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _ComboBox = ComboBox;
        ComboBox = inject(Element, WidgetBase, ViewResources)(ComboBox) || ComboBox;
        ComboBox = generateBindables('kendoComboBox')(ComboBox) || ComboBox;
        ComboBox = customElement(constants.elementPrefix + 'combobox')(ComboBox) || ComboBox;
        return ComboBox;
      })();

      _export('ComboBox', ComboBox);
    }
  };
});