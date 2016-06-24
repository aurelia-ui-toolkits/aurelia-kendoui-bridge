'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../common/template-gatherer', '../pdf/pdf', 'kendo.data.signalr.min', 'kendo.filtercell.min', 'kendo.grid.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, OptionsBuilder, TemplateGatherer, PDF, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, Grid;

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
      _export('Grid', Grid = (_dec = customElement(constants.elementPrefix + 'grid'), _dec2 = generateBindables('kendoGrid'), _dec3 = inject(Element, WidgetBase, ViewResources, OptionsBuilder, TemplateGatherer), _dec4 = children(constants.elementPrefix + 'col'), _dec5 = children(constants.elementPrefix + 'template'), _dec6 = children(constants.elementPrefix + 'grid-toolbar'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function Grid(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
          _classCallCheck(this, Grid);

          _initDefineProp(this, 'columns', _descriptor, this);

          _initDefineProp(this, 'templates', _descriptor2, this);

          _initDefineProp(this, 'gridToolbars', _descriptor3, this);

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
            var toolbar = this.gridToolbars[0];
            var o = this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem');
            if (o.template) {
              options.toolbar = o.template;
            } else {
              options.toolbar = o;
            }
          }
        };

        Grid.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Grid;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'gridToolbars', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));

      _export('Grid', Grid);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/grid.js.map
