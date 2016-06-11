import 'jquery';
import * as LogManager from 'aurelia-logging';
import {RepeatStrategyLocator,ArrayRepeatStrategy} from 'aurelia-templating-resources';
import {inject,Container,transient} from 'aurelia-dependency-injection';
import {customElement,bindable,children,ViewResources,customAttribute,BindableProperty,HtmlBehaviorResource,TemplatingEngine,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {bindingMode,EventManager,createOverrideContext} from 'aurelia-binding';
import {TaskQueue} from 'aurelia-task-queue';

/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  debugMode = false;
  registerRepeatStrategy = true;

  /**
  * Globally register all Kendo Core wrappers including templating support
  */
  core(): KendoConfigBuilder {
    this.kendoAutoComplete()
      .kendoButton()
      .kendoButtonGroup()
      .kendoCalendar()
      .kendoColorPicker()
      .kendoColorPalette()
      .kendoCombobox()
      .kendoContextMenu()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoDraggable()
      .kendoDropTarget()
      .kendoFlatColorPicker()
      .kendoListView()
      .kendoMaskedTextBox()
      .kendoMenu()
      .kendoMultiSelect()
      .kendoNotification()
      .kendoNumericTextBox()
      .kendoPanelBar()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoResponsivePanel()
      .kendoScrollView()
      .kendoSortable()
      .kendoSlider()
      .kendoSplitter()
      .kendoSwitch()
      .kendoTabStrip()
      .kendoTemplateSupport()
      .kendoTimePicker()
      .kendoToolbar()
      .kendoTooltip()
      .kendoValidator()
      .kendoWindow()
      .useValueConverters();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoBarcode()
      .kendoChart()
      .kendoDiagram()
      .kendoEditor()
      .kendoGantt()
      .kendoGrid()
      .kendoMap()
      .kendoLinearGauge()
      .kendoPivotGrid()
      .kendoQRCode()
      .kendoRadialGauge()
      .kendoScheduler()
      .kendoTreeList()
      .kendoTreeView()
      .kendoUpload();
    return this;
  }

  /**
  * Registers value converters (wrappers around kendo functions)
  */
  useValueConverters(): KendoConfigBuilder {
    this.resources.push('./valueconverters/valueconverters');
    return this;
  }

  /**
  * Adds kendo templating support
  */
  kendoTemplateSupport(): KendoConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }

  /**
  * Adds kendo templating support
  */
  debug(): KendoConfigBuilder {
    this.debugMode = true;
    return this;
  }

  /**
  * Loads the notify binding behavior
  */
  notifyBindingBehavior(): KendoConfigBuilder {
    this.resources.push('./common/notify-binding-behavior');
    return this;
  }

  /**
  * Custom callback for template modification
  */
  withTemplateCallback(callback): KendoConfigBuilder {
    this.templateCallback = callback;
    return this;
  }

  /**
  * Don't register an array repeat strategy for kendo.data.ObservableArray
  */
  withoutRepeatStrategy() {
    this.registerRepeatStrategy = false;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }

  kendoButtonGroup(): KendoConfigBuilder {
    this.resources.push('./buttongroup/buttongroup');
    return this;
  }

  kendoBarcode(): KendoConfigBuilder {
    this.resources.push('./barcode/barcode');
    return this;
  }

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push('./calendar/calendar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/sparkline');
    this.resources.push('./chart/stock');
    this.resources.push('./chart/treemap');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('./combobox/combobox');
    return this;
  }

  kendoContextMenu(): KendoConfigBuilder {
    this.resources.push('./contextmenu/contextmenu');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push('./colorpalette/colorpalette');
    return this;
  }

  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push('./datepicker/datepicker');
    return this;
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  }

  kendoDiagram(): KendoConfigBuilder {
    this.resources.push('./diagram/diagram');
    return this;
  }

  kendoDraggable(): KendoConfigBuilder {
    this.resources.push('./draggable/draggable');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  }

  kendoDropTarget(): KendoConfigBuilder {
    this.resources.push('./drop-target/drop-target');
    this.resources.push('./drop-target/drop-target-area');
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push('./editor/editor');
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push('./flatcolorpicker/flatcolorpicker');
    return this;
  }

  kendoGantt(): KendoConfigBuilder {
    this.resources.push('./gantt/gantt');
    this.resources.push('./gantt/gantt-col');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/col');
    this.resources.push('./grid/grid-toolbar');
    return this;
  }

  kendoLinearGauge(): KendoConfigBuilder {
    this.resources.push('./gauges/linear-gauge');
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push('./listview/listview');
    return this;
  }

  kendoNotification(): KendoConfigBuilder {
    this.resources.push('./notification/notification');
    this.resources.push('./notification/notification-template');
    return this;
  }

  kendoMap(): KendoConfigBuilder {
    this.resources.push('./map/map');
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push('./maskedtextbox/maskedtextbox');
    return this;
  }

  kendoMultiSelect(): KendoConfigBuilder {
    this.resources.push('./multiselect/multiselect');
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push('./panelbar/panelbar');
    return this;
  }

  kendoPivotGrid(): KendoConfigBuilder {
    this.resources.push('./pivotgrid/pivotgrid');
    this.resources.push('./pivotgrid/pivotconfigurator');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('./progressbar/progressbar');
    return this;
  }

  kendoQRCode(): KendoConfigBuilder {
    this.resources.push('./qrcode/qrcode');
    return this;
  }

  kendoRadialGauge(): KendoConfigBuilder {
    this.resources.push('./gauges/radial-gauge');
    return this;
  }

  kendoResponsivePanel(): KendoConfigBuilder {
    this.resources.push('./responsivepanel/responsivepanel');
    return this;
  }

  kendoScrollView(): KendoConfigBuilder {
    this.resources.push('./scrollview/scrollview');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('./scheduler/scheduler');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('./slider/slider');
    return this;
  }

  kendoSortable(): KendoConfigBuilder {
    this.resources.push('./sortable/sortable');
    return this;
  }

  kendoSpreadsheet(): KendoConfigBuilder {
    this.resources.push('./spreadsheet/spreadsheet');
    return this;
  }

  kendoSplitter(): KendoConfigBuilder {
    this.resources.push('./splitter/splitter');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('./slider/slider');
    return this;
  }

  kendoSwitch(): KendoConfigBuilder {
    this.resources.push('./switch/switch');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('./tabstrip/tabstrip');
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push('./treelist/treelist');
    this.resources.push('./treelist/tree-col');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('./treeview/treeview');
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push('./timepicker/timepicker');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    this.resources.push('./toolbar/toolbar-item');
    this.resources.push('./toolbar/toolbar-item-button');
    return this;
  }

  kendoTooltip(): KendoConfigBuilder {
    this.resources.push('./tooltip/tooltip');
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push('./rangeslider/rangeslider');
    return this;
  }

  kendoUpload(): KendoConfigBuilder {
    this.resources.push('./upload/upload');
    return this;
  }

  kendoValidator(): KendoConfigBuilder {
    this.resources.push('./validator/validator');
    return this;
  }

  kendoWindow(): KendoConfigBuilder {
    this.resources.push('./window/window');
    return this;
  }
}

