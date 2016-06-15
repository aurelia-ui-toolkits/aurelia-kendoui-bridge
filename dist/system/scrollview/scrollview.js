'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.mobile.scrollview.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, Scrollview;

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

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoMobileScrollviewMin) {}],
    execute: function () {
      _export('Scrollview', Scrollview = (_dec = customElement(constants.elementPrefix + 'scrollview'), _dec2 = generateBindables('kendoMobileScrollView'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec4 = children(constants.elementPrefix + 'template'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function Scrollview(element, widgetBase, viewResources) {
          _classCallCheck(this, Scrollview);

          _initDefineProp(this, 'templates', _descriptor, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMobileScrollView').linkViewModel(this).useViewResources(viewResources).useValueBinding();
        }

        Scrollview.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Scrollview.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Scrollview.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoMobileScrollView', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent
          });
        };

        Scrollview.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Scrollview;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));

      _export('Scrollview', Scrollview);
    }
  };
});