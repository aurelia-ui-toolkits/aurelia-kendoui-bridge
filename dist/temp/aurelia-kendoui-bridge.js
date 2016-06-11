'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.delayed = delayed;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('jquery');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

var _aureliaTemplatingResources = require('aurelia-templating-resources');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

require('kendo.data.min');

require('kendo.autocomplete.min');

require('kendo.virtuallist.min');

require('kendo.dataviz.barcode.min');

require('kendo.button.min');

require('kendo.mobile.buttongroup.min');

require('kendo.calendar.min');

require('kendo.dataviz.chart.min');

require('kendo.dataviz.chart.polar.min');

require('kendo.dataviz.chart.funnel.min');

require('kendo.dataviz.sparkline.min');

require('kendo.dataviz.stock.min');

require('kendo.dataviz.treemap.min');

require('kendo.colorpicker.min');

require('kendo.colorpicker.min');

require('kendo.combobox.min');

require('kendo.virtuallist.min');

require('kendo.menu.min');

require('kendo.datepicker.min');

require('kendo.datetimepicker.min');

require('kendo.dataviz.diagram.min');

require('kendo.draganddrop.min');

require('kendo.draganddrop.min');

require('kendo.draganddrop.min');

require('kendo.dropdownlist.min');

require('kendo.virtuallist.min');

require('kendo.editor.min');

require('kendo.colorpicker.min');

require('kendo.gantt.min');

require('kendo.dataviz.gauge.min');

require('kendo.dataviz.gauge.min');

require('kendo.data.signalr.min');

require('kendo.filtercell.min');

require('kendo.grid.min');

require('kendo.listview.min');

require('kendo.dataviz.map.min');

require('kendo.maskedtextbox.min');

require('kendo.menu.min');

require('kendo.multiselect.min');

require('kendo.virtuallist.min');

require('kendo.notification.min');

require('kendo.numerictextbox.min');

require('kendo.panelbar.min');

require('kendo.pdf.min');

require('kendo.excel.min');

require('kendo.pivot.configurator.min');

require('kendo.pivotgrid.min');

require('kendo.pivot.fieldmenu.min');

require('kendo.progressbar.min');

require('kendo.dataviz.qrcode.min');

require('kendo.slider.min');

require('kendo.responsivepanel.min');

require('kendo.scheduler.min');

require('kendo.scheduler.agendaview.min');

require('kendo.scheduler.dayview.min');

require('kendo.scheduler.monthview.min');

require('kendo.scheduler.recurrence.min');

require('kendo.scheduler.timelineview.min');

require('kendo.mobile.scrollview.min');

require('kendo.slider.min');

require('kendo.sortable.min');

require('kendo.splitter.min');

require('kendo.spreadsheet.min');

require('kendo.mobile.switch.min');

require('kendo.tabstrip.min');

require('kendo.timepicker.min');

require('kendo.toolbar.min');

require('kendo.tooltip.min');

require('kendo.data.signalr.min');

require('kendo.filtercell.min');

require('kendo.treelist.min');

require('kendo.treeview.min');

require('kendo.upload.min');

require('kendo.validator.min');

require('kendo.window.min');

