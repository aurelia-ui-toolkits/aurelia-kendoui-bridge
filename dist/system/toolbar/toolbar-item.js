System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/options-builder'], function (_export) {
  'use strict';

  var children, customElement, inject, constants, generateBindables, TemplateGatherer, OptionsBuilder, ToolbarItem;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      children = _aureliaTemplating.children;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonTemplateGatherer) {
      TemplateGatherer = _commonTemplateGatherer.TemplateGatherer;
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }],
    execute: function () {
      ToolbarItem = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(ToolbarItem, [{
          key: 'templates',
          decorators: [children(constants.elementPrefix + 'template')],
          initializer: null,
          enumerable: true
        }, {
          key: 'buttons',
          decorators: [children(constants.elementPrefix + 'toolbar-item-button')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function ToolbarItem(templateGatherer, optionsBuilder) {
          _classCallCheck(this, _ToolbarItem);

          _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'buttons', _instanceInitializers);

          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
        }

        ToolbarItem.prototype.getOptions = function getOptions() {
          var _this = this;

          this.templateGatherer.useTemplates(this, 'ToolBarItem', this.templates);

          if (this.buttons && this.buttons.length > 0) {
            this.kButtons = [];

            this.buttons.forEach(function (item) {
              _this.kButtons.push(item.getOptions());
            });
          }

          return this.optionsBuilder.getOptions(this, 'ToolBarItem');
        };

        var _ToolbarItem = ToolbarItem;
        ToolbarItem = inject(TemplateGatherer, OptionsBuilder)(ToolbarItem) || ToolbarItem;
        ToolbarItem = generateBindables('ToolBarItem')(ToolbarItem) || ToolbarItem;
        ToolbarItem = customElement(constants.elementPrefix + 'toolbar-item')(ToolbarItem) || ToolbarItem;
        return ToolbarItem;
      })();

      _export('ToolbarItem', ToolbarItem);
    }
  };
});