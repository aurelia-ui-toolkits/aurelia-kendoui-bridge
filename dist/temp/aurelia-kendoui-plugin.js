'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.fireEvent = fireEvent;
exports.fireKendoEvent = fireKendoEvent;
exports.pruneOptions = pruneOptions;
exports.addHyphenAndLower = addHyphenAndLower;
exports._hyphenate = _hyphenate;
exports._unhyphenate = _unhyphenate;
exports.getBindablePropertyName = getBindablePropertyName;
exports.getEventsFromAttributes = getEventsFromAttributes;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('jquery');

require('kendo-ui/js/kendo.autocomplete.min');

require('kendo-ui/js/kendo.virtuallist.min');

require('kendo-ui/js/kendo.button.min');

require('kendo-ui/js/kendo.dataviz.chart.min');

require('kendo-ui/js/kendo.dataviz.chart.polar.min');

require('kendo-ui/js/kendo.dataviz.chart.funnel.min');

require('kendo-ui/js/kendo.dataviz.sparkline.min');

require('kendo-ui/js/kendo.dataviz.stock.min');

require('kendo-ui/js/kendo.dataviz.treemap.min');

require('kendo-ui/js/kendo.colorpicker.min');

require('kendo-ui/js/kendo.datepicker.min');

require('kendo-ui/js/kendo.dropdownlist.min');

require('kendo-ui/js/kendo.data.signalr.min');

require('kendo-ui/js/kendo.filtercell.min');

require('kendo-ui/js/kendo.grid.min');

require('kendo-ui/js/kendo.menu.min');

require('kendo-ui/js/kendo.pdf.min');

require('kendo-ui/js/jszip.min');

require('kendo-ui/js/kendo.progressbar.min');

require('kendo-ui/js/kendo.slider.min');

require('kendo-ui/js/kendo.tabstrip.min');

require('kendo-ui/js/kendo.treeview.min');

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var KendoConfigBuilder = (function () {
  function KendoConfigBuilder() {
    _classCallCheck(this, KendoConfigBuilder);

    this.resources = [];
    this.useGlobalResources = true;
  }

  KendoConfigBuilder.prototype.core = function core() {
    this.kendoButton().kendoTabStrip().kendoProgressBar().kendoSlider().kendoColorPicker().kendoDropDownList().kendoDatePicker();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoGrid().kendoAutoComplete().kendoChart().kendoTreeView();
    return this;
  };

  KendoConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
    this.resources.push('autocomplete/autocomplete');
    return this;
  };

  KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
    this.resources.push('button/button');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
    this.resources.push('menu/menu');
    return this;
  };

  KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
    this.resources.push('combobox/combobox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  };

  KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
    this.resources.push('tabstrip/tabstrip');
    return this;
  };

  KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
    this.resources.push('toolbar/toolbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  };

  KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
    this.resources.push('progressbar/progressbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
    this.resources.push('slider/slider');
    return this;
  };

  KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
    this.resources.push('colorpicker/colorpicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
    this.resources.push('treeview/treeview');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
    this.resources.push('datepicker/datepicker');
    return this;
  };

  return KendoConfigBuilder;
})();

exports.KendoConfigBuilder = KendoConfigBuilder;

var logger = LogManager.getLogger('aurelia-kendoui-plugin');

function configure(aurelia, configCallback) {
  var builder = new KendoConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.resources.length === 0) {
    logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
    builder.core();
  }

  var resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

