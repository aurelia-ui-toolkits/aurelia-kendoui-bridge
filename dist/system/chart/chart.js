System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../pdf/pdf', 'kendo-ui/js/kendo.dataviz.chart.min', 'kendo-ui/js/kendo.dataviz.chart.polar.min', 'kendo-ui/js/kendo.dataviz.chart.funnel.min'], function (_export) {
  'use strict';

  var inject, customElement, bindable, WidgetBase, generateBindables, PDF, Chart;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoUiJsKendoDatavizChartMin) {}, function (_kendoUiJsKendoDatavizChartPolarMin) {}, function (_kendoUiJsKendoDatavizChartFunnelMin) {}],
    execute: function () {
      Chart = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Chart, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Chart(element, widgetBase) {
          _classCallCheck(this, _Chart);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this).setDefaultBindableValues();
        }

        Chart.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Chart.prototype.attached = function attached() {
          this.recreate();
        };

        Chart.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Chart.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Chart = Chart;
        Chart = inject(Element, WidgetBase)(Chart) || Chart;
        Chart = generateBindables('kendoChart')(Chart) || Chart;
        Chart = customElement('k-chart')(Chart) || Chart;
        return Chart;
      })();

      _export('Chart', Chart);
    }
  };
});