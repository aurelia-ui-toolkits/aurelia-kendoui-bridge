'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonIndex = require('../common/index');

require('jquery');

require('kendo-ui/js/kendo.dataviz.sparkline.min');

var Sparkline = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Sparkline, [{
    key: 'autoBind',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'axisDefaults',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'categoryAxis',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'chartArea',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'data',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'dataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'plotArea',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'pointWidth',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 5;
    },
    enumerable: true
  }, {
    key: 'renderAs',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'series',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'seriesColors',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'seriesDefaults',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'theme',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'tooltip',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'transitions',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'type',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 'line';
    },
    enumerable: true
  }, {
    key: 'valueAxis',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    get: function get() {
      return this.widget && this.widget.options;
    }
  }], null, _instanceInitializers);

  function Sparkline(element) {
    _classCallCheck(this, _Sparkline);

    _defineDecoratedPropertyDescriptor(this, 'autoBind', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'axisDefaults', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'categoryAxis', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'chartArea', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'plotArea', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'pointWidth', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'renderAs', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'series', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'seriesColors', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'seriesDefaults', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'theme', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'tooltip', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'transitions', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'valueAxis', _instanceInitializers);

    this.element = element;
  }

  Sparkline.prototype.attached = function attached() {
    this._initialize();
  };

  Sparkline.prototype.recreate = function recreate() {
    this._initialize();
  };

  Sparkline.prototype._initialize = function _initialize() {
    this.widget = $(this.element).kendoSparkline(this.getOptions()).data('kendoSparkline');
  };

  Sparkline.prototype.getOptions = function getOptions() {
    var _this = this;

    var options = _commonIndex.pruneOptions({
      autoBind: this.autoBind,
      axisDefaults: this.axisDefaults,
      categoryAxis: this.categoryAxis,
      chartArea: this.chartArea,
      data: this.data,
      dataSource: this.dataSource,
      plotArea: this.plotArea,
      pointWidth: this.pointWidth,
      renderAs: this.renderAs,
      series: this.series,
      seriesColors: this.seriesColors,
      seriesDefaults: this.seriesDefaults,
      theme: this.theme,
      tooltip: this.tooltip,
      transitions: this.transitions,
      type: this.type,
      valueAxis: this.valueAxis,
      axisLabelClick: function axisLabelClick(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'axis-label-click', e);
      },
      dataBound: function dataBound(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'data-bound', e);
      },
      drag: function drag(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'drag', e);
      },
      dragEnd: function dragEnd(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'drag-end', e);
      },
      dragStart: function dragStart(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'drag-start', e);
      },
      plotAreaClick: function plotAreaClick(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'plot-area-click', e);
      },
      seriesClick: function seriesClick(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'series-click', e);
      },
      seriesHover: function seriesHover(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'series-hover', e);
      },
      zoom: function zoom(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'zoom', e);
      },
      zoomEnd: function zoomEnd(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'zoom-end', e);
      },
      zoomStart: function zoomStart(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'zoom-start', e);
      }
    });

    return options;
  };

  Sparkline.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _Sparkline = Sparkline;
  Sparkline = _aureliaFramework.inject(Element)(Sparkline) || Sparkline;
  Sparkline = _aureliaFramework.noView(Sparkline) || Sparkline;
  Sparkline = _aureliaFramework.customElement('au-kendo-sparkline')(Sparkline) || Sparkline;
  return Sparkline;
})();

exports.Sparkline = Sparkline;