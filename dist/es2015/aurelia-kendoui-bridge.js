var _dec, _dec2, _dec3, _dec4, _class2, _desc, _value, _class3, _descriptor, _dec5, _dec6, _dec7, _class5, _dec8, _dec9, _dec10, _class6, _desc2, _value2, _class7, _descriptor2, _dec11, _dec12, _dec13, _class9, _desc3, _value3, _class10, _descriptor3, _dec14, _dec15, _dec16, _class12, _dec17, _dec18, _dec19, _class13, _dec20, _dec21, _dec22, _class14, _dec23, _dec24, _dec25, _class15, _dec26, _dec27, _dec28, _class16, _dec29, _dec30, _dec31, _class17, _dec32, _dec33, _dec34, _class18, _desc4, _value4, _class19, _descriptor4, _dec35, _dec36, _dec37, _dec38, _class21, _desc5, _value5, _class22, _descriptor5, _descriptor6, _descriptor7, _dec39, _class24, _dec40, _class26, _dec41, _class27, _dec42, _class28, _dec43, _class30, _dec44, _dec45, _dec46, _dec47, _class32, _desc6, _value6, _class33, _descriptor8, _descriptor9, _descriptor10, _dec48, _dec49, _class35, _dec50, _dec51, _dec52, _class37, _dec53, _dec54, _dec55, _class38, _desc7, _value7, _class39, _descriptor11, _descriptor12, _dec56, _dec57, _dec58, _class41, _desc8, _value8, _class42, _descriptor13, _descriptor14, _dec59, _dec60, _dec61, _class44, _dec62, _dec63, _dec64, _class45, _dec65, _dec66, _dec67, _class46, _dec68, _dec69, _dec70, _class47, _dec71, _dec72, _dec73, _dec74, _class48, _desc9, _value9, _class49, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _dec75, _dec76, _dec77, _class51, _dec78, _dec79, _dec80, _class52, _dec81, _dec82, _dec83, _class53, _dec84, _dec85, _dec86, _dec87, _dec88, _class54, _desc10, _value10, _class55, _descriptor19, _descriptor20, _dec89, _dec90, _dec91, _class57, _dec92, _dec93, _dec94, _class58, _dec95, _dec96, _dec97, _dec98, _dec99, _class59, _desc11, _value11, _class60, _descriptor21, _descriptor22, _dec100, _dec101, _dec102, _dec103, _class62, _desc12, _value12, _class63, _descriptor23, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _class65, _desc13, _value13, _class66, _descriptor24, _descriptor25, _descriptor26, _dec110, _dec111, _dec112, _dec113, _class68, _desc14, _value14, _class69, _descriptor27, _dec114, _dec115, _dec116, _class71, _dec117, _dec118, _dec119, _class72, _desc15, _value15, _class73, _descriptor28, _descriptor29, _descriptor30, _dec120, _dec121, _dec122, _class75, _dec123, _dec124, _dec125, _dec126, _class76, _desc16, _value16, _class77, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _dec127, _dec128, _dec129, _dec130, _class79, _desc17, _value17, _class80, _descriptor35, _descriptor36, _dec131, _dec132, _dec133, _dec134, _class82, _desc18, _value18, _class83, _descriptor37, _dec135, _dec136, _dec137, _class85, _desc19, _value19, _class86, _descriptor38, _descriptor39, _dec138, _dec139, _dec140, _class88, _dec141, _dec142, _dec143, _class89, _dec144, _dec145, _dec146, _dec147, _class90, _desc20, _value20, _class91, _descriptor40, _dec148, _dec149, _dec150, _class93, _desc21, _value21, _class94, _descriptor41, _dec151, _dec152, _dec153, _class96, _dec154, _dec155, _dec156, _class97, _desc22, _value22, _class98, _descriptor42, _dec157, _dec158, _dec159, _class100, _dec160, _dec161, _dec162, _dec163, _class101, _desc23, _value23, _class102, _descriptor43, _dec164, _dec165, _dec166, _dec167, _class104, _desc24, _value24, _class105, _descriptor44, _dec168, _dec169, _dec170, _class107, _desc25, _value25, _class108, _descriptor45, _dec171, _dec172, _dec173, _class110, _dec174, _dec175, _dec176, _class111, _dec177, _dec178, _dec179, _class112, _dec180, _dec181, _dec182, _class113, _desc26, _value26, _class114, _descriptor46, _dec183, _dec184, _dec185, _class116, _dec186, _dec187, _dec188, _class117, _desc27, _value27, _class118, _descriptor47, _descriptor48, _descriptor49, _dec189, _dec190, _dec191, _class120, _dec192, _dec193, _dec194, _dec195, _dec196, _class121, _desc28, _value28, _class122, _descriptor50, _descriptor51, _dec197, _dec198, _dec199, _dec200, _class124, _desc29, _value29, _class125, _descriptor52, _dec201, _dec202, _dec203, _class127, _dec204, _dec205, _dec206, _dec207, _class128, _desc30, _value30, _class129, _descriptor53, _dec208, _dec209, _dec210, _dec211, _class131, _desc31, _value31, _class132, _descriptor54, _dec212, _dec213, _dec214, _class134, _dec215, _dec216, _dec217, _dec218, _class135, _desc32, _value32, _class136, _descriptor55, _dec219, _dec220, _dec221, _class138, _dec222, _dec223, _dec224, _class139;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import 'jquery';
import * as LogManager from 'aurelia-logging';
import { RepeatStrategyLocator, ArrayRepeatStrategy } from 'aurelia-templating-resources';
import { inject, Container, transient } from 'aurelia-dependency-injection';
import { customElement, children, ViewResources, customAttribute, bindable, BindableProperty, HtmlBehaviorResource, TemplatingEngine, noView, processContent, TargetInstruction } from 'aurelia-templating';
import { metadata } from 'aurelia-metadata';
import { bindingMode, EventManager, createOverrideContext, Lexer, ParserImplementation } from 'aurelia-binding';
import { TaskQueue } from 'aurelia-task-queue';

export let KendoConfigBuilder = class KendoConfigBuilder {
  constructor() {
    this.resources = [];
    this.debugMode = false;
    this.registerRepeatStrategy = true;
  }

  core() {
    this.kendoAutoComplete().kendoButton().kendoButtonGroup().kendoCalendar().kendoColorPicker().kendoColorPalette().kendoCombobox().kendoContextMenu().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoDraggable().kendoDropTarget().kendoFlatColorPicker().kendoListView().kendoMaskedTextBox().kendoMenu().kendoMultiSelect().kendoNotification().kendoNumericTextBox().kendoPanelBar().kendoProgressBar().kendoRangeSlider().kendoResponsivePanel().kendoScrollView().kendoSortable().kendoSlider().kendoSplitter().kendoSwitch().kendoTabStrip().kendoTemplateSupport().kendoTimePicker().kendoToolbar().kendoTooltip().kendoValidator().kendoWindow().useValueConverters();
    return this;
  }

  pro() {
    this.core().kendoBarcode().kendoChart().kendoDiagram().kendoEditor().kendoGantt().kendoGrid().kendoMap().kendoLinearGauge().kendoPivotGrid().kendoQRCode().kendoRadialGauge().kendoScheduler().kendoTreeList().kendoTreeView().kendoUpload();
    return this;
  }

  useValueConverters() {
    this.resources.push('./valueconverters/valueconverters');
    return this;
  }

  kendoTemplateSupport() {
    this.resources.push('./common/template');
    return this;
  }

  debug() {
    this.debugMode = true;
    return this;
  }

  notifyBindingBehavior() {
    this.resources.push('./common/notify-binding-behavior');
    return this;
  }

  withTemplateCallback(callback) {
    this.templateCallback = callback;
    return this;
  }

  withoutRepeatStrategy() {
    this.registerRepeatStrategy = false;
  }

  kendoAutoComplete() {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  }

  kendoButton() {
    this.resources.push('./button/button');
    return this;
  }

  kendoButtonGroup() {
    this.resources.push('./buttongroup/buttongroup');
    return this;
  }

  kendoBarcode() {
    this.resources.push('./barcode/barcode');
    return this;
  }

  kendoCalendar() {
    this.resources.push('./calendar/calendar');
    return this;
  }

  kendoChart() {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/sparkline');
    this.resources.push('./chart/stock');
    this.resources.push('./chart/treemap');
    return this;
  }

  kendoCombobox() {
    this.resources.push('./combobox/combobox');
    return this;
  }

  kendoContextMenu() {
    this.resources.push('./contextmenu/contextmenu');
    return this;
  }

  kendoColorPicker() {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  }

  kendoColorPalette() {
    this.resources.push('./colorpalette/colorpalette');
    return this;
  }

  kendoDatePicker() {
    this.resources.push('./datepicker/datepicker');
    return this;
  }

  kendoDateTimePicker() {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  }

  kendoDiagram() {
    this.resources.push('./diagram/diagram');
    return this;
  }

  kendoDraggable() {
    this.resources.push('./draggable/draggable');
    return this;
  }

  kendoDropDownList() {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  }

  kendoDropTarget() {
    this.resources.push('./drop-target/drop-target');
    this.resources.push('./drop-target/drop-target-area');
    return this;
  }

  kendoEditor() {
    this.resources.push('./editor/editor');
    return this;
  }

  kendoFlatColorPicker() {
    this.resources.push('./flatcolorpicker/flatcolorpicker');
    return this;
  }

  kendoGantt() {
    this.resources.push('./gantt/gantt');
    this.resources.push('./gantt/gantt-col');
    return this;
  }

  kendoGrid() {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/col');
    this.resources.push('./grid/grid-toolbar');
    return this;
  }

  kendoLinearGauge() {
    this.resources.push('./gauges/linear-gauge');
    return this;
  }

  kendoListView() {
    this.resources.push('./listview/listview');
    return this;
  }

  kendoNotification() {
    this.resources.push('./notification/notification');
    this.resources.push('./notification/notification-template');
    return this;
  }

  kendoMap() {
    this.resources.push('./map/map');
    return this;
  }

  kendoMenu() {
    this.resources.push('./menu/menu');
    return this;
  }

  kendoMaskedTextBox() {
    this.resources.push('./maskedtextbox/maskedtextbox');
    return this;
  }

  kendoMultiSelect() {
    this.resources.push('./multiselect/multiselect');
    return this;
  }

  kendoNumericTextBox() {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  }

  kendoPanelBar() {
    this.resources.push('./panelbar/panelbar');
    return this;
  }

  kendoPivotGrid() {
    this.resources.push('./pivotgrid/pivotgrid');
    this.resources.push('./pivotgrid/pivotconfigurator');
    return this;
  }

  kendoProgressBar() {
    this.resources.push('./progressbar/progressbar');
    return this;
  }

  kendoQRCode() {
    this.resources.push('./qrcode/qrcode');
    return this;
  }

  kendoRadialGauge() {
    this.resources.push('./gauges/radial-gauge');
    return this;
  }

  kendoResponsivePanel() {
    this.resources.push('./responsivepanel/responsivepanel');
    return this;
  }

  kendoScrollView() {
    this.resources.push('./scrollview/scrollview');
    return this;
  }

  kendoScheduler() {
    this.resources.push('./scheduler/scheduler');
    return this;
  }

  kendoSlider() {
    this.resources.push('./slider/slider');
    return this;
  }

  kendoSortable() {
    this.resources.push('./sortable/sortable');
    return this;
  }

  kendoSpreadsheet() {
    this.resources.push('./spreadsheet/spreadsheet');
    return this;
  }

  kendoSplitter() {
    this.resources.push('./splitter/splitter');
    return this;
  }

  kendoSlider() {
    this.resources.push('./slider/slider');
    return this;
  }

  kendoSwitch() {
    this.resources.push('./switch/switch');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('./tabstrip/tabstrip');
    return this;
  }

  kendoTreeList() {
    this.resources.push('./treelist/treelist');
    this.resources.push('./treelist/tree-col');
    return this;
  }

  kendoToolbar() {
    this.resources.push('./toolbar/toolbar');
    return this;
  }

  kendoTreeView() {
    this.resources.push('./treeview/treeview');
    return this;
  }

  kendoTimePicker() {
    this.resources.push('./timepicker/timepicker');
    return this;
  }

  kendoToolbar() {
    this.resources.push('./toolbar/toolbar');
    this.resources.push('./toolbar/toolbar-item');
    this.resources.push('./toolbar/toolbar-item-button');
    return this;
  }

  kendoTooltip() {
    this.resources.push('./tooltip/tooltip');
    return this;
  }

  kendoRangeSlider() {
    this.resources.push('./rangeslider/rangeslider');
    return this;
  }

  kendoUpload() {
    this.resources.push('./upload/upload');
    return this;
  }

  kendoValidator() {
    this.resources.push('./validator/validator');
    return this;
  }

  kendoWindow() {
    this.resources.push('./window/window');
    return this;
  }
};

