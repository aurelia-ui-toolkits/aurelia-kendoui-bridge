System.register(['aurelia-framework', '../common/index', 'jquery', 'kendo-ui/js/kendo.dataviz.chart.min', 'kendo-ui/js/kendo.dataviz.chart.polar.min', 'kendo-ui/js/kendo.dataviz.chart.funnel.min'], function (_export) {
  'use strict';

  var customElement, bindable, inject, WidgetBase, generateBindables, Chart;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonIndex) {
      WidgetBase = _commonIndex.WidgetBase;
      generateBindables = _commonIndex.generateBindables;
    }, function (_jquery) {}, function (_kendoUiJsKendoDatavizChartMin) {}, function (_kendoUiJsKendoDatavizChartPolarMin) {}, function (_kendoUiJsKendoDatavizChartFunnelMin) {}],
    execute: function () {
      Chart = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(Chart, _WidgetBase);

        _createDecoratedClass(Chart, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'kDataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Chart(element) {
          _classCallCheck(this, _Chart);

          _WidgetBase.call(this, 'kendoChart', element);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);
        }

        Chart.prototype.attached = function attached() {
          this._initialize();
        };

        Chart.prototype.recreate = function recreate() {
          this._initialize();
        };

        Chart.prototype.exportImage = function exportImage(options) {
          if (this.widget) {
            return this.widget.exportImage(options);
          }
        };

        Chart.prototype.exportPDF = function exportPDF(options) {
          if (this.widget) {
            return this.widget.exportPDF(options);
          }
        };

        Chart.prototype.exportSVG = function exportSVG(options) {
          if (this.widget) {
            return this.widget.exportSVG(options);
          }
        };

        Chart.prototype.getAxis = function getAxis(name) {
          if (this.widget) {
            return this.widget.getAxis(name);
          }
        };

        Chart.prototype.redraw = function redraw() {
          if (this.widget) {
            return this.widget.redraw();
          }
        };

        Chart.prototype.refresh = function refresh() {
          if (this.widget) {
            return this.widget.refresh();
          }
        };

        Chart.prototype.resize = function resize() {
          if (this.widget) {
            return this.widget.resize();
          }
        };

        Chart.prototype.saveAsPDF = function saveAsPDF() {
          if (this.widget) {
            return this.widget.saveAsPDF();
          }
        };

        Chart.prototype.setDataSource = function setDataSource(dataSource) {
          if (this.widget) {
            return this.widget.setDataSource(dataSource);
          }
        };

        var _Chart = Chart;
        Chart = inject(Element)(Chart) || Chart;
        Chart = generateBindables('kendoChart')(Chart) || Chart;
        Chart = customElement('k-chart')(Chart) || Chart;
        return Chart;
      })(WidgetBase);

      _export('Chart', Chart);
    }
  };
});