var KendoConfigBuilder = (function () {
  function KendoConfigBuilder() {
    _classCallCheck(this, KendoConfigBuilder);

    this.resources = [];
    this.debugMode = false;
    this.registerRepeatStrategy = true;
  }

  KendoConfigBuilder.prototype.core = function core() {
    this.kendoAutoComplete().kendoButton().kendoButtonGroup().kendoCalendar().kendoColorPicker().kendoColorPalette().kendoCombobox().kendoContextMenu().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoDraggable().kendoDropTarget().kendoFlatColorPicker().kendoListView().kendoMaskedTextBox().kendoMenu().kendoMultiSelect().kendoNotification().kendoNumericTextBox().kendoPanelBar().kendoProgressBar().kendoRangeSlider().kendoResponsivePanel().kendoScrollView().kendoSortable().kendoSlider().kendoSplitter().kendoSwitch().kendoTabStrip().kendoTemplateSupport().kendoTimePicker().kendoToolbar().kendoTooltip().kendoValidator().kendoWindow().useValueConverters();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoBarcode().kendoChart().kendoDiagram().kendoEditor().kendoGantt().kendoGrid().kendoMap().kendoLinearGauge().kendoPivotGrid().kendoQRCode().kendoRadialGauge().kendoScheduler().kendoTreeList().kendoTreeView().kendoUpload();
    return this;
  };

  KendoConfigBuilder.prototype.useValueConverters = function useValueConverters() {
    this.resources.push('./valueconverters/valueconverters');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTemplateSupport = function kendoTemplateSupport() {
    this.resources.push('./common/template');
    return this;
  };

  KendoConfigBuilder.prototype.debug = function debug() {
    this.debugMode = true;
    return this;
  };

  KendoConfigBuilder.prototype.notifyBindingBehavior = function notifyBindingBehavior() {
    this.resources.push('./common/notify-binding-behavior');
    return this;
  };

  KendoConfigBuilder.prototype.withTemplateCallback = function withTemplateCallback(callback) {
    this.templateCallback = callback;
    return this;
  };

  KendoConfigBuilder.prototype.withoutRepeatStrategy = function withoutRepeatStrategy() {
    this.registerRepeatStrategy = false;
  };

  KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  };

  KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
    this.resources.push('./button/button');
    return this;
  };

  KendoConfigBuilder.prototype.kendoButtonGroup = function kendoButtonGroup() {
    this.resources.push('./buttongroup/buttongroup');
    return this;
  };

  KendoConfigBuilder.prototype.kendoBarcode = function kendoBarcode() {
    this.resources.push('./barcode/barcode');
    return this;
  };

  KendoConfigBuilder.prototype.kendoCalendar = function kendoCalendar() {
    this.resources.push('./calendar/calendar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/sparkline');
    this.resources.push('./chart/stock');
    this.resources.push('./chart/treemap');
    return this;
  };

  KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
    this.resources.push('./combobox/combobox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoContextMenu = function kendoContextMenu() {
    this.resources.push('./contextmenu/contextmenu');
    return this;
  };

  KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoColorPalette = function kendoColorPalette() {
    this.resources.push('./colorpalette/colorpalette');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
    this.resources.push('./datepicker/datepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDateTimePicker = function kendoDateTimePicker() {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDiagram = function kendoDiagram() {
    this.resources.push('./diagram/diagram');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDraggable = function kendoDraggable() {
    this.resources.push('./draggable/draggable');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDropTarget = function kendoDropTarget() {
    this.resources.push('./drop-target/drop-target');
    this.resources.push('./drop-target/drop-target-area');
    return this;
  };

  KendoConfigBuilder.prototype.kendoEditor = function kendoEditor() {
    this.resources.push('./editor/editor');
    return this;
  };

  KendoConfigBuilder.prototype.kendoFlatColorPicker = function kendoFlatColorPicker() {
    this.resources.push('./flatcolorpicker/flatcolorpicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoGantt = function kendoGantt() {
    this.resources.push('./gantt/gantt');
    this.resources.push('./gantt/gantt-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/col');
    this.resources.push('./grid/grid-toolbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoLinearGauge = function kendoLinearGauge() {
    this.resources.push('./gauges/linear-gauge');
    return this;
  };

  KendoConfigBuilder.prototype.kendoListView = function kendoListView() {
    this.resources.push('./listview/listview');
    return this;
  };

  KendoConfigBuilder.prototype.kendoNotification = function kendoNotification() {
    this.resources.push('./notification/notification');
    this.resources.push('./notification/notification-template');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMap = function kendoMap() {
    this.resources.push('./map/map');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
    this.resources.push('./menu/menu');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMaskedTextBox = function kendoMaskedTextBox() {
    this.resources.push('./maskedtextbox/maskedtextbox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMultiSelect = function kendoMultiSelect() {
    this.resources.push('./multiselect/multiselect');
    return this;
  };

  KendoConfigBuilder.prototype.kendoNumericTextBox = function kendoNumericTextBox() {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoPanelBar = function kendoPanelBar() {
    this.resources.push('./panelbar/panelbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoPivotGrid = function kendoPivotGrid() {
    this.resources.push('./pivotgrid/pivotgrid');
    this.resources.push('./pivotgrid/pivotconfigurator');
    return this;
  };

  KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
    this.resources.push('./progressbar/progressbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoQRCode = function kendoQRCode() {
    this.resources.push('./qrcode/qrcode');
    return this;
  };

  KendoConfigBuilder.prototype.kendoRadialGauge = function kendoRadialGauge() {
    this.resources.push('./gauges/radial-gauge');
    return this;
  };

  KendoConfigBuilder.prototype.kendoResponsivePanel = function kendoResponsivePanel() {
    this.resources.push('./responsivepanel/responsivepanel');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScrollView = function kendoScrollView() {
    this.resources.push('./scrollview/scrollview');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
    this.resources.push('./scheduler/scheduler');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
    this.resources.push('./slider/slider');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSortable = function kendoSortable() {
    this.resources.push('./sortable/sortable');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSpreadsheet = function kendoSpreadsheet() {
    this.resources.push('./spreadsheet/spreadsheet');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSplitter = function kendoSplitter() {
    this.resources.push('./splitter/splitter');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
    this.resources.push('./slider/slider');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSwitch = function kendoSwitch() {
    this.resources.push('./switch/switch');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
    this.resources.push('./tabstrip/tabstrip');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTreeList = function kendoTreeList() {
    this.resources.push('./treelist/treelist');
    this.resources.push('./treelist/tree-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
    this.resources.push('./toolbar/toolbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
    this.resources.push('./treeview/treeview');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTimePicker = function kendoTimePicker() {
    this.resources.push('./timepicker/timepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
    this.resources.push('./toolbar/toolbar');
    this.resources.push('./toolbar/toolbar-item');
    this.resources.push('./toolbar/toolbar-item-button');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTooltip = function kendoTooltip() {
    this.resources.push('./tooltip/tooltip');
    return this;
  };

  KendoConfigBuilder.prototype.kendoRangeSlider = function kendoRangeSlider() {
    this.resources.push('./rangeslider/rangeslider');
    return this;
  };

  KendoConfigBuilder.prototype.kendoUpload = function kendoUpload() {
    this.resources.push('./upload/upload');
    return this;
  };

  KendoConfigBuilder.prototype.kendoValidator = function kendoValidator() {
    this.resources.push('./validator/validator');
    return this;
  };

  KendoConfigBuilder.prototype.kendoWindow = function kendoWindow() {
    this.resources.push('./window/window');
    return this;
  };

  return KendoConfigBuilder;
})();

exports.KendoConfigBuilder = KendoConfigBuilder;

function configure(aurelia, configCallback) {
  var builder = aurelia.container.get(KendoConfigBuilder);

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  if (builder.registerRepeatStrategy) {
    var repeatStrategyLocator = aurelia.container.get(_aureliaTemplatingResources.RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(function (items) {
      return items instanceof kendo.data.ObservableArray;
    }, new _aureliaTemplatingResources.ArrayRepeatStrategy());
  }
}

var AutoComplete = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(AutoComplete, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function AutoComplete(element, widgetBase, viewResources) {
    _classCallCheck(this, _AutoComplete);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useViewResources(viewResources).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  AutoComplete.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    var inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.target = inputs[0];
    } else {
      this.target = document.createElement('input');
      this.element.appendChild(this.target);
    }
  };

  AutoComplete.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  AutoComplete.prototype.recreate = function recreate() {
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: this.target,
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
  AutoComplete = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(AutoComplete) || AutoComplete;
  AutoComplete = generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaTemplating.customElement(constants.elementPrefix + 'autocomplete')(AutoComplete) || AutoComplete;
  return AutoComplete;
})();

exports.AutoComplete = AutoComplete;

var Barcode = (function () {
  function Barcode(element, widgetBase) {
    _classCallCheck(this, _Barcode);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoBarcode').linkViewModel(this);
  }

  Barcode.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Barcode.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Barcode.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Barcode.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Barcode = Barcode;
  Barcode = _aureliaDependencyInjection.inject(Element, WidgetBase)(Barcode) || Barcode;
  Barcode = generateBindables('kendoBarcode')(Barcode) || Barcode;
  Barcode = _aureliaTemplating.customAttribute(constants.attributePrefix + 'barcode')(Barcode) || Barcode;
  return Barcode;
})();

exports.Barcode = Barcode;

var Button = (function () {
  var _instanceInitializers2 = {};

  _createDecoratedClass(Button, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers2);

  function Button(element, widgetBase) {
    _classCallCheck(this, _Button);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers2);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoButton').bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  Button.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Button.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Button.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Button.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
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

var ButtonGroup = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(ButtonGroup, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function ButtonGroup(element, widgetBase) {
    _classCallCheck(this, _ButtonGroup);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers3);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMobileButtonGroup').bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  ButtonGroup.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ButtonGroup.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ButtonGroup.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ButtonGroup.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  ButtonGroup.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ButtonGroup = ButtonGroup;
  ButtonGroup = _aureliaDependencyInjection.inject(Element, WidgetBase)(ButtonGroup) || ButtonGroup;
  ButtonGroup = generateBindables('kendoMobileButtonGroup')(ButtonGroup) || ButtonGroup;
  ButtonGroup = _aureliaTemplating.customAttribute(constants.attributePrefix + 'buttongroup')(ButtonGroup) || ButtonGroup;
  return ButtonGroup;
})();

exports.ButtonGroup = ButtonGroup;

var Calendar = (function () {
  function Calendar(element, widgetBase, viewResources) {
    _classCallCheck(this, _Calendar);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoCalendar').linkViewModel(this).useValueBinding();
  }

  Calendar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Calendar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  function Chart(element, widgetBase) {
    _classCallCheck(this, _Chart);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this);
  }

  Chart.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Chart.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  Sparkline = _aureliaDependencyInjection.inject(Element, WidgetBase)(Sparkline) || Sparkline;
  Sparkline = generateBindables('kendoSparkline')(Sparkline) || Sparkline;
  Sparkline = _aureliaTemplating.customElement(constants.elementPrefix + 'sparkline')(Sparkline) || Sparkline;
  return Sparkline;
})();

exports.Sparkline = Sparkline;

var Stock = (function () {
  function Stock(element, widgetBase) {
    _classCallCheck(this, _Stock);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this);
  }

  Stock.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Stock.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  function TreeMap(element, widgetBase) {
    _classCallCheck(this, _TreeMap);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
  }

  TreeMap.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeMap.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  function ColorPalette(element, widgetBase) {
    _classCallCheck(this, _ColorPalette);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
  }

  ColorPalette.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ColorPalette.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ColorPalette.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ColorPalette.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
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
  var _instanceInitializers4 = {};

  _createDecoratedClass(ColorPicker, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers4);

  function ColorPicker(element, widgetBase) {
    _classCallCheck(this, _ColorPicker);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers4);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
  }

  ColorPicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ColorPicker.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ColorPicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ColorPicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
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

var ComboBox = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(ComboBox, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers5);

  function ComboBox(element, widgetBase, viewResources) {
    _classCallCheck(this, _ComboBox);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers5);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoComboBox').linkViewModel(this).useValueBinding().useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  ComboBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ComboBox.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ComboBox.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoComboBox', this.templates);

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
  ComboBox = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(ComboBox) || ComboBox;
  ComboBox = generateBindables('kendoComboBox')(ComboBox) || ComboBox;
  ComboBox = _aureliaTemplating.customElement(constants.elementPrefix + 'combobox')(ComboBox) || ComboBox;
  return ComboBox;
})();

exports.ComboBox = ComboBox;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

var bindables = { "kendoAutoComplete": ["animation", "dataSource", "dataTextField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "minLength", "name", "placeholder", "popup", "separator", "suggest", "template", "valuePrimitive", "virtual"], "kendoBarcode": ["background", "border", "checksum", "color", "height", "name", "padding", "renderAs", "text", "type", "value", "width"], "kendoButton": ["enable", "icon", "imageUrl", "name", "spriteCssClass"], "kendoCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "start", "value"], "kendoChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "legend", "name", "panes", "pannable", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis", "xAxis", "yAxis", "zoomable"], "kendoColorPalette": ["columns", "name", "palette", "tileSize", "value"], "kendoColorPicker": ["buttons", "columns", "messages", "name", "opacity", "palette", "preview", "tileSize", "toolIcon", "value"], "kendoComboBox": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "placeholder", "popup", "suggest", "template", "text", "value", "valuePrimitive", "virtual"], "kendoContextMenu": ["alignToAnchor", "animation", "closeOnClick", "dataSource", "direction", "filter", "hoverDelay", "name", "orientation", "popupCollision", "showOn", "target"], "kendoDatePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "parseFormats", "start", "value"], "kendoDateTimePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "interval", "max", "min", "month", "name", "parseFormats", "start", "timeFormat", "value"], "kendoDiagram": ["autoBind", "connectionDefaults", "connections", "connectionsDataSource", "dataSource", "editable", "layout", "name", "pannable", "pdf", "selectable", "shapeDefaults", "shapes", "template", "zoom", "zoomMax", "zoomMin", "zoomRate"], "kendoDraggable": ["axis", "container", "cursorOffset", "distance", "filter", "group", "hint", "ignore"], "kendoDropDownList": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "ignoreCase", "index", "minLength", "name", "optionLabel", "optionLabelTemplate", "popup", "template", "text", "value", "valuePrimitive", "valueTemplate", "virtual"], "kendoDropTarget": ["group"], "kendoDropTargetArea": ["filter", "group"], "kendoEditor": ["domain", "encoded", "fileBrowser", "imageBrowser", "messages", "name", "pdf", "resizable", "serialization", "stylesheets", "tools"], "kendoFlatColorPicker": ["autoupdate", "buttons", "messages", "name", "opacity", "preview", "value"], "kendoGantt": ["assignments", "autoBind", "columnResizeHandleWidth", "columns", "currentTimeMarker", "dataSource", "dependencies", "editable", "height", "hourSpan", "listWidth", "messages", "name", "navigatable", "pdf", "resizable", "resources", "rowHeight", "selectable", "showWorkDays", "showWorkHours", "snap", "taskTemplate", "toolbar", "tooltip", "views", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoGrid": ["allowCopy", "altRowTemplate", "autoBind", "columnMenu", "columnResizeHandleWidth", "columns", "dataSource", "detailTemplate", "editable", "excel", "filterable", "groupable", "height", "messages", "mobile", "name", "navigatable", "noRecords", "pageable", "pdf", "reorderable", "resizable", "rowTemplate", "scrollable", "selectable", "sortable", "toolbar"], "kendoLinearGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoListView": ["altTemplate", "autoBind", "dataSource", "editTemplate", "name", "navigatable", "selectable", "template"], "kendoMap": ["center", "controls", "layerDefaults", "layers", "markerDefaults", "markers", "maxZoom", "minSize", "minZoom", "name", "pannable", "wraparound", "zoom", "zoomable"], "kendoMaskedTextBox": ["clearPromptChar", "culture", "mask", "name", "promptChar", "rules", "unmaskOnPost", "value"], "kendoMenu": ["animation", "closeOnClick", "dataSource", "direction", "hoverDelay", "name", "openOnClick", "orientation", "popupCollision"], "kendoMobileActionSheet": ["cancel", "name", "popup", "type"], "kendoMobileBackButton": ["name"], "kendoMobileButton": ["badge", "clickOn", "enable", "icon", "name"], "kendoMobileButtonGroup": ["enable", "index", "name", "selectOn"], "kendoMobileCollapsible": ["animation", "collapsed", "expandIcon", "iconPosition", "inset", "name"], "kendoMobileDetailButton": ["name"], "kendoMobileDrawer": ["container", "name", "position", "swipeToOpen", "swipeToOpenViews", "title", "views"], "kendoMobileLayout": ["id", "name", "platform"], "kendoMobileListView": ["appendOnRefresh", "autoBind", "dataSource", "endlessScroll", "filterable", "fixedHeaders", "headerTemplate", "loadMore", "messages", "name", "pullParameters", "pullToRefresh", "style", "template", "type", "virtualViewSize"], "kendoMobileLoader": ["name"], "kendoMobileModalView": ["height", "modal", "name", "width"], "kendoMobileNavBar": ["name"], "kendoMobilePane": ["collapsible", "initial", "layout", "loading", "name", "portraitWidth", "transition"], "kendoMobilePopOver": ["name", "pane", "popup"], "kendoMobileScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "itemsPerPage", "name", "page", "pageSize", "template", "velocityThreshold"], "kendoMobileScroller": ["elastic", "messages", "name", "pullOffset", "pullToRefresh", "useNative", "visibleScrollHints", "zoom"], "kendoMobileSplitView": ["name", "style"], "kendoMobileSwitch": ["checked", "enable", "name", "offLabel", "onLabel"], "kendoMobileTabStrip": ["name", "selectedIndex"], "kendoMobileView": ["model", "name", "reload", "scroller", "stretch", "title", "useNativeScrolling", "zoom"], "kendoMultiSelect": ["animation", "autoBind", "autoClose", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "itemTemplate", "maxSelectedItems", "minLength", "name", "placeholder", "popup", "tagMode", "tagTemplate", "value", "valuePrimitive", "virtual"], "kendoNotification": ["allowHideAfter", "animation", "appendTo", "autoHideAfter", "button", "height", "hideOnClick", "name", "position", "stacking", "templates", "width"], "kendoNumericTextBox": ["culture", "decimals", "downArrowText", "format", "max", "min", "name", "placeholder", "spinners", "step", "upArrowText", "value"], "kendoPager": ["autoBind", "buttonCount", "dataSource", "info", "input", "linkTemplate", "messages", "name", "numeric", "pageSizes", "previousNext", "refresh", "selectTemplate"], "kendoPanelBar": ["animation", "contentUrls", "dataSource", "expandMode", "name"], "kendoPivotConfigurator": ["dataSource", "filterable", "height", "messages", "name", "sortable"], "kendoPivotGrid": ["autoBind", "columnHeaderTemplate", "columnWidth", "dataCellTemplate", "dataSource", "excel", "filterable", "height", "kpiStatusTemplate", "kpiTrendTemplate", "messages", "name", "pdf", "reorderable", "rowHeaderTemplate", "sortable"], "kendoPopup": ["anchor", "animation", "appendTo", "name", "origin", "position"], "kendoProgressBar": ["animation", "chunkCount", "enable", "max", "min", "name", "orientation", "reverse", "showStatus", "type", "value"], "kendoQRCode": ["background", "border", "color", "encoding", "errorCorrection", "name", "padding", "renderAs", "size", "value"], "kendoRadialGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoRangeSlider": ["largeStep", "max", "min", "name", "orientation", "selectionEnd", "selectionStart", "smallStep", "tickPlacement", "tooltip"], "kendoResponsivePanel": ["autoClose", "breakpoint", "name", "orientation", "toggleButton"], "kendoScheduler": ["allDayEventTemplate", "allDaySlot", "autoBind", "currentTimeMarker", "dataSource", "date", "dateHeaderTemplate", "editable", "endTime", "eventTemplate", "footer", "group", "groupHeaderTemplate", "height", "majorTick", "majorTimeHeaderTemplate", "max", "messages", "min", "minorTickCount", "minorTimeHeaderTemplate", "mobile", "name", "pdf", "resources", "selectable", "showWorkHours", "snap", "startTime", "timezone", "toolbar", "views", "width", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoSlider": ["decreaseButtonTitle", "increaseButtonTitle", "largeStep", "max", "min", "name", "orientation", "showButtons", "smallStep", "tickPlacement", "tooltip", "value"], "kendoSortable": ["autoScroll", "axis", "connectWith", "container", "cursor", "cursorOffset", "disabled", "filter", "handler", "hint", "holdToDrag", "ignore", "name", "placeholder"], "kendoSparkline": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "data", "dataSource", "name", "plotArea", "pointWidth", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "tooltip", "transitions", "type", "valueAxis"], "kendoSplitter": ["name", "orientation", "panes"], "kendoSpreadsheet": ["activeSheet", "columnWidth", "columns", "excel", "headerHeight", "headerWidth", "name", "pdf", "rowHeight", "rows", "sheets", "sheetsbar", "toolbar"], "kendoStockChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "dateField", "legend", "name", "navigator", "panes", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis"], "kendoTabStrip": ["animation", "collapsible", "contentUrls", "dataContentField", "dataContentUrlField", "dataImageUrlField", "dataSource", "dataSpriteCssClass", "dataTextField", "dataUrlField", "name", "navigatable", "scrollable", "tabPosition", "value"], "kendoTimePicker": ["animation", "culture", "dates", "format", "interval", "max", "min", "name", "parseFormats", "value"], "kendoToolBar": ["items", "name", "resizable"], "kendoTooltip": ["animation", "autoHide", "callout", "content", "filter", "height", "iframe", "name", "position", "showAfter", "showOn", "width"], "kendoTouch": ["doubleTapTimeout", "enableSwipe", "filter", "maxDuration", "maxYDelta", "minHold", "minXDelta", "multiTouch", "name", "surface"], "kendoTreeList": ["autoBind", "columnMenu", "columns", "dataSource", "editable", "excel", "filterable", "height", "messages", "name", "pdf", "reorderable", "resizable", "scrollable", "selectable", "sortable", "toolbar"], "kendoTreeMap": ["autoBind", "colorField", "colors", "dataSource", "name", "template", "textField", "theme", "type", "valueField"], "kendoTreeView": ["animation", "autoBind", "autoScroll", "checkboxes", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dragAndDrop", "loadOnDemand", "messages", "name", "template"], "kendoUpload": ["async", "enabled", "files", "localization", "multiple", "name", "showFileList", "template"], "kendoValidator": ["errorTemplate", "messages", "name", "rules", "validateOnBlur"], "kendoWindow": ["actions", "animation", "appendTo", "autoFocus", "content", "draggable", "height", "iframe", "maxHeight", "maxWidth", "minHeight", "minWidth", "modal", "name", "pinned", "position", "resizable", "scrollable", "title", "visible", "width"], "GanttColumn": ["editable", "field", "format", "sortable", "title", "width"], "GridColumn": ["aggregates", "attributes", "columns", "command", "encoded", "field", "filterable", "footerTemplate", "format", "groupFooterTemplate", "groupHeaderTemplate", "groupable", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "values", "width", "editor"], "GridToolbarItem": ["name", "template", "text"], "ToolBarItem": ["attributes", "buttons", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "menuButtons", "overflow", "overflowTemplate", "primary", "selected", "showIcon", "showText", "spriteCssClass", "template", "text", "togglable", "toggle", "type", "url"], "ToolBarItemButton": ["attributes", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "selected", "showIcon", "showText", "spriteCssClass", "text", "togglable", "toggle", "url"], "TreeListColumn": ["attributes", "command", "encoded", "expandable", "field", "filterable", "footerTemplate", "format", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "width", "editor"] };
exports.bindables = bindables;
var constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-',
  attributePrefix: 'ak-',
  elementPrefix: 'ak-'
};

exports.constants = constants;

var ControlProperties = (function () {
  function ControlProperties(util) {
    _classCallCheck(this, _ControlProperties);

    this.cache = {};

    this.util = util;
  }

  ControlProperties.prototype.getProperties = function getProperties(controlName) {
    var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    var options1 = this.getWidgetProperties(controlName);

    var options2 = this.getGeneratedProperties(controlName);

    var keys = options1.concat(options2.filter(function (item) {
      return options1.indexOf(item) < 0;
    }));
    keys = keys.concat(extraProperties.filter(function (item) {
      return keys.indexOf(item) < 0;
    }));

    this.cache[controlName] = keys;

    return keys;
  };

  ControlProperties.prototype.getGeneratedProperties = function getGeneratedProperties(controlName) {
    if (!bindables[controlName]) {
      throw new Error(controlName + ' not found in generated bindables.js');
    }

    return bindables[controlName];
  };

  ControlProperties.prototype.getWidgetProperties = function getWidgetProperties(controlName) {
    if (jQuery.fn[controlName]) {
      return Object.keys(jQuery.fn[controlName].widget.prototype.options);
    }

    return [];
  };

  ControlProperties.prototype.getTemplateProperties = function getTemplateProperties(controlName) {
    var _this2 = this;

    var properties = this.getProperties(controlName);

    var templates = properties.filter(function (prop) {
      return _this2.util.isTemplateProperty(prop);
    });

    return templates;
  };

  var _ControlProperties = ControlProperties;
  ControlProperties = _aureliaDependencyInjection.inject(Util)(ControlProperties) || ControlProperties;
  return ControlProperties;
})();

exports.ControlProperties = ControlProperties;

function generateBindables(controlName) {
  var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var controlProperties = container.get(ControlProperties);
    var util = container.get(Util);
    var optionKeys = controlProperties.getProperties(controlName, extraProperties);

    optionKeys.push('widget');
    optionKeys.push('options');
    optionKeys.push('noInit');

    for (var i = 0; i < optionKeys.length; i++) {
      var option = optionKeys[i];

      var nameOrConfigOrTarget = {
        name: util.getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
      }

      var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

function delayed() {
  return function (target, key, descriptor) {
    var taskQueue = _aureliaDependencyInjection.Container.instance.get(_aureliaTaskQueue.TaskQueue);
    var ptr = descriptor.value;

    descriptor.value = function () {
      var _this3 = this;

      for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      taskQueue.queueTask(function () {
        return ptr.apply(_this3, args);
      });
    };

    return descriptor;
  };
}

var NotifyBindingBehavior = (function () {
  function NotifyBindingBehavior(eventManager) {
    _classCallCheck(this, _NotifyBindingBehavior);

    this.eventManager = eventManager;
  }

  NotifyBindingBehavior.prototype.bind = function bind(binding, scope, target, fieldName) {
    if (!binding.updateSource) return;

    var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    binding.targetObserver = targetObserver;
    targetObserver.originalHandler = binding.targetObserver.handler;
    var handler = this.eventManager.createElementHandler(['blur']);
    targetObserver.handler = handler;

    var observable = target || binding.source.bindingContext;
    var field = fieldName || binding.sourceExpression.expression.name;
    var intercept = binding.updateSource;

    binding['intercepted-updateSource'] = intercept;
    binding.updateSource = function (value) {
      if (observable.set && observable.trigger) {
        setTimeout(function () {
          return observable.trigger.call(observable, 'change', { field: field });
        }, 100);

        if (observable.dirty === false) {
          observable.dirty = true;
        }
      }

      return intercept.call(binding, value);
    };
  };

  NotifyBindingBehavior.prototype.unbind = function unbind(binding, scope) {
    if (!binding['intercepted-updateSource']) return;

    binding.updateSource = binding['intercepted-updateSource'];
    binding['intercepted-updateSource'] = null;
  };

  var _NotifyBindingBehavior = NotifyBindingBehavior;
  NotifyBindingBehavior = _aureliaDependencyInjection.inject(_aureliaBinding.EventManager)(NotifyBindingBehavior) || NotifyBindingBehavior;
  return NotifyBindingBehavior;
})();

exports.NotifyBindingBehavior = NotifyBindingBehavior;

var OptionsBuilder = (function () {
  function OptionsBuilder(controlProperties, util) {
    _classCallCheck(this, _OptionsBuilder);

    this.controlProperties = controlProperties;
    this.util = util;
  }

  OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
    var options = {};
    var props = this.controlProperties.getProperties(className);

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = viewModel[this.util.getBindablePropertyName(prop)];

      if (this.util.hasValue(value)) {
        options[prop] = value;
      }
    }

    if (viewModel.afterOptionsBuild) {
      viewModel.afterOptionsBuild(options);
    }

    return this.util.pruneOptions(options);
  };

  var _OptionsBuilder = OptionsBuilder;
  OptionsBuilder = _aureliaDependencyInjection.inject(ControlProperties, Util)(OptionsBuilder) || OptionsBuilder;
  return OptionsBuilder;
})();

exports.OptionsBuilder = OptionsBuilder;

var TemplateCompiler = (function () {
  function TemplateCompiler(templatingEngine, util) {
    _classCallCheck(this, _TemplateCompiler);

    this.isInitialized = false;

    this.templatingEngine = templatingEngine;
    this.util = util;
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
    var _this4 = this;

    var _loop = function (i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        var dataItem = _data.dataItem || _data.aggregate || _data;

        if (!_this4.util.isObject(dataItem)) {
          ctx = {
            dataItem: dataItem
          };
        } else {
          ctx = dataItem;
        }
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this4.enhanceView($parent, elem, ctx, viewResources);
        });
      } else {
        _this4.enhanceView($parent, element, ctx, viewResources);
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
          bindingContext: ctx,
          overrideContext: _aureliaBinding.createOverrideContext(ctx, $parent),
          element: element,
          resources: viewResources
        });
      } else {
        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: _aureliaBinding.createOverrideContext(ctx, $parent),
          element: element
        });
      }

      $(element).data('viewInstance', view);
    }

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
  TemplateCompiler = _aureliaDependencyInjection.inject(_aureliaTemplating.TemplatingEngine, Util)(TemplateCompiler) || TemplateCompiler;
  return TemplateCompiler;
})();

exports.TemplateCompiler = TemplateCompiler;

var Template = (function () {
  var _instanceInitializers6 = {};

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
  }, {
    key: 'kendoTemplate',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }], null, _instanceInitializers6);

  function Template(targetInstruction) {
    _classCallCheck(this, _Template);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'for', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'kendoTemplate', _instanceInitializers6);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _Template = Template;
  Template = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(Template) || Template;
  Template = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }
    element.innerHTML = '';
  })(Template) || Template;
  Template = _aureliaTemplating.noView()(Template) || Template;
  Template = _aureliaTemplating.customElement(constants.elementPrefix + 'template')(Template) || Template;
  return Template;
})();