import 'kendo.data.min';

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Pull the data off the builder
  let resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  if (builder.registerRepeatStrategy) {
    let repeatStrategyLocator = aurelia.container.get(RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(items => items instanceof kendo.data.ObservableArray, new ArrayRepeatStrategy());
  }
}



import 'kendo.autocomplete.min';
import 'kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}autocomplete`)
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase, ViewResources)
export class AutoComplete {

  @bindable kEnabled;
  @bindable kReadOnly;
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;

    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.target = inputs[0];
    } else {
      this.target = document.createElement('input');
      this.element.appendChild(this.target);
    }
  }

  attached() {
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
}

import 'kendo.dataviz.barcode.min';

@customAttribute(`${constants.attributePrefix}barcode`)
@generateBindables('kendoBarcode')
@inject(Element, WidgetBase)
export class Barcode {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoBarcode')
                        .linkViewModel(this);
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
}

import 'kendo.button.min';

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('kendoButton')
@inject(Element, WidgetBase)
export class Button {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoButton')
                        .bindToKendo('kEnabled', 'enable')
                        .linkViewModel(this);
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
}

import 'kendo.mobile.buttongroup.min';

@customAttribute(`${constants.attributePrefix}buttongroup`)
@generateBindables('kendoMobileButtonGroup')
@inject(Element, WidgetBase)
export class ButtonGroup {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMobileButtonGroup')
                        .bindToKendo('kEnabled', 'enable')
                        .linkViewModel(this);
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
}

import 'kendo.calendar.min';

@customElement(`${constants.elementPrefix}calendar`)
@generateBindables('kendoCalendar')
@inject(Element, WidgetBase)
export class Calendar {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoCalendar')
                    .linkViewModel(this)
                    .useValueBinding();
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
}

//eslint-disable-line no-unused-vars
import 'kendo.dataviz.chart.min';
import 'kendo.dataviz.chart.polar.min';
import 'kendo.dataviz.chart.funnel.min';

@customElement(`${constants.elementPrefix}chart`)
@generateBindables('kendoChart')
@inject(Element, WidgetBase)
export class Chart {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoChart')
                        .linkViewModel(this);
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
}

//eslint-disable-line no-unused-vars
import 'kendo.dataviz.sparkline.min';

@customElement(`${constants.elementPrefix}sparkline`)
@generateBindables('kendoSparkline')
@inject(Element, WidgetBase)
export class Sparkline {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoSparkline')
                        .linkViewModel(this);
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
}

//eslint-disable-line no-unused-vars
import 'kendo.dataviz.stock.min';

@customElement(`${constants.elementPrefix}stock`)
@generateBindables('kendoStockChart')
@inject(Element, WidgetBase)
export class Stock {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoStockChart')
                        .linkViewModel(this);
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
}

//eslint-disable-line no-unused-vars
import 'kendo.dataviz.treemap.min';

@customElement(`${constants.elementPrefix}treemap`)
@generateBindables('kendoTreeMap')
@inject(Element, WidgetBase)
export class TreeMap {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeMap')
                        .linkViewModel(this);
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
}

import 'kendo.colorpicker.min';

@customElement(`${constants.attributePrefix}color-palette`)
@generateBindables('kendoColorPalette')
@inject(Element, WidgetBase)
export class ColorPalette {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPalette')
                        .linkViewModel(this)
                        .useValueBinding();
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
}

import 'kendo.colorpicker.min';

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('kendoColorPicker')
@inject(Element, WidgetBase)
export class ColorPicker {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPicker')
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .useValueBinding();
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
}

import 'kendo.combobox.min';
import 'kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}combobox`)
@generateBindables('kendoComboBox')
@inject(Element, WidgetBase, ViewResources)
export class ComboBox {