var AutoComplete = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(AutoComplete, _WidgetBase);

  _createDecoratedClass(AutoComplete, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function AutoComplete(element) {
    _classCallCheck(this, _AutoComplete);

    _WidgetBase.call(this, 'kendoAutoComplete', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
  }

  AutoComplete.prototype.bind = function bind(ctx) {
    _WidgetBase.prototype.bind.call(this, ctx);

    this._initialize();
  };

  AutoComplete.prototype._initialize = function _initialize() {
    var _this2 = this;

    _WidgetBase.prototype._initialize.call(this);

    this.widget.bind('change', function (event) {
      _this2.kValue = event.sender.value();

      fireEvent(_this2.element, 'input');
    });

    this.widget.bind('select', function (event) {
      _this2.kValue = event.sender.value();

      fireEvent(_this2.element, 'input');
    });
  };

  AutoComplete.prototype.kEnableChanged = function kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  };

  AutoComplete.prototype.enable = function enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  };

  AutoComplete.prototype.value = function value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
        this.widget.trigger('change');
      } else {
        return this.widget.value();
      }
    }
  };

  AutoComplete.prototype.search = function search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  };

  AutoComplete.prototype.close = function close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  };

  AutoComplete.prototype.dataItem = function dataItem(value) {
    if (this.widget) {
      return this.widget.dataItem(value);
    }
  };

  AutoComplete.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  AutoComplete.prototype.focus = function focus() {
    if (this.widget) {
      return this.widget.focus();
    }
  };

  AutoComplete.prototype.readonly = function readonly(value) {
    if (this.widget) {
      return this.widget.readonly(value);
    }
  };

  AutoComplete.prototype.refresh = function refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  };

  AutoComplete.prototype.select = function select(value) {
    if (this.widget) {
      return this.widget.select(value);
    }
  };

  AutoComplete.prototype.setDataSource = function setDataSource(value) {
    if (this.widget) {
      return this.widget.setDataSource(value);
    }
  };

  AutoComplete.prototype.suggest = function suggest(value) {
    if (this.widget) {
      return this.widget.suggest(value);
    }
  };

  var _AutoComplete = AutoComplete;
  AutoComplete = generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaFramework.inject(Element)(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaFramework.customAttribute('k-autocomplete')(AutoComplete) || AutoComplete;
  return AutoComplete;
})(WidgetBase);

exports.AutoComplete = AutoComplete;

var Button = (function (_WidgetBase2) {
  var _instanceInitializers2 = {};

  _inherits(Button, _WidgetBase2);

  _createDecoratedClass(Button, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers2);

  function Button(element) {
    _classCallCheck(this, _Button);

    _WidgetBase2.call(this, 'kendoButton', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers2);
  }

  Button.prototype.bind = function bind(ctx) {
    _WidgetBase2.prototype.bind.call(this, ctx);

    this._initialize();
  };

  Button.prototype.kEnableChanged = function kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  };

  Button.prototype.enable = function enable(_enable) {
    if (this.widget) {
      this.widget.enable(_enable);
    }
  };

  var _Button = Button;
  Button = _aureliaFramework.inject(Element)(Button) || Button;
  Button = generateBindables('kendoButton')(Button) || Button;
  Button = _aureliaFramework.customAttribute('k-button')(Button) || Button;
  return Button;
})(WidgetBase);

exports.Button = Button;

var Chart = (function (_WidgetBase3) {
  var _instanceInitializers3 = {};

  _inherits(Chart, _WidgetBase3);

  _createDecoratedClass(Chart, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers3);

  function Chart(element) {
    _classCallCheck(this, _Chart);

    _WidgetBase3.call(this, 'kendoChart', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers3);
  }

  Chart.prototype.attached = function attached() {
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

  Chart.prototype.setOptions = function setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  };

  Chart.prototype.svg = function svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  };

  Chart.prototype.imageDataURL = function imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  };

  Chart.prototype.toggleHighlight = function toggleHighlight(show, options) {
    if (this.widget) {
      return this.widget.toggleHighlight(show, options);
    }
  };

  Chart.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  var _Chart = Chart;
  Chart = _aureliaFramework.inject(Element)(Chart) || Chart;
  Chart = generateBindables('kendoChart')(Chart) || Chart;
  Chart = _aureliaFramework.customElement('k-chart')(Chart) || Chart;
  return Chart;
})(WidgetBase);

exports.Chart = Chart;

var Sparkline = (function (_WidgetBase4) {
  var _instanceInitializers4 = {};

  _inherits(Sparkline, _WidgetBase4);

  _createDecoratedClass(Sparkline, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers4);

  function Sparkline(element) {
    _classCallCheck(this, _Sparkline);

    _WidgetBase4.call(this, 'kendoSparkline', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers4);
  }

  Sparkline.prototype.attached = function attached() {
    this._initialize();
  };

  Sparkline.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  Sparkline.prototype.exportImage = function exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  };

  Sparkline.prototype.exportPDF = function exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  };

  Sparkline.prototype.exportSVG = function exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  };

  Sparkline.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  };

  Sparkline.prototype.setOptions = function setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  };

  Sparkline.prototype.svg = function svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  };

  Sparkline.prototype.imageDataURL = function imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  };

  Sparkline.prototype.refresh = function refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  };

  var _Sparkline = Sparkline;
  Sparkline = _aureliaFramework.inject(Element)(Sparkline) || Sparkline;
  Sparkline = generateBindables('kendoSparkline')(Sparkline) || Sparkline;
  Sparkline = _aureliaFramework.customElement('k-sparkline')(Sparkline) || Sparkline;
  return Sparkline;
})(WidgetBase);