exports.Template = Template;

var capitalMatcher = /([A-Z])/g;

var Util = (function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  Util.prototype.addHyphenAndLower = function addHyphenAndLower(char) {
    return '-' + char.toLowerCase();
  };

  Util.prototype._hyphenate = function _hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, this.addHyphenAndLower);
  };

  Util.prototype._unhyphenate = function _unhyphenate(name) {
    return name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
    var name = '' + constants.bindablePrefix + propertyName;

    return this._unhyphenate(name);
  };

  Util.prototype.getKendoPropertyName = function getKendoPropertyName(propertyName) {
    var withoutPrefix = propertyName.substring(1);

    return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
  };

  Util.prototype.getEventsFromAttributes = function getEventsFromAttributes(element) {
    var attributes = Array.prototype.slice.call(element.attributes);
    var events = [];

    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      var attributeName = attribute.name;
      if (!attributeName.startsWith(constants.eventPrefix)) continue;

      var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

      var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

      var camelCased = this._unhyphenate(withoutTriggerDelegate);

      events.push(camelCased);
    }

    return events;
  };

  Util.prototype.pruneOptions = function pruneOptions(options) {
    var returnOptions = {};

    for (var prop in options) {
      if (this.hasValue(options[prop])) {
        returnOptions[prop] = options[prop];
      }
    }

    return returnOptions;
  };

  Util.prototype.hasValue = function hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  };

  Util.prototype.fireEvent = function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  };

  Util.prototype.fireKendoEvent = function fireKendoEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return this.fireEvent(element, '' + constants.eventPrefix + name, data);
  };

  Util.prototype.isTemplateProperty = function isTemplateProperty(propertyName) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  };

  Util.prototype.isObject = function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  };

  return Util;
})();

