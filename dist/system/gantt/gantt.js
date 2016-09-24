'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, customElement, ViewResources, WidgetBase, generateBindables, constants, OptionsBuilder, PDF, _dec, _dec2, _dec3, _class, Gantt;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
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
    }],
    execute: function () {
      _export('Gantt', Gantt = (_dec = customElement(constants.elementPrefix + 'gantt'), _dec2 = generateBindables('kendoGantt'), _dec3 = inject(Element, WidgetBase, ViewResources, OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Gantt(element, widgetBase, viewResources, optionsBuilder) {
          _classCallCheck(this, Gantt);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoGantt').linkViewModel(this).useViewResources(viewResources);
        }

        Gantt.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Gantt.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Gantt.prototype.recreate = function recreate() {
          var _this = this;

          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoGantt', templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this._beforeInitialize(o);
            }
          });
        };

        Gantt.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this2 = this;

          var columns = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'gantt-col');

          if (columns && columns.length > 0) {
            options.columns = [];

            columns.forEach(function (column) {
              options.columns.push(_this2.optionsBuilder.getOptions(column, 'GanttColumn'));
            });
          }
        };

        Gantt.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Gantt;
      }()) || _class) || _class) || _class));

      _export('Gantt', Gantt);
    }
  };
});