exports.Sparkline = Sparkline;

var Stock = (function (_WidgetBase5) {
  var _instanceInitializers5 = {};

  _inherits(Stock, _WidgetBase5);

  _createDecoratedClass(Stock, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers5);

  function Stock(element) {
    _classCallCheck(this, _Stock);

    _WidgetBase5.call(this, 'kendoStockChart', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers5);
  }

  Stock.prototype.attached = function attached() {
    this._initialize();
  };

  Stock.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  Stock.prototype.exportImage = function exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  };

  Stock.prototype.exportPDF = function exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  };

  Stock.prototype.exportSVG = function exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  };

  Stock.prototype.redraw = function redraw() {
    if (this.widget) {
      return this.widget.redraw();
    }
  };

  Stock.prototype.refresh = function refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  };

  Stock.prototype.resize = function resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  };

  Stock.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  };

  Stock.prototype.svg = function svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  };

  Stock.prototype.imageDataURL = function imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  };

  var _Stock = Stock;
  Stock = _aureliaFramework.inject(Element)(Stock) || Stock;
  Stock = generateBindables('kendoStockChart')(Stock) || Stock;
  Stock = _aureliaFramework.customElement('k-stock')(Stock) || Stock;
  return Stock;
})(WidgetBase);

exports.Stock = Stock;

var TreeMap = (function (_WidgetBase6) {
  var _instanceInitializers6 = {};

  _inherits(TreeMap, _WidgetBase6);

  _createDecoratedClass(TreeMap, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers6);

  function TreeMap(element) {
    _classCallCheck(this, _TreeMap);

    _WidgetBase6.call(this, 'kendoTreeMap', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers6);
  }

  TreeMap.prototype.attached = function attached() {
    this._initialize();
  };

  TreeMap.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  TreeMap.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  };

  TreeMap.prototype.setOptions = function setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  };

  TreeMap.prototype.findByUid = function findByUid(text) {
    if (this.widget) {
      return this.widget.findByUid(text);
    }
  };

  TreeMap.prototype.dataItem = function dataItem(tile) {
    if (this.widget) {
      return this.widget.dataItem(tile);
    }
  };

  TreeMap.prototype.resize = function resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  };

  var _TreeMap = TreeMap;
  TreeMap = _aureliaFramework.inject(Element)(TreeMap) || TreeMap;
  TreeMap = generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
  TreeMap = _aureliaFramework.customElement('k-treemap')(TreeMap) || TreeMap;
  return TreeMap;
})(WidgetBase);

exports.TreeMap = TreeMap;

var ColorPicker = (function (_WidgetBase7) {
  var _instanceInitializers7 = {};

  _inherits(ColorPicker, _WidgetBase7);

  _createDecoratedClass(ColorPicker, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers7);

  function ColorPicker(element) {
    _classCallCheck(this, _ColorPicker);

    _WidgetBase7.call(this, 'kendoColorPicker', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers7);
  }

  ColorPicker.prototype.bind = function bind(ctx) {
    _WidgetBase7.prototype.bind.call(this, ctx);

    this._initialize();
  };

  var _ColorPicker = ColorPicker;
  ColorPicker = _aureliaFramework.inject(Element)(ColorPicker) || ColorPicker;
  ColorPicker = generateBindables('kendoColorPicker')(ColorPicker) || ColorPicker;
  ColorPicker = _aureliaFramework.customAttribute('k-color-picker')(ColorPicker) || ColorPicker;
  return ColorPicker;
})(WidgetBase);

exports.ColorPicker = ColorPicker;
var constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-'
};

exports.constants = constants;