exports.Util = Util;

var logger = LogManager.getLogger('aurelia-kendoui-bridge');

var WidgetBase = (function () {
  function WidgetBase(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder) {
    _classCallCheck(this, _WidgetBase);

    this.bindingsToKendo = [];

    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.configBuilder = configBuilder;
    this.templateGatherer = templateGatherer;
    templateCompiler.initialize();
  }

  WidgetBase.prototype.control = function control(controlName) {
    if (!controlName || !kendo.jQuery.fn[controlName]) {
      throw new Error('The name of control ' + controlName + ' is invalid or not set');
    }

    this.controlName = controlName;

    var ctor = kendo.jQuery.fn[this.controlName];
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
    var valueBindingProperty = arguments.length <= 0 || arguments[0] === undefined ? 'kValue' : arguments[0];
    var valueFunction = arguments.length <= 1 || arguments[1] === undefined ? 'value' : arguments[1];

    this.valueBindingProperty = valueBindingProperty;
    this.valueFunction = valueFunction;
    this.withValueBinding = true;

    this.bindToKendo(valueBindingProperty, valueFunction);

    return this;
  };

  WidgetBase.prototype.bindToKendo = function bindToKendo(propertyName, functionName) {
    this.bindingsToKendo.push({
      propertyName: propertyName,
      functionName: functionName
    });

    return this;
  };

  WidgetBase.prototype.createWidget = function createWidget(options) {
    var _this5 = this;

    if (!options) {
      throw new Error('the createWidget() function needs to be called with an object');
    }

    if (!options.element) {
      throw new Error('element is not set');
    }

    if (this.viewModel && this.viewModel.kWidget) {
      this.destroy(this.viewModel.kWidget);
    }

    var allOptions = this._getOptions(options.rootElement || options.element);

    if (options.beforeInitialize) {
      options.beforeInitialize(allOptions);
    }

    Object.assign(allOptions, {
      _$parent: [options.parentCtx],
      _$resources: [this.viewResources]
    });

    if (this.configBuilder.debugMode) {
      logger.debug('initializing ' + this.controlName + ' with the following config', allOptions);
    }

    var widget = this._createWidget(options.element, allOptions, this.controlName);

    widget._$parent = options.parentCtx;
    widget._$resources = this.viewResources;

    if (this.withValueBinding) {
      widget.first('change', function (args) {
        return _this5._handleValueChange(args.sender);
      });
      widget.first('dataBound', function (args) {
        return _this5._handleValueChange(args.sender);
      });
    }

    this.bindingsToKendo.forEach(function (binding) {
      var value = _this5.viewModel[binding.propertyName];

      if (typeof value !== 'undefined' && value !== null && value !== '') {
        widget[binding.functionName](value);
      }
    });

    if (options.afterInitialize) {
      options.afterInitialize();
    }

    return widget;
  };

  WidgetBase.prototype._createWidget = function _createWidget(element, options, controlName) {
    return kendo.jQuery(element)[controlName](options).data(controlName);
  };

  WidgetBase.prototype._getOptions = function _getOptions(element) {
    var options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
    var eventOptions = this.getEventOptions(element);

    return this.util.pruneOptions(Object.assign({}, this.viewModel.kOptions || {}, options, eventOptions));
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
    var _this6 = this;

    var options = {};
    var allowedEvents = this.kendoEvents;
    var delayedExecution = ['change'];

    var events = this.util.getEventsFromAttributes(element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this6.controlName + ' control');
      }

      if (delayedExecution.includes(event)) {
        options[event] = function (e) {
          _this6.taskQueue.queueMicroTask(function () {
            return _this6.util.fireKendoEvent(element, _this6.util._hyphenate(event), e);
          });
        };
      } else {
        options[event] = function (e) {
          return _this6.util.fireKendoEvent(element, _this6.util._hyphenate(event), e);
        };
      }
    });

    return options;
  };

  WidgetBase.prototype._handleValueChange = function _handleValueChange(widget) {
    this.viewModel[this.valueBindingProperty] = this.getValue(widget);
  };

  WidgetBase.prototype.getValue = function getValue(widget) {
    return widget[this.valueFunction]();
  };

  WidgetBase.prototype.handlePropertyChanged = function handlePropertyChanged(widget, property, newValue, oldValue) {
    var binding = this.bindingsToKendo.find(function (i) {
      return i.propertyName === property;
    });
    if (binding) {
      widget[binding.functionName](newValue);
    }
  };

  WidgetBase.prototype.useTemplates = function useTemplates(target, controlName, templates) {
    return this.templateGatherer.useTemplates(target, controlName, templates);
  };

  WidgetBase.prototype.destroy = function destroy(widget) {
    if (widget) {
      kendo.destroy(widget.element);
      widget = null;

      if (this.viewModel.kWidget) {
        this.viewModel.kWidget = null;
      }
    }
  };

  var _WidgetBase = WidgetBase;
  WidgetBase = _aureliaDependencyInjection.inject(_aureliaTaskQueue.TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder)(WidgetBase) || WidgetBase;
  WidgetBase = _aureliaDependencyInjection.transient()(WidgetBase) || WidgetBase;
  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var ContextMenu = (function () {
  function ContextMenu(element, widgetBase) {
    _classCallCheck(this, _ContextMenu);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoContextMenu').linkViewModel(this);
  }

  ContextMenu.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ContextMenu.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ContextMenu.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ContextMenu.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ContextMenu = ContextMenu;
  ContextMenu = _aureliaDependencyInjection.inject(Element, WidgetBase)(ContextMenu) || ContextMenu;
  ContextMenu = generateBindables('kendoContextMenu')(ContextMenu) || ContextMenu;
  ContextMenu = _aureliaTemplating.customAttribute(constants.attributePrefix + 'contextmenu')(ContextMenu) || ContextMenu;
  return ContextMenu;
})();

