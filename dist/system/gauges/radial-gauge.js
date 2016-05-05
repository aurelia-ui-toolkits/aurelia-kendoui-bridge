System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.gauge.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, RadialGauge;

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
      RadialGauge = (function () {
        function RadialGauge(element, widgetBase, viewResources) {
          _classCallCheck(this, _RadialGauge);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
        }

        RadialGauge.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        RadialGauge.prototype.attached = function attached() {
          this.recreate();
        };

        RadialGauge.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        RadialGauge.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _RadialGauge = RadialGauge;
        RadialGauge = inject(Element, WidgetBase)(RadialGauge) || RadialGauge;
        RadialGauge = generateBindables('kendoRadialGauge')(RadialGauge) || RadialGauge;
        RadialGauge = customElement(constants.elementPrefix + 'radial-gauge')(RadialGauge) || RadialGauge;
        return RadialGauge;
      })();

      _export('RadialGauge', RadialGauge);
    }
  };
});