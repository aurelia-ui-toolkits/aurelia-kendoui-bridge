System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/util', 'kendo.listview.min'], function (_export) {
  'use strict';

  var inject, customElement, bindable, children, ViewResources, WidgetBase, generateBindables, constants, pruneOptions, ListView;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonUtil) {
      pruneOptions = _commonUtil.pruneOptions;
    }, function (_kendoListviewMin) {}],
    execute: function () {
      ListView = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(ListView, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'listTemplates',
          decorators: [children(constants.elementPrefix + 'list-template')],
          initializer: null,
          enumerable: true
        }, {
          key: 'listEditTemplates',
          decorators: [children(constants.elementPrefix + 'list-edit-template')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function ListView(element, widgetBase, viewResources) {
          _classCallCheck(this, _ListView);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'listTemplates', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'listEditTemplates', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
        }

        ListView.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ListView.prototype.attached = function attached() {
          this.recreate();
        };

        ListView.prototype.recreate = function recreate() {
          var _this = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this._beforeInitialize(o);
            }
          });
        };

        ListView.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this2 = this;

          var template = undefined;
          var editTemplate = undefined;

          if (this.kTemplate) {
            template = function () {
              return _this2.kTemplate;
            };
          } else if (this.listTemplates.length > 0) {
            (function () {
              var templ = _this2.listTemplates[0].template;
              template = function () {
                return templ;
              };
            })();
          }

          if (this.kEditTemplate) {
            editTemplate = function () {
              return _this2.kEditTemplate;
            };
          } else if (this.listEditTemplates.length > 0) {
            (function () {
              var templ = _this2.listEditTemplates[0].template;
              editTemplate = function () {
                return templ;
              };
            })();
          }

          return Object.assign(options, pruneOptions({
            editTemplate: editTemplate,
            template: template
          }));
        };

        ListView.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _ListView = ListView;
        ListView = inject(Element, WidgetBase, ViewResources)(ListView) || ListView;
        ListView = generateBindables('kendoListView')(ListView) || ListView;
        ListView = customElement(constants.elementPrefix + 'list-view')(ListView) || ListView;
        return ListView;
      })();

      _export('ListView', ListView);
    }
  };
});