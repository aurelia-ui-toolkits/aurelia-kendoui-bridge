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

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('jquery');

require('kendo-ui/js/kendo.autocomplete.min');

require('kendo-ui/js/kendo.virtuallist.min');

require('kendo-ui/js/kendo.button.min');

require('kendo-ui/js/kendo.calendar.min');

require('kendo-ui/js/kendo.dataviz.chart.min');

require('kendo-ui/js/kendo.dataviz.chart.polar.min');

require('kendo-ui/js/kendo.dataviz.chart.funnel.min');

require('kendo-ui/js/kendo.dataviz.sparkline.min');

require('kendo-ui/js/kendo.dataviz.stock.min');

require('kendo-ui/js/kendo.dataviz.treemap.min');

require('kendo-ui/js/kendo.colorpicker.min');

require('kendo-ui/js/kendo.datepicker.min');

require('kendo-ui/js/kendo.datetimepicker.min');

require('kendo-ui/js/kendo.dropdownlist.min');

require('kendo-ui/js/kendo.data.signalr.min');

require('kendo-ui/js/kendo.filtercell.min');

require('kendo-ui/js/kendo.grid.min');

require('kendo-ui/js/kendo.maskedtextbox.min');

require('kendo-ui/js/kendo.menu.min');

require('kendo-ui/js/kendo.numerictextbox.min');

require('kendo-ui/js/kendo.panelbar.min');

require('kendo-ui/js/kendo.pdf.min');

require('kendo-ui/js/kendo.excel.min');

require('kendo-ui/js/kendo.progressbar.min');

require('kendo-ui/js/kendo.slider.min');

require('kendo-ui/js/kendo.scheduler.min');

require('kendo-ui/js/kendo.scheduler.agendaview.min');

require('kendo-ui/js/kendo.scheduler.dayview.min');

require('kendo-ui/js/kendo.scheduler.monthview.min');

require('kendo-ui/js/kendo.scheduler.recurrence.min');

require('kendo-ui/js/kendo.scheduler.timelineview.min');

require('kendo-ui/js/kendo.tabstrip.min');

require('kendo-ui/js/kendo.timepicker.min');

require('kendo-ui/js/kendo.treelist.min');