function generateBindables(controlName) {
  return function (target, key, descriptor) {
    var options = jQuery.fn[controlName].widget.prototype.options;

    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var optionKeys = Object.keys(options);
    optionKeys.push('dataSource');

    for (var _iterator = optionKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var option = _ref;

      var nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

      var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireKendoEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return fireEvent(element, '' + constants.eventPrefix + name, data);
}

function pruneOptions(options) {
  var returnOptions = {};

  for (var prop in options) {
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

var TemplateCompiler = (function () {
  function TemplateCompiler(templatingEngine) {
    _classCallCheck(this, _TemplateCompiler);

    this.isInitialized = false;

    this.templatingEngine = templatingEngine;
  }

  TemplateCompiler.prototype.initialize = function initialize() {
    if (this.isInitialized) return;

    var _this = this;
    kendo.ui.Widget.prototype.angular = function (_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };

    this.isInitialized = true;
  };

  TemplateCompiler.prototype.handleTemplateEvents = function handleTemplateEvents(widget, _event, _args) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    var $parent = widget._$parent || widget.options._$parent;

    if (!$parent) return;

    var args = _args();
    var elements = args.elements;
    var data = args.data;

    switch (_event) {
      case 'compile':
        this.compile($parent, elements, data);
        break;

      case 'cleanup':
        this.cleanup(elements);
        break;

      default:
        break;
    }
  };

  TemplateCompiler.prototype.compile = function compile($parent, elements, data) {
    var _this3 = this;

    var _loop = function (i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this3.enhanceView($parent, elem, ctx);
        });
      } else {
        _this3.enhanceView($parent, element, ctx);
      }
    };

    for (var i = 0; i < elements.length; i++) {
      _loop(i);
    }
  };

  TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx) {
    var view = this.templatingEngine.enhance(element);

    view.bind(ctx, $parent);
    view.attached();
    $(element).data('viewInstance', view);
  };

  TemplateCompiler.prototype.cleanup = function cleanup(elements) {
    if (!elements) return;

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      this.cleanupView(element);
    }
  };

  TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
    var view = $(element).data('viewInstance');
    if (!view) return;

    view.detached();
    view.unbind();
  };

  var _TemplateCompiler = TemplateCompiler;
  TemplateCompiler = _aureliaFramework.inject(_aureliaTemplating.TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
  return TemplateCompiler;
})();

exports.TemplateCompiler = TemplateCompiler;

var capitalMatcher = /([A-Z])/g;

function addHyphenAndLower(char) {
  return '-' + char.toLowerCase();
}

function _hyphenate(name) {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

function _unhyphenate(name) {
  return name.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

function getBindablePropertyName(propertyName) {
  var name = '' + constants.bindablePrefix + propertyName;

  return _unhyphenate(name);
}

function getEventsFromAttributes(element) {
  var attributes = Array.prototype.slice.call(element.attributes);
  var events = [];

  for (var _iterator2 = attributes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var attribute = _ref2;

    var attributeName = attribute.name;
    if (!attributeName.startsWith(constants.eventPrefix)) continue;

    var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

    var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

    var camelCased = _unhyphenate(withoutTriggerDelegate);

    events.push(camelCased);
  }

  return events;
}

var WidgetBase = (function () {
  function WidgetBase(controlName, element) {
    _classCallCheck(this, WidgetBase);

    var container = _aureliaDependencyInjection.Container.instance;
    this.taskQueue = container.get(_aureliaFramework.TaskQueue);
    this.templateCompiler = container.get(TemplateCompiler);
    this.templateCompiler.initialize();

    this.element = element;

    this.target = this.element;

    this.controlName = controlName;

    this.setDefaultBindableValues();
  }

  WidgetBase.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  WidgetBase.prototype._initialize = function _initialize() {
    if (!this.$parent) {
      throw new Error('$parent is not set. Did you call bind(ctx) on the widget base?');
    }

    var target = jQuery(this.target);

    var ctor = target[this.controlName];

    var options = this._getOptions(ctor);

    this._beforeInitialize(options);

    Object.assign(options, { _$parent: this.$parent });

    this.widget = ctor.call(target, options).data(this.controlName);

    this.widget._$parent = this.$parent;

    this._initialized();
  };

  WidgetBase.prototype._beforeInitialize = function _beforeInitialize(options) {};

  WidgetBase.prototype._initialized = function _initialized() {};

  WidgetBase.prototype.recreate = function recreate() {
    this._initialize();
  };

  WidgetBase.prototype._getOptions = function _getOptions(ctor) {
    var options = this.getOptionsFromBindables();
    var eventOptions = this.getEventOptions(ctor);

    return Object.assign({}, this.options, pruneOptions(options), eventOptions);
  };

  WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
    var props = jQuery.fn[this.controlName].widget.prototype.options;
    var options = {};

    for (var _iterator3 = Object.keys(props), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var prop = _ref3;

      options[prop] = this[getBindablePropertyName(prop)];
    }

    if (this.kDataSource) {
      options.dataSource = this.kDataSource;
    }

    return options;
  };

  WidgetBase.prototype.setDefaultBindableValues = function setDefaultBindableValues() {
    var props = jQuery.fn[this.controlName].widget.prototype.options;

    for (var _iterator4 = Object.keys(props), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var prop = _ref4;

      this[getBindablePropertyName(prop)] = props[prop];
    }
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(ctor) {
    var _this4 = this;

    var options = {};
    var allowedEvents = ctor.widget.prototype.events;

    var events = getEventsFromAttributes(this.element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this4.controlName + ' control');
      }

      options[event] = function (e) {
        _this4.taskQueue.queueMicroTask(function () {
          fireKendoEvent(_this4.target, _hyphenate(event), e);
        });
      };
    });

    return options;
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var DatePicker = (function (_WidgetBase8) {
  var _instanceInitializers8 = {};

  _inherits(DatePicker, _WidgetBase8);

  _createDecoratedClass(DatePicker, [{
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kDisableDates',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers8);

  function DatePicker(element) {
    _classCallCheck(this, _DatePicker);

    _WidgetBase8.call(this, 'kendoDatePicker', element);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers8);
  }

  DatePicker.prototype.bind = function bind(ctx) {
    _WidgetBase8.prototype.bind.call(this, ctx);

    this._initialize();
  };

  DatePicker.prototype._beforeInitialize = function _beforeInitialize(options) {
    return Object.assign({}, options, { disableDates: this.kDisableDates });
  };

  DatePicker.prototype._initialize = function _initialize() {
    _WidgetBase8.prototype._initialize.call(this);
  };

  DatePicker.prototype.close = function close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  };

  DatePicker.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  DatePicker.prototype.enable = function enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  DatePicker.prototype.readonly = function readonly(value) {
    if (this.widget) {
      this.widget.readonly(value);
    }
  };

  DatePicker.prototype.max = function max(value) {
    if (this.widget) {
      return this.widget.max(value);
    }
  };

  DatePicker.prototype.min = function min(value) {
    if (this.widget) {
      return this.widget.min(value);
    }
  };

  DatePicker.prototype.open = function open() {
    if (this.widget) {
      this.widget.open();
    }
  };

  DatePicker.prototype.setOptions = function setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  };

  DatePicker.prototype.value = function value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
      } else {
        return this.widget.value();
      }
    }
  };

  DatePicker.prototype.kValueChanged = function kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  };

  var _DatePicker = DatePicker;
  DatePicker = generateBindables('kendoDatePicker')(DatePicker) || DatePicker;
  DatePicker = _aureliaFramework.inject(Element)(DatePicker) || DatePicker;
  DatePicker = _aureliaFramework.customAttribute('k-datepicker')(DatePicker) || DatePicker;
  return DatePicker;
})(WidgetBase);

