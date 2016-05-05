define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.gauge.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoDatavizGaugeMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var LinearGauge = (function () {
    function LinearGauge(element, widgetBase, viewResources) {
      _classCallCheck(this, _LinearGauge);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoLinearGauge').linkViewModel(this).useValueBinding();
    }

    LinearGauge.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    LinearGauge.prototype.attached = function attached() {
      this.recreate();
    };

    LinearGauge.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    LinearGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    LinearGauge.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _LinearGauge = LinearGauge;
    LinearGauge = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(LinearGauge) || LinearGauge;
    LinearGauge = _commonDecorators.generateBindables('kendoLinearGauge')(LinearGauge) || LinearGauge;
    LinearGauge = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'linear-gauge')(LinearGauge) || LinearGauge;
    return LinearGauge;
  })();

  exports.LinearGauge = LinearGauge;
});