exports.ContextMenu = ContextMenu;

var DatePicker = (function () {
  var _instanceInitializers7 = {};

  _createDecoratedClass(DatePicker, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers7);

  function DatePicker(element, widgetBase) {
    _classCallCheck(this, _DatePicker);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers7);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers7);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDatePicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly').useValueBinding();
  }

  DatePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DatePicker.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  var _instanceInitializers8 = {};

  _createDecoratedClass(DateTimePicker, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers8);

  function DateTimePicker(element, widgetBase) {
    _classCallCheck(this, _DateTimePicker);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers8);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDateTimePicker').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  DateTimePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DateTimePicker.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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

var Diagram = (function () {
  function Diagram(element, widgetBase) {
    _classCallCheck(this, _Diagram);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDiagram').linkViewModel(this);
  }

  Diagram.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Diagram.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Diagram.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Diagram.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Diagram = Diagram;
  Diagram = _aureliaDependencyInjection.inject(Element, WidgetBase)(Diagram) || Diagram;
  Diagram = generateBindables('kendoDiagram')(Diagram) || Diagram;
  Diagram = _aureliaTemplating.customElement(constants.elementPrefix + 'diagram')(Diagram) || Diagram;
  return Diagram;
})();

exports.Diagram = Diagram;

var Draggabke = (function () {
  function Draggabke(element, widgetBase) {
    _classCallCheck(this, _Draggabke);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDraggable').linkViewModel(this);
  }

  Draggabke.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Draggabke.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Draggabke.prototype.recreate = function recreate() {
    var _this7 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(options) {
        return _this7.beforeInitialize(options);
      }
    });
  };

  Draggabke.prototype.beforeInitialize = function beforeInitialize(options) {
    if (options.container) {
      Object.assign(options, { container: $(options.container) });
    }
  };

  Draggabke.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Draggabke = Draggabke;
  Draggabke = _aureliaDependencyInjection.inject(Element, WidgetBase)(Draggabke) || Draggabke;
  Draggabke = generateBindables('kendoDraggable')(Draggabke) || Draggabke;
  Draggabke = _aureliaTemplating.customAttribute(constants.attributePrefix + 'draggable')(Draggabke) || Draggabke;
  return Draggabke;
})();

exports.Draggabke = Draggabke;

var DropTargetArea = (function () {
  function DropTargetArea(element, widgetBase) {
    _classCallCheck(this, _DropTargetArea);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTargetArea').linkViewModel(this);
  }

  DropTargetArea.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropTargetArea.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTargetArea.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DropTargetArea.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropTargetArea = DropTargetArea;
  DropTargetArea = _aureliaDependencyInjection.inject(Element, WidgetBase)(DropTargetArea) || DropTargetArea;
  DropTargetArea = generateBindables('kendoDropTargetArea')(DropTargetArea) || DropTargetArea;
  DropTargetArea = _aureliaTemplating.customAttribute(constants.attributePrefix + 'drop-target-area')(DropTargetArea) || DropTargetArea;
  return DropTargetArea;
})();

exports.DropTargetArea = DropTargetArea;

var DropTarget = (function () {
  function DropTarget(element, widgetBase) {
    _classCallCheck(this, _DropTarget);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTarget').linkViewModel(this);
  }

  DropTarget.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropTarget.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTarget.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DropTarget.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropTarget = DropTarget;
  DropTarget = _aureliaDependencyInjection.inject(Element, WidgetBase)(DropTarget) || DropTarget;
  DropTarget = generateBindables('kendoDropTarget')(DropTarget) || DropTarget;
  DropTarget = _aureliaTemplating.customAttribute(constants.attributePrefix + 'drop-target')(DropTarget) || DropTarget;
  return DropTarget;
})();

exports.DropTarget = DropTarget;

