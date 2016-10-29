'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, PDF, _dec, _dec2, _dec3, _class, PivotGrid;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }],
    execute: function () {
      _export('PivotGrid', PivotGrid = (_dec = customElement(constants.elementPrefix + 'pivot-grid'), _dec2 = generateBindables('kendoPivotGrid'), _dec3 = inject(Element, WidgetBase, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function PivotGrid(element, widgetBase, container) {
          _classCallCheck(this, PivotGrid);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useContainer(container);
        }

        PivotGrid.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PivotGrid.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PivotGrid.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoPivotGrid', templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        PivotGrid.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return PivotGrid;
      }()) || _class) || _class) || _class));

      _export('PivotGrid', PivotGrid);
    }
  };
});