define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Template = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Template = exports.Template = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'template'), _dec2 = (0, _aureliaTemplating.noView)(), _dec3 = (0, _aureliaTemplating.processContent)(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }
    element.innerHTML = '';
  }), _dec4 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TargetInstruction), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function Template(targetInstruction) {
    _classCallCheck(this, Template);

    _initDefineProp(this, 'template', _descriptor, this);

    _initDefineProp(this, 'for', _descriptor2, this);

    _initDefineProp(this, 'kendoTemplate', _descriptor3, this);

    this.template = targetInstruction.elementInstruction.template;
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'template', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'for', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'template';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'kendoTemplate', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class) || _class) || _class);
});