  @bindable kEnabled;
  @bindable kReadOnly;
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoComboBox')
                        .linkViewModel(this)
                        .useValueBinding()
                        .useViewResources(viewResources)
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

export let bindables = {"kendoAutoComplete":["animation","dataSource","dataTextField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","minLength","name","placeholder","popup","separator","suggest","template","valuePrimitive","virtual"],"kendoBarcode":["background","border","checksum","color","height","name","padding","renderAs","text","type","value","width"],"kendoButton":["enable","icon","imageUrl","name","spriteCssClass"],"kendoCalendar":["culture","dates","depth","disableDates","footer","format","max","min","month","name","start","value"],"kendoChart":["autoBind","axisDefaults","categoryAxis","chartArea","dataSource","legend","name","panes","pannable","pdf","plotArea","renderAs","series","seriesColors","seriesDefaults","theme","title","tooltip","transitions","valueAxis","xAxis","yAxis","zoomable"],"kendoColorPalette":["columns","name","palette","tileSize","value"],"kendoColorPicker":["buttons","columns","messages","name","opacity","palette","preview","tileSize","toolIcon","value"],"kendoComboBox":["animation","autoBind","cascadeFrom","cascadeFromField","dataSource","dataTextField","dataValueField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","index","minLength","name","placeholder","popup","suggest","template","text","value","valuePrimitive","virtual"],"kendoContextMenu":["alignToAnchor","animation","closeOnClick","dataSource","direction","filter","hoverDelay","name","orientation","popupCollision","showOn","target"],"kendoDatePicker":["ARIATemplate","animation","culture","dates","depth","disableDates","footer","format","max","min","month","name","parseFormats","start","value"],"kendoDateTimePicker":["ARIATemplate","animation","culture","dates","depth","disableDates","footer","format","interval","max","min","month","name","parseFormats","start","timeFormat","value"],"kendoDiagram":["autoBind","connectionDefaults","connections","connectionsDataSource","dataSource","editable","layout","name","pannable","pdf","selectable","shapeDefaults","shapes","template","zoom","zoomMax","zoomMin","zoomRate"],"kendoDraggable":["axis","container","cursorOffset","distance","filter","group","hint","ignore"],"kendoDropDownList":["animation","autoBind","cascadeFrom","cascadeFromField","dataSource","dataTextField","dataValueField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","ignoreCase","index","minLength","name","optionLabel","optionLabelTemplate","popup","template","text","value","valuePrimitive","valueTemplate","virtual"],"kendoDropTarget":["group"],"kendoDropTargetArea":["filter","group"],"kendoEditor":["domain","encoded","fileBrowser","imageBrowser","messages","name","pdf","resizable","serialization","stylesheets","tools"],"kendoFlatColorPicker":["autoupdate","buttons","messages","name","opacity","preview","value"],"kendoGantt":["assignments","autoBind","columnResizeHandleWidth","columns","currentTimeMarker","dataSource","dependencies","editable","height","hourSpan","listWidth","messages","name","navigatable","pdf","resizable","resources","rowHeight","selectable","showWorkDays","showWorkHours","snap","taskTemplate","toolbar","tooltip","views","workDayEnd","workDayStart","workWeekEnd","workWeekStart"],"kendoGrid":["allowCopy","altRowTemplate","autoBind","columnMenu","columnResizeHandleWidth","columns","dataSource","detailTemplate","editable","excel","filterable","groupable","height","messages","mobile","name","navigatable","noRecords","pageable","pdf","reorderable","resizable","rowTemplate","scrollable","selectable","sortable","toolbar"],"kendoLinearGauge":["gaugeArea","name","pointer","renderAs","scale","transitions"],"kendoListView":["altTemplate","autoBind","dataSource","editTemplate","name","navigatable","selectable","template"],"kendoMap":["center","controls","layerDefaults","layers","markerDefaults","markers","maxZoom","minSize","minZoom","name","pannable","wraparound","zoom","zoomable"],"kendoMaskedTextBox":["clearPromptChar","culture","mask","name","promptChar","rules","unmaskOnPost","value"],"kendoMenu":["animation","closeOnClick","dataSource","direction","hoverDelay","name","openOnClick","orientation","popupCollision"],"kendoMobileActionSheet":["cancel","name","popup","type"],"kendoMobileBackButton":["name"],"kendoMobileButton":["badge","clickOn","enable","icon","name"],"kendoMobileButtonGroup":["enable","index","name","selectOn"],"kendoMobileCollapsible":["animation","collapsed","expandIcon","iconPosition","inset","name"],"kendoMobileDetailButton":["name"],"kendoMobileDrawer":["container","name","position","swipeToOpen","swipeToOpenViews","title","views"],"kendoMobileLayout":["id","name","platform"],"kendoMobileListView":["appendOnRefresh","autoBind","dataSource","endlessScroll","filterable","fixedHeaders","headerTemplate","loadMore","messages","name","pullParameters","pullToRefresh","style","template","type","virtualViewSize"],"kendoMobileLoader":["name"],"kendoMobileModalView":["height","modal","name","width"],"kendoMobileNavBar":["name"],"kendoMobilePane":["collapsible","initial","layout","loading","name","portraitWidth","transition"],"kendoMobilePopOver":["name","pane","popup"],"kendoMobileScrollView":["autoBind","bounceVelocityThreshold","contentHeight","dataSource","duration","emptyTemplate","enablePager","itemsPerPage","name","page","pageSize","template","velocityThreshold"],"kendoMobileScroller":["elastic","messages","name","pullOffset","pullToRefresh","useNative","visibleScrollHints","zoom"],"kendoMobileSplitView":["name","style"],"kendoMobileSwitch":["checked","enable","name","offLabel","onLabel"],"kendoMobileTabStrip":["name","selectedIndex"],"kendoMobileView":["model","name","reload","scroller","stretch","title","useNativeScrolling","zoom"],"kendoMultiSelect":["animation","autoBind","autoClose","dataSource","dataTextField","dataValueField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","itemTemplate","maxSelectedItems","minLength","name","placeholder","popup","tagMode","tagTemplate","value","valuePrimitive","virtual"],"kendoNotification":["allowHideAfter","animation","appendTo","autoHideAfter","button","height","hideOnClick","name","position","stacking","templates","width"],"kendoNumericTextBox":["culture","decimals","downArrowText","format","max","min","name","placeholder","spinners","step","upArrowText","value"],"kendoPager":["autoBind","buttonCount","dataSource","info","input","linkTemplate","messages","name","numeric","pageSizes","previousNext","refresh","selectTemplate"],"kendoPanelBar":["animation","contentUrls","dataSource","expandMode","name"],"kendoPivotConfigurator":["dataSource","filterable","height","messages","name","sortable"],"kendoPivotGrid":["autoBind","columnHeaderTemplate","columnWidth","dataCellTemplate","dataSource","excel","filterable","height","kpiStatusTemplate","kpiTrendTemplate","messages","name","pdf","reorderable","rowHeaderTemplate","sortable"],"kendoPopup":["anchor","animation","appendTo","name","origin","position"],"kendoProgressBar":["animation","chunkCount","enable","max","min","name","orientation","reverse","showStatus","type","value"],"kendoQRCode":["background","border","color","encoding","errorCorrection","name","padding","renderAs","size","value"],"kendoRadialGauge":["gaugeArea","name","pointer","renderAs","scale","transitions"],"kendoRangeSlider":["largeStep","max","min","name","orientation","selectionEnd","selectionStart","smallStep","tickPlacement","tooltip"],"kendoResponsivePanel":["autoClose","breakpoint","name","orientation","toggleButton"],"kendoScheduler":["allDayEventTemplate","allDaySlot","autoBind","currentTimeMarker","dataSource","date","dateHeaderTemplate","editable","endTime","eventTemplate","footer","group","groupHeaderTemplate","height","majorTick","majorTimeHeaderTemplate","max","messages","min","minorTickCount","minorTimeHeaderTemplate","mobile","name","pdf","resources","selectable","showWorkHours","snap","startTime","timezone","toolbar","views","width","workDayEnd","workDayStart","workWeekEnd","workWeekStart"],"kendoSlider":["decreaseButtonTitle","increaseButtonTitle","largeStep","max","min","name","orientation","showButtons","smallStep","tickPlacement","tooltip","value"],"kendoSortable":["autoScroll","axis","connectWith","container","cursor","cursorOffset","disabled","filter","handler","hint","holdToDrag","ignore","name","placeholder"],"kendoSparkline":["autoBind","axisDefaults","categoryAxis","chartArea","data","dataSource","name","plotArea","pointWidth","renderAs","series","seriesColors","seriesDefaults","theme","tooltip","transitions","type","valueAxis"],"kendoSplitter":["name","orientation","panes"],"kendoSpreadsheet":["activeSheet","columnWidth","columns","excel","headerHeight","headerWidth","name","pdf","rowHeight","rows","sheets","sheetsbar","toolbar"],"kendoStockChart":["autoBind","axisDefaults","categoryAxis","chartArea","dataSource","dateField","legend","name","navigator","panes","pdf","plotArea","renderAs","series","seriesColors","seriesDefaults","theme","title","tooltip","transitions","valueAxis"],"kendoTabStrip":["animation","collapsible","contentUrls","dataContentField","dataContentUrlField","dataImageUrlField","dataSource","dataSpriteCssClass","dataTextField","dataUrlField","name","navigatable","scrollable","tabPosition","value"],"kendoTimePicker":["animation","culture","dates","format","interval","max","min","name","parseFormats","value"],"kendoToolBar":["items","name","resizable"],"kendoTooltip":["animation","autoHide","callout","content","filter","height","iframe","name","position","showAfter","showOn","width"],"kendoTouch":["doubleTapTimeout","enableSwipe","filter","maxDuration","maxYDelta","minHold","minXDelta","multiTouch","name","surface"],"kendoTreeList":["autoBind","columnMenu","columns","dataSource","editable","excel","filterable","height","messages","name","pdf","reorderable","resizable","scrollable","selectable","sortable","toolbar"],"kendoTreeMap":["autoBind","colorField","colors","dataSource","name","template","textField","theme","type","valueField"],"kendoTreeView":["animation","autoBind","autoScroll","checkboxes","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","dragAndDrop","loadOnDemand","messages","name","template"],"kendoUpload":["async","enabled","files","localization","multiple","name","showFileList","template"],"kendoValidator":["errorTemplate","messages","name","rules","validateOnBlur"],"kendoWindow":["actions","animation","appendTo","autoFocus","content","draggable","height","iframe","maxHeight","maxWidth","minHeight","minWidth","modal","name","pinned","position","resizable","scrollable","title","visible","width"],"GanttColumn":["editable","field","format","sortable","title","width"],"GridColumn":["aggregates","attributes","columns","command","encoded","field","filterable","footerTemplate","format","groupFooterTemplate","groupHeaderTemplate","groupable","headerAttributes","headerTemplate","hidden","lockable","locked","menu","minScreenWidth","sortable","template","title","values","width","editor"],"GridToolbarItem":["name","template","text"],"ToolBarItem":["attributes","buttons","click","enable","group","hidden","icon","id","imageUrl","menuButtons","overflow","overflowTemplate","primary","selected","showIcon","showText","spriteCssClass","template","text","togglable","toggle","type","url"],"ToolBarItemButton":["attributes","click","enable","group","hidden","icon","id","imageUrl","selected","showIcon","showText","spriteCssClass","text","togglable","toggle","url"],"TreeListColumn":["attributes","command","encoded","expandable","field","filterable","footerTemplate","format","headerAttributes","headerTemplate","hidden","lockable","locked","menu","minScreenWidth","sortable","template","title","width","editor"]}
export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-',
  attributePrefix: 'ak-',
  elementPrefix: 'ak-'
};