var DropDownList = (function () {
  var _instanceInitializers9 = {};

  _createDecoratedClass(DropDownList, [{
    key: 'kNoValueBinding',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers9);

  function DropDownList(element, widgetBase, viewResources) {
    _classCallCheck(this, _DropDownList);

    _defineDecoratedPropertyDescriptor(this, 'kNoValueBinding', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers9);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  DropDownList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropDownList.prototype.attached = function attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropDownList.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoDropDownList', this.templates);

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
  DropDownList = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(DropDownList) || DropDownList;
  DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaTemplating.customElement(constants.elementPrefix + 'drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})();

exports.DropDownList = DropDownList;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

var Editor = (function () {
  function Editor(element, widgetBase) {
    _classCallCheck(this, _Editor);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoEditor').linkViewModel(this).useValueBinding();
  }

  Editor.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Editor.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  function FlatColorPicker(element, widgetBase) {
    _classCallCheck(this, _FlatColorPicker);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
  }

  FlatColorPicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  FlatColorPicker.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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

var GanttCol = (function () {
  function GanttCol() {
    _classCallCheck(this, _GanttCol);
  }

  var _GanttCol = GanttCol;
  GanttCol = _aureliaDependencyInjection.inject(TemplateGatherer)(GanttCol) || GanttCol;
  GanttCol = generateBindables('GanttColumn')(GanttCol) || GanttCol;
  GanttCol = _aureliaTemplating.customElement(constants.elementPrefix + 'gantt-col')(GanttCol) || GanttCol;
  return GanttCol;
})();

exports.GanttCol = GanttCol;

var Gantt = (function () {
  var _instanceInitializers10 = {};

  _createDecoratedClass(Gantt, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'gantt-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers10);

  function Gantt(element, widgetBase, viewResources, optionsBuilder) {
    _classCallCheck(this, _Gantt);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers10);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoGantt').linkViewModel(this).useViewResources(viewResources);
  }

  Gantt.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Gantt.prototype.attached = function attached() {
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Gantt.prototype.recreate = function recreate() {
    var _this8 = this;

    this.widgetBase.useTemplates(this, 'kendoGantt', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this8._beforeInitialize(o);
      }
    });
  };

  Gantt.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this9 = this;

    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (column) {
        options.columns.push(_this9.optionsBuilder.getOptions(column, 'GanttColumn'));
      });
    }
  };

  Gantt.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Gantt = Gantt;
  Gantt = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources, OptionsBuilder)(Gantt) || Gantt;
  Gantt = generateBindables('kendoGantt')(Gantt) || Gantt;
  Gantt = _aureliaTemplating.customElement(constants.elementPrefix + 'gantt')(Gantt) || Gantt;
  return Gantt;
})();

exports.Gantt = Gantt;

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

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
    if (!this.kNoInit) {
      this.recreate();
    }
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
  LinearGauge = _aureliaDependencyInjection.inject(Element, WidgetBase)(LinearGauge) || LinearGauge;
  LinearGauge = generateBindables('kendoLinearGauge')(LinearGauge) || LinearGauge;
  LinearGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'linear-gauge')(LinearGauge) || LinearGauge;
  return LinearGauge;
})();

exports.LinearGauge = LinearGauge;

var RadialGauge = (function () {
  function RadialGauge(element, widgetBase, viewResources) {
    _classCallCheck(this, _RadialGauge);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
  }

  RadialGauge.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  RadialGauge.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  RadialGauge = _aureliaDependencyInjection.inject(Element, WidgetBase)(RadialGauge) || RadialGauge;
  RadialGauge = generateBindables('kendoRadialGauge')(RadialGauge) || RadialGauge;
  RadialGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'radial-gauge')(RadialGauge) || RadialGauge;
  return RadialGauge;
})();

exports.RadialGauge = RadialGauge;

var Col = (function () {
  var _instanceInitializers11 = {};

  _createDecoratedClass(Col, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }, {
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'col')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers11);

  function Col(templateGatherer, optionsBuilder) {
    _classCallCheck(this, _Col);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers11);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers11);

    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  Col.prototype.bind = function bind() {
    this.templateGatherer.useTemplates(this, 'GridColumn', this.templates);
  };

  Col.prototype.afterOptionsBuild = function afterOptionsBuild(options) {
    var _this10 = this;

    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (col) {
        options.columns.push(_this10.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }
  };

  var _Col = Col;
  Col = _aureliaDependencyInjection.inject(TemplateGatherer, OptionsBuilder)(Col) || Col;
  Col = generateBindables('GridColumn')(Col) || Col;
  Col = _aureliaTemplating.customElement(constants.elementPrefix + 'col')(Col) || Col;
  return Col;
})();

exports.Col = Col;

var GridToolbar = (function () {
  var _instanceInitializers12 = {};

  _createDecoratedClass(GridToolbar, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers12);

  function GridToolbar(templateGatherer) {
    _classCallCheck(this, _GridToolbar);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers12);

    this.templateGatherer = templateGatherer;
  }

  GridToolbar.prototype.bind = function bind() {
    this.templateGatherer.useTemplates(this, 'GridToolbarItem', this.templates);
  };

  var _GridToolbar = GridToolbar;
  GridToolbar = _aureliaDependencyInjection.inject(TemplateGatherer)(GridToolbar) || GridToolbar;
  GridToolbar = generateBindables('GridToolbarItem')(GridToolbar) || GridToolbar;
  GridToolbar = _aureliaTemplating.customElement(constants.elementPrefix + 'grid-toolbar')(GridToolbar) || GridToolbar;
  return GridToolbar;
})();

exports.GridToolbar = GridToolbar;

var Grid = (function () {
  var _instanceInitializers13 = {};

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }, {
    key: 'gridToolbars',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'grid-toolbar')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers13);

  function Grid(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers13);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers13);

    _defineDecoratedPropertyDescriptor(this, 'gridToolbars', _instanceInitializers13);

    this.element = element;
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).useViewResources(viewResources);
  }

  Grid.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Grid.prototype.attached = function attached() {
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else if (isInitFromTable(this.element)) {
      this.target = this.element.children[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Grid.prototype.recreate = function recreate() {
    var _this11 = this;

    this.templateGatherer.useTemplates(this, 'kendoGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this11._beforeInitialize(o);
      }
    });
  };

  Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this12 = this;

    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (column) {
        options.columns.push(_this12.optionsBuilder.getOptions(column, 'GridColumn'));
      });
    }

    if (this.gridToolbars && this.gridToolbars.length > 0) {
      var toolbar = this.gridToolbars[0];
      if (toolbar.kTemplate) {
        options.toolbar = this.gridToolbars[0].kTemplate;
      } else {
        options.toolbar = this.optionsBuilder.getOptions(this.gridToolbars[0], 'GridToolbarItem');
      }
    }
  };

  Grid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Grid = Grid;
  Grid = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources, OptionsBuilder, TemplateGatherer)(Grid) || Grid;
  Grid = generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaTemplating.customElement(constants.elementPrefix + 'grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

var ListView = (function () {
  var _instanceInitializers14 = {};

  _createDecoratedClass(ListView, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers14);

  function ListView(element, widgetBase, viewResources) {
    _classCallCheck(this, _ListView);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers14);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
  }

  ListView.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoListView', this.templates);
  };

  ListView.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ListView.prototype.recreate = function recreate() {
    this.widgetBase.useTemplates(this, 'kendoListView', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
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
  function Map(element, widgetBase) {
    _classCallCheck(this, _Map);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
  }

  Map.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Map.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  var _instanceInitializers15 = {};

  _createDecoratedClass(MaskedTextBox, [{
    key: 'kDisableDates',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers15);

  function MaskedTextBox(element, widgetBase) {
    _classCallCheck(this, _MaskedTextBox);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers15);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMaskedTextBox').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  MaskedTextBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  MaskedTextBox.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  function Menu(element, widgetBase) {
    _classCallCheck(this, _Menu);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
  }

  Menu.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Menu.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Menu.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Menu.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Menu = Menu;
  Menu = _aureliaDependencyInjection.inject(Element, WidgetBase)(Menu) || Menu;
  Menu = generateBindables('kendoMenu')(Menu) || Menu;
  Menu = _aureliaTemplating.customAttribute(constants.attributePrefix + 'menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;

var Multiselect = (function () {
  var _instanceInitializers16 = {};

  _createDecoratedClass(Multiselect, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kNoValueBinding',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers16);

  function Multiselect(element, widgetBase, viewResources) {
    _classCallCheck(this, _Multiselect);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'kNoValueBinding', _instanceInitializers16);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers16);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMultiSelect').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  Multiselect.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Multiselect.prototype.attached = function attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Multiselect.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoMultiSelect', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  };

  Multiselect.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    if (property !== 'kValue' || this.kWidget.input.val() === '') {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    }
  };

  Multiselect.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Multiselect = Multiselect;
  Multiselect = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(Multiselect) || Multiselect;
  Multiselect = generateBindables('kendoMultiSelect', ['template'])(Multiselect) || Multiselect;
  Multiselect = _aureliaTemplating.customElement(constants.elementPrefix + 'multiselect')(Multiselect) || Multiselect;
  return Multiselect;
})();

exports.Multiselect = Multiselect;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

var NotificationTemplate = (function () {
  var _instanceInitializers17 = {};

  _createDecoratedClass(NotificationTemplate, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'type',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers17);

  function NotificationTemplate(targetInstruction) {
    _classCallCheck(this, _NotificationTemplate);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers17);

    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers17);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _NotificationTemplate = NotificationTemplate;
  NotificationTemplate = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(NotificationTemplate) || NotificationTemplate;
  NotificationTemplate = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }
    return true;
  })(NotificationTemplate) || NotificationTemplate;
  NotificationTemplate = _aureliaTemplating.noView()(NotificationTemplate) || NotificationTemplate;
  NotificationTemplate = _aureliaTemplating.customElement(constants.elementPrefix + 'notification-template')(NotificationTemplate) || NotificationTemplate;
  return NotificationTemplate;
})();

exports.NotificationTemplate = NotificationTemplate;

