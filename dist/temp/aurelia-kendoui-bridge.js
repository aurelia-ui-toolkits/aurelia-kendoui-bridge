'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.addHyphenAndLower = addHyphenAndLower;
exports._hyphenate = _hyphenate;
exports._unhyphenate = _unhyphenate;
exports.getBindablePropertyName = getBindablePropertyName;
exports.getKendoPropertyName = getKendoPropertyName;
exports.getEventsFromAttributes = getEventsFromAttributes;
exports.pruneOptions = pruneOptions;
exports.hasValue = hasValue;
exports.useTemplates = _useTemplates;
exports.fireEvent = fireEvent;
exports.fireKendoEvent = fireKendoEvent;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('jquery');

require('kendo.autocomplete.min');

require('kendo.virtuallist.min');

require('kendo.button.min');

require('kendo.calendar.min');

require('kendo.dataviz.chart.min');

require('kendo.dataviz.chart.polar.min');

require('kendo.dataviz.chart.funnel.min');

require('kendo.dataviz.sparkline.min');

require('kendo.dataviz.stock.min');

require('kendo.dataviz.treemap.min');

require('kendo.colorpicker.min');

require('kendo.dropdownlist.min');

require('kendo.datepicker.min');

require('kendo.datetimepicker.min');

require('kendo.editor.min');

require('kendo.data.signalr.min');

require('kendo.filtercell.min');

require('kendo.grid.min');

require('kendo.listview.min');

require('kendo.dataviz.map.min');

require('kendo.maskedtextbox.min');

require('kendo.menu.min');

require('kendo.numerictextbox.min');

require('kendo.panelbar.min');

require('kendo.pdf.min');

require('kendo.excel.min');

require('kendo.progressbar.min');

require('kendo.slider.min');

require('kendo.scheduler.min');

require('kendo.scheduler.agendaview.min');

require('kendo.scheduler.dayview.min');

require('kendo.scheduler.monthview.min');

require('kendo.scheduler.recurrence.min');

require('kendo.scheduler.timelineview.min');

require('kendo.tabstrip.min');

require('kendo.timepicker.min');

require('kendo.treelist.min');

require('kendo.treeview.min');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

