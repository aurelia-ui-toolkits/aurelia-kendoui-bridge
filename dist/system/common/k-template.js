System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/constants'], function (_export) {
  'use strict';

  var inject, customElement, bindable, noView, processContent, TargetInstruction, constants, Template;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
      Template = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Template, [{
          key: 'template',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'for',
          decorators: [bindable],
          initializer: function initializer() {
            return 'template';
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Template(targetInstruction) {
          _classCallCheck(this, _Template);

          _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'for', _instanceInitializers);

          this.template = targetInstruction.elementInstruction.template;
        }

        var _Template = Template;
        Template = inject(TargetInstruction)(Template) || Template;
        Template = processContent(function (compiler, resources, element, instruction) {
          var html = element.innerHTML;
          if (html !== '') {
            instruction.template = html;
          }
          return true;
        })(Template) || Template;
        Template = noView()(Template) || Template;
        Template = customElement(constants.elementPrefix + 'template')(Template) || Template;
        return Template;
      })();

      _export('Template', Template);
    }
  };
});