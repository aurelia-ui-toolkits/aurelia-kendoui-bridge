'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Filter = exports.Filter = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'filter'), _dec2 = (0, _decorators.generateBindables)('kendoFilter'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function Filter(element, widgetBase, container) {
    _classCallCheck(this, Filter);

    _initDefineProp(this, 'kEnabled', _descriptor, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoFilter').linkViewModel(this).useElement(this.element).useContainer(container);
  }

  Filter.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  Filter.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Filter.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Filter.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  Filter.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Filter.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Filter.prototype.detached = function detached() {
    this.destroy();
  };

  return Filter;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'kEnabled', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);