var KendoConfigBuilder = (function () {
  function KendoConfigBuilder() {
    _classCallCheck(this, KendoConfigBuilder);

    this.resources = [];
    this.useGlobalResources = true;
  }

  KendoConfigBuilder.prototype.core = function core() {
    this.kendoAutoComplete().kendoButton().kendoCalendar().kendoColorPicker().kendoColorPalette().kendoCombobox().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoFlatColorPicker().kendoListView().kendoMap().kendoMaskedTextBox().kendoMenu().kendoNumericTextBox().kendoPanelBar().kendoProgressBar().kendoRangeSlider().kendoSlider().kendoTabStrip().kendoTemplateSupport().kendoTimePicker().useValueConverters();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoChart().kendoEditor().kendoGrid().kendoScheduler().kendoTreeList().kendoTreeView();
    return this;
  };

  KendoConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  KendoConfigBuilder.prototype.useValueConverters = function useValueConverters() {
    this.resources.push('valueconverters/valueconverters');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTemplateSupport = function kendoTemplateSupport() {
    this.resources.push('common/k-template');
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

  KendoConfigBuilder.prototype.kendoCalendar = function kendoCalendar() {
    this.resources.push('calendar/calendar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  };

  KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
    this.resources.push('combobox/combobox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
    this.resources.push('colorpicker/colorpicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoColorPalette = function kendoColorPalette() {
    this.resources.push('colorpalette/colorpalette');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
    this.resources.push('datepicker/datepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDateTimePicker = function kendoDateTimePicker() {
    this.resources.push('datetimepicker/datetimepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  };

  KendoConfigBuilder.prototype.kendoEditor = function kendoEditor() {
    this.resources.push('editor/editor');
    return this;
  };

  KendoConfigBuilder.prototype.kendoFlatColorPicker = function kendoFlatColorPicker() {
    this.resources.push('flatcolorpicker/flatcolorpicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
    this.resources.push('grid/grid');
    this.resources.push('grid/k-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoListView = function kendoListView() {
    this.resources.push('listview/listview');
    this.resources.push('listview/k-list-template');
    this.resources.push('listview/k-list-edit-template');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMap = function kendoMap() {
    this.resources.push('map/map');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
    this.resources.push('menu/menu');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMaskedTextBox = function kendoMaskedTextBox() {
    this.resources.push('maskedtextbox/maskedtextbox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoNumericTextBox = function kendoNumericTextBox() {
    this.resources.push('numerictextbox/numerictextbox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoPanelBar = function kendoPanelBar() {
    this.resources.push('panelbar/panelbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
    this.resources.push('progressbar/progressbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
    this.resources.push('slider/slider');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
    this.resources.push('tabstrip/tabstrip');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTreeList = function kendoTreeList() {
    this.resources.push('treelist/treelist');
    this.resources.push('treelist/k-tree-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
    this.resources.push('toolbar/toolbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
    this.resources.push('treeview/treeview');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTimePicker = function kendoTimePicker() {
    this.resources.push('timepicker/timepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoRangeSlider = function kendoRangeSlider() {
    this.resources.push('rangeslider/rangeslider');
    return this;
  };

  return KendoConfigBuilder;
})();

exports.KendoConfigBuilder = KendoConfigBuilder;

var logger = LogManager.getLogger('aurelia-kendoui-bridge');

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

var AutoComplete = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(AutoComplete, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function AutoComplete(element, widgetBase) {
    _classCallCheck(this, _AutoComplete);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useValueBinding();
  }

  AutoComplete.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  AutoComplete.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  AutoComplete.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  AutoComplete.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _AutoComplete = AutoComplete;
  AutoComplete = _aureliaDependencyInjection.inject(Element, WidgetBase)(AutoComplete) || AutoComplete;
  AutoComplete = generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaTemplating.customAttribute(constants.attributePrefix + 'autocomplete')(AutoComplete) || AutoComplete;
  return AutoComplete;
})();

exports.AutoComplete = AutoComplete;

var Button = (function () {
  var _instanceInitializers2 = {};

  _createDecoratedClass(Button, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers2);

  function Button(element, widgetBase) {
    _classCallCheck(this, _Button);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers2);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoButton').linkViewModel(this);
  }

  Button.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  Button.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Button.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Button = Button;
  Button = _aureliaDependencyInjection.inject(Element, WidgetBase)(Button) || Button;
  Button = generateBindables('kendoButton')(Button) || Button;
  Button = _aureliaTemplating.customAttribute(constants.attributePrefix + 'button')(Button) || Button;
  return Button;
})();

exports.Button = Button;

var Calendar = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(Calendar, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers3);

  function Calendar(element, widgetBase, viewResources) {
    _classCallCheck(this, _Calendar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers3);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoCalendar').linkViewModel(this).useValueBinding();
  }

  Calendar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Calendar.prototype.attached = function attached() {
    this.recreate();
  };

  Calendar.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Calendar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Calendar.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Calendar = Calendar;
  Calendar = _aureliaDependencyInjection.inject(Element, WidgetBase)(Calendar) || Calendar;
  Calendar = generateBindables('kendoCalendar')(Calendar) || Calendar;
  Calendar = _aureliaTemplating.customElement(constants.elementPrefix + 'calendar')(Calendar) || Calendar;
  return Calendar;
})();

exports.Calendar = Calendar;

var Chart = (function () {
  var _instanceInitializers4 = {};

  _createDecoratedClass(Chart, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers4);

  function Chart(element, widgetBase) {
    _classCallCheck(this, _Chart);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers4);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this);
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
  Chart = _aureliaDependencyInjection.inject(Element, WidgetBase)(Chart) || Chart;
  Chart = generateBindables('kendoChart')(Chart) || Chart;
  Chart = _aureliaTemplating.customElement(constants.elementPrefix + 'chart')(Chart) || Chart;
  return Chart;
})();

exports.Chart = Chart;

var Sparkline = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(Sparkline, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers5);

  function Sparkline(element, widgetBase) {
    _classCallCheck(this, _Sparkline);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers5);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSparkline').linkViewModel(this);
  }

  Sparkline.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Sparkline.prototype.attached = function attached() {
    this.recreate();
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
  Sparkline = _aureliaDependencyInjection.inject(Element, WidgetBase)(Sparkline) || Sparkline;
  Sparkline = generateBindables('kendoSparkline')(Sparkline) || Sparkline;
  Sparkline = _aureliaTemplating.customElement(constants.elementPrefix + 'sparkline')(Sparkline) || Sparkline;
  return Sparkline;
})();

exports.Sparkline = Sparkline;

var Stock = (function () {
  var _instanceInitializers6 = {};

  _createDecoratedClass(Stock, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers6);

  function Stock(element, widgetBase) {
    _classCallCheck(this, _Stock);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers6);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this);
  }

  Stock.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Stock.prototype.attached = function attached() {
    this.recreate();
  };

  Stock.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Stock.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Stock = Stock;
  Stock = _aureliaDependencyInjection.inject(Element, WidgetBase)(Stock) || Stock;
  Stock = generateBindables('kendoStockChart')(Stock) || Stock;
  Stock = _aureliaTemplating.customElement(constants.elementPrefix + 'stock')(Stock) || Stock;
  return Stock;
})();

exports.Stock = Stock;

var TreeMap = (function () {
  var _instanceInitializers7 = {};

  _createDecoratedClass(TreeMap, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers7);

  function TreeMap(element, widgetBase) {
    _classCallCheck(this, _TreeMap);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers7);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
  }

  TreeMap.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeMap.prototype.attached = function attached() {
    this.recreate();
  };

  TreeMap.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TreeMap.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeMap = TreeMap;
  TreeMap = _aureliaDependencyInjection.inject(Element, WidgetBase)(TreeMap) || TreeMap;
  TreeMap = generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
  TreeMap = _aureliaTemplating.customElement(constants.elementPrefix + 'treemap')(TreeMap) || TreeMap;
  return TreeMap;
})();

exports.TreeMap = TreeMap;

var ColorPicker = (function () {
  var _instanceInitializers8 = {};

  _createDecoratedClass(ColorPicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers8);

  function ColorPicker(element, widgetBase) {
    _classCallCheck(this, _ColorPicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers8);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPicker').linkViewModel(this);
  }

  ColorPicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  ColorPicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ColorPicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ColorPicker = ColorPicker;
  ColorPicker = _aureliaDependencyInjection.inject(Element, WidgetBase)(ColorPicker) || ColorPicker;
  ColorPicker = generateBindables('kendoColorPicker')(ColorPicker) || ColorPicker;
  ColorPicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'color-picker')(ColorPicker) || ColorPicker;
  return ColorPicker;
})();

exports.ColorPicker = ColorPicker;

var ColorPalette = (function () {
  var _instanceInitializers9 = {};

  _createDecoratedClass(ColorPalette, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers9);

  function ColorPalette(element, widgetBase) {
    _classCallCheck(this, _ColorPalette);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers9);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this);
  }

  ColorPalette.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  ColorPalette.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ColorPalette.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ColorPalette = ColorPalette;
  ColorPalette = _aureliaDependencyInjection.inject(Element, WidgetBase)(ColorPalette) || ColorPalette;
  ColorPalette = generateBindables('kendoColorPalette')(ColorPalette) || ColorPalette;
  ColorPalette = _aureliaTemplating.customElement(constants.attributePrefix + 'color-palette')(ColorPalette) || ColorPalette;
  return ColorPalette;
})();

exports.ColorPalette = ColorPalette;

var ComboBox = (function () {
  var _instanceInitializers10 = {};

  _createDecoratedClass(ComboBox, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers10);

  function ComboBox(element, widgetBase) {
    _classCallCheck(this, _ComboBox);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers10);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoComboBox').linkViewModel(this).useValueBinding();
  }

  ComboBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoComboBox', this.templates);
  };

  ComboBox.prototype.attached = function attached() {
    this.recreate();
  };

  ComboBox.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  };

  ComboBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  ComboBox.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ComboBox = ComboBox;
  ComboBox = _aureliaDependencyInjection.inject(Element, WidgetBase)(ComboBox) || ComboBox;
  ComboBox = generateBindables('kendoComboBox')(ComboBox) || ComboBox;
  ComboBox = _aureliaTemplating.customElement(constants.elementPrefix + 'combobox')(ComboBox) || ComboBox;
  return ComboBox;
})();

exports.ComboBox = ComboBox;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

var bindables = { "kendoAutoComplete": ["animation", "dataSource", "dataTextField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "minLength", "name", "placeholder", "popup", "separator", "suggest", "template", "valuePrimitive", "virtual"], "kendoBarcode": ["background", "border", "checksum", "color", "height", "name", "padding", "renderAs", "text", "type", "value", "width"], "kendoButton": ["enable", "icon", "imageUrl", "name", "spriteCssClass"], "kendoCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "start", "value"], "kendoChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "legend", "name", "panes", "pannable", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis", "xAxis", "yAxis", "zoomable"], "kendoColorPalette": ["columns", "name", "palette", "tileSize", "value"], "kendoColorPicker": ["buttons", "columns", "messages", "name", "opacity", "palette", "preview", "tileSize", "toolIcon", "value"], "kendoComboBox": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "placeholder", "popup", "suggest", "template", "text", "value", "valuePrimitive", "virtual"], "kendoContextMenu": ["alignToAnchor", "animation", "closeOnClick", "dataSource", "direction", "filter", "hoverDelay", "name", "orientation", "popupCollision", "showOn", "target"], "kendoDatePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "parseFormats", "start", "value"], "kendoDateTimePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "interval", "max", "min", "month", "name", "parseFormats", "start", "timeFormat", "value"], "kendoDiagram": ["autoBind", "connectionDefaults", "connections", "connectionsDataSource", "dataSource", "editable", "layout", "name", "pannable", "pdf", "selectable", "shapeDefaults", "shapes", "template", "zoom", "zoomMax", "zoomMin", "zoomRate"], "kendoDraggable": ["axis", "container", "cursorOffset", "distance", "filter", "group", "hint", "ignore"], "kendoDropDownList": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "ignoreCase", "index", "minLength", "name", "optionLabel", "optionLabelTemplate", "popup", "template", "text", "value", "valuePrimitive", "valueTemplate", "virtual"], "kendoDropTarget": ["group"], "kendoDropTargetArea": ["filter", "group"], "kendoEditor": ["domain", "encoded", "fileBrowser", "imageBrowser", "messages", "name", "pdf", "resizable", "serialization", "stylesheets", "tools"], "kendoFlatColorPicker": ["autoupdate", "buttons", "messages", "name", "opacity", "preview", "value"], "kendoGantt": ["assignments", "autoBind", "columnResizeHandleWidth", "columns", "currentTimeMarker", "dataSource", "dependencies", "editable", "height", "hourSpan", "listWidth", "messages", "name", "navigatable", "pdf", "resizable", "resources", "rowHeight", "selectable", "showWorkDays", "showWorkHours", "snap", "taskTemplate", "toolbar", "tooltip", "views", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoGrid": ["allowCopy", "altRowTemplate", "autoBind", "columnMenu", "columnResizeHandleWidth", "columns", "dataSource", "detailTemplate", "editable", "excel", "filterable", "groupable", "height", "messages", "mobile", "name", "navigatable", "noRecords", "pageable", "pdf", "reorderable", "resizable", "rowTemplate", "scrollable", "selectable", "sortable", "toolbar"], "kendoLinearGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoListView": ["altTemplate", "autoBind", "dataSource", "editTemplate", "name", "navigatable", "selectable", "template"], "kendoMap": ["center", "controls", "layerDefaults", "layers", "markerDefaults", "markers", "maxZoom", "minSize", "minZoom", "name", "pannable", "wraparound", "zoom", "zoomable"], "kendoMaskedTextBox": ["clearPromptChar", "culture", "mask", "name", "promptChar", "rules", "unmaskOnPost", "value"], "kendoMenu": ["animation", "closeOnClick", "dataSource", "direction", "hoverDelay", "name", "openOnClick", "orientation", "popupCollision"], "kendoMobileActionSheet": ["cancel", "name", "popup", "type"], "kendoMobileBackButton": ["name"], "kendoMobileButton": ["badge", "clickOn", "enable", "icon", "name"], "kendoMobileButtonGroup": ["enable", "index", "name", "selectOn"], "kendoMobileCollapsible": ["animation", "collapsed", "expandIcon", "iconPosition", "inset", "name"], "kendoMobileDetailButton": ["name"], "kendoMobileDrawer": ["container", "name", "position", "swipeToOpen", "swipeToOpenViews", "title", "views"], "kendoMobileLayout": ["id", "name", "platform"], "kendoMobileListView": ["appendOnRefresh", "autoBind", "dataSource", "endlessScroll", "filterable", "fixedHeaders", "headerTemplate", "loadMore", "messages", "name", "pullParameters", "pullToRefresh", "style", "template", "type", "virtualViewSize"], "kendoMobileLoader": ["name"], "kendoMobileModalView": ["height", "modal", "name", "width"], "kendoMobileNavBar": ["name"], "kendoMobilePane": ["collapsible", "initial", "layout", "loading", "name", "portraitWidth", "transition"], "kendoMobilePopOver": ["name", "pane", "popup"], "kendoMobileScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "itemsPerPage", "name", "page", "pageSize", "template", "velocityThreshold"], "kendoMobileScroller": ["elastic", "messages", "name", "pullOffset", "pullToRefresh", "useNative", "visibleScrollHints", "zoom"], "kendoMobileSplitView": ["name", "style"], "kendoMobileSwitch": ["checked", "enable", "name", "offLabel", "onLabel"], "kendoMobileTabStrip": ["name", "selectedIndex"], "kendoMobileView": ["model", "name", "reload", "scroller", "stretch", "title", "useNativeScrolling", "zoom"], "kendoMultiSelect": ["animation", "autoBind", "autoClose", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "itemTemplate", "maxSelectedItems", "minLength", "name", "placeholder", "popup", "tagMode", "tagTemplate", "value", "valuePrimitive", "virtual"], "kendoNotification": ["allowHideAfter", "animation", "appendTo", "autoHideAfter", "button", "height", "hideOnClick", "name", "position", "stacking", "templates", "width"], "kendoNumericTextBox": ["culture", "decimals", "downArrowText", "format", "max", "min", "name", "placeholder", "spinners", "step", "upArrowText", "value"], "kendoPager": ["autoBind", "buttonCount", "dataSource", "info", "input", "linkTemplate", "messages", "name", "numeric", "pageSizes", "previousNext", "refresh", "selectTemplate"], "kendoPanelBar": ["animation", "contentUrls", "dataSource", "expandMode", "name"], "kendoPivotConfigurator": ["dataSource", "filterable", "height", "messages", "name", "sortable"], "kendoPivotGrid": ["autoBind", "columnHeaderTemplate", "columnWidth", "dataCellTemplate", "dataSource", "excel", "filterable", "height", "kpiStatusTemplate", "kpiTrendTemplate", "messages", "name", "pdf", "reorderable", "rowHeaderTemplate", "sortable"], "kendoPopup": ["anchor", "animation", "appendTo", "name", "origin", "position"], "kendoProgressBar": ["animation", "chunkCount", "enable", "max", "min", "name", "orientation", "reverse", "showStatus", "type", "value"], "kendoQRCode": ["background", "border", "color", "encoding", "errorCorrection", "name", "padding", "renderAs", "size", "value"], "kendoRadialGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoRangeSlider": ["largeStep", "max", "min", "name", "orientation", "selectionEnd", "selectionStart", "smallStep", "tickPlacement", "tooltip"], "kendoResponsivePanel": ["autoClose", "breakpoint", "name", "orientation", "toggleButton"], "kendoScheduler": ["allDayEventTemplate", "allDaySlot", "autoBind", "currentTimeMarker", "dataSource", "date", "dateHeaderTemplate", "editable", "endTime", "eventTemplate", "footer", "group", "groupHeaderTemplate", "height", "majorTick", "majorTimeHeaderTemplate", "max", "messages", "min", "minorTickCount", "minorTimeHeaderTemplate", "mobile", "name", "pdf", "resources", "selectable", "showWorkHours", "snap", "startTime", "timezone", "toolbar", "views", "width", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoSlider": ["decreaseButtonTitle", "increaseButtonTitle", "largeStep", "max", "min", "name", "orientation", "showButtons", "smallStep", "tickPlacement", "tooltip", "value"], "kendoSortable": ["autoScroll", "axis", "connectWith", "container", "cursor", "cursorOffset", "disabled", "filter", "handler", "hint", "holdToDrag", "ignore", "name", "placeholder"], "kendoSparkline": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "data", "dataSource", "name", "plotArea", "pointWidth", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "tooltip", "transitions", "type", "valueAxis"], "kendoSplitter": ["name", "orientation", "panes"], "kendoSpreadsheet": ["activeSheet", "columnWidth", "columns", "excel", "headerHeight", "headerWidth", "name", "pdf", "rowHeight", "rows", "sheets", "sheetsbar", "toolbar"], "kendoStockChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "dateField", "legend", "name", "navigator", "panes", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis"], "kendoTabStrip": ["animation", "collapsible", "contentUrls", "dataContentField", "dataContentUrlField", "dataImageUrlField", "dataSource", "dataSpriteCssClass", "dataTextField", "dataUrlField", "name", "navigatable", "scrollable", "tabPosition", "value"], "kendoTimePicker": ["animation", "culture", "dates", "format", "interval", "max", "min", "name", "parseFormats", "value"], "kendoToolBar": ["items", "name", "resizable"], "kendoTooltip": ["animation", "autoHide", "callout", "content", "filter", "height", "iframe", "name", "position", "showAfter", "showOn", "width"], "kendoTouch": ["doubleTapTimeout", "enableSwipe", "filter", "maxDuration", "maxYDelta", "minHold", "minXDelta", "multiTouch", "name", "surface"], "kendoTreeList": ["autoBind", "columnMenu", "columns", "dataSource", "editable", "excel", "filterable", "height", "messages", "name", "pdf", "reorderable", "resizable", "scrollable", "selectable", "sortable", "toolbar"], "kendoTreeMap": ["autoBind", "colorField", "colors", "dataSource", "name", "template", "textField", "theme", "type", "valueField"], "kendoTreeView": ["animation", "autoBind", "autoScroll", "checkboxes", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dragAndDrop", "loadOnDemand", "messages", "name", "template"], "kendoUpload": ["async", "enabled", "files", "localization", "multiple", "name", "showFileList", "template"], "kendoValidator": ["errorTemplate", "messages", "name", "rules", "validateOnBlur"], "kendoWindow": ["actions", "animation", "appendTo", "autoFocus", "content", "draggable", "height", "iframe", "maxHeight", "maxWidth", "minHeight", "minWidth", "modal", "name", "pinned", "position", "resizable", "scrollable", "title", "visible", "width"], "GridColumn": ["aggregates", "attributes", "columns", "command", "encoded", "field", "filterable", "footerTemplate", "format", "groupFooterTemplate", "groupHeaderTemplate", "groupable", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "values", "width", "editor"], "TreeListColumn": ["attributes", "command", "encoded", "expandable", "field", "filterable", "footerTemplate", "format", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "width", "editor"] };
exports.bindables = bindables;
var constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-',
  attributePrefix: 'k-',
  elementPrefix: 'k-'
};

