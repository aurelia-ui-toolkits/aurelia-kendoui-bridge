System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.gauge.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, LinearGauge;

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
    }, function (_kendoDatavizGaugeMin) {}],
    execute: function () {
      LinearGauge = (function () {
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
        LinearGauge = inject(Element, WidgetBase)(LinearGauge) || LinearGauge;
        LinearGauge = generateBindables('kendoLinearGauge')(LinearGauge) || LinearGauge;
        LinearGauge = customElement(constants.elementPrefix + 'linear-gauge')(LinearGauge) || LinearGauge;
        return LinearGauge;
      })();

      _export('LinearGauge', LinearGauge);
    }
  };
});