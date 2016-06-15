'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, bindable, noView, processContent, TargetInstruction, constants, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, NotificationTemplate;

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
      noView = _aureliaTemplating.noView;
      processContent = _aureliaTemplating.processContent;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('NotificationTemplate', NotificationTemplate = (_dec = customElement(constants.elementPrefix + 'notification-template'), _dec2 = noView(), _dec3 = processContent(function (compiler, resources, element, instruction) {
        var html = element.innerHTML;
        if (html !== '') {
          instruction.template = html;
        }
        return true;
      }), _dec4 = inject(TargetInstruction), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function NotificationTemplate(targetInstruction) {
        _classCallCheck(this, NotificationTemplate);

        _initDefineProp(this, 'template', _descriptor, this);

        _initDefineProp(this, 'type', _descriptor2, this);

        this.template = targetInstruction.elementInstruction.template;
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'template', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('NotificationTemplate', NotificationTemplate);
    }
  };
});
//# sourceMappingURL=../dist/dev/notification/notification-template.js.map
