System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../common/template-gatherer', '../pdf/pdf', 'kendo.data.signalr.min', 'kendo.filtercell.min', 'kendo.grid.min'], function (_export) {
  'use strict';

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, OptionsBuilder, TemplateGatherer, PDF, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function isInitFromTable(element) {
    return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
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
    }, function (_commonTemplateGatherer) {
      TemplateGatherer = _commonTemplateGatherer.TemplateGatherer;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoDataSignalrMin) {}, function (_kendoFiltercellMin) {}, function (_kendoGridMin) {}],
    execute: function () {
      Grid = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Grid, [{
          key: 'columns',
          decorators: [children(constants.elementPrefix + 'col')],
          initializer: null,
          enumerable: true
        }, {
          key: 'templates',
          decorators: [children(constants.elementPrefix + 'template')],
          initializer: null,
          enumerable: true
        }, {
          key: 'gridToolbars',
          decorators: [children(constants.elementPrefix + 'grid-toolbar')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
          _classCallCheck(this, _Grid);

          _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'gridToolbars', _instanceInitializers);

          this.element = element;
          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).useViewResources(viewResources);
        }

        Grid.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Grid.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else if (isInitFromTable(this.element)) {
            this.target = this.element.children[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Grid.prototype.recreate = function recreate() {
          var _this = this;

          this.templateGatherer.useTemplates(this, 'kendoGrid', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this._beforeInitialize(o);
            }
          });
        };

        Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this2 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (column) {
              options.columns.push(_this2.optionsBuilder.getOptions(column, 'GridColumn'));
            });
          }

          if (this.gridToolbars && this.gridToolbars.length > 0) {
            options.toolbar = [];

            this.gridToolbars.forEach(function (toolbar) {
              options.toolbar.push(_this2.optionsBuilder.getOptions(toolbar, 'GridToolbarItem'));
            });
          }
        };

        Grid.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Grid = Grid;
        Grid = inject(Element, WidgetBase, ViewResources, OptionsBuilder, TemplateGatherer)(Grid) || Grid;
        Grid = generateBindables('kendoGrid')(Grid) || Grid;
        Grid = customElement(constants.elementPrefix + 'grid')(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});