exports.constants = constants;

var ControlProperties = (function () {
  function ControlProperties() {
    _classCallCheck(this, ControlProperties);

    this.cache = [];
    this.templateProperties = [];
  }

  ControlProperties.prototype.getProperties = function getProperties(controlName) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    var options1 = this.getWidgetProperties(controlName);

    var options2 = bindables[controlName];

    if (!options2) {
      throw new Error(controlName + ' not found in generated bindables.js');
    }

    var keys = options1.concat(options2.filter(function (item) {
      return options1.indexOf(item) < 0;
    }));

    this.cache[controlName] = keys;

    return keys;
  };

  ControlProperties.prototype.getWidgetProperties = function getWidgetProperties(controlName) {
    if (jQuery.fn[controlName]) {
      return Object.keys(jQuery.fn[controlName].widget.prototype.options);
    }

    return [];
  };

  ControlProperties.prototype.getTemplateProperties = function getTemplateProperties(controlName) {
    var properties = this.getProperties(controlName);

    var templates = properties.filter(function (prop) {
      return prop.toLowerCase().indexOf('template') >= -1;
    });

    return templates;
  };

  return ControlProperties;
})();

exports.ControlProperties = ControlProperties;

function generateBindables(controlName) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var controlProperties = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(ControlProperties);
    var optionKeys = controlProperties.getProperties(controlName);

    optionKeys.push('widget');

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

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
      }

      var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