exports.DatePicker = DatePicker;

var DropDownList = (function (_WidgetBase9) {
  var _instanceInitializers9 = {};

  _inherits(DropDownList, _WidgetBase9);

  _createDecoratedClass(DropDownList, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers9);

  function DropDownList(element) {
    _classCallCheck(this, _DropDownList);

    _WidgetBase9.call(this, 'kendoDropDownList', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers9);
  }

  DropDownList.prototype.bind = function bind(ctx) {
    _WidgetBase9.prototype.bind.call(this, ctx);

    this._initialize();
  };

  DropDownList.prototype._initialized = function _initialized() {
    var _this5 = this;

    this.widget.bind('change', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.widget.bind('select', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.widget.trigger('change');
  };

  DropDownList.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  DropDownList.prototype.kValueChanged = function kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  };

  DropDownList.prototype.value = function value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  };

  DropDownList.prototype.select = function select(index) {
    if (this.widget) {
      this.widget.select(index);

      this.widget.trigger('change');
    }
  };

  DropDownList.prototype.search = function search(value) {
    if (this.widget) {
      this.widget.search(value);

      this.widget.trigger('change');
    }
  };

  var _DropDownList = DropDownList;
  DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.inject(Element)(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.customAttribute('k-drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})(WidgetBase);

exports.DropDownList = DropDownList;

var AuCol = (function () {
  var _instanceInitializers10 = {};

  _createDecoratedClass(AuCol, [{
    key: 'aggregates',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'attributes',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'columns',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'command',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editor',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'encoded',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'field',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'footerTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'format',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'groupable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupFooterTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupHeaderTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerAttributes',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hidden',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'lockable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'locked',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'menu',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'minScreenWidth',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'values',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'width',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'template',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers10);

  function AuCol(targetInstruction) {
    _classCallCheck(this, _AuCol);

    _defineDecoratedPropertyDescriptor(this, 'aggregates', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'attributes', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'editor', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'encoded', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'footerTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'groupFooterTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'groupHeaderTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'headerAttributes', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'menu', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'minScreenWidth', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'values', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers10);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _AuCol = AuCol;
  AuCol = _aureliaFramework.inject(_aureliaFramework.TargetInstruction)(AuCol) || AuCol;
  AuCol = _aureliaFramework.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(AuCol) || AuCol;
  AuCol = _aureliaFramework.noView(AuCol) || AuCol;
  return AuCol;
})();

exports.AuCol = AuCol;

var Grid = (function (_WidgetBase10) {
  var _instanceInitializers11 = {};

  _inherits(Grid, _WidgetBase10);

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaFramework.children('au-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers11);

  function Grid(element) {
    _classCallCheck(this, _Grid);

    _WidgetBase10.call(this, 'kendoGrid', element);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers11);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers11);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers11);
  }

  Grid.prototype.attached = function attached() {
    this._initialize();
  };

  Grid.prototype._initialize = function _initialize() {
    this.target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    _WidgetBase10.prototype._initialize.call(this);
  };

  Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  };

  Grid.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  Grid.prototype.addRow = function addRow() {
    if (this.widget) {
      this.widget.addRow();
    }
  };

  Grid.prototype.autoFitColumn = function autoFitColumn(value) {
    if (this.widget) {
      this.widget.autoFitColumn(value);
    }
  };

  Grid.prototype.cancelChanges = function cancelChanges() {
    if (this.widget) {
      this.widget.cancelChanges();
    }
  };

  Grid.prototype.cancelRow = function cancelRow() {
    if (this.widget) {
      this.widget.cancelRow();
    }
  };

  Grid.prototype.cellIndex = function cellIndex(cell) {
    if (this.widget) {
      return this.widget.cellIndex(cell);
    }
  };

  Grid.prototype.clearSelection = function clearSelection() {
    if (this.widget) {
      this.widget.clearSelection();
    }
  };

  Grid.prototype.closeCell = function closeCell() {
    if (this.widget) {
      this.widget.closeCell();
    }
  };

  Grid.prototype.collapseGroup = function collapseGroup(group) {
    if (this.widget) {
      this.widget.collapseGroup(group);
    }
  };

  Grid.prototype.collapseRow = function collapseRow(row) {
    if (this.widget) {
      this.widget.collapseRow(row);
    }
  };

  Grid.prototype.current = function current(cell) {
    if (this.widget) {
      return this.widget.current(cell);
    }
  };

  Grid.prototype.dataItem = function dataItem(row) {
    if (this.widget) {
      return this.widget.dataItem(row);
    }
  };

  Grid.prototype.destroy = function destroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  Grid.prototype.editCell = function editCell(cell) {
    if (this.widget) {
      this.widget.editCell(cell);
    }
  };

  Grid.prototype.editRow = function editRow(row) {
    if (this.widget) {
      this.widget.editRow(row);
    }
  };

  Grid.prototype.expandGroup = function expandGroup(row) {
    if (this.widget) {
      this.widget.expandGroup(row);
    }
  };

  Grid.prototype.expandRow = function expandRow(row) {
    if (this.widget) {
      this.widget.expandRow(row);
    }
  };

  Grid.prototype.getOptions = function getOptions() {
    if (this.widget) {
      return this.widget.getOptions();
    }
  };

  Grid.prototype.hideColumn = function hideColumn(column) {
    if (this.widget) {
      this.widget.hideColumn(column);
    }
  };

  Grid.prototype.lockColumn = function lockColumn(column) {
    if (this.widget) {
      this.widget.lockColumn(column);
    }
  };

  Grid.prototype.refresh = function refresh() {
    if (this.widget) {
      this.widget.refresh();
    }
  };

  Grid.prototype.removeRow = function removeRow(row) {
    if (this.widget) {
      this.widget.removeRow(row);
    }
  };

  Grid.prototype.reorderColumn = function reorderColumn(destIndex, column) {
    if (this.widget) {
      this.widget.reorderColumn(destIndex, column);
    }
  };

  Grid.prototype.saveAsExcel = function saveAsExcel() {
    if (this.widget) {
      this.widget.saveAsExcel();
    }
  };

  Grid.prototype.saveAsPDF = function saveAsPDF() {
    if (this.widget) {
      this.widget.saveAsPDF();
    }
  };

  Grid.prototype.saveChanges = function saveChanges() {
    if (this.widget) {
      this.widget.saveChanges();
    }
  };

  Grid.prototype.saveRow = function saveRow() {
    if (this.widget) {
      this.widget.saveRow();
    }
  };

  Grid.prototype.select = function select(rows) {
    if (this.widget) {
      return this.widget.select(rows);
    }
  };

  Grid.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      this.widget.setDataSource(dataSource);
    }
  };

  Grid.prototype.setOptions = function setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  };

  Grid.prototype.showColumn = function showColumn(column) {
    if (this.widget) {
      this.widget.showColumn(column);
    }
  };

  Grid.prototype.unlockColumn = function unlockColumn(column) {
    if (this.widget) {
      this.widget.unlockColumn(column);
    }
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element)(Grid) || Grid;
  Grid = generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaFramework.customElement('k-grid')(Grid) || Grid;
  return Grid;
})(WidgetBase);

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Menu = (function (_WidgetBase11) {
  var _instanceInitializers12 = {};

  _inherits(Menu, _WidgetBase11);

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers12);

  function Menu(element) {
    _classCallCheck(this, _Menu);

    _WidgetBase11.call(this, 'kendoMenu', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers12);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers12);
  }

  Menu.prototype.bind = function bind(ctx) {
    _WidgetBase11.prototype.bind.call(this, ctx);

    this._initialize();
  };

  Menu.prototype._initialize = function _initialize() {
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      this.target = $(this.element).find('ul').first();
    } else {
      this.target = $(this.element).appendChild('<ul></ul>');
    }

    _WidgetBase11.prototype._initialize.call(this);
  };

  var _Menu = Menu;
  Menu = _aureliaFramework.inject(Element)(Menu) || Menu;
  Menu = generateBindables('kendoMenu')(Menu) || Menu;
  Menu = _aureliaFramework.customElement('k-menu')(Menu) || Menu;
  return Menu;
})(WidgetBase);