/***
* Available properties (merged together from several locations) are stored here per controlName
* so that this isn't done for each created wrapper instance
*/
@inject(Util)
export class ControlProperties {

  cache = {};

  constructor(util: Util) {
    this.util = util;
  }

  /**
  * Merges together available properties for a specific control
  * and stores this in a cache so that this is done only once per control
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  * @param extraProperties allows you to provide an extra list of available properties
  */
  getProperties(controlName: string, extraProperties = []): string[] {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    // get available properties of the options object inside a Kendo control
    let options1 = this.getWidgetProperties(controlName);
    // get available properties of the pre-generated bindables.json file
    let options2 = this.getGeneratedProperties(controlName);

    // merge together without duplicates
    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));
    keys = keys.concat(extraProperties.filter(item => keys.indexOf(item) < 0));

    this.cache[controlName] = keys;

    return keys;
  }


  /**
  * returns a list of properties of a Kendo control that has been pre-generated (into bindables.js)
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  */
  getGeneratedProperties(controlName: string) {
    if (!bindables[controlName]) {
      throw new Error(`${controlName} not found in generated bindables.js`);
    }

    return bindables[controlName];
  }

  /*
  * returns the intrinsic list of properties of a kendo control
  * returns an empty array if the control is not loaded
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  */
  getWidgetProperties(controlName: string): string[] {
    if (jQuery.fn[controlName]) {
      return Object.keys(jQuery.fn[controlName].widget.prototype.options);
    }

    return [];
  }

  /*
  * filters list of properties of a control by template property
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  */
  getTemplateProperties(controlName: string): string[] {
    let properties = this.getProperties(controlName);

    let templates = properties.filter(prop => this.util.isTemplateProperty(prop));

    return templates;
  }
}

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string, extraProperties = []) {
  return function(target, key, descriptor) {
    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let controlProperties = container.get(ControlProperties);
    let util = container.get(Util);
    let optionKeys = controlProperties.getProperties(controlName, extraProperties);

    optionKeys.push('widget');
    optionKeys.push('options');
    optionKeys.push('noInit');

    for (let i = 0; i < optionKeys.length; i++) {
      let option = optionKeys[i];

      // set the name of the bindable property to the option
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
  return function(target, key, descriptor) {
    let taskQueue = Container.instance.get(TaskQueue);
    let ptr = descriptor.value;

    descriptor.value = function(...args) {
      taskQueue.queueTask(() => ptr.apply(this, args));
    };

    return descriptor;
  };
}

@inject(EventManager)
export class NotifyBindingBehavior {

  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  bind(binding, scope, target, fieldName) {
    if (!binding.updateSource) return;

    // update values on blur event
    let targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    binding.targetObserver = targetObserver;
    targetObserver.originalHandler = binding.targetObserver.handler;
    let handler = this.eventManager.createElementHandler(['blur']);
    targetObserver.handler = handler;

    let observable = target || binding.source.bindingContext;
    let field = fieldName || binding.sourceExpression.expression.name;
    let intercept = binding.updateSource;

    // intercept updateSource function
    // to call .trigger('change', { field: field}) and set the dirty flag
    binding['intercepted-updateSource'] = intercept;
    binding.updateSource = function(value) {
      // handle change
      if (observable.set && observable.trigger) {
        // kendo recompiles templates after a change event
        // without this delay Aurelia's binding system gets confused as
        // some views are destroyed
        setTimeout(() =>
          observable.trigger.call(observable, 'change', { field: field }),
        100);

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
}

/***
* Converts an object with bindable properties (with k- convention)
* into an object that can be passed to a Kendo control
*/
@inject(ControlProperties, Util)
export class OptionsBuilder {

  constructor(controlProperties: ControlProperties, util: Util) {
    this.controlProperties = controlProperties;
    this.util = util;
  }

  /**
  * converts properties of view-model (with k- convention) to an object
  */
  getOptions(viewModel, className) {
    let options = {};
    let props = this.controlProperties.getProperties(className);

    for (let i = 0; i < props.length; i++) {
      let prop = props[i];
      let value = viewModel[this.util.getBindablePropertyName(prop)];

      if (this.util.hasValue(value)) {
        options[prop] = value;
      }
    }

    // allows view-models to do some post processing
    // used in ak-col to support nested columns
    if (viewModel.afterOptionsBuild) {
      viewModel.afterOptionsBuild(options);
    }

    return this.util.pruneOptions(options);
  }
}

/**
* An adaptor which uses Aurelia's enhance capability to
* compile any template Kendo wants to have compiled
*/
@inject(TemplatingEngine, Util)
export class TemplateCompiler {

  /**
  * We don't need to initialize the TemplateCompiler every time a Kendo controls
  * is initialized
  */
  isInitialized = false;

  constructor(templatingEngine, util) {
    this.templatingEngine = templatingEngine;
    this.util = util;
  }

  /**
  * Initialize the template compiler and
  * patch the angular property to retrieve compilation requests
  * from Kendo controls
  * @param $parent The overrideContext to use when a template gets compiled
  */
  initialize() {
    if (this.isInitialized) return;

    // all controls derive from kendo.ui.Widget
    // override the angular property on these objects, and point it towards handleTemplateEvents
    let _this = this;
    kendo.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };

    this.isInitialized = true;
  }

  /**
  * Gets called by Kendo, and filters out compile and cleanup events,
  * then calls the compile or cleanup function with the needed arguments
  * @param _event Events like 'compile' or 'cleanup'
  * @param _args optional array of dataitems
  */
  handleTemplateEvents(widget, _event: string, _args?) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    // pull the parent context of the widget, or of the options
    // in some cases, templates are compiled when a Kendo control's constructor is called
    // in these cases we get the parent context of the options instead of the
    // widget
    let $parent = widget._$parent || (widget.options._$parent ? widget.options._$parent[0] : undefined);
    let viewResources = widget._$resources || (widget.options._$resources ? widget.options._$resources[0] : undefined);

    if (!$parent) return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile($parent, elements, data, viewResources);
      break;

    case 'cleanup':
      // we don't care about dataitems when we do the cleanup
      // so we just pass in the DOM elements
      this.cleanup(elements);
      break;

    default:
      break;
    }
  }

  /**
  * loops through each element, and find the matching dataitem
  * and calls enhanceView(element, dataItem) for each element there is
  * @param elements an array of Elements or a jQuery selector
  * @param data optionally an array of dataitems
  */
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

  /**
  * uses the enhance function of Aurelia's TemplatingEngine
  * to "compile" existing DOM elements
  * @param element The Element to compile
  * @param ctx The dataitem (context) to compile the Element with
  */
  enhanceView($parent, element, ctx, viewResources) {
    let view = $(element).data('viewInstance');

    // check necessary due to https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/308
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

      // when we do cleanup, we need to get the view instance
      // so we can call detached/unbind
      // so we store this view instance in the DOM element using JQuery.data
      $(element).data('viewInstance', view);
    }

    view.attached(); // attach it to the DOM
  }

  /**
  * loops through each element kendo asks us to clean up
  * calls cleanupView() for each element
  * @param element An array of elements
  */
  cleanup(elements) {
    if (!elements) return;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.cleanupView(element);
    }
  }

  /**
  * cleans up the view kendo has asked us to clean up
  */
  cleanupView(element) {
    // extract Aurelia's View instance from the element
    // we stored this in the enhanceView function
    let view = $(element).data('viewInstance');
    if (!view) return;

    // unbind and detach the view
    view.detached();
    view.unbind();
  }
}

