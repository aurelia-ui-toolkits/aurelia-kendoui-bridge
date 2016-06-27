'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dropdownlist.min', 'kendo.virtuallist.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, bindable, ViewResources, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, DropDownList;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  function getSelectNode(element) {
    return element.querySelectorAll('select');
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoDropdownlistMin) {}, function (_kendoVirtuallistMin) {}],
    execute: function () {
      _export('DropDownList', DropDownList = (_dec = customElement(constants.elementPrefix + 'drop-down-list'), _dec2 = generateBindables('kendoDropDownList'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function DropDownList(element, widgetBase, viewResources) {
          _classCallCheck(this, DropDownList);

          _initDefineProp(this, 'kNoValueBinding', _descriptor, this);

          _initDefineProp(this, 'kEnabled', _descriptor2, this);

          _initDefineProp(this, 'kReadOnly', _descriptor3, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        DropDownList.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DropDownList.prototype.attached = function attached() {
          if (!this.kNoValueBinding) {
            this.widgetBase.useValueBinding();
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropDownList.prototype.recreate = function recreate() {
          var selectNode = getSelectNode(this.element);
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoDropDownList', templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: selectNode.length > 0 ? selectNode[0] : this.element,
            parentCtx: this.$parent
          });
        };

        DropDownList.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        DropDownList.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return DropDownList;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'kNoValueBinding', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('DropDownList', DropDownList);
    }
  };
});