exports.Menu = Menu;

var PDF = function PDF() {
  _classCallCheck(this, PDF);
};

exports.PDF = PDF;

var ProgressBar = (function (_WidgetBase12) {
  var _instanceInitializers13 = {};

  _inherits(ProgressBar, _WidgetBase12);

  _createDecoratedClass(ProgressBar, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers13);

  function ProgressBar(element) {
    _classCallCheck(this, _ProgressBar);

    _WidgetBase12.call(this, 'kendoProgressBar', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers13);
  }

  ProgressBar.prototype.bind = function bind(ctx) {
    _WidgetBase12.prototype.bind.call(this, ctx);

    this._initialize();
  };

  ProgressBar.prototype.kEnableChanged = function kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  ProgressBar.prototype.kValueChanged = function kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
    }
  };

  ProgressBar.prototype.value = function value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  };

  ProgressBar.prototype.enable = function enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  };

  var _ProgressBar = ProgressBar;
  ProgressBar = _aureliaFramework.inject(Element)(ProgressBar) || ProgressBar;
  ProgressBar = generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
  ProgressBar = _aureliaFramework.customAttribute('k-progress-bar')(ProgressBar) || ProgressBar;
  return ProgressBar;
})(WidgetBase);

exports.ProgressBar = ProgressBar;