var Notification = (function () {
  var _instanceInitializers18 = {};

  _createDecoratedClass(Notification, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'notification-template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers18);

  function Notification(element, widgetBase, viewResources) {
    _classCallCheck(this, _Notification);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers18);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNotification').linkViewModel(this).useViewResources(viewResources);
  }

  Notification.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Notification.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Notification.prototype.recreate = function recreate() {
    var _this13 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(e) {
        return _this13.beforeInitialize(e);
      }
    });
  };

  Notification.prototype.beforeInitialize = function beforeInitialize(options) {
    if (this.templates && this.templates.length > 0) {
      options.templates = [];

      this.templates.forEach(function (_template) {
        return options.templates.push({
          type: _template.type,
          template: function template() {
            return _template.template;
          }
        });
      });
    }
  };

  Notification.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Notification = Notification;
  Notification = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(Notification) || Notification;
  Notification = generateBindables('kendoNotification')(Notification) || Notification;
  Notification = _aureliaTemplating.customElement(constants.elementPrefix + 'notification')(Notification) || Notification;
  return Notification;
})();

exports.Notification = Notification;

var NumericTextBox = (function () {
  var _instanceInitializers19 = {};

  _createDecoratedClass(NumericTextBox, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers19);

  function NumericTextBox(element, widgetBase) {
    _classCallCheck(this, _NumericTextBox);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers19);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers19);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  NumericTextBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  NumericTextBox.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  function PanelBar(element, widgetBase) {
    _classCallCheck(this, _PanelBar);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
  }

  PanelBar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  PanelBar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  PanelBar = _aureliaTemplating.customElement(constants.elementPrefix + 'panel-bar')(PanelBar) || PanelBar;
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

var PivotConfigurator = (function () {
  function PivotConfigurator(element, widgetBase, viewResources) {
    _classCallCheck(this, _PivotConfigurator);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotConfigurator').linkViewModel(this);
  }

  PivotConfigurator.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  PivotConfigurator.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PivotConfigurator.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  PivotConfigurator.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _PivotConfigurator = PivotConfigurator;
  PivotConfigurator = _aureliaDependencyInjection.inject(Element, WidgetBase)(PivotConfigurator) || PivotConfigurator;
  PivotConfigurator = generateBindables('kendoPivotConfigurator')(PivotConfigurator) || PivotConfigurator;
  PivotConfigurator = _aureliaTemplating.customElement(constants.elementPrefix + 'pivot-configurator')(PivotConfigurator) || PivotConfigurator;
  return PivotConfigurator;
})();

exports.PivotConfigurator = PivotConfigurator;

var PivotGrid = (function () {
  var _instanceInitializers20 = {};

  _createDecoratedClass(PivotGrid, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers20);

  function PivotGrid(element, widgetBase, viewResources) {
    _classCallCheck(this, _PivotGrid);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers20);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useViewResources(viewResources);
  }

  PivotGrid.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  PivotGrid.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PivotGrid.prototype.recreate = function recreate() {
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  PivotGrid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _PivotGrid = PivotGrid;
  PivotGrid = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(PivotGrid) || PivotGrid;
  PivotGrid = generateBindables('kendoPivotGrid')(PivotGrid) || PivotGrid;
  PivotGrid = _aureliaTemplating.customElement(constants.elementPrefix + 'pivot-grid')(PivotGrid) || PivotGrid;
  return PivotGrid;
})();

exports.PivotGrid = PivotGrid;

var ProgressBar = (function () {
  var _instanceInitializers21 = {};

  _createDecoratedClass(ProgressBar, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers21);

  function ProgressBar(element, widgetBase) {
    _classCallCheck(this, _ProgressBar);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers21);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoProgressBar').bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  ProgressBar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ProgressBar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ProgressBar.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ProgressBar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
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

var QRCode = (function () {
  function QRCode(element, widgetBase) {
    _classCallCheck(this, _QRCode);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoQRCode').linkViewModel(this);
  }

  QRCode.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  QRCode.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  QRCode.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  QRCode.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _QRCode = QRCode;
  QRCode = _aureliaDependencyInjection.inject(Element, WidgetBase)(QRCode) || QRCode;
  QRCode = generateBindables('kendoQRCode')(QRCode) || QRCode;
  QRCode = _aureliaTemplating.customAttribute(constants.attributePrefix + 'qrcode')(QRCode) || QRCode;
  return QRCode;
})();

exports.QRCode = QRCode;

var RangeSlider = (function () {
  var _instanceInitializers22 = {};

  _createDecoratedClass(RangeSlider, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers22);

  function RangeSlider(element, widgetBase) {
    _classCallCheck(this, _RangeSlider);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers22);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRangeSlider').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
  }

  RangeSlider.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  RangeSlider.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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

var ResponsivePanel = (function () {
  function ResponsivePanel(element, widgetBase) {
    _classCallCheck(this, _ResponsivePanel);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoResponsivePanel').linkViewModel(this);
  }

  ResponsivePanel.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ResponsivePanel.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ResponsivePanel.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ResponsivePanel.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ResponsivePanel = ResponsivePanel;
  ResponsivePanel = _aureliaDependencyInjection.inject(Element, WidgetBase)(ResponsivePanel) || ResponsivePanel;
  ResponsivePanel = generateBindables('kendoResponsivePanel')(ResponsivePanel) || ResponsivePanel;
  ResponsivePanel = _aureliaTemplating.customAttribute(constants.attributePrefix + 'responsivepanel')(ResponsivePanel) || ResponsivePanel;
  return ResponsivePanel;
})();

exports.ResponsivePanel = ResponsivePanel;

var Scheduler = (function () {
  var _instanceInitializers23 = {};

  _createDecoratedClass(Scheduler, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers23);

  function Scheduler(element, widgetBase, viewResources) {
    _classCallCheck(this, _Scheduler);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers23);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoScheduler').linkViewModel(this).useViewResources(viewResources);
  }

  Scheduler.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Scheduler.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Scheduler.prototype.recreate = function recreate() {
    this.widgetBase.useTemplates(this, 'kendoScheduler', this.templates);

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

var Scrollview = (function () {
  var _instanceInitializers24 = {};

  _createDecoratedClass(Scrollview, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers24);

  function Scrollview(element, widgetBase, viewResources) {
    _classCallCheck(this, _Scrollview);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers24);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMobileScrollView').linkViewModel(this).useViewResources(viewResources).useValueBinding();
  }

  Scrollview.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Scrollview.prototype.attached = function attached() {
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Scrollview.prototype.recreate = function recreate() {
    this.widgetBase.useTemplates(this, 'kendoMobileScrollView', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent
    });
  };

  Scrollview.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Scrollview = Scrollview;
  Scrollview = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(Scrollview) || Scrollview;
  Scrollview = generateBindables('kendoMobileScrollView')(Scrollview) || Scrollview;
  Scrollview = _aureliaTemplating.customElement(constants.elementPrefix + 'scrollview')(Scrollview) || Scrollview;
  return Scrollview;
})();

exports.Scrollview = Scrollview;

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

var Slider = (function () {
  var _instanceInitializers25 = {};

  _createDecoratedClass(Slider, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers25);

  function Slider(element, widgetBase) {
    _classCallCheck(this, _Slider);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers25);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSlider').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
  }

  Slider.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Slider.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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

var Sortable = (function () {
  function Sortable(element, widgetBase) {
    _classCallCheck(this, _Sortable);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSortable').linkViewModel(this);
  }

  Sortable.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Sortable.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Sortable.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Sortable.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Sortable = Sortable;
  Sortable = _aureliaDependencyInjection.inject(Element, WidgetBase)(Sortable) || Sortable;
  Sortable = generateBindables('kendoSortable')(Sortable) || Sortable;
  Sortable = _aureliaTemplating.customAttribute(constants.attributePrefix + 'sortable')(Sortable) || Sortable;
  return Sortable;
})();

exports.Sortable = Sortable;

var Splitter = (function () {
  function Splitter(element, widgetBase) {
    _classCallCheck(this, _Splitter);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSplitter').linkViewModel(this);
  }

  Splitter.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Splitter.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Splitter.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Splitter.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Splitter = Splitter;
  Splitter = _aureliaDependencyInjection.inject(Element, WidgetBase)(Splitter) || Splitter;
  Splitter = generateBindables('kendoSplitter')(Splitter) || Splitter;
  Splitter = _aureliaTemplating.customAttribute(constants.attributePrefix + 'splitter')(Splitter) || Splitter;
  return Splitter;
})();

exports.Splitter = Splitter;

var Spreadsheet = (function () {
  function Spreadsheet(element, widgetBase) {
    _classCallCheck(this, _Spreadsheet);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSpreadsheet').linkViewModel(this);
  }

  Spreadsheet.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Spreadsheet.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Spreadsheet.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Spreadsheet.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Spreadsheet = Spreadsheet;
  Spreadsheet = _aureliaDependencyInjection.inject(Element, WidgetBase)(Spreadsheet) || Spreadsheet;
  Spreadsheet = generateBindables('kendoSpreadsheet')(Spreadsheet) || Spreadsheet;
  Spreadsheet = _aureliaTemplating.customElement(constants.elementPrefix + 'spreadsheet')(Spreadsheet) || Spreadsheet;
  return Spreadsheet;
})();

exports.Spreadsheet = Spreadsheet;

var Switch = (function () {
  var _instanceInitializers26 = {};

  _createDecoratedClass(Switch, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers26);

  function Switch(element, widgetBase) {
    _classCallCheck(this, _Switch);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers26);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMobileSwitch').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding('kChecked', 'check');
  }

  Switch.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Switch.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Switch.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Switch.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Switch.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Switch = Switch;
  Switch = _aureliaDependencyInjection.inject(Element, WidgetBase)(Switch) || Switch;
  Switch = generateBindables('kendoMobileSwitch')(Switch) || Switch;
  Switch = _aureliaTemplating.customAttribute(constants.attributePrefix + 'switch')(Switch) || Switch;
  return Switch;
})();

exports.Switch = Switch;

var TabStrip = (function () {
  function TabStrip(element, widgetBase) {
    _classCallCheck(this, _TabStrip);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this);
  }

  TabStrip.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TabStrip.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  var _instanceInitializers27 = {};

  _createDecoratedClass(TimePicker, [{
    key: 'kDisableDates',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers27);

  function TimePicker(element, widgetBase) {
    _classCallCheck(this, _TimePicker);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers27);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers27);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTimePicker').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  TimePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TimePicker.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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

var ToolbarItemButton = (function () {
  function ToolbarItemButton(optionsBuilder) {
    _classCallCheck(this, _ToolbarItemButton);

    this.optionsBuilder = optionsBuilder;
  }

  ToolbarItemButton.prototype.getOptions = function getOptions() {
    return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
  };

  var _ToolbarItemButton = ToolbarItemButton;
  ToolbarItemButton = _aureliaDependencyInjection.inject(OptionsBuilder)(ToolbarItemButton) || ToolbarItemButton;
  ToolbarItemButton = generateBindables('ToolBarItemButton')(ToolbarItemButton) || ToolbarItemButton;
  ToolbarItemButton = _aureliaTemplating.customElement(constants.elementPrefix + 'toolbar-item-button')(ToolbarItemButton) || ToolbarItemButton;
  return ToolbarItemButton;
})();

exports.ToolbarItemButton = ToolbarItemButton;

var ToolbarItem = (function () {
  var _instanceInitializers28 = {};

  _createDecoratedClass(ToolbarItem, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }, {
    key: 'buttons',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'toolbar-item-button')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers28);

  function ToolbarItem(templateGatherer, optionsBuilder) {
    _classCallCheck(this, _ToolbarItem);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers28);

    _defineDecoratedPropertyDescriptor(this, 'buttons', _instanceInitializers28);

    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  ToolbarItem.prototype.getOptions = function getOptions() {
    var _this14 = this;

    this.templateGatherer.useTemplates(this, 'ToolBarItem', this.templates);

    if (this.buttons && this.buttons.length > 0) {
      this.kButtons = [];

      this.buttons.forEach(function (item) {
        _this14.kButtons.push(item.getOptions());
      });
    }

    return this.optionsBuilder.getOptions(this, 'ToolBarItem');
  };

  var _ToolbarItem = ToolbarItem;
  ToolbarItem = _aureliaDependencyInjection.inject(TemplateGatherer, OptionsBuilder)(ToolbarItem) || ToolbarItem;
  ToolbarItem = generateBindables('ToolBarItem')(ToolbarItem) || ToolbarItem;
  ToolbarItem = _aureliaTemplating.customElement(constants.elementPrefix + 'toolbar-item')(ToolbarItem) || ToolbarItem;
  return ToolbarItem;
})();

exports.ToolbarItem = ToolbarItem;

var Toolbar = (function () {
  var _instanceInitializers29 = {};

  _createDecoratedClass(Toolbar, [{
    key: 'toolbarItems',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'toolbar-item')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers29);

  function Toolbar(element, widgetBase, optionsBuilder) {
    _classCallCheck(this, _Toolbar);

    _defineDecoratedPropertyDescriptor(this, 'toolbarItems', _instanceInitializers29);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoToolBar').linkViewModel(this);
  }

  Toolbar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Toolbar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Toolbar.prototype.recreate = function recreate() {
    var _this15 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this15._beforeInitialize(o);
      }
    });
  };

  Toolbar.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.toolbarItems && this.toolbarItems.length > 0) {
      options.items = [];

      this.toolbarItems.forEach(function (item) {
        options.items.push(item.getOptions());
      });
    }
  };

  Toolbar.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Toolbar = Toolbar;
  Toolbar = _aureliaDependencyInjection.inject(Element, WidgetBase, OptionsBuilder)(Toolbar) || Toolbar;
  Toolbar = generateBindables('kendoToolBar')(Toolbar) || Toolbar;
  Toolbar = _aureliaTemplating.customElement(constants.elementPrefix + 'toolbar')(Toolbar) || Toolbar;
  return Toolbar;
})();

exports.Toolbar = Toolbar;

var Tooltip = (function () {
  function Tooltip(element, widgetBase) {
    _classCallCheck(this, _Tooltip);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
  }

  Tooltip.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Tooltip.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Tooltip.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Tooltip.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Tooltip = Tooltip;
  Tooltip = _aureliaDependencyInjection.inject(Element, WidgetBase)(Tooltip) || Tooltip;
  Tooltip = generateBindables('kendoTooltip')(Tooltip) || Tooltip;
  Tooltip = _aureliaTemplating.customAttribute(constants.attributePrefix + 'tooltip')(Tooltip) || Tooltip;
  return Tooltip;
})();

exports.Tooltip = Tooltip;

var TreeCol = (function () {
  var _instanceInitializers30 = {};

  _createDecoratedClass(TreeCol, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers30);

  function TreeCol(templateGatherer) {
    _classCallCheck(this, _TreeCol);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers30);

    this.templateGatherer = templateGatherer;
  }

  TreeCol.prototype.bind = function bind() {
    this.templateGatherer.useTemplates(this, 'TreeListColumn', this.templates);
  };

  var _TreeCol = TreeCol;
  TreeCol = _aureliaDependencyInjection.inject(TemplateGatherer)(TreeCol) || TreeCol;
  TreeCol = generateBindables('TreeListColumn')(TreeCol) || TreeCol;
  TreeCol = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-col')(TreeCol) || TreeCol;
  return TreeCol;
})();

exports.TreeCol = TreeCol;

var TreeList = (function () {
  var _instanceInitializers31 = {};

  _createDecoratedClass(TreeList, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'tree-col')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers31);

  function TreeList(element, widgetBase, viewResources, optionsBuilder) {
    _classCallCheck(this, _TreeList);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers31);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
  }

  TreeList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeList.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  TreeList.prototype.recreate = function recreate() {
    var _this16 = this;

    var element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this16._beforeInitialize(o);
      }
    });
  };

  TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this17 = this;

    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (column) {
        options.columns.push(_this17.optionsBuilder.getOptions(column, 'TreeListColumn'));
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
  function TreeView(element, widgetBase) {
    _classCallCheck(this, _TreeView);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this);
  }

  TreeView.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeView.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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