var Template = (function () {
  var _instanceInitializers11 = {};

  _createDecoratedClass(Template, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'for',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return 'template';
    },
    enumerable: true
  }], null, _instanceInitializers11);

  function Template(targetInstruction) {
    _classCallCheck(this, _Template);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers11);

    _defineDecoratedPropertyDescriptor(this, 'for', _instanceInitializers11);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _Template = Template;
  Template = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(Template) || Template;
  Template = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }
    return true;
  })(Template) || Template;
  Template = _aureliaTemplating.noView()(Template) || Template;
  Template = _aureliaTemplating.customElement(constants.elementPrefix + 'template')(Template) || Template;
  return Template;
})();

exports.Template = Template;

var OptionsBuilder = (function () {
  function OptionsBuilder(controlProperties) {
    _classCallCheck(this, _OptionsBuilder);

    this.controlProperties = controlProperties;
  }

  OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
    var _this2 = this;

    var options = {};

    var _loop = function () {
      if (_isArray2) {
        if (_i2 >= _iterator2.length) return 'break';
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) return 'break';
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      var value = viewModel[getBindablePropertyName(prop)];

      if (hasValue(value)) {
        if (_this2.isTemplate(prop)) {
          options[prop] = function () {
            return value;
          };
        } else {
          options[prop] = value;
        }
      }
    };

    for (var _iterator2 = this.controlProperties.getProperties(className), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      var _ret = _loop();

      if (_ret === 'break') break;
    }

    return pruneOptions(options);
  };

  OptionsBuilder.prototype.isTemplate = function isTemplate(propertyName) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  };

  var _OptionsBuilder = OptionsBuilder;
  OptionsBuilder = _aureliaDependencyInjection.inject(ControlProperties)(OptionsBuilder) || OptionsBuilder;
  return OptionsBuilder;
})();

