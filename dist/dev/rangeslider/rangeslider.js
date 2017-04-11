'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, bindable, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, RangeSlider;

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

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('RangeSlider', RangeSlider = (_dec = customElement(constants.elementPrefix + 'range-slider'), _dec2 = generateBindables('kendoRangeSlider'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function RangeSlider(element, widgetBase) {
          _classCallCheck(this, RangeSlider);

          _initDefineProp(this, 'kEnabled', _descriptor, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoRangeSlider').useElement(this.element).linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
        }

        RangeSlider.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        RangeSlider.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        RangeSlider.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        RangeSlider.prototype.recreate = function recreate() {
          this.destroy();

          var divs = this.element.querySelectorAll('div');
          if (divs.length === 0) {
            var div = document.createElement('div');
            this.element.appendChild(div);
            divs = [div];
          }

          var inputs = divs[0].querySelectorAll('input');
          if (inputs.length === 0) {
            divs[0].appendChild(document.createElement('input'));
            divs[0].appendChild(document.createElement('input'));
          }

          this.widgetBase.useElement(divs[0]);

          this.kWidget = this.widgetBase.recreate();
        };

        RangeSlider.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        RangeSlider.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        RangeSlider.prototype.detached = function detached() {
          this.destroy();
        };

        return RangeSlider;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('RangeSlider', RangeSlider);
    }
  };
});
//# sourceMappingURL=../dist/dev/rangeslider/rangeslider.js.map
