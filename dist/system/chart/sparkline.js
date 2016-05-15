System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.sparkline.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, Sparkline;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
    }, function (_kendoDatavizSparklineMin) {}],
    execute: function () {
      Sparkline = (function () {
        function Sparkline(element, widgetBase) {
          _classCallCheck(this, _Sparkline);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSparkline').linkViewModel(this);
        }

        Sparkline.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Sparkline.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Sparkline.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Sparkline.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Sparkline = Sparkline;
        Sparkline = inject(Element, WidgetBase)(Sparkline) || Sparkline;
        Sparkline = generateBindables('kendoSparkline')(Sparkline) || Sparkline;
        Sparkline = customElement(constants.elementPrefix + 'sparkline')(Sparkline) || Sparkline;
        return Sparkline;
      })();

      _export('Sparkline', Sparkline);
    }
  };
});