var AuScheduler = function AuScheduler() {
  _classCallCheck(this, AuScheduler);
};

exports.AuScheduler = AuScheduler;

var Slider = (function (_WidgetBase13) {
  var _instanceInitializers14 = {};

  _inherits(Slider, _WidgetBase13);

  _createDecoratedClass(Slider, [{
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers14);

  function Slider(element) {
    _classCallCheck(this, _Slider);

    _WidgetBase13.call(this, 'kendoSlider', element);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers14);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers14);

    this.element = element;
    this.options = {};
  }

  Slider.prototype.attached = function attached() {
    this._initialize();
  };

  Slider.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (!options.value && this.kValue) {
      options.value = this.kValue;
    }
  };

  Slider.prototype.kEnableChanged = function kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  Slider.prototype.enable = function enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  Slider.prototype.value = function value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  };

  Slider.prototype.destroy = function destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  };

  Slider.prototype.resize = function resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  };

  Slider.prototype.kValueChanged = function kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  };

  var _Slider = Slider;
  Slider = _aureliaFramework.inject(Element)(Slider) || Slider;
  Slider = generateBindables('kendoSlider')(Slider) || Slider;
  Slider = _aureliaFramework.customAttribute('k-slider')(Slider) || Slider;
  return Slider;
})(WidgetBase);

exports.Slider = Slider;