@customElement(`${constants.elementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  element.innerHTML = ''; // remove any HTML from `<ak-template>` because it has already been retrieved above

  // don't return true, so aurelia does not process the content of <ak-template>
})
@inject(TargetInstruction)
export class Template {
  @bindable template;
  @bindable for = 'template';
  @bindable kendoTemplate = false;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

const capitalMatcher = /([A-Z])/g;
/**
* Collection of useful functions used in multiple parts of the plugin
*/
export class Util {

  /**
  * prepends hyphen and lowercases the input char
  * @param char the char to add an hyphen in front for
  */
  addHyphenAndLower(char: string): string {
    return '-' + char.toLowerCase();
  }

  /**
  * hyphenates a string
  * kTest -> k-test
  * @param name the string to hyphenate
  */
  _hyphenate(name: string): string {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, this.addHyphenAndLower);
  }

  /**
  * unhyphenate's a string
  * k-test -> kTest
  */
  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  /**
  * prepends prefix and unhyphenates the resulting string
  * test -> kTest
  */
  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;

    return this._unhyphenate(name);
  }

  /**
  * removes prefix and unhyphenates the resulting string
  * kTest -> test
  */
  getKendoPropertyName(propertyName: string): string {
    let withoutPrefix = propertyName.substring(1); // remove 'k'

    return (withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1));
  }

  /**
  * converts all attributes found on an element to matching Kendo events
  * returns a list of these Kendo events
  */
  getEventsFromAttributes(element: Element): string[] {
    let attributes = Array.prototype.slice.call(element.attributes);
    let events: string[] = [];

    for (let i = 0; i < attributes.length; i++) {
      let attribute = attributes[i];
      let attributeName = attribute.name;
      if (!attributeName.startsWith(constants.eventPrefix)) continue;

      // kendo-my-event.trigger -> my-event.trigger
      let hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

      // my-event.trigger -> my-event
      let withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

      // my-event -> myEvent
      let camelCased = this._unhyphenate(withoutTriggerDelegate);

      events.push(camelCased);
    }

    return events;
  }


  /**
  * Implicitly setting options to "undefined" for a kendo control can break things.
  * this function prunes the supplied options object and removes values that
  * aren't set to something explicit (i.e. not null)
  * @param options the options object to prune the properties of
  */
  pruneOptions(options: any) {
    let returnOptions = {};

    for (let prop in options) {
      if (this.hasValue(options[prop])) {
        returnOptions[prop] = options[prop];
      }
    }

    return returnOptions;
  }

  hasValue(prop) {
    return typeof(prop) !== 'undefined' && prop !== null;
  }

  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  fireEvent(element: Element, name: string, data = {}) {
    let event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  /**
  * Fire DOM event on an element with the k-on prefix
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name, without k-on prefix
  * @param data Addition data to attach to an event
  */
  fireKendoEvent(element: Element, name: string, data = {}) {
    return this.fireEvent(element, `${constants.eventPrefix}${name}`, data);
  }

  /**
  * detection of template properties
  */
  isTemplateProperty(propertyName: string) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  }

  /**
  * detection of objects
  */
  isObject(obj) {
    return obj !== null && typeof(obj) === 'object';
  }
}

const logger = LogManager.getLogger('aurelia-kendoui-bridge');

/**
* Abstraction of commonly used code across wrappers
*/
@transient()
@inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder)
export class WidgetBase {

  /**
  * The element of the custom element, or the element on which a custom attribute
  * is placed. DOM events will be raised on this element
  */
  element: Element;

  /**
  * Used to prevent race conditions when events are raised before
  * all bindings have been updated.
  */
  taskQueue: TaskQueue;

  /**
  * The element on which a Kendo widget is initialized
  * This is the "element" by default
  */
  target: Element;

  /**
  * The Kendo control's name, such as kendoGrid or kendoButton
  */
  controlName: string;

  /**
  * The parent context (used for template compilation)
  */
  $parent: any;

  /**
  * The widgets parent viewmodel (this is the object instance the user will bind to)
  */
  viewModel: any;


  /**
  * A list of bindings for properties such as kEnable/kReadOnly/kValue
  * whenever one of these properties changes an API function will be called on the Kendo control
  * for example, a change of an 'kEnable' property will result in a .enable(true/false) call
  */
  bindingsToKendo: Array<BindingToKendo> = [];

  constructor(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder) {
    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.configBuilder = configBuilder;
    this.templateGatherer = templateGatherer;
    templateCompiler.initialize();
  }

  control(controlName) {
    if (!controlName || !kendo.jQuery.fn[controlName]) {
      throw new Error(`The name of control ${controlName} is invalid or not set`);
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


  /**
  * adds two-way value binding
  * @param valueBindingProperty the property name of the kendo control (value/checked)
  * @param valueFunction the function on the kendo control that gets the value of the above property
  */
  useValueBinding(valueBindingProperty = 'kValue', valueFunction = 'value') {
    this.valueBindingProperty = valueBindingProperty;
    this.valueFunction = valueFunction;
    this.withValueBinding = true;

    this.bindToKendo(valueBindingProperty, valueFunction);

    return this;
  }

  /**
  * add binding to Kendo
  * whenever a bindable property in a wrapper changes, and the propertyname is in this list
  * then it will call an API function on the Kendo control to update the value
  * @param propertyName the bindable property name in the wrapper (kValue, kChecked, kEnabled)
  * @param valueFunction the API function on the kendo control that sets the value of the above property
  */
  bindToKendo(propertyName, functionName) {
    this.bindingsToKendo.push({
      propertyName: propertyName,
      functionName: functionName
    });

    return this;
  }

  /**
  * collects all options objects
  * calls all hooks
  * then initialized the Kendo control as "widget"
  */
  createWidget(options) {
    if (!options) {
      throw new Error('the createWidget() function needs to be called with an object');
    }

    if (!options.element) {
      throw new Error('element is not set');
    }

    // destroy old widgets
    if (this.viewModel && this.viewModel.kWidget) {
      this.destroy(this.viewModel.kWidget);
    }

    // generate all options, including event handlers - use the rootElement if specified, otherwise fall back to the element
    // this allows a child element in a custom elements tempate to be the container for the kendo control
    // but allows the plugin to correctly discover attributes on the root element to match against events
    let allOptions = this._getOptions(options.rootElement || options.element);

    // before initialization callback
    // allows you to modify/add/remove options before the control gets initialized
    if (options.beforeInitialize) {
      options.beforeInitialize(allOptions);
    }

    // add parent context to options
    // deepExtend in kendo.core will fail with stack
    // overflow if we don't put it in an array :-\
    Object.assign(allOptions, {
      _$parent: [options.parentCtx],
      _$resources: [this.viewResources]
    });


    if (this.configBuilder.debugMode) {
      logger.debug(`initializing ${this.controlName} with the following config`, allOptions);
    }

    // instantiate the Kendo control
    let widget = this._createWidget(options.element, allOptions, this.controlName);

    widget._$parent = options.parentCtx;
    widget._$resources = this.viewResources;

    if (this.withValueBinding) {
      widget.first('change', (args) => this._handleValueChange(args.sender));
      widget.first('dataBound', (args) => this._handleValueChange(args.sender));
    }

    // use Kendo API functions to update all initial values in the wrapper
    // kValue -> .value()
    // kEnabled -> .enable()
    this.bindingsToKendo.forEach(binding => {
      let value = this.viewModel[binding.propertyName];

      // don't do this when the value of the widget is an empty string
      // as it indicates that the widget has not been databound yet
      if (typeof(value) !== 'undefined' && value !== null && value !== '') {
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


  /**
  * combines all options objects and properties into a single options object
  */
  _getOptions(element) {
    let options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
    let eventOptions = this.getEventOptions(element);

    // merge all option objects together
    // - options on the wrapper
    // - options compiled from all the bindable properties
    // - event handler options
    return this.util.pruneOptions(Object.assign({}, this.viewModel.kOptions || {}, options, eventOptions));
  }


  /**
  * convert attributes into a list of events a user wants to subscribe to.
  * These events are then subscribed to, which when called
  * calls the fireKendoEvent function to raise a DOM event
  */
  getEventOptions(element) {
    let options = {};
    let allowedEvents = this.kendoEvents;
    let delayedExecution = ['change'];

    // iterate all attributes on the custom elements
    // and only return the normalized kendo event's (dataBound etc)
    let events = this.util.getEventsFromAttributes(element);

    events.forEach(event => {
      // throw error if this event is not defined on the Kendo control
      if (!allowedEvents.includes(event)) {
        throw new Error(`${event} is not an event on the ${this.controlName} control`);
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

  /**
  * destroys the widget
  */
  destroy(widget) {
    if (widget) {
      kendo.destroy(widget.element);
      widget = null;

      if (this.viewModel.kWidget) {
        this.viewModel.kWidget = null;
      }
    }
  }
}

interface BindingToKendo {
  propertyName: string;
  functionName: string;
}

import 'kendo.menu.min';

@customAttribute(`${constants.attributePrefix}contextmenu`)
@generateBindables('kendoContextMenu')
@inject(Element, WidgetBase)
export class ContextMenu {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoContextMenu')
                        .linkViewModel(this);
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
}

import 'kendo.datepicker.min';

@customAttribute(`${constants.attributePrefix}datepicker`)
@generateBindables('kendoDatePicker')
@inject(Element, WidgetBase)
export class DatePicker {

  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDatePicker')
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly')
                        .useValueBinding();
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
}

import 'kendo.datetimepicker.min';

@customAttribute(`${constants.attributePrefix}datetimepicker`)
@generateBindables('kendoDateTimePicker')
@inject(Element, WidgetBase)
export class DateTimePicker {

  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDateTimePicker')
                        .linkViewModel(this)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
}

import 'kendo.dataviz.diagram.min';

@customElement(`${constants.elementPrefix}diagram`)
@generateBindables('kendoDiagram')
@inject(Element, WidgetBase)
export class Diagram {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDiagram')
                        .linkViewModel(this);
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
}

import 'kendo.draganddrop.min';

@customAttribute(`${constants.attributePrefix}draggable`)
@generateBindables('kendoDraggable')
@inject(Element, WidgetBase)
export class Draggabke {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDraggable')
                        .linkViewModel(this);
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
}

import 'kendo.draganddrop.min';

@customAttribute(`${constants.attributePrefix}drop-target-area`)
@generateBindables('kendoDropTargetArea')
@inject(Element, WidgetBase)
export class DropTargetArea {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDropTargetArea')
                        .linkViewModel(this);
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
}

import 'kendo.draganddrop.min';

@customAttribute(`${constants.attributePrefix}drop-target`)
@generateBindables('kendoDropTarget')
@inject(Element, WidgetBase)
export class DropTarget {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDropTarget')
                        .linkViewModel(this);
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
}

import 'kendo.dropdownlist.min';
import 'kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}drop-down-list`)
@generateBindables('kendoDropDownList')
@inject(Element, WidgetBase, ViewResources)
export class DropDownList {