require('kendo-ui/js/kendo.treeview.min');

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
    this.kendoButton().kendoCalendar().kendoTabStrip().kendoProgressBar().kendoSlider().kendoRangeSlider().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoTimePicker().kendoMaskedTextBox().kendoNumericTextBox().kendoPanelBar().kendoColorPicker().kendoColorPalette().kendoFlatColorPicker();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoGrid().kendoAutoComplete().kendoChart().kendoTreeView().kendoScheduler().kendoTreeList();
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

  KendoConfigBuilder.prototype.kendoCalendar = function kendoCalendar() {
    this.resources.push('calendar/calendar');
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
    this.resources.push('grid/k-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    this.resources.push('scheduler/event-template');
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

  KendoConfigBuilder.prototype.kendoPanelBar = function kendoPanelBar() {
    this.resources.push('panelbar/panelbar');
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

  KendoConfigBuilder.prototype.kendoRangeSlider = function kendoRangeSlider() {
    this.resources.push('rangeslider/rangeslider');
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

  KendoConfigBuilder.prototype.kendoFlatColorPicker = function kendoFlatColorPicker() {
    this.resources.push('flatcolorpicker/flatcolorpicker');
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

  KendoConfigBuilder.prototype.kendoDateTimePicker = function kendoDateTimePicker() {
    this.resources.push('datetimepicker/datetimepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTimePicker = function kendoTimePicker() {
    this.resources.push('timepicker/timepicker');
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

  KendoConfigBuilder.prototype.kendoTreeList = function kendoTreeList() {
    this.resources.push('treelist/treelist');
    this.resources.push('treelist/k-tree-col');
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

var ColorPalette = (function () {
  var _instanceInitializers8 = {};

  _createDecoratedClass(ColorPalette, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers8);

  function ColorPalette(element, widgetBase) {
    _classCallCheck(this, _ColorPalette);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers8);

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

var ColorPicker = (function () {
  var _instanceInitializers9 = {};

  _createDecoratedClass(ColorPicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers9);

  function ColorPicker(element, widgetBase) {
    _classCallCheck(this, _ColorPicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers9);

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
var bindables = { "kendoAutoComplete": ["animation", "dataSource", "dataTextField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "minLength", "name", "placeholder", "popup", "separator", "suggest", "template", "valuePrimitive", "virtual"], "kendoBarcode": ["background", "border", "checksum", "color", "height", "name", "padding", "renderAs", "text", "type", "value", "width"], "kendoButton": ["enable", "icon", "imageUrl", "name", "spriteCssClass"], "kendoCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "start", "value"], "kendoChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "legend", "name", "panes", "pannable", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis", "xAxis", "yAxis", "zoomable"], "kendoColorPalette": ["columns", "name", "palette", "tileSize", "value"], "kendoColorPicker": ["buttons", "columns", "messages", "name", "opacity", "palette", "preview", "tileSize", "toolIcon", "value"], "kendoComboBox": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "placeholder", "popup", "suggest", "template", "text", "value", "valuePrimitive", "virtual"], "kendoContextMenu": ["alignToAnchor", "animation", "closeOnClick", "dataSource", "direction", "filter", "hoverDelay", "name", "orientation", "popupCollision", "showOn", "target"], "kendoDatePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "parseFormats", "start", "value"], "kendoDateTimePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "interval", "max", "min", "month", "name", "parseFormats", "start", "timeFormat", "value"], "kendoDiagram": ["autoBind", "connectionDefaults", "connections", "connectionsDataSource", "dataSource", "editable", "layout", "name", "pannable", "pdf", "selectable", "shapeDefaults", "shapes", "template", "zoom", "zoomMax", "zoomMin", "zoomRate"], "kendoDraggable": ["axis", "container", "cursorOffset", "distance", "filter", "group", "hint", "ignore"], "kendoDropDownList": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "ignoreCase", "index", "minLength", "name", "optionLabel", "optionLabelTemplate", "popup", "template", "text", "value", "valuePrimitive", "valueTemplate", "virtual"], "kendoDropTarget": ["group"], "kendoDropTargetArea": ["filter", "group"], "kendoEditor": ["domain", "encoded", "fileBrowser", "imageBrowser", "messages", "name", "pdf", "resizable", "serialization", "stylesheets", "tools"], "kendoFlatColorPicker": ["autoupdate", "buttons", "messages", "name", "opacity", "preview", "value"], "kendoGantt": ["assignments", "autoBind", "columnResizeHandleWidth", "columns", "currentTimeMarker", "dataSource", "dependencies", "editable", "height", "hourSpan", "listWidth", "messages", "name", "navigatable", "pdf", "resizable", "resources", "rowHeight", "selectable", "showWorkDays", "showWorkHours", "snap", "taskTemplate", "toolbar", "tooltip", "views", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoGrid": ["allowCopy", "altRowTemplate", "autoBind", "columnMenu", "columnResizeHandleWidth", "columns", "dataSource", "detailTemplate", "editable", "excel", "filterable", "groupable", "height", "messages", "mobile", "name", "navigatable", "noRecords", "pageable", "pdf", "reorderable", "resizable", "rowTemplate", "scrollable", "selectable", "sortable", "toolbar"], "kendoLinearGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoListView": ["altTemplate", "autoBind", "dataSource", "editTemplate", "name", "navigatable", "selectable", "template"], "kendoMap": ["center", "controls", "layerDefaults", "layers", "markerDefaults", "markers", "maxZoom", "minSize", "minZoom", "name", "pannable", "wraparound", "zoom", "zoomable"], "kendoMaskedTextBox": ["clearPromptChar", "culture", "mask", "name", "promptChar", "rules", "unmaskOnPost", "value"], "kendoMenu": ["animation", "closeOnClick", "dataSource", "direction", "hoverDelay", "name", "openOnClick", "orientation", "popupCollision"], "kendoMobileActionSheet": ["cancel", "name", "popup", "type"], "kendoMobileBackButton": ["name"], "kendoMobileButton": ["badge", "clickOn", "enable", "icon", "name"], "kendoMobileButtonGroup": ["enable", "index", "name", "selectOn"], "kendoMobileCollapsible": ["animation", "collapsed", "expandIcon", "iconPosition", "inset", "name"], "kendoMobileDetailButton": ["name"], "kendoMobileDrawer": ["container", "name", "position", "swipeToOpen", "swipeToOpenViews", "title", "views"], "kendoMobileLayout": ["id", "name", "platform"], "kendoMobileListView": ["appendOnRefresh", "autoBind", "dataSource", "endlessScroll", "filterable", "fixedHeaders", "headerTemplate", "loadMore", "messages", "name", "pullParameters", "pullToRefresh", "style", "template", "type", "virtualViewSize"], "kendoMobileLoader": ["name"], "kendoMobileModalView": ["height", "modal", "name", "width"], "kendoMobileNavBar": ["name"], "kendoMobilePane": ["collapsible", "initial", "layout", "loading", "name", "portraitWidth", "transition"], "kendoMobilePopOver": ["name", "pane", "popup"], "kendoMobileScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "itemsPerPage", "name", "page", "pageSize", "template", "velocityThreshold"], "kendoMobileScroller": ["elastic", "messages", "name", "pullOffset", "pullToRefresh", "useNative", "visibleScrollHints", "zoom"], "kendoMobileSplitView": ["name", "style"], "kendoMobileSwitch": ["checked", "enable", "name", "offLabel", "onLabel"], "kendoMobileTabStrip": ["name", "selectedIndex"], "kendoMobileView": ["model", "name", "reload", "scroller", "stretch", "title", "useNativeScrolling", "zoom"], "kendoMultiSelect": ["animation", "autoBind", "autoClose", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "itemTemplate", "maxSelectedItems", "minLength", "name", "placeholder", "popup", "tagMode", "tagTemplate", "value", "valuePrimitive", "virtual"], "kendoNotification": ["allowHideAfter", "animation", "appendTo", "autoHideAfter", "button", "height", "hideOnClick", "name", "position", "stacking", "templates", "width"], "kendoNumericTextBox": ["culture", "decimals", "downArrowText", "format", "max", "min", "name", "placeholder", "spinners", "step", "upArrowText", "value"], "kendoPager": ["autoBind", "buttonCount", "dataSource", "info", "input", "linkTemplate", "messages", "name", "numeric", "pageSizes", "previousNext", "refresh", "selectTemplate"], "kendoPanelBar": ["animation", "contentUrls", "dataSource", "expandMode", "name"], "kendoPivotConfigurator": ["dataSource", "filterable", "height", "messages", "name", "sortable"], "kendoPivotGrid": ["autoBind", "columnHeaderTemplate", "columnWidth", "dataCellTemplate", "dataSource", "excel", "filterable", "height", "kpiStatusTemplate", "kpiTrendTemplate", "messages", "name", "pdf", "reorderable", "rowHeaderTemplate", "sortable"], "kendoPopup": ["anchor", "animation", "appendTo", "name", "origin", "position"], "kendoProgressBar": ["animation", "chunkCount", "enable", "max", "min", "name", "orientation", "reverse", "showStatus", "type", "value"], "kendoQRCode": ["background", "border", "color", "encoding", "errorCorrection", "name", "padding", "renderAs", "size", "value"], "kendoRadialGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoRangeSlider": ["largeStep", "max", "min", "name", "orientation", "selectionEnd", "selectionStart", "smallStep", "tickPlacement", "tooltip"], "kendoResponsivePanel": ["autoClose", "breakpoint", "name", "orientation", "toggleButton"], "kendoScheduler": ["allDayEventTemplate", "allDaySlot", "autoBind", "currentTimeMarker", "dataSource", "date", "dateHeaderTemplate", "editable", "endTime", "eventTemplate", "footer", "group", "groupHeaderTemplate", "height", "majorTick", "majorTimeHeaderTemplate", "max", "messages", "min", "minorTickCount", "minorTimeHeaderTemplate", "mobile", "name", "pdf", "resources", "selectable", "showWorkHours", "snap", "startTime", "timezone", "toolbar", "views", "width", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoSlider": ["decreaseButtonTitle", "increaseButtonTitle", "largeStep", "max", "min", "name", "orientation", "showButtons", "smallStep", "tickPlacement", "tooltip", "value"], "kendoSortable": ["autoScroll", "axis", "connectWith", "container", "cursor", "cursorOffset", "disabled", "filter", "handler", "hint", "holdToDrag", "ignore", "name", "placeholder"], "kendoSparkline": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "data", "dataSource", "name", "plotArea", "pointWidth", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "tooltip", "transitions", "type", "valueAxis"], "kendoSplitter": ["name", "orientation", "panes"], "kendoSpreadsheet": ["activeSheet", "columnWidth", "columns", "excel", "headerHeight", "headerWidth", "name", "pdf", "rowHeight", "rows", "sheets", "sheetsbar", "toolbar"], "kendoStockChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "dateField", "legend", "name", "navigator", "panes", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis"], "kendoTabStrip": ["animation", "collapsible", "contentUrls", "dataContentField", "dataContentUrlField", "dataImageUrlField", "dataSource", "dataSpriteCssClass", "dataTextField", "dataUrlField", "name", "navigatable", "scrollable", "tabPosition", "value"], "kendoTimePicker": ["animation", "culture", "dates", "format", "interval", "max", "min", "name", "parseFormats", "value"], "kendoToolBar": ["items", "name", "resizable"], "kendoTooltip": ["animation", "autoHide", "callout", "content", "filter", "height", "iframe", "name", "position", "showAfter", "showOn", "width"], "kendoTouch": ["doubleTapTimeout", "enableSwipe", "filter", "maxDuration", "maxYDelta", "minHold", "minXDelta", "multiTouch", "name", "surface"], "kendoTreeList": ["autoBind", "columnMenu", "columns", "dataSource", "editable", "excel", "filterable", "height", "messages", "name", "pdf", "reorderable", "resizable", "scrollable", "selectable", "sortable", "toolbar"], "kendoTreeMap": ["autoBind", "colorField", "colors", "dataSource", "name", "template", "textField", "theme", "type", "valueField"], "kendoTreeView": ["animation", "autoBind", "autoScroll", "checkboxes", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dragAndDrop", "loadOnDemand", "messages", "name", "template"], "kendoUpload": ["async", "enabled", "files", "localization", "multiple", "name", "showFileList", "template"], "kendoValidator": ["errorTemplate", "messages", "name", "rules", "validateOnBlur"], "kendoWindow": ["actions", "animation", "appendTo", "autoFocus", "content", "draggable", "height", "iframe", "maxHeight", "maxWidth", "minHeight", "minWidth", "modal", "name", "pinned", "position", "resizable", "scrollable", "title", "visible", "width"] };
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
  }

  ControlProperties.prototype.getProperties = function getProperties(controlName) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    var options1 = Object.keys(jQuery.fn[controlName].widget.prototype.options);

    var options2 = bindables[controlName];

    var keys = options1.concat(options2.filter(function (item) {
      return options1.indexOf(item) < 0;
    }));

    keys.push('widget');

    this.cache[controlName] = keys;

    return keys;
  };

  return ControlProperties;
})();

exports.ControlProperties = ControlProperties;

function generateBindables(controlName) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var controlProperties = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(ControlProperties);
    var optionKeys = controlProperties.getProperties(controlName);

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
    if (typeof options[prop] !== 'undefined' && options[prop] !== null) {
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
    var _this2 = this;

    var _loop = function (i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this2.enhanceView($parent, elem, ctx, viewResources);
        });
      } else {
        _this2.enhanceView($parent, element, ctx, viewResources);
      }
    };

    for (var i = 0; i < elements.length; i++) {
      _loop(i);
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
  function WidgetBase(taskQueue, templateCompiler, controlProperties) {
    _classCallCheck(this, _WidgetBase);

    this.taskQueue = taskQueue;
    this.controlProperties = controlProperties;
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
    var _this3 = this;

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
        return _this3._handleChange(args.sender);
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
    var options = this.getOptionsFromBindables();
    var eventOptions = this.getEventOptions(element);

    return pruneOptions(Object.assign({}, this.viewModel.options, options, eventOptions));
  };

  WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
    var options = {};

    for (var _iterator3 = this.controlProperties.getProperties(this.controlName), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
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

      if (prop !== 'widget') {
        options[prop] = this.viewModel[getBindablePropertyName(prop)];
      }
    }

    return options;
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
    var _this4 = this;

    var options = {};
    var allowedEvents = this.kendoEvents;

    var events = getEventsFromAttributes(element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this4.controlName + ' control');
      }

      options[event] = function (e) {
        _this4.taskQueue.queueMicroTask(function () {
          fireKendoEvent(element, _hyphenate(event), e);
        });
      };
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

  WidgetBase.prototype.destroy = function destroy(widget) {
    widget.destroy();
  };

  var _WidgetBase = WidgetBase;
  WidgetBase = _aureliaDependencyInjection.inject(_aureliaTaskQueue.TaskQueue, TemplateCompiler, ControlProperties)(WidgetBase) || WidgetBase;
  WidgetBase = _aureliaDependencyInjection.transient()(WidgetBase) || WidgetBase;
  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var DatePicker = (function () {
  var _instanceInitializers10 = {};

  _createDecoratedClass(DatePicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers10);

  function DatePicker(element, widgetBase) {
    _classCallCheck(this, _DatePicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers10);

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
  var _instanceInitializers11 = {};

  _createDecoratedClass(DateTimePicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers11);

  function DateTimePicker(element, widgetBase) {
    _classCallCheck(this, _DateTimePicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers11);

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
  var _instanceInitializers12 = {};

  _createDecoratedClass(DropDownList, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kValue',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers12);

  function DropDownList(element, widgetBase) {
    _classCallCheck(this, _DropDownList);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers12);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers12);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this);
  }

  DropDownList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  DropDownList.prototype.recreate = function recreate() {
    var _this5 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });

    this.kWidget.bind('change', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.kWidget.bind('select', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.kWidget.trigger('change');
  };

  DropDownList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropDownList = DropDownList;
  DropDownList = _aureliaDependencyInjection.inject(Element, WidgetBase)(DropDownList) || DropDownList;
  DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaTemplating.customAttribute(constants.attributePrefix + 'drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})();

exports.DropDownList = DropDownList;

var FlatColorPicker = (function () {
  var _instanceInitializers13 = {};

  _createDecoratedClass(FlatColorPicker, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers13);

  function FlatColorPicker(element, widgetBase) {
    _classCallCheck(this, _FlatColorPicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers13);

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
  var _instanceInitializers14 = {};

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
  }], null, _instanceInitializers14);

  function Grid(element, widgetBase, viewResources) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers14);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers14);

    this.element = element;
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
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;

      options.columns.forEach(function (c) {
        if (c.template && !c.withKendoTemplates) {
          (function () {
            var template = c.template;
            c.template = function () {
              return template;
            };
          })();
        }
      });
    }
  };

  Grid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Grid = Grid;
  Grid = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(Grid) || Grid;
  Grid = generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaTemplating.customElement(constants.elementPrefix + 'grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Col = (function () {
  var _instanceInitializers15 = {};

  _createDecoratedClass(Col, [{
    key: 'aggregates',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'attributes',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'columns',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'command',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editor',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'encoded',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'field',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'footerTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'format',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'groupable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupFooterTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupHeaderTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerAttributes',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hidden',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'lockable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'locked',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'menu',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'minScreenWidth',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'values',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'width',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'withKendoTemplates',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers15);

  function Col(targetInstruction) {
    _classCallCheck(this, _Col);

    _defineDecoratedPropertyDescriptor(this, 'aggregates', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'attributes', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'editor', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'encoded', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'footerTemplate', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'groupFooterTemplate', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'groupHeaderTemplate', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'headerAttributes', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'menu', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'minScreenWidth', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'values', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'withKendoTemplates', _instanceInitializers15);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _Col = Col;
  Col = _aureliaTemplating.customElement(constants.elementPrefix + 'col')(Col) || Col;
  Col = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(Col) || Col;
  Col = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(Col) || Col;
  Col = _aureliaTemplating.noView(Col) || Col;
  return Col;
})();

exports.Col = Col;

var MaskedTextBox = (function () {
  var _instanceInitializers16 = {};

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
  }], null, _instanceInitializers16);

  function MaskedTextBox(element, widgetBase) {
    _classCallCheck(this, _MaskedTextBox);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers16);

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
  var _instanceInitializers17 = {};

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers17);

  function Menu(element, widgetBase) {
    _classCallCheck(this, _Menu);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers17);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
  }

  Menu.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  Menu.prototype.recreate = function recreate() {
    var element = undefined;
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      element = $(this.element).find('ul').first();
    } else {
      element = $(this.element).appendChild('<ul></ul>');
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
  var _instanceInitializers18 = {};

  _createDecoratedClass(NumericTextBox, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers18);

  function NumericTextBox(element, widgetBase) {
    _classCallCheck(this, _NumericTextBox);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers18);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this);
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
  var _instanceInitializers19 = {};

  _createDecoratedClass(PanelBar, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers19);

  function PanelBar(element, widgetBase) {
    _classCallCheck(this, _PanelBar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers19);

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
  var _instanceInitializers20 = {};

  _createDecoratedClass(ProgressBar, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers20);

  function ProgressBar(element, widgetBase) {
    _classCallCheck(this, _ProgressBar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers20);

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
  var _instanceInitializers21 = {};

  _createDecoratedClass(RangeSlider, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers21);

  function RangeSlider(element, widgetBase) {
    _classCallCheck(this, _RangeSlider);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers21);

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

var EventTemplate = (function () {
  var _instanceInitializers22 = {};

  _createDecoratedClass(EventTemplate, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers22);

  function EventTemplate(targetInstruction) {
    _classCallCheck(this, _EventTemplate);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers22);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _EventTemplate = EventTemplate;
  EventTemplate = _aureliaTemplating.customElement(constants.elementPrefix + 'event-template')(EventTemplate) || EventTemplate;
  EventTemplate = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(EventTemplate) || EventTemplate;
  EventTemplate = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(EventTemplate) || EventTemplate;
  EventTemplate = _aureliaTemplating.noView(EventTemplate) || EventTemplate;
  return EventTemplate;
})();

exports.EventTemplate = EventTemplate;

var Scheduler = (function () {
  var _instanceInitializers23 = {};

  _createDecoratedClass(Scheduler, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'eventTemplates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'event-template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers23);

  function Scheduler(element, widgetBase, viewResources) {
    _classCallCheck(this, _Scheduler);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers23);

    _defineDecoratedPropertyDescriptor(this, 'eventTemplates', _instanceInitializers23);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoScheduler').linkViewModel(this).useViewResources(viewResources);
  }

  Scheduler.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Scheduler.prototype.attached = function attached() {
    this.recreate();
  };

  Scheduler.prototype.recreate = function recreate() {
    var _this7 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this7._beforeInitialize(o);
      }
    });
  };

  Scheduler.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this8 = this;

    var eventTemplate = undefined;

    if (this.kEventTemplate) {
      eventTemplate = function () {
        return _this8.kEventTemplate;
      };
    } else if (this.eventTemplates.length > 0) {
      eventTemplate = function () {
        return _this8.eventTemplates[0].template;
      };
    }

    return Object.assign(options, pruneOptions({
      eventTemplate: eventTemplate
    }));
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
  var _instanceInitializers24 = {};

  _createDecoratedClass(Slider, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers24);

  function Slider(element, widgetBase) {
    _classCallCheck(this, _Slider);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers24);

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
  var _instanceInitializers25 = {};

  _createDecoratedClass(TabStrip, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers25);

  function TabStrip(element, widgetBase) {
    _classCallCheck(this, _TabStrip);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers25);

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
  var _instanceInitializers26 = {};

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
  }], null, _instanceInitializers26);

  function TimePicker(element, widgetBase) {
    _classCallCheck(this, _TimePicker);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers26);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers26);

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
  var _instanceInitializers27 = {};

  _createDecoratedClass(TreeCol, [{
    key: 'attributes',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'command',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editor',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'encoded',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'expandable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'field',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'footerTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'format',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'headerAttributes',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'minScreenWidth',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'width',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hidden',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'menu',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'locked',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'lockable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'withKendoTemplates',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers27);

  function TreeCol(targetInstruction) {
    _classCallCheck(this, _TreeCol);

    _defineDecoratedPropertyDescriptor(this, 'attributes', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'editor', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'encoded', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'expandable', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'footerTemplate', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'headerAttributes', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'minScreenWidth', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'menu', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'withKendoTemplates', _instanceInitializers27);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _TreeCol = TreeCol;
  TreeCol = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-col')(TreeCol) || TreeCol;
  TreeCol = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(TreeCol) || TreeCol;
  TreeCol = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(TreeCol) || TreeCol;
  TreeCol = _aureliaTemplating.noView(TreeCol) || TreeCol;
  return TreeCol;
})();

exports.TreeCol = TreeCol;

var TreeList = (function () {
  var _instanceInitializers28 = {};

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
  }], null, _instanceInitializers28);

  function TreeList(element, widgetBase, viewResources) {
    _classCallCheck(this, _TreeList);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers28);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers28);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
  }

  TreeList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeList.prototype.attached = function attached() {
    this.recreate();
  };

  TreeList.prototype.recreate = function recreate() {
    var _this9 = this;

    var element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this9._beforeInitialize(o);
      }
    });
  };

  TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (c) {
        if (c.template && !c.withKendoTemplates) {
          (function () {
            var template = c.template;
            c.template = function () {
              return template;
            };
          })();
        }

        options.columns.push(pruneOptions(c));
      });
    }
  };

  TreeList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeList = TreeList;
  TreeList = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(TreeList) || TreeList;
  TreeList = generateBindables('kendoTreeList')(TreeList) || TreeList;
  TreeList = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-list')(TreeList) || TreeList;
  return TreeList;
})();

exports.TreeList = TreeList;

var TreeView = (function () {
  var _instanceInitializers29 = {};

  _createDecoratedClass(TreeView, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers29);

  function TreeView(element, widgetBase) {
    _classCallCheck(this, _TreeView);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers29);

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