var Upload = (function () {
  var _instanceInitializers32 = {};

  _createDecoratedClass(Upload, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers32);

  function Upload(element, widgetBase, viewResources) {
    _classCallCheck(this, _Upload);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers32);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoUpload').linkViewModel(this).useViewResources(viewResources);
  }

  Upload.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Upload.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Upload.prototype.recreate = function recreate() {
    var target = undefined;
    var inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      target = inputs[0];
    } else {
      target = document.createElement('input');
      this.element.appendChild(target);
    }

    this.widgetBase.useTemplates(this, 'kendoUpload', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: target,
      parentCtx: this.$parent
    });
  };

  Upload.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Upload = Upload;
  Upload = _aureliaDependencyInjection.inject(Element, WidgetBase, _aureliaTemplating.ViewResources)(Upload) || Upload;
  Upload = generateBindables('kendoUpload')(Upload) || Upload;
  Upload = _aureliaTemplating.customElement(constants.elementPrefix + 'upload')(Upload) || Upload;
  return Upload;
})();

exports.Upload = Upload;

var Validator = (function () {
  function Validator(element, widgetBase) {
    _classCallCheck(this, _Validator);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoValidator').linkViewModel(this);
  }

  Validator.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Validator.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Validator.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Validator.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Validator = Validator;
  Validator = _aureliaDependencyInjection.inject(Element, WidgetBase)(Validator) || Validator;
  Validator = generateBindables('kendoValidator')(Validator) || Validator;
  Validator = _aureliaTemplating.customAttribute(constants.attributePrefix + 'validator')(Validator) || Validator;
  return Validator;
})();

exports.Validator = Validator;

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
    for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
      params[_key3 - 1] = arguments[_key3];
    }

    params.unshift(value);

    return kendo.format.apply(this, params);
  };

  return kendoFormatValueConverter;
})();

exports.kendoFormatValueConverter = kendoFormatValueConverter;

var Window = (function () {
  function Window(element, widgetBase) {
    _classCallCheck(this, _Window);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
  }

  Window.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Window.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Window.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Window.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Window = Window;
  Window = _aureliaDependencyInjection.inject(Element, WidgetBase)(Window) || Window;
  Window = generateBindables('kendoWindow')(Window) || Window;
  Window = _aureliaTemplating.customAttribute(constants.attributePrefix + 'window')(Window) || Window;
  return Window;
})();

exports.Window = Window;