  @bindable kNoValueBinding = false;
  @bindable kEnabled;
  @bindable kReadOnly;
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDropDownList')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

import 'kendo.editor.min';

@customAttribute(`${constants.attributePrefix}rich-editor`)
@generateBindables('kendoEditor')
@inject(Element, WidgetBase)
export class Editor {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoEditor')
                        .linkViewModel(this)
                        .useValueBinding();
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
}

import 'kendo.colorpicker.min';

@customElement(`${constants.attributePrefix}flat-color-picker`)
@generateBindables('kendoFlatColorPicker')
@inject(Element, WidgetBase)
export class FlatColorPicker {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoFlatColorPicker')
                        .linkViewModel(this);
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
}

@customElement(`${constants.elementPrefix}gantt-col`)
@generateBindables('GanttColumn')
@inject(TemplateGatherer)
export class GanttCol {}

//eslint-disable-line no-unused-vars
import 'kendo.gantt.min';

@customElement(`${constants.elementPrefix}gantt`)
@generateBindables('kendoGantt')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder)
export class Gantt  {

  @children(`${constants.elementPrefix}gantt-col`) columns;
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoGantt')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    // if <div> exists, initialize on that, else create div
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
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
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
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

import 'kendo.dataviz.gauge.min';

@customElement(`${constants.elementPrefix}linear-gauge`)
@generateBindables('kendoLinearGauge')
@inject(Element, WidgetBase)
export class LinearGauge {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoLinearGauge')
                    .linkViewModel(this)
                    .useValueBinding();
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
}

import 'kendo.dataviz.gauge.min';

@customElement(`${constants.elementPrefix}radial-gauge`)
@generateBindables('kendoRadialGauge')
@inject(Element, WidgetBase)
export class RadialGauge {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoRadialGauge')
                    .linkViewModel(this)
                    .useValueBinding();
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
}

@customElement(`${constants.elementPrefix}col`)
@generateBindables('GridColumn')
@inject(TemplateGatherer, OptionsBuilder)
export class Col {
  @children(`${constants.elementPrefix}template`) templates;
  @children(`${constants.elementPrefix}col`) columns;

