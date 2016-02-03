System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/constants'], function (_export) {
  'use strict';

  var inject, customElement, noView, bindable, processContent, TargetInstruction, constants, EventTemplate;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      noView = _aureliaTemplating.noView;
      bindable = _aureliaTemplating.bindable;
      processContent = _aureliaTemplating.processContent;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      EventTemplate = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(EventTemplate, [{
          key: 'template',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function EventTemplate(targetInstruction) {
          _classCallCheck(this, _EventTemplate);

          _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

          this.template = targetInstruction.elementInstruction.template;
        }

        var _EventTemplate = EventTemplate;
        EventTemplate = customElement(constants.elementPrefix + 'event-template')(EventTemplate) || EventTemplate;
        EventTemplate = inject(TargetInstruction)(EventTemplate) || EventTemplate;
        EventTemplate = processContent(function (compiler, resources, element, instruction) {
          var html = element.innerHTML;
          if (html !== '') {
            instruction.template = html;
          }

          return true;
        })(EventTemplate) || EventTemplate;
        EventTemplate = noView(EventTemplate) || EventTemplate;
        return EventTemplate;
      })();

      _export('EventTemplate', EventTemplate);
    }
  };
});