exports.OptionsBuilder = OptionsBuilder;

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

    var $parent = widget._$parent || (widget.options._$parent ? widget.options._$parent[0] : undefined);
    var viewResources = widget._$resources || (widget.options._$resources ? widget.options._$resources[0] : undefined);

    if (!$parent) return;

    var args = _args();
    var elements = args.elements;
    var data = args.data;

    switch (_event) {
      case 'compile':
        this.compile($parent, elements, data, viewResources);
        break;

      case 'cleanup':
        this.cleanup(elements);
        break;

      default:
        break;
    }
  };

  TemplateCompiler.prototype.compile = function compile($parent, elements, data, viewResources) {
    var _this3 = this;

    var _loop2 = function (i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        ctx = _data.dataItem || _data.aggregate || _data;
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this3.enhanceView($parent, elem, ctx, viewResources);
        });
      } else {
        _this3.enhanceView($parent, element, ctx, viewResources);
      }
    };

    for (var i = 0; i < elements.length; i++) {
      _loop2(i);
    }
  };

  TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx, viewResources) {
    var view = $(element).data('viewInstance');

    if (element.querySelectorAll('.au-target').length === 0) {
      if (viewResources) {
        view = this.templatingEngine.enhance({
          element: element,
          resources: viewResources
        });
      } else {
        view = this.templatingEngine.enhance(element);
      }

      $(element).data('viewInstance', view);
    }

    view.bind(ctx, $parent);
    view.attached();
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
  TemplateCompiler = _aureliaDependencyInjection.inject(_aureliaTemplating.TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
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

function getKendoPropertyName(propertyName) {
  var withoutPrefix = propertyName.substring(1);

  return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
}

function getEventsFromAttributes(element) {
  var attributes = Array.prototype.slice.call(element.attributes);
  var events = [];

  for (var _iterator3 = attributes, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var attribute = _ref3;

    var attributeName = attribute.name;
    if (!attributeName.startsWith(constants.eventPrefix)) continue;

    var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

    var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

    var camelCased = _unhyphenate(withoutTriggerDelegate);

    events.push(camelCased);
  }

  return events;
}

function pruneOptions(options) {
  var returnOptions = {};

  for (var prop in options) {
    if (hasValue(options[prop])) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

function hasValue(prop) {
  return typeof prop !== 'undefined' && prop !== null;
}

function _useTemplates(target, controlName, templates) {
  var controlProperties = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(ControlProperties);
  var templateProps = controlProperties.getTemplateProperties(controlName);

  templates.forEach(function (c) {
    if (templateProps.indexOf(c['for']) > -1) {
      target[getBindablePropertyName(c['for'])] = c.template;
    } else {
      throw new Error('Invalid template property name: "' + c['for'] + '", valid values are: ' + templateProps.join(', '));
    }
  });
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

var WidgetBase = (function () {
  function WidgetBase(taskQueue, templateCompiler, optionsBuilder) {
    _classCallCheck(this, _WidgetBase);

    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    templateCompiler.initialize();
  }

  WidgetBase.prototype.control = function control(controlName) {
    if (!controlName || !jQuery.fn[controlName]) {
      throw new Error('The name of control ' + controlName + ' is invalid or not set');
    }

    this.controlName = controlName;

    var ctor = jQuery.fn[this.controlName];
    this.kendoOptions = ctor.widget.prototype.options;
    this.kendoEvents = ctor.widget.prototype.events;

    return this;
  };

  WidgetBase.prototype.linkViewModel = function linkViewModel(viewModel) {
    if (!viewModel) {
      throw new Error('viewModel is not set');
    }

    this.viewModel = viewModel;

    return this;
  };

  WidgetBase.prototype.useViewResources = function useViewResources(resources) {
    if (!resources) {
      throw new Error('resources is not set');
    }

    this.viewResources = resources;

    return this;
  };

  WidgetBase.prototype.useValueBinding = function useValueBinding() {
    this.withValueBinding = true;

    return this;
  };

  WidgetBase.prototype.createWidget = function createWidget(options) {
    var _this4 = this;

    if (!options) {
      throw new Error('the createWidget() function needs to be called with an object');
    }

    if (!options.element) {
      throw new Error('element is not set');
    }

    if (!options.parentCtx) {
      throw new Error('parentCtx is not set');
    }

    var allOptions = this._getOptions(options.rootElement || options.element);

    if (options.beforeInitialize) {
      options.beforeInitialize(allOptions);
    }

    Object.assign(allOptions, {
      _$parent: [options.parentCtx],
      _$resources: [this.viewResources]
    });

    var widget = this._createWidget(options.element, allOptions, this.controlName);

    widget._$parent = options.parentCtx;
    widget._$resources = this.viewResources;

    if (this.withValueBinding) {
      widget.first('change', function (args) {
        return _this4._handleChange(args.sender);
      });

      this._handleChange(widget);
    }

    if (options.afterInitialize) {
      options.afterInitialize();
    }

    return widget;
  };

  WidgetBase.prototype._createWidget = function _createWidget(element, options, controlName) {
    return jQuery(element)[controlName](options).data(controlName);
  };

  WidgetBase.prototype._getOptions = function _getOptions(element) {
    var options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
    var eventOptions = this.getEventOptions(element);

    return pruneOptions(Object.assign({}, this.viewModel.options, options, eventOptions));
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
    var _this5 = this;

    var options = {};
    var allowedEvents = this.kendoEvents;
    var delayedExecution = ['change'];

    var events = getEventsFromAttributes(element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this5.controlName + ' control');
      }

      if (delayedExecution.includes(event)) {
        options[event] = function (e) {
          _this5.taskQueue.queueMicroTask(function () {
            return fireKendoEvent(element, _hyphenate(event), e);
          });
        };
      } else {
        options[event] = function (e) {
          return fireKendoEvent(element, _hyphenate(event), e);
        };
      }
    });

    return options;
  };

  WidgetBase.prototype._handleChange = function _handleChange(widget) {
    this.viewModel.kValue = widget.value();
  };

  WidgetBase.prototype.handlePropertyChanged = function handlePropertyChanged(widget, property, newValue, oldValue) {
    if (property === 'kValue' && this.withValueBinding) {
      widget.value(newValue);
    }
  };

  WidgetBase.prototype.useTemplates = function useTemplates(target, controlName, templates) {
    return _useTemplates(target, controlName, templates);
  };

  WidgetBase.prototype.destroy = function destroy(widget) {
    widget.destroy();
  };

  var _WidgetBase = WidgetBase;
  WidgetBase = _aureliaDependencyInjection.inject(_aureliaTaskQueue.TaskQueue, TemplateCompiler, OptionsBuilder)(WidgetBase) || WidgetBase;
  WidgetBase = _aureliaDependencyInjection.transient()(WidgetBase) || WidgetBase;
  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var DatePicker = (function () {
  var _instanceInitializers12 = {};

  _createDecoratedClass(DatePicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers12);

  function DatePicker(element, widgetBase) {
    _classCallCheck(this, _DatePicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers12);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDatePicker').linkViewModel(this).useValueBinding();
  }

  DatePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  DatePicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DatePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  DatePicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DatePicker = DatePicker;
  DatePicker = _aureliaDependencyInjection.inject(Element, WidgetBase)(DatePicker) || DatePicker;
  DatePicker = generateBindables('kendoDatePicker')(DatePicker) || DatePicker;
  DatePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'datepicker')(DatePicker) || DatePicker;
  return DatePicker;
})();

exports.DatePicker = DatePicker;

var DateTimePicker = (function () {
  var _instanceInitializers13 = {};

  _createDecoratedClass(DateTimePicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers13);

  function DateTimePicker(element, widgetBase) {
    _classCallCheck(this, _DateTimePicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers13);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDateTimePicker').linkViewModel(this).useValueBinding();
  }

  DateTimePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  DateTimePicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DateTimePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  DateTimePicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DateTimePicker = DateTimePicker;
  DateTimePicker = _aureliaDependencyInjection.inject(Element, WidgetBase)(DateTimePicker) || DateTimePicker;
  DateTimePicker = generateBindables('kendoDateTimePicker')(DateTimePicker) || DateTimePicker;
  DateTimePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'datetimepicker')(DateTimePicker) || DateTimePicker;
  return DateTimePicker;
})();

exports.DateTimePicker = DateTimePicker;

var DropDownList = (function () {
  var _instanceInitializers14 = {};

  _createDecoratedClass(DropDownList, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers14);

  function DropDownList(element, widgetBase) {
    _classCallCheck(this, _DropDownList);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers14);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers14);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).useValueBinding();
  }

  DropDownList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoDropDownList', this.templates);
  };

  DropDownList.prototype.attached = function attached() {
    this.recreate();
  };

  DropDownList.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  };

  DropDownList.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  DropDownList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropDownList = DropDownList;
  DropDownList = _aureliaDependencyInjection.inject(Element, WidgetBase)(DropDownList) || DropDownList;
  DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaTemplating.customElement(constants.elementPrefix + 'drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})();

exports.DropDownList = DropDownList;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

var Editor = (function () {
  var _instanceInitializers15 = {};

  _createDecoratedClass(Editor, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers15);

  function Editor(element, widgetBase) {
    _classCallCheck(this, _Editor);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers15);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoEditor').linkViewModel(this).useValueBinding();
  }

  Editor.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Editor.prototype.attached = function attached() {
    this.recreate();
  };

  Editor.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Editor.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Editor.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Editor = Editor;
  Editor = _aureliaDependencyInjection.inject(Element, WidgetBase)(Editor) || Editor;
  Editor = generateBindables('kendoEditor')(Editor) || Editor;
  Editor = _aureliaTemplating.customAttribute(constants.attributePrefix + 'rich-editor')(Editor) || Editor;
  return Editor;
})();

