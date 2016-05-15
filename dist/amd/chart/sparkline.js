define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.sparkline.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _pdfPdf, _kendoDatavizSparklineMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Sparkline = (function () {
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
    Sparkline = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Sparkline) || Sparkline;
    Sparkline = _commonDecorators.generateBindables('kendoSparkline')(Sparkline) || Sparkline;
    Sparkline = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'sparkline')(Sparkline) || Sparkline;
    return Sparkline;
  })();

  exports.Sparkline = Sparkline;
});