  constructor(templateGatherer, optionsBuilder) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  bind() {
    this.templateGatherer.useTemplates(this, 'GridColumn', this.templates);
  }

  // recursively get options of all nested columns that we can pass to Kendo
  afterOptionsBuild(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(col => {
        options.columns.push(this.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }
  }
}

@customElement(`${constants.elementPrefix}grid-toolbar`)
@generateBindables('GridToolbarItem')
@inject(TemplateGatherer)
export class GridToolbar {
  @children(`${constants.elementPrefix}template`) templates;

  constructor(templateGatherer) {
    this.templateGatherer = templateGatherer;
  }

  bind() {
    this.templateGatherer.useTemplates(this, 'GridToolbarItem', this.templates);
  }
}

//eslint-disable-line no-unused-vars
import 'kendo.data.signalr.min';
import 'kendo.filtercell.min';
import 'kendo.grid.min';

@customElement(`${constants.elementPrefix}grid`)
@generateBindables('kendoGrid')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder, TemplateGatherer)
export class Grid  {

  @children(`${constants.elementPrefix}col`) columns;
  @children(`${constants.elementPrefix}template`) templates;
  @children(`${constants.elementPrefix}grid-toolbar`) gridToolbars;

  constructor(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
    this.element = element;
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    // if <table> exists, initialize on that
    // if <div> exists, initialize on that
    // if neither exists, create <div>
    // grid needs to be initialized on a div https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/358
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
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GridColumn'));
      });
    }

    if (this.gridToolbars && this.gridToolbars.length > 0) {
      let toolbar = this.gridToolbars[0];
      if (toolbar.kTemplate) {
        options.toolbar = this.gridToolbars[0].kTemplate;
      } else {
        options.toolbar = this.optionsBuilder.getOptions(this.gridToolbars[0], 'GridToolbarItem');
      }
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

import 'kendo.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@generateBindables('kendoListView')
@inject(Element, WidgetBase, ViewResources)
export class ListView  {

  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoListView')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoListView', this.templates);
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
}

import 'kendo.dataviz.map.min';

@customElement(`${constants.elementPrefix}map`)
@generateBindables('kendoMap')
@inject(Element, WidgetBase)
export class Map {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoMap')
                    .linkViewModel(this);
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
}

import 'kendo.maskedtextbox.min';

@customAttribute(`${constants.attributePrefix}maskedtextbox`)
@generateBindables('kendoMaskedTextBox')
@inject(Element, WidgetBase)
export class MaskedTextBox {

  @bindable kDisableDates;
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMaskedTextBox')
                        .linkViewModel(this)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
}

import 'kendo.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('kendoMenu')
@inject(Element, WidgetBase)
export class Menu {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMenu')
                        .linkViewModel(this);
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
}

import 'kendo.multiselect.min';
import 'kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}multiselect`)
@generateBindables('kendoMultiSelect', ['template'])
@inject(Element, WidgetBase, ViewResources)
export class Multiselect {