exports.Editor = Editor;

var FlatColorPicker = (function () {
  var _instanceInitializers16 = {};

  _createDecoratedClass(FlatColorPicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers16);

  function FlatColorPicker(element, widgetBase) {
    _classCallCheck(this, _FlatColorPicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers16);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
  }

  FlatColorPicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  FlatColorPicker.prototype.attached = function attached() {
    this.recreate();
  };

  FlatColorPicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  FlatColorPicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _FlatColorPicker = FlatColorPicker;
  FlatColorPicker = _aureliaDependencyInjection.inject(Element, WidgetBase)(FlatColorPicker) || FlatColorPicker;
  FlatColorPicker = generateBindables('kendoFlatColorPicker')(FlatColorPicker) || FlatColorPicker;
  FlatColorPicker = _aureliaTemplating.customElement(constants.attributePrefix + 'flat-color-picker')(FlatColorPicker) || FlatColorPicker;
  return FlatColorPicker;
})();

exports.FlatColorPicker = FlatColorPicker;

var Grid = (function () {
  var _instanceInitializers17 = {};

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers17);

  function Grid(element, widgetBase, viewResources, optionsBuilder) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers17);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers17);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).useViewResources(viewResources);
  }

  Grid.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Grid.prototype.attached = function attached() {
    this.recreate();
  };

  Grid.prototype.recreate = function recreate() {
    var _this6 = this;

    var element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this6._beforeInitialize(o);
      }
    });
  };

  Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this7 = this;

    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (column) {
        options.columns.push(_this7.optionsBuilder.getOptions(column, 'GridColumn'));
      });
    }
  };

  Grid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Grid = Grid;
  Grid = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources, OptionsBuilder)(Grid) || Grid;
  Grid = generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaTemplating.customElement(constants.elementPrefix + 'grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Col = (function () {
  var _instanceInitializers18 = {};

  function Col() {
    _classCallCheck(this, _Col);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers18);
  }

  Col.prototype.bind = function bind() {
    _useTemplates(this, 'GridColumn', this.templates);
  };

  _createDecoratedClass(Col, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers18);

  var _Col = Col;
  Col = generateBindables('GridColumn')(Col) || Col;
  Col = _aureliaTemplating.customElement(constants.elementPrefix + 'col')(Col) || Col;
  return Col;
})();

exports.Col = Col;

var ListEditTemplate = (function () {
  var _instanceInitializers19 = {};

  _createDecoratedClass(ListEditTemplate, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers19);

  function ListEditTemplate(targetInstruction) {
    _classCallCheck(this, _ListEditTemplate);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers19);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _ListEditTemplate = ListEditTemplate;
  ListEditTemplate = _aureliaTemplating.customElement(constants.elementPrefix + 'list-edit-template')(ListEditTemplate) || ListEditTemplate;
  ListEditTemplate = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(ListEditTemplate) || ListEditTemplate;
  ListEditTemplate = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(ListEditTemplate) || ListEditTemplate;
  ListEditTemplate = _aureliaTemplating.noView(ListEditTemplate) || ListEditTemplate;
  return ListEditTemplate;
})();

exports.ListEditTemplate = ListEditTemplate;

var ListTemplate = (function () {
  var _instanceInitializers20 = {};

  _createDecoratedClass(ListTemplate, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers20);

  function ListTemplate(targetInstruction) {
    _classCallCheck(this, _ListTemplate);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers20);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _ListTemplate = ListTemplate;
  ListTemplate = _aureliaTemplating.customElement(constants.elementPrefix + 'list-template')(ListTemplate) || ListTemplate;
  ListTemplate = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(ListTemplate) || ListTemplate;
  ListTemplate = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(ListTemplate) || ListTemplate;
  ListTemplate = _aureliaTemplating.noView(ListTemplate) || ListTemplate;
  return ListTemplate;
})();

exports.ListTemplate = ListTemplate;

var ListView = (function () {
  var _instanceInitializers21 = {};

  _createDecoratedClass(ListView, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'listTemplates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'list-template')],
    initializer: null,
    enumerable: true
  }, {
    key: 'listEditTemplates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'list-edit-template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers21);

  function ListView(element, widgetBase, viewResources) {
    _classCallCheck(this, _ListView);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers21);

    _defineDecoratedPropertyDescriptor(this, 'listTemplates', _instanceInitializers21);

    _defineDecoratedPropertyDescriptor(this, 'listEditTemplates', _instanceInitializers21);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
  }

  ListView.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ListView.prototype.attached = function attached() {
    this.recreate();
  };

  ListView.prototype.recreate = function recreate() {
    var _this8 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this8._beforeInitialize(o);
      }
    });
  };

  ListView.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this9 = this;

    var template = undefined;
    var editTemplate = undefined;

    if (this.kTemplate) {
      template = function () {
        return _this9.kTemplate;
      };
    } else if (this.listTemplates.length > 0) {
      (function () {
        var templ = _this9.listTemplates[0].template;
        template = function () {
          return templ;
        };
      })();
    }

    if (this.kEditTemplate) {
      editTemplate = function () {
        return _this9.kEditTemplate;
      };
    } else if (this.listEditTemplates.length > 0) {
      (function () {
        var templ = _this9.listEditTemplates[0].template;
        editTemplate = function () {
          return templ;
        };
      })();
    }

    return Object.assign(options, pruneOptions({
      editTemplate: editTemplate,
      template: template
    }));
  };

  ListView.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ListView = ListView;
  ListView = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(ListView) || ListView;
  ListView = generateBindables('kendoListView')(ListView) || ListView;
  ListView = _aureliaTemplating.customElement(constants.elementPrefix + 'list-view')(ListView) || ListView;
  return ListView;
})();

exports.ListView = ListView;

var Map = (function () {
  var _instanceInitializers22 = {};

  _createDecoratedClass(Map, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers22);

  function Map(element, widgetBase, viewResources) {
    _classCallCheck(this, _Map);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers22);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
  }

  Map.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Map.prototype.attached = function attached() {
    this.recreate();
  };

  Map.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Map.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Map = Map;
  Map = _aureliaDependencyInjection.inject(Element, WidgetBase)(Map) || Map;
  Map = generateBindables('kendoMap')(Map) || Map;
  Map = _aureliaTemplating.customElement(constants.elementPrefix + 'map')(Map) || Map;
  return Map;
})();

