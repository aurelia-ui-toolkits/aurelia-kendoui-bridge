System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf', 'kendo.data.signalr.min', 'kendo.filtercell.min', 'kendo.treelist.min'], function (_export) {
  'use strict';

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, OptionsBuilder, PDF, TreeList;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoDataSignalrMin) {}, function (_kendoFiltercellMin) {}, function (_kendoTreelistMin) {}],
    execute: function () {
      TreeList = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(TreeList, [{
          key: 'columns',
          decorators: [children(constants.elementPrefix + 'tree-col')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function TreeList(element, widgetBase, viewResources, optionsBuilder) {
          _classCallCheck(this, _TreeList);

          _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
        }

        TreeList.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeList.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeList.prototype.recreate = function recreate() {
          var _this = this;

          var element = this.element;

          this.kWidget = this.widgetBase.createWidget({
            element: element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this._beforeInitialize(o);
            }
          });
        };

        TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this2 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (column) {
              options.columns.push(_this2.optionsBuilder.getOptions(column, 'TreeListColumn'));
            });
          }
        };

        TreeList.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _TreeList = TreeList;
        TreeList = inject(Element, WidgetBase, ViewResources, OptionsBuilder)(TreeList) || TreeList;
        TreeList = generateBindables('kendoTreeList')(TreeList) || TreeList;
        TreeList = customElement(constants.elementPrefix + 'tree-list')(TreeList) || TreeList;
        return TreeList;
      })();

      _export('TreeList', TreeList);
    }
  };
});