  @bindable kEnabled;
  @bindable kReadOnly;
  @bindable kNoValueBinding = false;
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMultiSelect')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
    // do not process value changes when user input is present
    if (property !== 'kValue' || this.kWidget.input.val() === '') {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

@customElement(`${constants.elementPrefix}notification-template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  return true;
})
@inject(TargetInstruction)
export class NotificationTemplate {
  @bindable template;
  @bindable type;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

import 'kendo.notification.min';

@customElement(`${constants.elementPrefix}notification`)
@generateBindables('kendoNotification')
@inject(Element, WidgetBase, ViewResources)
export class Notification {

  @children(`${constants.elementPrefix}notification-template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoNotification')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
}

import 'kendo.numerictextbox.min';

@customAttribute(`${constants.attributePrefix}numerictextbox`)
@generateBindables('kendoNumericTextBox')
@inject(Element, WidgetBase)
export class NumericTextBox {

  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoNumericTextBox')
                        .linkViewModel(this)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
}

import 'kendo.panelbar.min';

@customElement(`${constants.elementPrefix}panel-bar`)
@generateBindables('kendoPanelBar')
@inject(Element, WidgetBase)
export class PanelBar {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPanelBar')
                        .linkViewModel(this);
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

    // Insert a node in between the parent/children if no UL/OL is found
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
}


// if the first child is not a UL/OL then create one to use as the target, otherwise the panelbar can look a bit mangled
function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}

import 'kendo.pdf.min';
import 'kendo.excel.min';

export class PDF {}

import 'kendo.pivot.configurator.min';


@customElement(`${constants.elementPrefix}pivot-configurator`)
@generateBindables('kendoPivotConfigurator')
@inject(Element, WidgetBase)
export class PivotConfigurator {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPivotConfigurator')
                        .linkViewModel(this);
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
}

//eslint-disable-line no-unused-vars
import 'kendo.pivotgrid.min';
import 'kendo.pivot.fieldmenu.min';


@customElement(`${constants.elementPrefix}pivot-grid`)
@generateBindables('kendoPivotGrid')
@inject(Element, WidgetBase, ViewResources)
export class PivotGrid {

  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPivotGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
}

import 'kendo.progressbar.min';

@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('kendoProgressBar')
@inject(Element, WidgetBase)
export class ProgressBar {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoProgressBar')
                        .bindToKendo('kEnabled', 'enable')
                        .linkViewModel(this);
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
}

import 'kendo.dataviz.qrcode.min';

@customAttribute(`${constants.attributePrefix}qrcode`)
@generateBindables('kendoQRCode')
@inject(Element, WidgetBase)
export class QRCode {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoQRCode')
                        .linkViewModel(this);
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
}

import 'kendo.slider.min';

@customElement(`${constants.elementPrefix}range-slider`)
@generateBindables('kendoRangeSlider')
@inject(Element, WidgetBase)
export class RangeSlider {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoRangeSlider')
                    .linkViewModel(this)
                    .bindToKendo('kEnabled', 'enable')
                    .useValueBinding();
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
}

import 'kendo.responsivepanel.min';

@customAttribute(`${constants.attributePrefix}responsivepanel`)
@generateBindables('kendoResponsivePanel')
@inject(Element, WidgetBase)
export class ResponsivePanel {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoResponsivePanel')
                        .linkViewModel(this);
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
}

//eslint-disable-line no-unused-vars
import 'kendo.scheduler.min';
import 'kendo.scheduler.agendaview.min';
import 'kendo.scheduler.dayview.min';
import 'kendo.scheduler.monthview.min';
import 'kendo.scheduler.recurrence.min';
import 'kendo.scheduler.timelineview.min';

@customElement(`${constants.elementPrefix}scheduler`)
@generateBindables('kendoScheduler')
@inject(Element, WidgetBase, ViewResources)
export class Scheduler {

  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoScheduler')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
}

import 'kendo.mobile.scrollview.min';

@customElement(`${constants.elementPrefix}scrollview`)
@generateBindables('kendoMobileScrollView')
@inject(Element, WidgetBase, ViewResources)
export class Scrollview {

  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMobileScrollView')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
                        .useValueBinding();
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
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

import 'kendo.slider.min';

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('kendoSlider')
@inject(Element, WidgetBase)
export class Slider {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoSlider')
                    .linkViewModel(this)
                    .bindToKendo('kEnabled', 'enable')
                    .useValueBinding();
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
}

import 'kendo.sortable.min';

@customAttribute(`${constants.attributePrefix}sortable`)
@generateBindables('kendoSortable')
@inject(Element, WidgetBase)
export class Sortable {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoSortable')
                        .linkViewModel(this);
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
}

import 'kendo.splitter.min';

@customAttribute(`${constants.attributePrefix}splitter`)
@generateBindables('kendoSplitter')
@inject(Element, WidgetBase)
export class Splitter {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoSplitter')
                        .linkViewModel(this);
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
}

import 'kendo.spreadsheet.min';

@customElement(`${constants.elementPrefix}spreadsheet`)
@generateBindables('kendoSpreadsheet')
@inject(Element, WidgetBase)
export class Spreadsheet {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoSpreadsheet')
                    .linkViewModel(this);
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
}

import 'kendo.mobile.switch.min';

@customAttribute(`${constants.attributePrefix}switch`)
@generateBindables('kendoMobileSwitch')
@inject(Element, WidgetBase)
export class Switch {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMobileSwitch')
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .useValueBinding('kChecked', 'check');
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
}

import 'kendo.tabstrip.min';

@customAttribute(`${constants.attributePrefix}tabstrip`)
@generateBindables('kendoTabStrip')
@inject(Element, WidgetBase)
export class TabStrip {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTabStrip')
                        .linkViewModel(this);
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
}

import 'kendo.timepicker.min';

@customAttribute(`${constants.attributePrefix}timepicker`)
@generateBindables('kendoTimePicker')
@inject(Element, WidgetBase)
export class TimePicker {

  @bindable kDisableDates;
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTimePicker')
                        .linkViewModel(this)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
}

@customElement(`${constants.elementPrefix}toolbar-item-button`)
@generateBindables('ToolBarItemButton')
@inject(OptionsBuilder)
export class ToolbarItemButton {

  constructor(optionsBuilder) {
    this.optionsBuilder = optionsBuilder;
  }

  getOptions() {
    return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
  }
}

@customElement(`${constants.elementPrefix}toolbar-item`)
@generateBindables('ToolBarItem')
@inject(TemplateGatherer, OptionsBuilder)
export class ToolbarItem {
  @children(`${constants.elementPrefix}template`) templates;
  @children(`${constants.elementPrefix}toolbar-item-button`) buttons;

  constructor(templateGatherer, optionsBuilder) {
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
}

import 'kendo.toolbar.min';

@customElement(`${constants.elementPrefix}toolbar`)
@generateBindables('kendoToolBar')
@inject(Element, WidgetBase, OptionsBuilder)
export class Toolbar {

  @children(`${constants.elementPrefix}toolbar-item`) toolbarItems;

  constructor(element, widgetBase, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoToolBar')
                        .linkViewModel(this);
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
      beforeInitialize: (o) => this._beforeInitialize(o)
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
}

import 'kendo.tooltip.min';

@customAttribute(`${constants.attributePrefix}tooltip`)
@generateBindables('kendoTooltip')
@inject(Element, WidgetBase)
export class Tooltip {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTooltip')
                        .linkViewModel(this);
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
}

@customElement(`${constants.elementPrefix}tree-col`)
@generateBindables('TreeListColumn')
@inject(TemplateGatherer)
export class TreeCol {
  @children(`${constants.elementPrefix}template`) templates;

  constructor(templateGatherer) {
    this.templateGatherer = templateGatherer;
  }

  bind() {
    this.templateGatherer.useTemplates(this, 'TreeListColumn', this.templates);
  }
}

//eslint-disable-line no-unused-vars
import 'kendo.data.signalr.min';
import 'kendo.filtercell.min';
import 'kendo.treelist.min';

@customElement(`${constants.elementPrefix}tree-list`)
@generateBindables('kendoTreeList')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder)
export class TreeList  {

  @children(`${constants.elementPrefix}tree-col`) columns;

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoTreeList')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
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
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
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
}

import 'kendo.treeview.min';

@customAttribute(`${constants.attributePrefix}treeview`)
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase)
export class TreeView {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeView')
                        .linkViewModel(this);
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
}

import 'kendo.upload.min';

@customElement(`${constants.elementPrefix}upload`)
@generateBindables('kendoUpload')
@inject(Element, WidgetBase, ViewResources)
export class Upload {

  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoUpload')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
}

import 'kendo.validator.min';

@customAttribute(`${constants.attributePrefix}validator`)
@generateBindables('kendoValidator')
@inject(Element, WidgetBase)
export class Validator {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoValidator')
                        .linkViewModel(this);
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
}

export class kendoToStringValueConverter {
  toView(value, format, language) {
    return kendo.toString(value, format, language);
  }
}

export class kendoParseDateValueConverter {
  toView(value, format, language) {
    return kendo.parseDate(value, format, language);
  }
}

export class kendoParseIntValueConverter {
  toView(value, language) {
    return kendo.parseInt(value, language);
  }
}

export class kendoParseFloatValueConverter {
  toView(value, language) {
    return kendo.parseFloat(value, language);
  }
}

export class kendoParseColorValueConverter {
  toView(value) {
    return kendo.parseColor(value);
  }
}

export class kendoStringifyValueConverter {
  toView(obj) {
    return kendo.stringify(obj);
  }
}

export class kendoFormatValueConverter {
  toView(value, ...params) {
    params.unshift(value);

    return kendo.format.apply(this, params);
  }
}

import 'kendo.window.min';

@customAttribute(`${constants.attributePrefix}window`)
@generateBindables('kendoWindow')
@inject(Element, WidgetBase)
export class Window {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoWindow')
                        .linkViewModel(this);
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
}