exports.Map = Map;

var MaskedTextBox = (function () {
  var _instanceInitializers23 = {};

  _createDecoratedClass(MaskedTextBox, [{
    key: 'kDisableDates',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers23);

  function MaskedTextBox(element, widgetBase) {
    _classCallCheck(this, _MaskedTextBox);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers23);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers23);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMaskedTextBox').linkViewModel(this).useValueBinding();
  }

  MaskedTextBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  MaskedTextBox.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  MaskedTextBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  MaskedTextBox.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _MaskedTextBox = MaskedTextBox;
  MaskedTextBox = _aureliaDependencyInjection.inject(Element, WidgetBase)(MaskedTextBox) || MaskedTextBox;
  MaskedTextBox = generateBindables('kendoMaskedTextBox')(MaskedTextBox) || MaskedTextBox;
  MaskedTextBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'maskedtextbox')(MaskedTextBox) || MaskedTextBox;
  return MaskedTextBox;
})();

exports.MaskedTextBox = MaskedTextBox;

var Menu = (function () {
  var _instanceInitializers24 = {};

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers24);

  function Menu(element, widgetBase) {
    _classCallCheck(this, _Menu);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers24);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
  }

  Menu.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  Menu.prototype.recreate = function recreate() {
    var element = undefined;
    var ul = this.element.querySelectorAll('ul');
    if (ul.length > 0) {
      element = ul[0];
    } else {
      element = document.createElement('ul');
      this.element.appendChild(element);
    }

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent
    });
  };

  Menu.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Menu = Menu;
  Menu = _aureliaDependencyInjection.inject(Element, WidgetBase)(Menu) || Menu;
  Menu = generateBindables('kendoMenu')(Menu) || Menu;
  Menu = _aureliaTemplating.customElement(constants.elementPrefix + 'menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;

var NumericTextBox = (function () {
  var _instanceInitializers25 = {};

  _createDecoratedClass(NumericTextBox, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers25);

  function NumericTextBox(element, widgetBase) {
    _classCallCheck(this, _NumericTextBox);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers25);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).useValueBinding();
  }

  NumericTextBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  NumericTextBox.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  NumericTextBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  NumericTextBox.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _NumericTextBox = NumericTextBox;
  NumericTextBox = _aureliaDependencyInjection.inject(Element, WidgetBase)(NumericTextBox) || NumericTextBox;
  NumericTextBox = generateBindables('kendoNumericTextBox')(NumericTextBox) || NumericTextBox;
  NumericTextBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'numerictextbox')(NumericTextBox) || NumericTextBox;
  return NumericTextBox;
})();

exports.NumericTextBox = NumericTextBox;

var PanelBar = (function () {
  var _instanceInitializers26 = {};

  _createDecoratedClass(PanelBar, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers26);

  function PanelBar(element, widgetBase) {
    _classCallCheck(this, _PanelBar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers26);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
  }

  PanelBar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  PanelBar.prototype.attached = function attached() {
    this.recreate();
  };

  PanelBar.prototype.recreate = function recreate() {
    var element = this.element;

    if (!hasListChildNode(element)) {
      var ul = document.createElement('ul');

      while (element.children.length > 0) {
        ul.appendChild(element.children[0]);
      }

      element.appendChild(ul);
      element = ul;
    } else {
      element = this.element.children[0];
    }

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      rootElement: this.element
    });
  };

  PanelBar.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _PanelBar = PanelBar;
  PanelBar = _aureliaDependencyInjection.inject(Element, WidgetBase)(PanelBar) || PanelBar;
  PanelBar = generateBindables('kendoPanelBar')(PanelBar) || PanelBar;
  PanelBar = _aureliaTemplating.customElement('k-panel-bar')(PanelBar) || PanelBar;
  return PanelBar;
})();

exports.PanelBar = PanelBar;

function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}

var PDF = function PDF() {
  _classCallCheck(this, PDF);
};

exports.PDF = PDF;

var ProgressBar = (function () {
  var _instanceInitializers27 = {};

  _createDecoratedClass(ProgressBar, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers27);

  function ProgressBar(element, widgetBase) {
    _classCallCheck(this, _ProgressBar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers27);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoProgressBar').linkViewModel(this);
  }

  ProgressBar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  ProgressBar.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ProgressBar.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ProgressBar = ProgressBar;
  ProgressBar = _aureliaDependencyInjection.inject(Element, WidgetBase)(ProgressBar) || ProgressBar;
  ProgressBar = generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
  ProgressBar = _aureliaTemplating.customAttribute(constants.attributePrefix + 'progress-bar')(ProgressBar) || ProgressBar;
  return ProgressBar;
})();

exports.ProgressBar = ProgressBar;

var RangeSlider = (function () {
  var _instanceInitializers28 = {};

  _createDecoratedClass(RangeSlider, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers28);

  function RangeSlider(element, widgetBase) {
    _classCallCheck(this, _RangeSlider);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers28);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRangeSlider').linkViewModel(this).useValueBinding();
  }

  RangeSlider.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  RangeSlider.prototype.attached = function attached() {
    this.recreate();
  };

  RangeSlider.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  RangeSlider.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  RangeSlider.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _RangeSlider = RangeSlider;
  RangeSlider = _aureliaDependencyInjection.inject(Element, WidgetBase)(RangeSlider) || RangeSlider;
  RangeSlider = generateBindables('kendoRangeSlider')(RangeSlider) || RangeSlider;
  RangeSlider = _aureliaTemplating.customElement(constants.elementPrefix + 'range-slider')(RangeSlider) || RangeSlider;
  return RangeSlider;
})();

exports.RangeSlider = RangeSlider;

var Scheduler = (function () {
  var _instanceInitializers29 = {};

  _createDecoratedClass(Scheduler, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers29);

  function Scheduler(element, widgetBase, viewResources) {
    _classCallCheck(this, _Scheduler);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers29);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers29);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoScheduler').linkViewModel(this).useViewResources(viewResources);
  }

  Scheduler.prototype.bind = function bind(ctx) {
    this.widgetBase.useTemplates(this, 'kendoScheduler', this.templates);
    this.$parent = ctx;
  };

  Scheduler.prototype.attached = function attached() {
    this.recreate();
  };

  Scheduler.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Scheduler.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Scheduler = Scheduler;
  Scheduler = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(Scheduler) || Scheduler;
  Scheduler = generateBindables('kendoScheduler')(Scheduler) || Scheduler;
  Scheduler = _aureliaTemplating.customElement(constants.elementPrefix + 'scheduler')(Scheduler) || Scheduler;
  return Scheduler;
})();

exports.Scheduler = Scheduler;

