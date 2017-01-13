'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../common/template-gatherer', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, OptionsBuilder, TemplateGatherer, PDF, _dec, _dec2, _dec3, _class, Grid;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
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
    }],
    execute: function () {
      _export('Grid', Grid = (_dec = customElement(constants.elementPrefix + 'grid'), _dec2 = generateBindables('kendoGrid'), _dec3 = inject(Element, WidgetBase, Container, OptionsBuilder, TemplateGatherer), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Grid(element, widgetBase, container, optionsBuilder, templateGatherer) {
          var _this = this;

          _classCallCheck(this, Grid);

          this.element = element;
          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoGrid').useRootElement(this.element).beforeInitialize(function (options) {
            return _this._beforeInitialize(options);
          }).linkViewModel(this).useContainer(container);
        }

        Grid.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Grid.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.widgetBase.useElement(this.element.querySelectorAll('div')[0]);
          } else if (isInitFromTable(this.element)) {
            this.widgetBase.useElement(this.element.children[0]);
          } else {
            var target = document.createElement('div');
            this.element.appendChild(target);
            this.widgetBase.useElement(target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Grid.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.templateGatherer.useTemplates(this, 'kendoGrid', templates);

          this.kWidget = this.widgetBase.recreate();
        };

        Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this2 = this;

          var columns = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'col');
          var gridToolbars = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'grid-toolbar');

          if (columns && columns.length > 0) {
            options.columns = [];

            columns.forEach(function (column) {
              options.columns.push(_this2.optionsBuilder.getOptions(column, 'GridColumn'));
            });
          }

          if (gridToolbars && gridToolbars.length > 0) {
            var toolbar = gridToolbars[0];
            var o = this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem');
            if (o.template) {
              options.toolbar = o.template;
            } else {
              options.toolbar = o;
            }
          }
        };

        Grid.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Grid.prototype.detached = function detached() {
          this.destroy();
        };

        return Grid;
      }()) || _class) || _class) || _class));

      _export('Grid', Grid);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/grid.js.map