var TabStrip = (function (_WidgetBase14) {
  var _instanceInitializers15 = {};

  _inherits(TabStrip, _WidgetBase14);

  _createDecoratedClass(TabStrip, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers15);

  function TabStrip(element) {
    _classCallCheck(this, _TabStrip);

    _WidgetBase14.call(this, 'kendoTabStrip', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers15);
  }

  TabStrip.prototype.bind = function bind(ctx) {
    _WidgetBase14.prototype.bind.call(this, ctx);

    this._initialize();
  };

  TabStrip.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaFramework.inject(Element)(TabStrip) || TabStrip;
  TabStrip = generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
  TabStrip = _aureliaFramework.customAttribute('k-tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})(WidgetBase);

exports.TabStrip = TabStrip;

var AuToolbar = function AuToolbar() {
  _classCallCheck(this, AuToolbar);
};

exports.AuToolbar = AuToolbar;

var TreeView = (function (_WidgetBase15) {
  var _instanceInitializers16 = {};

  _inherits(TreeView, _WidgetBase15);

  _createDecoratedClass(TreeView, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers16);

  function TreeView(element) {
    _classCallCheck(this, _TreeView);

    _WidgetBase15.call(this, 'kendoTreeView', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers16);

    this.kDataSource = undefined;
  }

  TreeView.prototype.bind = function bind(ctx) {
    _WidgetBase15.prototype.bind.call(this, ctx);

    this._initialize();
  };

  TreeView.prototype.append = function append(nodeData, parentNode, success) {
    if (this.widget) {
      return this.widget.append(nodeData, parentNode, success);
    }
  };

  TreeView.prototype.collapse = function collapse(nodes) {
    if (this.widget) {
      this.widget.collapse(nodes);
    }
  };

  TreeView.prototype.dataItem = function dataItem(node) {
    if (this.widget) {
      return this.widget.dataItem(node);
    }
  };

  TreeView.prototype.destroy = function destroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  TreeView.prototype.detach = function detach(node) {
    if (this.widget) {
      return this.widget.detach(node);
    }
  };

  TreeView.prototype.enable = function enable(nodes, _enable2) {
    if (this.widget) {
      return this.widget.enable(nodes, _enable2 === undefined ? true : _enable2);
    }
  };

  TreeView.prototype.expand = function expand(nodes) {
    if (this.widget) {
      this.widget.expand(nodes);
    }
  };

  TreeView.prototype.expandPath = function expandPath(path, complete) {
    if (this.widget) {
      this.widget.expandPath(path, complete);
    }
  };

  TreeView.prototype.expandTo = function expandTo(targetNode) {
    if (this.widget) {
      this.widget.expandTo(targetNode);
    }
  };

  TreeView.prototype.findByText = function findByText(text) {
    if (this.widget) {
      return this.widget.findByText(text);
    }
  };

  TreeView.prototype.findByUid = function findByUid(text) {
    if (this.widget) {
      return this.widget.findByUid(text);
    }
  };

  TreeView.prototype.insertAfter = function insertAfter(nodeData, referenceNode) {
    if (this.widget) {
      this.widget.insertAfter(nodeData, referenceNode);
    }
  };

  TreeView.prototype.insertBefore = function insertBefore(nodeData, referenceNode) {
    if (this.widget) {
      this.widget.insertBefore(nodeData, referenceNode);
    }
  };

  TreeView.prototype.parent = function parent(node) {
    if (this.widget) {
      return this.widget.parent(node);
    }
  };

  TreeView.prototype.remove = function remove(node) {
    if (this.widget) {
      this.widget.remove(node);
    }
  };

  TreeView.prototype.select = function select(node) {
    if (this.widget) {
      if (node === undefined) {
        return this.widget.select();
      }
      return this.widget.select(node);
    }
  };

  TreeView.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      this.widget.setDataSource(dataSource);
    }
  };

  TreeView.prototype.text = function text(node, newText) {
    if (this.widget) {
      return this.widget.text(node, newText);
    }
  };

  TreeView.prototype.toggle = function toggle(node) {
    if (this.widget) {
      this.widget.toggle(node);
    }
  };

  TreeView.prototype.updateIndeterminate = function updateIndeterminate(node) {
    if (this.widget) {
      this.widget.updateIndeterminate(node);
    }
  };

  var _TreeView = TreeView;
  TreeView = generateBindables('kendoTreeView')(TreeView) || TreeView;
  TreeView = _aureliaFramework.inject(Element)(TreeView) || TreeView;
  TreeView = _aureliaFramework.customAttribute('k-treeview')(TreeView) || TreeView;
  return TreeView;
})(WidgetBase);

exports.TreeView = TreeView;