import 'kendo.data.min';

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  let resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  if (builder.registerRepeatStrategy) {
    let repeatStrategyLocator = aurelia.container.get(RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(items => items instanceof kendo.data.ObservableArray, new ArrayRepeatStrategy());
  }
}

export * from './common/decorators';


import 'kendo.autocomplete.min';
import 'kendo.virtuallist.min';

export let AutoComplete = (_dec = customElement(`${ constants.elementPrefix }autocomplete`), _dec2 = generateBindables('kendoAutoComplete'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec4 = children(`${ constants.elementPrefix }template`), _dec(_class2 = _dec2(_class2 = _dec3(_class2 = (_class3 = class AutoComplete {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useViewResources(viewResources).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.target = inputs[0];
    } else {
      this.target = document.createElement('input');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: this.target,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'templates', [_dec4], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class3)) || _class2) || _class2) || _class2);

import 'kendo.dataviz.barcode.min';

export let Barcode = (_dec5 = customAttribute(`${ constants.attributePrefix }barcode`), _dec6 = generateBindables('kendoBarcode'), _dec7 = inject(Element, WidgetBase), _dec5(_class5 = _dec6(_class5 = _dec7(_class5 = class Barcode {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoBarcode').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class5) || _class5) || _class5);

import 'kendo.button.min';

export let Button = (_dec8 = customAttribute(`${ constants.attributePrefix }button`), _dec9 = generateBindables('kendoButton'), _dec10 = inject(Element, WidgetBase), _dec8(_class6 = _dec9(_class6 = _dec10(_class6 = (_class7 = class Button {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor2, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoButton').bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor2 = _applyDecoratedDescriptor(_class7.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class7)) || _class6) || _class6) || _class6);

import 'kendo.mobile.buttongroup.min';

export let ButtonGroup = (_dec11 = customAttribute(`${ constants.attributePrefix }buttongroup`), _dec12 = generateBindables('kendoMobileButtonGroup'), _dec13 = inject(Element, WidgetBase), _dec11(_class9 = _dec12(_class9 = _dec13(_class9 = (_class10 = class ButtonGroup {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor3, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMobileButtonGroup').bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor3 = _applyDecoratedDescriptor(_class10.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class10)) || _class9) || _class9) || _class9);

import 'kendo.calendar.min';

export let Calendar = (_dec14 = customElement(`${ constants.elementPrefix }calendar`), _dec15 = generateBindables('kendoCalendar'), _dec16 = inject(Element, WidgetBase), _dec14(_class12 = _dec15(_class12 = _dec16(_class12 = class Calendar {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoCalendar').linkViewModel(this).useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class12) || _class12) || _class12);

import 'kendo.dataviz.chart.min';
import 'kendo.dataviz.chart.polar.min';
import 'kendo.dataviz.chart.funnel.min';

export let Chart = (_dec17 = customElement(`${ constants.elementPrefix }chart`), _dec18 = generateBindables('kendoChart'), _dec19 = inject(Element, WidgetBase), _dec17(_class13 = _dec18(_class13 = _dec19(_class13 = class Chart {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class13) || _class13) || _class13);

import 'kendo.dataviz.sparkline.min';

export let Sparkline = (_dec20 = customElement(`${ constants.elementPrefix }sparkline`), _dec21 = generateBindables('kendoSparkline'), _dec22 = inject(Element, WidgetBase), _dec20(_class14 = _dec21(_class14 = _dec22(_class14 = class Sparkline {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoSparkline').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class14) || _class14) || _class14);

import 'kendo.dataviz.stock.min';

export let Stock = (_dec23 = customElement(`${ constants.elementPrefix }stock`), _dec24 = generateBindables('kendoStockChart'), _dec25 = inject(Element, WidgetBase), _dec23(_class15 = _dec24(_class15 = _dec25(_class15 = class Stock {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class15) || _class15) || _class15);

import 'kendo.dataviz.treemap.min';

export let TreeMap = (_dec26 = customElement(`${ constants.elementPrefix }treemap`), _dec27 = generateBindables('kendoTreeMap'), _dec28 = inject(Element, WidgetBase), _dec26(_class16 = _dec27(_class16 = _dec28(_class16 = class TreeMap {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class16) || _class16) || _class16);

import 'kendo.colorpicker.min';

export let ColorPalette = (_dec29 = customElement(`${ constants.attributePrefix }color-palette`), _dec30 = generateBindables('kendoColorPalette'), _dec31 = inject(Element, WidgetBase), _dec29(_class17 = _dec30(_class17 = _dec31(_class17 = class ColorPalette {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class17) || _class17) || _class17);

import 'kendo.colorpicker.min';

export let ColorPicker = (_dec32 = customAttribute(`${ constants.attributePrefix }color-picker`), _dec33 = generateBindables('kendoColorPicker'), _dec34 = inject(Element, WidgetBase), _dec32(_class18 = _dec33(_class18 = _dec34(_class18 = (_class19 = class ColorPicker {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor4, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor4 = _applyDecoratedDescriptor(_class19.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class19)) || _class18) || _class18) || _class18);

import 'kendo.combobox.min';
import 'kendo.virtuallist.min';

export let ComboBox = (_dec35 = customElement(`${ constants.elementPrefix }combobox`), _dec36 = generateBindables('kendoComboBox'), _dec37 = inject(Element, WidgetBase, ViewResources), _dec38 = children(`${ constants.elementPrefix }template`), _dec35(_class21 = _dec36(_class21 = _dec37(_class21 = (_class22 = class ComboBox {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'kEnabled', _descriptor5, this);

    _initDefineProp(this, 'kReadOnly', _descriptor6, this);

    _initDefineProp(this, 'templates', _descriptor7, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoComboBox').linkViewModel(this).useValueBinding().useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoComboBox', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor5 = _applyDecoratedDescriptor(_class22.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class22.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class22.prototype, 'templates', [_dec38], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class22)) || _class21) || _class21) || _class21);

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

export let bindables = { "kendoAutoComplete": ["animation", "dataSource", "dataTextField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "minLength", "name", "placeholder", "popup", "separator", "suggest", "template", "valuePrimitive", "virtual"], "kendoBarcode": ["background", "border", "checksum", "color", "height", "name", "padding", "renderAs", "text", "type", "value", "width"], "kendoButton": ["enable", "icon", "imageUrl", "name", "spriteCssClass"], "kendoCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "start", "value"], "kendoChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "legend", "name", "panes", "pannable", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis", "xAxis", "yAxis", "zoomable"], "kendoColorPalette": ["columns", "name", "palette", "tileSize", "value"], "kendoColorPicker": ["buttons", "columns", "messages", "name", "opacity", "palette", "preview", "tileSize", "toolIcon", "value"], "kendoComboBox": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "placeholder", "popup", "suggest", "template", "text", "value", "valuePrimitive", "virtual"], "kendoContextMenu": ["alignToAnchor", "animation", "closeOnClick", "dataSource", "direction", "filter", "hoverDelay", "name", "orientation", "popupCollision", "showOn", "target"], "kendoDatePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "parseFormats", "start", "value"], "kendoDateTimePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "interval", "max", "min", "month", "name", "parseFormats", "start", "timeFormat", "value"], "kendoDiagram": ["autoBind", "connectionDefaults", "connections", "connectionsDataSource", "dataSource", "editable", "layout", "name", "pannable", "pdf", "selectable", "shapeDefaults", "shapes", "template", "zoom", "zoomMax", "zoomMin", "zoomRate"], "kendoDraggable": ["axis", "container", "cursorOffset", "distance", "filter", "group", "hint", "ignore"], "kendoDropDownList": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "ignoreCase", "index", "minLength", "name", "optionLabel", "optionLabelTemplate", "popup", "template", "text", "value", "valuePrimitive", "valueTemplate", "virtual"], "kendoDropTarget": ["group"], "kendoDropTargetArea": ["filter", "group"], "kendoEditor": ["domain", "encoded", "fileBrowser", "imageBrowser", "messages", "name", "pdf", "resizable", "serialization", "stylesheets", "tools"], "kendoFlatColorPicker": ["autoupdate", "buttons", "messages", "name", "opacity", "preview", "value"], "kendoGantt": ["assignments", "autoBind", "columnResizeHandleWidth", "columns", "currentTimeMarker", "dataSource", "dependencies", "editable", "height", "hourSpan", "listWidth", "messages", "name", "navigatable", "pdf", "resizable", "resources", "rowHeight", "selectable", "showWorkDays", "showWorkHours", "snap", "taskTemplate", "toolbar", "tooltip", "views", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoGrid": ["allowCopy", "altRowTemplate", "autoBind", "columnMenu", "columnResizeHandleWidth", "columns", "dataSource", "detailTemplate", "editable", "excel", "filterable", "groupable", "height", "messages", "mobile", "name", "navigatable", "noRecords", "pageable", "pdf", "reorderable", "resizable", "rowTemplate", "scrollable", "selectable", "sortable", "toolbar"], "kendoLinearGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoListView": ["altTemplate", "autoBind", "dataSource", "editTemplate", "name", "navigatable", "selectable", "template"], "kendoMap": ["center", "controls", "layerDefaults", "layers", "markerDefaults", "markers", "maxZoom", "minSize", "minZoom", "name", "pannable", "wraparound", "zoom", "zoomable"], "kendoMaskedTextBox": ["clearPromptChar", "culture", "mask", "name", "promptChar", "rules", "unmaskOnPost", "value"], "kendoMenu": ["animation", "closeOnClick", "dataSource", "direction", "hoverDelay", "name", "openOnClick", "orientation", "popupCollision"], "kendoMobileActionSheet": ["cancel", "name", "popup", "type"], "kendoMobileBackButton": ["name"], "kendoMobileButton": ["badge", "clickOn", "enable", "icon", "name"], "kendoMobileButtonGroup": ["enable", "index", "name", "selectOn"], "kendoMobileCollapsible": ["animation", "collapsed", "expandIcon", "iconPosition", "inset", "name"], "kendoMobileDetailButton": ["name"], "kendoMobileDrawer": ["container", "name", "position", "swipeToOpen", "swipeToOpenViews", "title", "views"], "kendoMobileLayout": ["id", "name", "platform"], "kendoMobileListView": ["appendOnRefresh", "autoBind", "dataSource", "endlessScroll", "filterable", "fixedHeaders", "headerTemplate", "loadMore", "messages", "name", "pullParameters", "pullToRefresh", "style", "template", "type", "virtualViewSize"], "kendoMobileLoader": ["name"], "kendoMobileModalView": ["height", "modal", "name", "width"], "kendoMobileNavBar": ["name"], "kendoMobilePane": ["collapsible", "initial", "layout", "loading", "name", "portraitWidth", "transition"], "kendoMobilePopOver": ["name", "pane", "popup"], "kendoMobileScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "itemsPerPage", "name", "page", "pageSize", "template", "velocityThreshold"], "kendoMobileScroller": ["elastic", "messages", "name", "pullOffset", "pullToRefresh", "useNative", "visibleScrollHints", "zoom"], "kendoMobileSplitView": ["name", "style"], "kendoMobileSwitch": ["checked", "enable", "name", "offLabel", "onLabel"], "kendoMobileTabStrip": ["name", "selectedIndex"], "kendoMobileView": ["model", "name", "reload", "scroller", "stretch", "title", "useNativeScrolling", "zoom"], "kendoMultiSelect": ["animation", "autoBind", "autoClose", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "itemTemplate", "maxSelectedItems", "minLength", "name", "placeholder", "popup", "tagMode", "tagTemplate", "value", "valuePrimitive", "virtual"], "kendoNotification": ["allowHideAfter", "animation", "appendTo", "autoHideAfter", "button", "height", "hideOnClick", "name", "position", "stacking", "templates", "width"], "kendoNumericTextBox": ["culture", "decimals", "downArrowText", "format", "max", "min", "name", "placeholder", "spinners", "step", "upArrowText", "value"], "kendoPager": ["autoBind", "buttonCount", "dataSource", "info", "input", "linkTemplate", "messages", "name", "numeric", "pageSizes", "previousNext", "refresh", "selectTemplate"], "kendoPanelBar": ["animation", "contentUrls", "dataSource", "expandMode", "name"], "kendoPivotConfigurator": ["dataSource", "filterable", "height", "messages", "name", "sortable"], "kendoPivotGrid": ["autoBind", "columnHeaderTemplate", "columnWidth", "dataCellTemplate", "dataSource", "excel", "filterable", "height", "kpiStatusTemplate", "kpiTrendTemplate", "messages", "name", "pdf", "reorderable", "rowHeaderTemplate", "sortable"], "kendoPopup": ["anchor", "animation", "appendTo", "name", "origin", "position"], "kendoProgressBar": ["animation", "chunkCount", "enable", "max", "min", "name", "orientation", "reverse", "showStatus", "type", "value"], "kendoQRCode": ["background", "border", "color", "encoding", "errorCorrection", "name", "padding", "renderAs", "size", "value"], "kendoRadialGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoRangeSlider": ["largeStep", "max", "min", "name", "orientation", "selectionEnd", "selectionStart", "smallStep", "tickPlacement", "tooltip"], "kendoResponsivePanel": ["autoClose", "breakpoint", "name", "orientation", "toggleButton"], "kendoScheduler": ["allDayEventTemplate", "allDaySlot", "autoBind", "currentTimeMarker", "dataSource", "date", "dateHeaderTemplate", "editable", "endTime", "eventTemplate", "footer", "group", "groupHeaderTemplate", "height", "majorTick", "majorTimeHeaderTemplate", "max", "messages", "min", "minorTickCount", "minorTimeHeaderTemplate", "mobile", "name", "pdf", "resources", "selectable", "showWorkHours", "snap", "startTime", "timezone", "toolbar", "views", "width", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoSlider": ["decreaseButtonTitle", "increaseButtonTitle", "largeStep", "max", "min", "name", "orientation", "showButtons", "smallStep", "tickPlacement", "tooltip", "value"], "kendoSortable": ["autoScroll", "axis", "connectWith", "container", "cursor", "cursorOffset", "disabled", "filter", "handler", "hint", "holdToDrag", "ignore", "name", "placeholder"], "kendoSparkline": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "data", "dataSource", "name", "plotArea", "pointWidth", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "tooltip", "transitions", "type", "valueAxis"], "kendoSplitter": ["name", "orientation", "panes"], "kendoSpreadsheet": ["activeSheet", "columnWidth", "columns", "excel", "headerHeight", "headerWidth", "name", "pdf", "rowHeight", "rows", "sheets", "sheetsbar", "toolbar"], "kendoStockChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "dateField", "legend", "name", "navigator", "panes", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis"], "kendoTabStrip": ["animation", "collapsible", "contentUrls", "dataContentField", "dataContentUrlField", "dataImageUrlField", "dataSource", "dataSpriteCssClass", "dataTextField", "dataUrlField", "name", "navigatable", "scrollable", "tabPosition", "value"], "kendoTimePicker": ["animation", "culture", "dates", "format", "interval", "max", "min", "name", "parseFormats", "value"], "kendoToolBar": ["items", "name", "resizable"], "kendoTooltip": ["animation", "autoHide", "callout", "content", "filter", "height", "iframe", "name", "position", "showAfter", "showOn", "width"], "kendoTouch": ["doubleTapTimeout", "enableSwipe", "filter", "maxDuration", "maxYDelta", "minHold", "minXDelta", "multiTouch", "name", "surface"], "kendoTreeList": ["autoBind", "columnMenu", "columns", "dataSource", "editable", "excel", "filterable", "height", "messages", "name", "pdf", "reorderable", "resizable", "scrollable", "selectable", "sortable", "toolbar"], "kendoTreeMap": ["autoBind", "colorField", "colors", "dataSource", "name", "template", "textField", "theme", "type", "valueField"], "kendoTreeView": ["animation", "autoBind", "autoScroll", "checkboxes", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dragAndDrop", "loadOnDemand", "messages", "name", "template"], "kendoUpload": ["async", "enabled", "files", "localization", "multiple", "name", "showFileList", "template"], "kendoValidator": ["errorTemplate", "messages", "name", "rules", "validateOnBlur"], "kendoWindow": ["actions", "animation", "appendTo", "autoFocus", "content", "draggable", "height", "iframe", "maxHeight", "maxWidth", "minHeight", "minWidth", "modal", "name", "pinned", "position", "resizable", "scrollable", "title", "visible", "width"], "GanttColumn": ["editable", "field", "format", "sortable", "title", "width"], "GridColumn": ["aggregates", "attributes", "columns", "command", "encoded", "field", "filterable", "footerTemplate", "format", "groupFooterTemplate", "groupHeaderTemplate", "groupable", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "values", "width", "editor"], "GridToolbarItem": ["name", "template", "text"], "ToolBarItem": ["attributes", "buttons", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "menuButtons", "overflow", "overflowTemplate", "primary", "selected", "showIcon", "showText", "spriteCssClass", "template", "text", "togglable", "toggle", "type", "url"], "ToolBarItemButton": ["attributes", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "selected", "showIcon", "showText", "spriteCssClass", "text", "togglable", "toggle", "url"], "TreeListColumn": ["attributes", "command", "encoded", "expandable", "field", "filterable", "footerTemplate", "format", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "width", "editor"] };
export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-',
  attributePrefix: 'ak-',
  elementPrefix: 'ak-'
};

export let ControlProperties = (_dec39 = inject(Util), _dec39(_class24 = class ControlProperties {

  constructor(util) {
    this.cache = {};

    this.util = util;
  }

  getProperties(controlName, extraProperties = []) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    let options1 = this.getWidgetProperties(controlName);

    let options2 = this.getGeneratedProperties(controlName);

    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));
    keys = keys.concat(extraProperties.filter(item => keys.indexOf(item) < 0));

    this.cache[controlName] = keys;

    return keys;
  }

  getGeneratedProperties(controlName) {
    if (!bindables[controlName]) {
      throw new Error(`${ controlName } not found in generated bindables.js`);
    }

    return bindables[controlName];
  }

  getWidgetProperties(controlName) {
    if (jQuery.fn[controlName]) {
      return Object.keys(jQuery.fn[controlName].widget.prototype.options);
    }

    return [];
  }

  getTemplateProperties(controlName) {
    let properties = this.getProperties(controlName);

    let templates = properties.filter(prop => this.util.isTemplateProperty(prop));

    return templates;
  }
}) || _class24);

export function generateBindables(controlName, extraProperties = []) {
  return function (target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = Container.instance || new Container();
    let controlProperties = container.get(ControlProperties);
    let util = container.get(Util);
    let optionKeys = controlProperties.getProperties(controlName, extraProperties);

    optionKeys.push('widget');
    optionKeys.push('options');
    optionKeys.push('noInit');

    for (let i = 0; i < optionKeys.length; i++) {
      let option = optionKeys[i];

      let nameOrConfigOrTarget = {
        name: util.getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
      }

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

export function delayed() {
  return function (target, key, descriptor) {
    let taskQueue = Container.instance.get(TaskQueue);
    let ptr = descriptor.value;

    descriptor.value = function (...args) {
      taskQueue.queueTask(() => ptr.apply(this, args));
    };

    return descriptor;
  };
}

export let NotifyBindingBehavior = (_dec40 = inject(EventManager), _dec40(_class26 = class NotifyBindingBehavior {

  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  bind(binding, scope, target, fieldName) {
    if (!binding.updateSource) return;

    let targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    binding.targetObserver = targetObserver;
    targetObserver.originalHandler = binding.targetObserver.handler;
    let handler = this.eventManager.createElementHandler(['blur']);
    targetObserver.handler = handler;

    let observable = target || binding.source.bindingContext;
    let field = fieldName || binding.sourceExpression.expression.name;
    let intercept = binding.updateSource;

    binding['intercepted-updateSource'] = intercept;
    binding.updateSource = function (value) {
      if (observable.set && observable.trigger) {
        setTimeout(() => observable.trigger.call(observable, 'change', { field: field }), 100);

        if (observable.dirty === false) {
          observable.dirty = true;
        }
      }

      return intercept.call(binding, value);
    };
  }

  unbind(binding, scope) {
    if (!binding['intercepted-updateSource']) return;

    binding.updateSource = binding['intercepted-updateSource'];
    binding['intercepted-updateSource'] = null;
  }
}) || _class26);

export let OptionsBuilder = (_dec41 = inject(ControlProperties, Util), _dec41(_class27 = class OptionsBuilder {

  constructor(controlProperties, util) {
    this.controlProperties = controlProperties;
    this.util = util;
  }

  getOptions(viewModel, className) {
    let options = {};
    let props = this.controlProperties.getProperties(className);

    if (viewModel.beforeOptionsBuild) {
      viewModel.beforeOptionsBuild(options);
    }

    for (let i = 0; i < props.length; i++) {
      let prop = props[i];
      let value = viewModel[this.util.getBindablePropertyName(prop)];

      if (this.util.hasValue(value)) {
        options[prop] = value;
      }
    }

    if (viewModel.afterOptionsBuild) {
      viewModel.afterOptionsBuild(options);
    }

    return this.util.pruneOptions(options);
  }
}) || _class27);

export let TemplateCompiler = (_dec42 = inject(TemplatingEngine, Util), _dec42(_class28 = class TemplateCompiler {

  constructor(templatingEngine, util) {
    this.isInitialized = false;

    this.templatingEngine = templatingEngine;
    this.util = util;
  }

  initialize() {
    if (this.isInitialized) return;

    let _this = this;
    kendo.ui.Widget.prototype.angular = function (_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };

    this.isInitialized = true;
  }

  handleTemplateEvents(widget, _event, _args) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    let $parent = widget._$parent || (widget.options._$parent ? widget.options._$parent[0] : undefined);
    let viewResources = widget._$resources || (widget.options._$resources ? widget.options._$resources[0] : undefined);

    if (!$parent) return;

    let args = _args();
    let elements = args.elements;
    let data = args.data;

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
  }

  compile($parent, elements, data, viewResources) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let ctx = undefined;

      if (data && data[i]) {
        let _data = data[i];
        let dataItem = _data.dataItem || _data.aggregate || _data;

        if (!this.util.isObject(dataItem)) {
          ctx = {
            dataItem: dataItem
          };
        } else {
          ctx = dataItem;
        }
      }

      if (element instanceof jQuery) {
        element.each((index, elem) => this.enhanceView($parent, elem, ctx, viewResources));
      } else {
        this.enhanceView($parent, element, ctx, viewResources);
      }
    }
  }

  enhanceView($parent, element, ctx, viewResources) {
    let view = $(element).data('viewInstance');

    if (element.querySelectorAll('.au-target').length === 0) {
      if (viewResources) {
        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: createOverrideContext(ctx, $parent),
          element: element,
          resources: viewResources
        });
      } else {
        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: createOverrideContext(ctx, $parent),
          element: element
        });
      }

      $(element).data('viewInstance', view);
    }

    view.attached();
  }

  cleanup(elements) {
    if (!elements) return;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.cleanupView(element);
    }
  }

  cleanupView(element) {
    let view = $(element).data('viewInstance');
    if (!view) return;

    view.detached();
    view.unbind();
  }
}) || _class28);

export let TemplateGatherer = (_dec43 = inject(ControlProperties, Util, KendoConfigBuilder), _dec43(_class30 = class TemplateGatherer {

  constructor(controlProperties, util, config) {
    this.controlProperties = controlProperties;
    this.config = config;
    this.util = util;
  }

  useTemplates(target, controlName, templates) {
    let templateProps = this.controlProperties.getTemplateProperties(controlName);

    if (!templates) {
      templates = [];
    }

    templates.forEach(c => {
      if (!c.for) {
        throw new Error('Templating support is not enabled. Call .kendoTemplateSupport() in main.js or import common/template via require');
      }

      if (templateProps.indexOf(c.for) === -1) {
        if (c.for.indexOf('.') === -1) {
          throw new Error('Invalid template property name: "' + c.for + '", valid values are: ' + templateProps.join(', '));
        }
      }

      if (this.util.hasValue(c.template)) {
        let template = c.template;

        if (this.config.templateCallback) {
          template = this.config.templateCallback(target, c, c.template);
        }

        let parser = new ParserImplementation(new Lexer(), c.for);

        let expression = parser.parseExpression();

        let iterator = expression;
        while (iterator) {
          if (!iterator.object) {
            iterator.name = this.util.getBindablePropertyName(iterator.name);
          }
          iterator = iterator.object;
        }

        let scope = createOverrideContext(target, {});

        expression.assign(scope, c.kendoTemplate ? template : () => template);
      }
    });
  }
}) || _class30);

export let Template = (_dec44 = customElement(`${ constants.elementPrefix }template`), _dec45 = noView(), _dec46 = processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  element.innerHTML = '';
}), _dec47 = inject(TargetInstruction), _dec44(_class32 = _dec45(_class32 = _dec46(_class32 = _dec47(_class32 = (_class33 = class Template {

  constructor(targetInstruction) {
    _initDefineProp(this, 'template', _descriptor8, this);

    _initDefineProp(this, 'for', _descriptor9, this);

    _initDefineProp(this, 'kendoTemplate', _descriptor10, this);

    this.template = targetInstruction.elementInstruction.template;
  }
}, (_descriptor8 = _applyDecoratedDescriptor(_class33.prototype, 'template', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class33.prototype, 'for', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'template';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class33.prototype, 'kendoTemplate', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
})), _class33)) || _class32) || _class32) || _class32) || _class32);

const capitalMatcher = /([A-Z])/g;

export let Util = class Util {
  addHyphenAndLower(char) {
    return '-' + char.toLowerCase();
  }

  _hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, this.addHyphenAndLower);
  }

  _unhyphenate(name) {
    return name.replace(/-([a-z])/g, g => g[1].toUpperCase());
  }

  getBindablePropertyName(propertyName) {
    let name = `${ constants.bindablePrefix }${ propertyName }`;

    return this._unhyphenate(name);
  }

  getKendoPropertyName(propertyName) {
    let withoutPrefix = propertyName.substring(1);

    return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
  }

  getEventsFromAttributes(element) {
    let attributes = Array.prototype.slice.call(element.attributes);
    let events = [];

    for (let i = 0; i < attributes.length; i++) {
      let attribute = attributes[i];
      let attributeName = attribute.name;
      if (!attributeName.startsWith(constants.eventPrefix)) continue;

      let hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

      let withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

      let camelCased = this._unhyphenate(withoutTriggerDelegate);

      events.push(camelCased);
    }

    return events;
  }

  pruneOptions(options) {
    let returnOptions = {};

    for (let prop in options) {
      if (this.hasValue(options[prop])) {
        returnOptions[prop] = options[prop];
      }
    }

    return returnOptions;
  }

  hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  }

  fireEvent(element, name, data = {}) {
    let event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  fireKendoEvent(element, name, data = {}) {
    return this.fireEvent(element, `${ constants.eventPrefix }${ name }`, data);
  }

  isTemplateProperty(propertyName) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  }

  isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
};

const logger = LogManager.getLogger('aurelia-kendoui-bridge');

export let WidgetBase = (_dec48 = transient(), _dec49 = inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder), _dec48(_class35 = _dec49(_class35 = class WidgetBase {

  constructor(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder) {
    this.bindingsToKendo = [];

    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.configBuilder = configBuilder;
    this.templateGatherer = templateGatherer;
    templateCompiler.initialize();
  }

  control(controlName) {
    if (!controlName || !kendo.jQuery.fn[controlName]) {
      throw new Error(`The name of control ${ controlName } is invalid or not set`);
    }

    this.controlName = controlName;

    let ctor = kendo.jQuery.fn[this.controlName];
    this.kendoOptions = ctor.widget.prototype.options;
    this.kendoEvents = ctor.widget.prototype.events;

    return this;
  }

  linkViewModel(viewModel) {
    if (!viewModel) {
      throw new Error('viewModel is not set');
    }

    this.viewModel = viewModel;

    return this;
  }

  useViewResources(resources) {
    if (!resources) {
      throw new Error('resources is not set');
    }

    this.viewResources = resources;

    return this;
  }

  useValueBinding(valueBindingProperty = 'kValue', valueFunction = 'value') {
    this.valueBindingProperty = valueBindingProperty;
    this.valueFunction = valueFunction;
    this.withValueBinding = true;

    this.bindToKendo(valueBindingProperty, valueFunction);

    return this;
  }

  bindToKendo(propertyName, functionName) {
    this.bindingsToKendo.push({
      propertyName: propertyName,
      functionName: functionName
    });

    return this;
  }

  createWidget(options) {
    if (!options) {
      throw new Error('the createWidget() function needs to be called with an object');
    }

    if (!options.element) {
      throw new Error('element is not set');
    }

    if (this.viewModel && this.viewModel.kWidget) {
      this.destroy(this.viewModel.kWidget);
    }

    let allOptions = this._getOptions(options.rootElement || options.element);

    if (options.beforeInitialize) {
      options.beforeInitialize(allOptions);
    }

    Object.assign(allOptions, {
      _$parent: [options.parentCtx],
      _$resources: [this.viewResources]
    });

    if (this.configBuilder.debugMode) {
      logger.debug(`initializing ${ this.controlName } with the following config`, allOptions);
    }

    let widget = this._createWidget(options.element, allOptions, this.controlName);

    widget._$parent = options.parentCtx;
    widget._$resources = this.viewResources;

    if (this.withValueBinding) {
      widget.first('change', args => this._handleValueChange(args.sender));
      widget.first('dataBound', args => this._handleValueChange(args.sender));
    }

    this.bindingsToKendo.forEach(binding => {
      let value = this.viewModel[binding.propertyName];

      if (typeof value !== 'undefined' && value !== null && value !== '') {
        widget[binding.functionName](value);
      }
    });

    if (options.afterInitialize) {
      options.afterInitialize();
    }

    return widget;
  }

  _createWidget(element, options, controlName) {
    return kendo.jQuery(element)[controlName](options).data(controlName);
  }

  _getOptions(element) {
    let options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
    let eventOptions = this.getEventOptions(element);

    return this.util.pruneOptions(Object.assign({}, this.viewModel.kOptions || {}, options, eventOptions));
  }

  getEventOptions(element) {
    let options = {};
    let allowedEvents = this.kendoEvents;
    let delayedExecution = ['change'];

    let events = this.util.getEventsFromAttributes(element);

    events.forEach(event => {
      if (!allowedEvents.includes(event)) {
        throw new Error(`${ event } is not an event on the ${ this.controlName } control`);
      }

      if (delayedExecution.includes(event)) {
        options[event] = e => {
          this.taskQueue.queueMicroTask(() => this.util.fireKendoEvent(element, this.util._hyphenate(event), e));
        };
      } else {
        options[event] = e => this.util.fireKendoEvent(element, this.util._hyphenate(event), e);
      }
    });

    return options;
  }

  _handleValueChange(widget) {
    this.viewModel[this.valueBindingProperty] = this.getValue(widget);
  }

  getValue(widget) {
    return widget[this.valueFunction]();
  }

  handlePropertyChanged(widget, property, newValue, oldValue) {
    let binding = this.bindingsToKendo.find(i => i.propertyName === property);
    if (binding) {
      widget[binding.functionName](newValue);
    }
  }

  useTemplates(target, controlName, templates) {
    return this.templateGatherer.useTemplates(target, controlName, templates);
  }

  destroy(widget) {
    if (widget) {
      kendo.destroy(widget.element);
      widget = null;

      if (this.viewModel.kWidget) {
        this.viewModel.kWidget = null;
      }
    }
  }
}) || _class35) || _class35);

import 'kendo.menu.min';

export let ContextMenu = (_dec50 = customAttribute(`${ constants.attributePrefix }contextmenu`), _dec51 = generateBindables('kendoContextMenu'), _dec52 = inject(Element, WidgetBase), _dec50(_class37 = _dec51(_class37 = _dec52(_class37 = class ContextMenu {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoContextMenu').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class37) || _class37) || _class37);

import 'kendo.datepicker.min';

export let DatePicker = (_dec53 = customAttribute(`${ constants.attributePrefix }datepicker`), _dec54 = generateBindables('kendoDatePicker'), _dec55 = inject(Element, WidgetBase), _dec53(_class38 = _dec54(_class38 = _dec55(_class38 = (_class39 = class DatePicker {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor11, this);

    _initDefineProp(this, 'kReadOnly', _descriptor12, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDatePicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly').useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor11 = _applyDecoratedDescriptor(_class39.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class39.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
})), _class39)) || _class38) || _class38) || _class38);

import 'kendo.datetimepicker.min';

export let DateTimePicker = (_dec56 = customAttribute(`${ constants.attributePrefix }datetimepicker`), _dec57 = generateBindables('kendoDateTimePicker'), _dec58 = inject(Element, WidgetBase), _dec56(_class41 = _dec57(_class41 = _dec58(_class41 = (_class42 = class DateTimePicker {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor13, this);

    _initDefineProp(this, 'kReadOnly', _descriptor14, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDateTimePicker').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor13 = _applyDecoratedDescriptor(_class42.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class42.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
})), _class42)) || _class41) || _class41) || _class41);

import 'kendo.dataviz.diagram.min';

export let Diagram = (_dec59 = customElement(`${ constants.elementPrefix }diagram`), _dec60 = generateBindables('kendoDiagram'), _dec61 = inject(Element, WidgetBase), _dec59(_class44 = _dec60(_class44 = _dec61(_class44 = class Diagram {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoDiagram').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class44) || _class44) || _class44);

import 'kendo.draganddrop.min';

export let Draggabke = (_dec62 = customAttribute(`${ constants.attributePrefix }draggable`), _dec63 = generateBindables('kendoDraggable'), _dec64 = inject(Element, WidgetBase), _dec62(_class45 = _dec63(_class45 = _dec64(_class45 = class Draggabke {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoDraggable').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: options => this.beforeInitialize(options)
    });
  }

  beforeInitialize(options) {
    if (options.container) {
      Object.assign(options, { container: $(options.container) });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class45) || _class45) || _class45);

import 'kendo.draganddrop.min';

export let DropTargetArea = (_dec65 = customAttribute(`${ constants.attributePrefix }drop-target-area`), _dec66 = generateBindables('kendoDropTargetArea'), _dec67 = inject(Element, WidgetBase), _dec65(_class46 = _dec66(_class46 = _dec67(_class46 = class DropTargetArea {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTargetArea').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class46) || _class46) || _class46);

import 'kendo.draganddrop.min';

export let DropTarget = (_dec68 = customAttribute(`${ constants.attributePrefix }drop-target`), _dec69 = generateBindables('kendoDropTarget'), _dec70 = inject(Element, WidgetBase), _dec68(_class47 = _dec69(_class47 = _dec70(_class47 = class DropTarget {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTarget').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class47) || _class47) || _class47);

import 'kendo.dropdownlist.min';
import 'kendo.virtuallist.min';

export let DropDownList = (_dec71 = customElement(`${ constants.elementPrefix }drop-down-list`), _dec72 = generateBindables('kendoDropDownList'), _dec73 = inject(Element, WidgetBase, ViewResources), _dec74 = children(`${ constants.elementPrefix }template`), _dec71(_class48 = _dec72(_class48 = _dec73(_class48 = (_class49 = class DropDownList {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'kNoValueBinding', _descriptor15, this);

    _initDefineProp(this, 'kEnabled', _descriptor16, this);

    _initDefineProp(this, 'kReadOnly', _descriptor17, this);

    _initDefineProp(this, 'templates', _descriptor18, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoDropDownList', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor15 = _applyDecoratedDescriptor(_class49.prototype, 'kNoValueBinding', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class49.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class49.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class49.prototype, 'templates', [_dec74], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class49)) || _class48) || _class48) || _class48);

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

import 'kendo.editor.min';

export let Editor = (_dec75 = customAttribute(`${ constants.attributePrefix }rich-editor`), _dec76 = generateBindables('kendoEditor'), _dec77 = inject(Element, WidgetBase), _dec75(_class51 = _dec76(_class51 = _dec77(_class51 = class Editor {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoEditor').linkViewModel(this).useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class51) || _class51) || _class51);

import 'kendo.colorpicker.min';

export let FlatColorPicker = (_dec78 = customElement(`${ constants.attributePrefix }flat-color-picker`), _dec79 = generateBindables('kendoFlatColorPicker'), _dec80 = inject(Element, WidgetBase), _dec78(_class52 = _dec79(_class52 = _dec80(_class52 = class FlatColorPicker {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class52) || _class52) || _class52);

export let GanttCol = (_dec81 = customElement(`${ constants.elementPrefix }gantt-col`), _dec82 = generateBindables('GanttColumn'), _dec83 = inject(TemplateGatherer), _dec81(_class53 = _dec82(_class53 = _dec83(_class53 = class GanttCol {}) || _class53) || _class53) || _class53);

import 'kendo.gantt.min';

export let Gantt = (_dec84 = customElement(`${ constants.elementPrefix }gantt`), _dec85 = generateBindables('kendoGantt'), _dec86 = inject(Element, WidgetBase, ViewResources, OptionsBuilder), _dec87 = children(`${ constants.elementPrefix }gantt-col`), _dec88 = children(`${ constants.elementPrefix }template`), _dec84(_class54 = _dec85(_class54 = _dec86(_class54 = (_class55 = class Gantt {

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    _initDefineProp(this, 'columns', _descriptor19, this);

    _initDefineProp(this, 'templates', _descriptor20, this);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoGantt').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoGantt', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: o => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GanttColumn'));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor19 = _applyDecoratedDescriptor(_class55.prototype, 'columns', [_dec87], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class55.prototype, 'templates', [_dec88], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class55)) || _class54) || _class54) || _class54);

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

import 'kendo.dataviz.gauge.min';

export let LinearGauge = (_dec89 = customElement(`${ constants.elementPrefix }linear-gauge`), _dec90 = generateBindables('kendoLinearGauge'), _dec91 = inject(Element, WidgetBase), _dec89(_class57 = _dec90(_class57 = _dec91(_class57 = class LinearGauge {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoLinearGauge').linkViewModel(this).useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class57) || _class57) || _class57);

import 'kendo.dataviz.gauge.min';

export let RadialGauge = (_dec92 = customElement(`${ constants.elementPrefix }radial-gauge`), _dec93 = generateBindables('kendoRadialGauge'), _dec94 = inject(Element, WidgetBase), _dec92(_class58 = _dec93(_class58 = _dec94(_class58 = class RadialGauge {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class58) || _class58) || _class58);

export let Col = (_dec95 = customElement(`${ constants.elementPrefix }col`), _dec96 = generateBindables('GridColumn'), _dec97 = inject(TemplateGatherer, OptionsBuilder), _dec98 = children(`${ constants.elementPrefix }template`), _dec99 = children(`${ constants.elementPrefix }col`), _dec95(_class59 = _dec96(_class59 = _dec97(_class59 = (_class60 = class Col {

  constructor(templateGatherer, optionsBuilder) {
    _initDefineProp(this, 'templates', _descriptor21, this);

    _initDefineProp(this, 'columns', _descriptor22, this);

    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  beforeOptionsBuild() {
    this.templateGatherer.useTemplates(this, 'GridColumn', this.templates);
  }

  afterOptionsBuild(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(col => {
        options.columns.push(this.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }
  }
}, (_descriptor21 = _applyDecoratedDescriptor(_class60.prototype, 'templates', [_dec98], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class60.prototype, 'columns', [_dec99], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class60)) || _class59) || _class59) || _class59);

export let GridToolbar = (_dec100 = customElement(`${ constants.elementPrefix }grid-toolbar`), _dec101 = generateBindables('GridToolbarItem'), _dec102 = inject(TemplateGatherer), _dec103 = children(`${ constants.elementPrefix }template`), _dec100(_class62 = _dec101(_class62 = _dec102(_class62 = (_class63 = class GridToolbar {

  constructor(templateGatherer) {
    _initDefineProp(this, 'templates', _descriptor23, this);

    this.templateGatherer = templateGatherer;
  }

  beforeOptionsBuild() {
    this.templateGatherer.useTemplates(this, 'GridToolbarItem', this.templates);
  }
}, (_descriptor23 = _applyDecoratedDescriptor(_class63.prototype, 'templates', [_dec103], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class63)) || _class62) || _class62) || _class62);

import 'kendo.data.signalr.min';
import 'kendo.filtercell.min';
import 'kendo.grid.min';

export let Grid = (_dec104 = customElement(`${ constants.elementPrefix }grid`), _dec105 = generateBindables('kendoGrid'), _dec106 = inject(Element, WidgetBase, ViewResources, OptionsBuilder, TemplateGatherer), _dec107 = children(`${ constants.elementPrefix }col`), _dec108 = children(`${ constants.elementPrefix }template`), _dec109 = children(`${ constants.elementPrefix }grid-toolbar`), _dec104(_class65 = _dec105(_class65 = _dec106(_class65 = (_class66 = class Grid {

  constructor(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
    _initDefineProp(this, 'columns', _descriptor24, this);

    _initDefineProp(this, 'templates', _descriptor25, this);

    _initDefineProp(this, 'gridToolbars', _descriptor26, this);

    this.element = element;
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
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
  }

  recreate() {
    this.templateGatherer.useTemplates(this, 'kendoGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: o => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GridColumn'));
      });
    }

    if (this.gridToolbars && this.gridToolbars.length > 0) {
      let toolbar = this.gridToolbars[0];
      let o = this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem');
      if (o.template) {
        options.toolbar = o.template;
      } else {
        options.toolbar = o;
      }
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor24 = _applyDecoratedDescriptor(_class66.prototype, 'columns', [_dec107], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class66.prototype, 'templates', [_dec108], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class66.prototype, 'gridToolbars', [_dec109], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class66)) || _class65) || _class65) || _class65);

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

import 'kendo.listview.min';

export let ListView = (_dec110 = customElement(`${ constants.elementPrefix }list-view`), _dec111 = generateBindables('kendoListView'), _dec112 = inject(Element, WidgetBase, ViewResources), _dec113 = children(`${ constants.elementPrefix }template`), _dec110(_class68 = _dec111(_class68 = _dec112(_class68 = (_class69 = class ListView {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor27, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoListView', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor27 = _applyDecoratedDescriptor(_class69.prototype, 'templates', [_dec113], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class69)) || _class68) || _class68) || _class68);

import 'kendo.dataviz.map.min';

export let Map = (_dec114 = customElement(`${ constants.elementPrefix }map`), _dec115 = generateBindables('kendoMap'), _dec116 = inject(Element, WidgetBase), _dec114(_class71 = _dec115(_class71 = _dec116(_class71 = class Map {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class71) || _class71) || _class71);

import 'kendo.maskedtextbox.min';

export let MaskedTextBox = (_dec117 = customAttribute(`${ constants.attributePrefix }maskedtextbox`), _dec118 = generateBindables('kendoMaskedTextBox'), _dec119 = inject(Element, WidgetBase), _dec117(_class72 = _dec118(_class72 = _dec119(_class72 = (_class73 = class MaskedTextBox {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kDisableDates', _descriptor28, this);

    _initDefineProp(this, 'kEnabled', _descriptor29, this);

    _initDefineProp(this, 'kReadOnly', _descriptor30, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMaskedTextBox').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor28 = _applyDecoratedDescriptor(_class73.prototype, 'kDisableDates', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor29 = _applyDecoratedDescriptor(_class73.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor30 = _applyDecoratedDescriptor(_class73.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
})), _class73)) || _class72) || _class72) || _class72);

import 'kendo.menu.min';

export let Menu = (_dec120 = customAttribute(`${ constants.attributePrefix }menu`), _dec121 = generateBindables('kendoMenu'), _dec122 = inject(Element, WidgetBase), _dec120(_class75 = _dec121(_class75 = _dec122(_class75 = class Menu {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class75) || _class75) || _class75);

import 'kendo.multiselect.min';
import 'kendo.virtuallist.min';

export let Multiselect = (_dec123 = customElement(`${ constants.elementPrefix }multiselect`), _dec124 = generateBindables('kendoMultiSelect', ['template']), _dec125 = inject(Element, WidgetBase, ViewResources), _dec126 = children(`${ constants.elementPrefix }template`), _dec123(_class76 = _dec124(_class76 = _dec125(_class76 = (_class77 = class Multiselect {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'kEnabled', _descriptor31, this);

    _initDefineProp(this, 'kReadOnly', _descriptor32, this);

    _initDefineProp(this, 'kNoValueBinding', _descriptor33, this);

    _initDefineProp(this, 'templates', _descriptor34, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMultiSelect').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoMultiSelect', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    if (property !== 'kValue' || this.kWidget.input.val() === '') {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor31 = _applyDecoratedDescriptor(_class77.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor32 = _applyDecoratedDescriptor(_class77.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor33 = _applyDecoratedDescriptor(_class77.prototype, 'kNoValueBinding', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class77.prototype, 'templates', [_dec126], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class77)) || _class76) || _class76) || _class76);

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

export let NotificationTemplate = (_dec127 = customElement(`${ constants.elementPrefix }notification-template`), _dec128 = noView(), _dec129 = processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  return true;
}), _dec130 = inject(TargetInstruction), _dec127(_class79 = _dec128(_class79 = _dec129(_class79 = _dec130(_class79 = (_class80 = class NotificationTemplate {

  constructor(targetInstruction) {
    _initDefineProp(this, 'template', _descriptor35, this);

    _initDefineProp(this, 'type', _descriptor36, this);

    this.template = targetInstruction.elementInstruction.template;
  }
}, (_descriptor35 = _applyDecoratedDescriptor(_class80.prototype, 'template', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor36 = _applyDecoratedDescriptor(_class80.prototype, 'type', [bindable], {
  enumerable: true,
  initializer: null
})), _class80)) || _class79) || _class79) || _class79) || _class79);

import 'kendo.notification.min';

export let Notification = (_dec131 = customElement(`${ constants.elementPrefix }notification`), _dec132 = generateBindables('kendoNotification'), _dec133 = inject(Element, WidgetBase, ViewResources), _dec134 = children(`${ constants.elementPrefix }notification-template`), _dec131(_class82 = _dec132(_class82 = _dec133(_class82 = (_class83 = class Notification {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor37, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNotification').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: e => this.beforeInitialize(e)
    });
  }

  beforeInitialize(options) {
    if (this.templates && this.templates.length > 0) {
      options.templates = [];

      this.templates.forEach(template => options.templates.push({
        type: template.type,
        template: () => template.template
      }));
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor37 = _applyDecoratedDescriptor(_class83.prototype, 'templates', [_dec134], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class83)) || _class82) || _class82) || _class82);

import 'kendo.numerictextbox.min';

export let NumericTextBox = (_dec135 = customAttribute(`${ constants.attributePrefix }numerictextbox`), _dec136 = generateBindables('kendoNumericTextBox'), _dec137 = inject(Element, WidgetBase), _dec135(_class85 = _dec136(_class85 = _dec137(_class85 = (_class86 = class NumericTextBox {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor38, this);

    _initDefineProp(this, 'kReadOnly', _descriptor39, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor38 = _applyDecoratedDescriptor(_class86.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor39 = _applyDecoratedDescriptor(_class86.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
})), _class86)) || _class85) || _class85) || _class85);

import 'kendo.panelbar.min';

export let PanelBar = (_dec138 = customElement(`${ constants.elementPrefix }panel-bar`), _dec139 = generateBindables('kendoPanelBar'), _dec140 = inject(Element, WidgetBase), _dec138(_class88 = _dec139(_class88 = _dec140(_class88 = class PanelBar {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let element = this.element;

    if (!hasListChildNode(element)) {
      let ul = document.createElement('ul');

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
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class88) || _class88) || _class88);

function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}

import 'kendo.pdf.min';
import 'kendo.excel.min';

export let PDF = class PDF {};

import 'kendo.pivot.configurator.min';

export let PivotConfigurator = (_dec141 = customElement(`${ constants.elementPrefix }pivot-configurator`), _dec142 = generateBindables('kendoPivotConfigurator'), _dec143 = inject(Element, WidgetBase), _dec141(_class89 = _dec142(_class89 = _dec143(_class89 = class PivotConfigurator {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotConfigurator').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class89) || _class89) || _class89);

import 'kendo.pivotgrid.min';
import 'kendo.pivot.fieldmenu.min';

export let PivotGrid = (_dec144 = customElement(`${ constants.elementPrefix }pivot-grid`), _dec145 = generateBindables('kendoPivotGrid'), _dec146 = inject(Element, WidgetBase, ViewResources), _dec147 = children(`${ constants.elementPrefix }template`), _dec144(_class90 = _dec145(_class90 = _dec146(_class90 = (_class91 = class PivotGrid {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor40, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor40 = _applyDecoratedDescriptor(_class91.prototype, 'templates', [_dec147], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class91)) || _class90) || _class90) || _class90);

import 'kendo.progressbar.min';

export let ProgressBar = (_dec148 = customAttribute(`${ constants.attributePrefix }progress-bar`), _dec149 = generateBindables('kendoProgressBar'), _dec150 = inject(Element, WidgetBase), _dec148(_class93 = _dec149(_class93 = _dec150(_class93 = (_class94 = class ProgressBar {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor41, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoProgressBar').bindToKendo('kEnabled', 'enable').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor41 = _applyDecoratedDescriptor(_class94.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class94)) || _class93) || _class93) || _class93);

import 'kendo.dataviz.qrcode.min';

export let QRCode = (_dec151 = customAttribute(`${ constants.attributePrefix }qrcode`), _dec152 = generateBindables('kendoQRCode'), _dec153 = inject(Element, WidgetBase), _dec151(_class96 = _dec152(_class96 = _dec153(_class96 = class QRCode {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoQRCode').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class96) || _class96) || _class96);

import 'kendo.slider.min';

export let RangeSlider = (_dec154 = customElement(`${ constants.elementPrefix }range-slider`), _dec155 = generateBindables('kendoRangeSlider'), _dec156 = inject(Element, WidgetBase), _dec154(_class97 = _dec155(_class97 = _dec156(_class97 = (_class98 = class RangeSlider {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor42, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoRangeSlider').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor42 = _applyDecoratedDescriptor(_class98.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class98)) || _class97) || _class97) || _class97);

import 'kendo.responsivepanel.min';

export let ResponsivePanel = (_dec157 = customAttribute(`${ constants.attributePrefix }responsivepanel`), _dec158 = generateBindables('kendoResponsivePanel'), _dec159 = inject(Element, WidgetBase), _dec157(_class100 = _dec158(_class100 = _dec159(_class100 = class ResponsivePanel {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoResponsivePanel').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class100) || _class100) || _class100);

import 'kendo.scheduler.min';
import 'kendo.scheduler.agendaview.min';
import 'kendo.scheduler.dayview.min';
import 'kendo.scheduler.monthview.min';
import 'kendo.scheduler.recurrence.min';
import 'kendo.scheduler.timelineview.min';

export let Scheduler = (_dec160 = customElement(`${ constants.elementPrefix }scheduler`), _dec161 = generateBindables('kendoScheduler'), _dec162 = inject(Element, WidgetBase, ViewResources), _dec163 = children(`${ constants.elementPrefix }template`), _dec160(_class101 = _dec161(_class101 = _dec162(_class101 = (_class102 = class Scheduler {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor43, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoScheduler').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoScheduler', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor43 = _applyDecoratedDescriptor(_class102.prototype, 'templates', [_dec163], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class102)) || _class101) || _class101) || _class101);

import 'kendo.mobile.scrollview.min';

export let Scrollview = (_dec164 = customElement(`${ constants.elementPrefix }scrollview`), _dec165 = generateBindables('kendoMobileScrollView'), _dec166 = inject(Element, WidgetBase, ViewResources), _dec167 = children(`${ constants.elementPrefix }template`), _dec164(_class104 = _dec165(_class104 = _dec166(_class104 = (_class105 = class Scrollview {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor44, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMobileScrollView').linkViewModel(this).useViewResources(viewResources).useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoMobileScrollView', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor44 = _applyDecoratedDescriptor(_class105.prototype, 'templates', [_dec167], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class105)) || _class104) || _class104) || _class104);

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

import 'kendo.slider.min';

export let Slider = (_dec168 = customAttribute(`${ constants.attributePrefix }slider`), _dec169 = generateBindables('kendoSlider'), _dec170 = inject(Element, WidgetBase), _dec168(_class107 = _dec169(_class107 = _dec170(_class107 = (_class108 = class Slider {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor45, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSlider').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor45 = _applyDecoratedDescriptor(_class108.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class108)) || _class107) || _class107) || _class107);

import 'kendo.sortable.min';

export let Sortable = (_dec171 = customAttribute(`${ constants.attributePrefix }sortable`), _dec172 = generateBindables('kendoSortable'), _dec173 = inject(Element, WidgetBase), _dec171(_class110 = _dec172(_class110 = _dec173(_class110 = class Sortable {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoSortable').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class110) || _class110) || _class110);

import 'kendo.splitter.min';

export let Splitter = (_dec174 = customAttribute(`${ constants.attributePrefix }splitter`), _dec175 = generateBindables('kendoSplitter'), _dec176 = inject(Element, WidgetBase), _dec174(_class111 = _dec175(_class111 = _dec176(_class111 = class Splitter {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoSplitter').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class111) || _class111) || _class111);

import 'kendo.spreadsheet.min';

export let Spreadsheet = (_dec177 = customElement(`${ constants.elementPrefix }spreadsheet`), _dec178 = generateBindables('kendoSpreadsheet'), _dec179 = inject(Element, WidgetBase), _dec177(_class112 = _dec178(_class112 = _dec179(_class112 = class Spreadsheet {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoSpreadsheet').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class112) || _class112) || _class112);

import 'kendo.mobile.switch.min';

export let Switch = (_dec180 = customAttribute(`${ constants.attributePrefix }switch`), _dec181 = generateBindables('kendoMobileSwitch'), _dec182 = inject(Element, WidgetBase), _dec180(_class113 = _dec181(_class113 = _dec182(_class113 = (_class114 = class Switch {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kEnabled', _descriptor46, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMobileSwitch').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding('kChecked', 'check');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor46 = _applyDecoratedDescriptor(_class114.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
})), _class114)) || _class113) || _class113) || _class113);

import 'kendo.tabstrip.min';

export let TabStrip = (_dec183 = customAttribute(`${ constants.attributePrefix }tabstrip`), _dec184 = generateBindables('kendoTabStrip'), _dec185 = inject(Element, WidgetBase), _dec183(_class116 = _dec184(_class116 = _dec185(_class116 = class TabStrip {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class116) || _class116) || _class116);

import 'kendo.timepicker.min';

export let TimePicker = (_dec186 = customAttribute(`${ constants.attributePrefix }timepicker`), _dec187 = generateBindables('kendoTimePicker'), _dec188 = inject(Element, WidgetBase), _dec186(_class117 = _dec187(_class117 = _dec188(_class117 = (_class118 = class TimePicker {

  constructor(element, widgetBase) {
    _initDefineProp(this, 'kDisableDates', _descriptor47, this);

    _initDefineProp(this, 'kEnabled', _descriptor48, this);

    _initDefineProp(this, 'kReadOnly', _descriptor49, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTimePicker').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor47 = _applyDecoratedDescriptor(_class118.prototype, 'kDisableDates', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor48 = _applyDecoratedDescriptor(_class118.prototype, 'kEnabled', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor49 = _applyDecoratedDescriptor(_class118.prototype, 'kReadOnly', [bindable], {
  enumerable: true,
  initializer: null
})), _class118)) || _class117) || _class117) || _class117);

export let ToolbarItemButton = (_dec189 = customElement(`${ constants.elementPrefix }toolbar-item-button`), _dec190 = generateBindables('ToolBarItemButton'), _dec191 = inject(OptionsBuilder), _dec189(_class120 = _dec190(_class120 = _dec191(_class120 = class ToolbarItemButton {

  constructor(optionsBuilder) {
    this.optionsBuilder = optionsBuilder;
  }

  getOptions() {
    return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
  }
}) || _class120) || _class120) || _class120);

export let ToolbarItem = (_dec192 = customElement(`${ constants.elementPrefix }toolbar-item`), _dec193 = generateBindables('ToolBarItem'), _dec194 = inject(TemplateGatherer, OptionsBuilder), _dec195 = children(`${ constants.elementPrefix }template`), _dec196 = children(`${ constants.elementPrefix }toolbar-item-button`), _dec192(_class121 = _dec193(_class121 = _dec194(_class121 = (_class122 = class ToolbarItem {

  constructor(templateGatherer, optionsBuilder) {
    _initDefineProp(this, 'templates', _descriptor50, this);

    _initDefineProp(this, 'buttons', _descriptor51, this);

    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  getOptions() {
    this.templateGatherer.useTemplates(this, 'ToolBarItem', this.templates);

    if (this.buttons && this.buttons.length > 0) {
      this.kButtons = [];

      this.buttons.forEach(item => {
        this.kButtons.push(item.getOptions());
      });
    }

    return this.optionsBuilder.getOptions(this, 'ToolBarItem');
  }
}, (_descriptor50 = _applyDecoratedDescriptor(_class122.prototype, 'templates', [_dec195], {
  enumerable: true,
  initializer: function () {
    return [];
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class122.prototype, 'buttons', [_dec196], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class122)) || _class121) || _class121) || _class121);

import 'kendo.toolbar.min';

export let Toolbar = (_dec197 = customElement(`${ constants.elementPrefix }toolbar`), _dec198 = generateBindables('kendoToolBar'), _dec199 = inject(Element, WidgetBase, OptionsBuilder), _dec200 = children(`${ constants.elementPrefix }toolbar-item`), _dec197(_class124 = _dec198(_class124 = _dec199(_class124 = (_class125 = class Toolbar {

  constructor(element, widgetBase, optionsBuilder) {
    _initDefineProp(this, 'toolbarItems', _descriptor52, this);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoToolBar').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: o => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    if (this.toolbarItems && this.toolbarItems.length > 0) {
      options.items = [];

      this.toolbarItems.forEach(item => {
        options.items.push(item.getOptions());
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor52 = _applyDecoratedDescriptor(_class125.prototype, 'toolbarItems', [_dec200], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class125)) || _class124) || _class124) || _class124);

import 'kendo.tooltip.min';

export let Tooltip = (_dec201 = customAttribute(`${ constants.attributePrefix }tooltip`), _dec202 = generateBindables('kendoTooltip'), _dec203 = inject(Element, WidgetBase), _dec201(_class127 = _dec202(_class127 = _dec203(_class127 = class Tooltip {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class127) || _class127) || _class127);

export let TreeCol = (_dec204 = customElement(`${ constants.elementPrefix }tree-col`), _dec205 = generateBindables('TreeListColumn'), _dec206 = inject(TemplateGatherer), _dec207 = children(`${ constants.elementPrefix }template`), _dec204(_class128 = _dec205(_class128 = _dec206(_class128 = (_class129 = class TreeCol {

  constructor(templateGatherer) {
    _initDefineProp(this, 'templates', _descriptor53, this);

    this.templateGatherer = templateGatherer;
  }

  beforeOptionsBuild() {
    this.templateGatherer.useTemplates(this, 'TreeListColumn', this.templates);
  }
}, (_descriptor53 = _applyDecoratedDescriptor(_class129.prototype, 'templates', [_dec207], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class129)) || _class128) || _class128) || _class128);

import 'kendo.data.signalr.min';
import 'kendo.filtercell.min';
import 'kendo.treelist.min';

export let TreeList = (_dec208 = customElement(`${ constants.elementPrefix }tree-list`), _dec209 = generateBindables('kendoTreeList'), _dec210 = inject(Element, WidgetBase, ViewResources, OptionsBuilder), _dec211 = children(`${ constants.elementPrefix }tree-col`), _dec208(_class131 = _dec209(_class131 = _dec210(_class131 = (_class132 = class TreeList {

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    _initDefineProp(this, 'columns', _descriptor54, this);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: o => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'TreeListColumn'));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor54 = _applyDecoratedDescriptor(_class132.prototype, 'columns', [_dec211], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class132)) || _class131) || _class131) || _class131);

import 'kendo.treeview.min';

export let TreeView = (_dec212 = customAttribute(`${ constants.attributePrefix }treeview`), _dec213 = generateBindables('kendoTreeView'), _dec214 = inject(Element, WidgetBase), _dec212(_class134 = _dec213(_class134 = _dec214(_class134 = class TreeView {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class134) || _class134) || _class134);

import 'kendo.upload.min';

export let Upload = (_dec215 = customElement(`${ constants.elementPrefix }upload`), _dec216 = generateBindables('kendoUpload'), _dec217 = inject(Element, WidgetBase, ViewResources), _dec218 = children(`${ constants.elementPrefix }template`), _dec215(_class135 = _dec216(_class135 = _dec217(_class135 = (_class136 = class Upload {

  constructor(element, widgetBase, viewResources) {
    _initDefineProp(this, 'templates', _descriptor55, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoUpload').linkViewModel(this).useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let target;
    let inputs = this.element.querySelectorAll('input');
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
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}, (_descriptor55 = _applyDecoratedDescriptor(_class136.prototype, 'templates', [_dec218], {
  enumerable: true,
  initializer: function () {
    return [];
  }
})), _class136)) || _class135) || _class135) || _class135);

import 'kendo.validator.min';

export let Validator = (_dec219 = customAttribute(`${ constants.attributePrefix }validator`), _dec220 = generateBindables('kendoValidator'), _dec221 = inject(Element, WidgetBase), _dec219(_class138 = _dec220(_class138 = _dec221(_class138 = class Validator {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoValidator').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class138) || _class138) || _class138);

export let kendoToStringValueConverter = class kendoToStringValueConverter {
  toView(value, format, language) {
    return kendo.toString(value, format, language);
  }
};

export let kendoParseDateValueConverter = class kendoParseDateValueConverter {
  toView(value, format, language) {
    return kendo.parseDate(value, format, language);
  }
};

export let kendoParseIntValueConverter = class kendoParseIntValueConverter {
  toView(value, language) {
    return kendo.parseInt(value, language);
  }
};

export let kendoParseFloatValueConverter = class kendoParseFloatValueConverter {
  toView(value, language) {
    return kendo.parseFloat(value, language);
  }
};

export let kendoParseColorValueConverter = class kendoParseColorValueConverter {
  toView(value) {
    return kendo.parseColor(value);
  }
};

export let kendoStringifyValueConverter = class kendoStringifyValueConverter {
  toView(obj) {
    return kendo.stringify(obj);
  }
};

export let kendoFormatValueConverter = class kendoFormatValueConverter {
  toView(value, ...params) {
    params.unshift(value);

    return kendo.format.apply(this, params);
  }
};

import 'kendo.window.min';

export let Window = (_dec222 = customAttribute(`${ constants.attributePrefix }window`), _dec223 = generateBindables('kendoWindow'), _dec224 = inject(Element, WidgetBase), _dec222(_class139 = _dec223(_class139 = _dec224(_class139 = class Window {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}) || _class139) || _class139) || _class139);