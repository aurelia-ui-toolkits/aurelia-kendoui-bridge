define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumericTextBox = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var NumericTextBox = exports.NumericTextBox = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'numerictextbox'), _dec2 = (0, _decorators.generateBindables)('kendoNumericTextBox'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function NumericTextBox(element, widgetBase) {
      _classCallCheck(this, NumericTextBox);

      _initDefineProp(this, 'kEnabled', _descriptor, this);

      _initDefineProp(this, 'kReadOnly', _descriptor2, this);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).useElement(this.element).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
    }

    NumericTextBox.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    NumericTextBox.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    NumericTextBox.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    NumericTextBox.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    NumericTextBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    NumericTextBox.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    NumericTextBox.prototype.detached = function detached() {
      this.destroy();
    };

    return NumericTextBox;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'kEnabled', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'kReadOnly', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});