var Slider = (function () {
  var _instanceInitializers30 = {};

  _createDecoratedClass(Slider, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers30);

  function Slider(element, widgetBase) {
    _classCallCheck(this, _Slider);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers30);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSlider').linkViewModel(this).useValueBinding();
  }

  Slider.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Slider.prototype.attached = function attached() {
    this.recreate();
  };

  Slider.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Slider.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Slider.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Slider = Slider;
  Slider = _aureliaDependencyInjection.inject(Element, WidgetBase)(Slider) || Slider;
  Slider = generateBindables('kendoSlider')(Slider) || Slider;
  Slider = _aureliaTemplating.customAttribute(constants.attributePrefix + 'slider')(Slider) || Slider;
  return Slider;
})();

exports.Slider = Slider;

var TabStrip = (function () {
  var _instanceInitializers31 = {};

  _createDecoratedClass(TabStrip, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers31);

  function TabStrip(element, widgetBase) {
    _classCallCheck(this, _TabStrip);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers31);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this);
  }

  TabStrip.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  TabStrip.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TabStrip.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaDependencyInjection.inject(Element, WidgetBase)(TabStrip) || TabStrip;
  TabStrip = generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
  TabStrip = _aureliaTemplating.customAttribute(constants.attributePrefix + 'tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})();

exports.TabStrip = TabStrip;

var TimePicker = (function () {
  var _instanceInitializers32 = {};

  _createDecoratedClass(TimePicker, [{
    key: 'kDisableDates',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers32);

  function TimePicker(element, widgetBase) {
    _classCallCheck(this, _TimePicker);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers32);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers32);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTimePicker').linkViewModel(this).useValueBinding();
  }

  TimePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  TimePicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TimePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  TimePicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TimePicker = TimePicker;
  TimePicker = _aureliaDependencyInjection.inject(Element, WidgetBase)(TimePicker) || TimePicker;
  TimePicker = generateBindables('kendoTimePicker')(TimePicker) || TimePicker;
  TimePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'timepicker')(TimePicker) || TimePicker;
  return TimePicker;
})();

exports.TimePicker = TimePicker;

var AuToolbar = function AuToolbar() {
  _classCallCheck(this, AuToolbar);
};

exports.AuToolbar = AuToolbar;

var TreeCol = (function () {
  var _instanceInitializers33 = {};

  function TreeCol() {
    _classCallCheck(this, _TreeCol);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers33);
  }

  TreeCol.prototype.bind = function bind() {
    _useTemplates(this, 'TreeListColumn', this.templates);
  };

  _createDecoratedClass(TreeCol, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers33);

  var _TreeCol = TreeCol;
  TreeCol = generateBindables('TreeListColumn')(TreeCol) || TreeCol;
  TreeCol = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-col')(TreeCol) || TreeCol;
  return TreeCol;
})();

exports.TreeCol = TreeCol;

var TreeList = (function () {
  var _instanceInitializers34 = {};

  _createDecoratedClass(TreeList, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'tree-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers34);

  function TreeList(element, widgetBase, viewResources, optionsBuilder) {
    _classCallCheck(this, _TreeList);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers34);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers34);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
  }

  TreeList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeList.prototype.attached = function attached() {
    this.recreate();
  };

  TreeList.prototype.recreate = function recreate() {
    var _this10 = this;

    var element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this10._beforeInitialize(o);
      }
    });
  };

  TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this11 = this;

    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (column) {
        options.columns.push(_this11.optionsBuilder.getOptions(column, 'TreeListColumn'));
      });
    }
  };

  TreeList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeList = TreeList;
  TreeList = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources, OptionsBuilder)(TreeList) || TreeList;
  TreeList = generateBindables('kendoTreeList')(TreeList) || TreeList;
  TreeList = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-list')(TreeList) || TreeList;
  return TreeList;
})();

exports.TreeList = TreeList;

var TreeView = (function () {
  var _instanceInitializers35 = {};

  _createDecoratedClass(TreeView, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers35);

  function TreeView(element, widgetBase) {
    _classCallCheck(this, _TreeView);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers35);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this);
  }

  TreeView.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  TreeView.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TreeView.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeView = TreeView;
  TreeView = _aureliaDependencyInjection.inject(Element, WidgetBase)(TreeView) || TreeView;
  TreeView = generateBindables('kendoTreeView')(TreeView) || TreeView;
  TreeView = _aureliaTemplating.customAttribute(constants.attributePrefix + 'treeview')(TreeView) || TreeView;
  return TreeView;
})();

exports.TreeView = TreeView;

var kendoToStringValueConverter = (function () {
  function kendoToStringValueConverter() {
    _classCallCheck(this, kendoToStringValueConverter);
  }

  kendoToStringValueConverter.prototype.toView = function toView(value, format, language) {
    return kendo.toString(value, format, language);
  };

  return kendoToStringValueConverter;
})();

exports.kendoToStringValueConverter = kendoToStringValueConverter;

var kendoParseDateValueConverter = (function () {
  function kendoParseDateValueConverter() {
    _classCallCheck(this, kendoParseDateValueConverter);
  }

  kendoParseDateValueConverter.prototype.toView = function toView(value, format, language) {
    return kendo.parseDate(value, format, language);
  };

  return kendoParseDateValueConverter;
})();

exports.kendoParseDateValueConverter = kendoParseDateValueConverter;

var kendoParseIntValueConverter = (function () {
  function kendoParseIntValueConverter() {
    _classCallCheck(this, kendoParseIntValueConverter);
  }

  kendoParseIntValueConverter.prototype.toView = function toView(value, language) {
    return kendo.parseInt(value, language);
  };

  return kendoParseIntValueConverter;
})();

exports.kendoParseIntValueConverter = kendoParseIntValueConverter;

var kendoParseFloatValueConverter = (function () {
  function kendoParseFloatValueConverter() {
    _classCallCheck(this, kendoParseFloatValueConverter);
  }

  kendoParseFloatValueConverter.prototype.toView = function toView(value, language) {
    return kendo.parseFloat(value, language);
  };

  return kendoParseFloatValueConverter;
})();

exports.kendoParseFloatValueConverter = kendoParseFloatValueConverter;

var kendoParseColorValueConverter = (function () {
  function kendoParseColorValueConverter() {
    _classCallCheck(this, kendoParseColorValueConverter);
  }

  kendoParseColorValueConverter.prototype.toView = function toView(value) {
    return kendo.parseColor(value);
  };

  return kendoParseColorValueConverter;
})();

exports.kendoParseColorValueConverter = kendoParseColorValueConverter;

var kendoStringifyValueConverter = (function () {
  function kendoStringifyValueConverter() {
    _classCallCheck(this, kendoStringifyValueConverter);
  }

  kendoStringifyValueConverter.prototype.toView = function toView(obj) {
    return kendo.stringify(obj);
  };

  return kendoStringifyValueConverter;
})();

exports.kendoStringifyValueConverter = kendoStringifyValueConverter;

var kendoFormatValueConverter = (function () {
  function kendoFormatValueConverter() {
    _classCallCheck(this, kendoFormatValueConverter);
  }

  kendoFormatValueConverter.prototype.toView = function toView(value) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    params.unshift(value);

    return kendo.format.apply(this, params);
  };

  return kendoFormatValueConverter;
})();

exports.kendoFormatValueConverter = kendoFormatValueConverter;