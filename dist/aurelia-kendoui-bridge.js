import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';
import 'kendo-ui/js/kendo.button.min';
import 'kendo-ui/js/kendo.calendar.min';
import 'kendo-ui/js/kendo.dataviz.chart.min';
import 'kendo-ui/js/kendo.dataviz.chart.polar.min';
import 'kendo-ui/js/kendo.dataviz.chart.funnel.min';
import 'kendo-ui/js/kendo.dataviz.sparkline.min';
import 'kendo-ui/js/kendo.dataviz.stock.min';
import 'kendo-ui/js/kendo.dataviz.treemap.min';
import 'kendo-ui/js/kendo.colorpicker.min';
import 'kendo-ui/js/kendo.datepicker.min';
import 'kendo-ui/js/kendo.datetimepicker.min';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';
import 'kendo-ui/js/kendo.maskedtextbox.min';
import 'kendo-ui/js/kendo.menu.min';
import 'kendo-ui/js/kendo.numerictextbox.min';
import 'kendo-ui/js/kendo.panelbar.min';
import 'kendo-ui/js/kendo.pdf.min';
import 'kendo-ui/js/kendo.excel.min';
import 'kendo-ui/js/kendo.progressbar.min';
import 'kendo-ui/js/kendo.slider.min';
import 'kendo-ui/js/kendo.scheduler.min';
import 'kendo-ui/js/kendo.scheduler.agendaview.min';
import 'kendo-ui/js/kendo.scheduler.dayview.min';
import 'kendo-ui/js/kendo.scheduler.monthview.min';
import 'kendo-ui/js/kendo.scheduler.recurrence.min';
import 'kendo-ui/js/kendo.scheduler.timelineview.min';
import 'kendo-ui/js/kendo.tabstrip.min';
import 'kendo-ui/js/kendo.timepicker.min';
import 'kendo-ui/js/kendo.treelist.min';
import 'kendo-ui/js/kendo.treeview.min';
import {inject,Container,transient} from 'aurelia-dependency-injection';
import {customAttribute,bindable,customElement,BindableProperty,HtmlBehaviorResource,TemplatingEngine,children,ViewResources,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {bindingMode} from 'aurelia-binding';
import {TaskQueue} from 'aurelia-task-queue';

/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoCalendar()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoRangeSlider()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoTimePicker()
      .kendoMaskedTextBox()
      .kendoNumericTextBox()
      .kendoPanelBar()
			.kendoColorPicker()
			.kendoColorPalette()
			.kendoFlatColorPicker();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoGrid()
      .kendoAutoComplete()
      .kendoChart()
      .kendoTreeView()
      .kendoScheduler()
      .kendoTreeList();
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): KendoConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push('button/button');
    return this;
  }

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push('calendar/calendar');
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push('menu/menu');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('grid/grid');
    this.resources.push('grid/k-col');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('scheduler/scheduler');
    this.resources.push('scheduler/event-template');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push('panelbar/panelbar');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('slider/slider');
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push('rangeslider/rangeslider');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push('colorpalette/colorpalette');
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push('flatcolorpicker/flatcolorpicker');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('treeview/treeview');
    return this;
  }

  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push('datepicker/datepicker');
    return this;
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push('datetimepicker/datetimepicker');
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push('timepicker/timepicker');
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push('maskedtextbox/maskedtextbox');
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push('numerictextbox/numerictextbox');
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push('treelist/treelist');
    this.resources.push('treelist/k-tree-col');
    return this;
  }
}

let logger = LogManager.getLogger('aurelia-kendoui-bridge');
export function configure(aurelia, configCallback) {
  let builder = new KendoConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Provide core if nothing was specified
  if (builder.resources.length === 0) {
    logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
    builder.core();
  }

    // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

@customAttribute(`${constants.attributePrefix}autocomplete`)
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase)
export class AutoComplete {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('kendoButton')
@inject(Element, WidgetBase)
export class Button {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoButton')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customElement(`${constants.elementPrefix}calendar`)
@generateBindables('kendoCalendar')
@inject(Element, WidgetBase)
export class Calendar {

  @bindable options = {};

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
    this.recreate();
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
@customElement(`${constants.elementPrefix}chart`)
@generateBindables('kendoChart')
@inject(Element, WidgetBase)
export class Chart {

  @bindable options = {};

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
    this.recreate();
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
@customElement(`${constants.elementPrefix}sparkline`)
@generateBindables('kendoSparkline')
@inject(Element, WidgetBase)
export class Sparkline {

  @bindable options = {};

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
    this.recreate();
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
@customElement(`${constants.elementPrefix}stock`)
@generateBindables('kendoStockChart')
@inject(Element, WidgetBase)
export class Stock {

  @bindable options = {};

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
    this.recreate();
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
@customElement(`${constants.elementPrefix}treemap`)
@generateBindables('kendoTreeMap')
@inject(Element, WidgetBase)
export class TreeMap {

  @bindable options = {};

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
    this.recreate();
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

@customElement(`${constants.attributePrefix}color-palette`)
@generateBindables('kendoColorPalette')
@inject(Element, WidgetBase)
export class ColorPalette {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPalette')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('kendoColorPicker')
@inject(Element, WidgetBase)
export class ColorPicker {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPicker')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

export let bindables = {"kendoAutoComplete":["animation","dataSource","dataTextField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","minLength","name","placeholder","popup","separator","suggest","template","valuePrimitive","virtual"],"kendoBarcode":["background","border","checksum","color","height","name","padding","renderAs","text","type","value","width"],"kendoButton":["enable","icon","imageUrl","name","spriteCssClass"],"kendoCalendar":["culture","dates","depth","disableDates","footer","format","max","min","month","name","start","value"],"kendoChart":["autoBind","axisDefaults","categoryAxis","chartArea","dataSource","legend","name","panes","pannable","pdf","plotArea","renderAs","series","seriesColors","seriesDefaults","theme","title","tooltip","transitions","valueAxis","xAxis","yAxis","zoomable"],"kendoColorPalette":["columns","name","palette","tileSize","value"],"kendoColorPicker":["buttons","columns","messages","name","opacity","palette","preview","tileSize","toolIcon","value"],"kendoComboBox":["animation","autoBind","cascadeFrom","cascadeFromField","dataSource","dataTextField","dataValueField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","index","minLength","name","placeholder","popup","suggest","template","text","value","valuePrimitive","virtual"],"kendoContextMenu":["alignToAnchor","animation","closeOnClick","dataSource","direction","filter","hoverDelay","name","orientation","popupCollision","showOn","target"],"kendoDatePicker":["ARIATemplate","animation","culture","dates","depth","disableDates","footer","format","max","min","month","name","parseFormats","start","value"],"kendoDateTimePicker":["ARIATemplate","animation","culture","dates","depth","disableDates","footer","format","interval","max","min","month","name","parseFormats","start","timeFormat","value"],"kendoDiagram":["autoBind","connectionDefaults","connections","connectionsDataSource","dataSource","editable","layout","name","pannable","pdf","selectable","shapeDefaults","shapes","template","zoom","zoomMax","zoomMin","zoomRate"],"kendoDraggable":["axis","container","cursorOffset","distance","filter","group","hint","ignore"],"kendoDropDownList":["animation","autoBind","cascadeFrom","cascadeFromField","dataSource","dataTextField","dataValueField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","ignoreCase","index","minLength","name","optionLabel","optionLabelTemplate","popup","template","text","value","valuePrimitive","valueTemplate","virtual"],"kendoDropTarget":["group"],"kendoDropTargetArea":["filter","group"],"kendoEditor":["domain","encoded","fileBrowser","imageBrowser","messages","name","pdf","resizable","serialization","stylesheets","tools"],"kendoFlatColorPicker":["autoupdate","buttons","messages","name","opacity","preview","value"],"kendoGantt":["assignments","autoBind","columnResizeHandleWidth","columns","currentTimeMarker","dataSource","dependencies","editable","height","hourSpan","listWidth","messages","name","navigatable","pdf","resizable","resources","rowHeight","selectable","showWorkDays","showWorkHours","snap","taskTemplate","toolbar","tooltip","views","workDayEnd","workDayStart","workWeekEnd","workWeekStart"],"kendoGrid":["allowCopy","altRowTemplate","autoBind","columnMenu","columnResizeHandleWidth","columns","dataSource","detailTemplate","editable","excel","filterable","groupable","height","messages","mobile","name","navigatable","noRecords","pageable","pdf","reorderable","resizable","rowTemplate","scrollable","selectable","sortable","toolbar"],"kendoLinearGauge":["gaugeArea","name","pointer","renderAs","scale","transitions"],"kendoListView":["altTemplate","autoBind","dataSource","editTemplate","name","navigatable","selectable","template"],"kendoMap":["center","controls","layerDefaults","layers","markerDefaults","markers","maxZoom","minSize","minZoom","name","pannable","wraparound","zoom","zoomable"],"kendoMaskedTextBox":["clearPromptChar","culture","mask","name","promptChar","rules","unmaskOnPost","value"],"kendoMenu":["animation","closeOnClick","dataSource","direction","hoverDelay","name","openOnClick","orientation","popupCollision"],"kendoMobileActionSheet":["cancel","name","popup","type"],"kendoMobileBackButton":["name"],"kendoMobileButton":["badge","clickOn","enable","icon","name"],"kendoMobileButtonGroup":["enable","index","name","selectOn"],"kendoMobileCollapsible":["animation","collapsed","expandIcon","iconPosition","inset","name"],"kendoMobileDetailButton":["name"],"kendoMobileDrawer":["container","name","position","swipeToOpen","swipeToOpenViews","title","views"],"kendoMobileLayout":["id","name","platform"],"kendoMobileListView":["appendOnRefresh","autoBind","dataSource","endlessScroll","filterable","fixedHeaders","headerTemplate","loadMore","messages","name","pullParameters","pullToRefresh","style","template","type","virtualViewSize"],"kendoMobileLoader":["name"],"kendoMobileModalView":["height","modal","name","width"],"kendoMobileNavBar":["name"],"kendoMobilePane":["collapsible","initial","layout","loading","name","portraitWidth","transition"],"kendoMobilePopOver":["name","pane","popup"],"kendoMobileScrollView":["autoBind","bounceVelocityThreshold","contentHeight","dataSource","duration","emptyTemplate","enablePager","itemsPerPage","name","page","pageSize","template","velocityThreshold"],"kendoMobileScroller":["elastic","messages","name","pullOffset","pullToRefresh","useNative","visibleScrollHints","zoom"],"kendoMobileSplitView":["name","style"],"kendoMobileSwitch":["checked","enable","name","offLabel","onLabel"],"kendoMobileTabStrip":["name","selectedIndex"],"kendoMobileView":["model","name","reload","scroller","stretch","title","useNativeScrolling","zoom"],"kendoMultiSelect":["animation","autoBind","autoClose","dataSource","dataTextField","dataValueField","delay","enable","filter","fixedGroupTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","itemTemplate","maxSelectedItems","minLength","name","placeholder","popup","tagMode","tagTemplate","value","valuePrimitive","virtual"],"kendoNotification":["allowHideAfter","animation","appendTo","autoHideAfter","button","height","hideOnClick","name","position","stacking","templates","width"],"kendoNumericTextBox":["culture","decimals","downArrowText","format","max","min","name","placeholder","spinners","step","upArrowText","value"],"kendoPager":["autoBind","buttonCount","dataSource","info","input","linkTemplate","messages","name","numeric","pageSizes","previousNext","refresh","selectTemplate"],"kendoPanelBar":["animation","contentUrls","dataSource","expandMode","name"],"kendoPivotConfigurator":["dataSource","filterable","height","messages","name","sortable"],"kendoPivotGrid":["autoBind","columnHeaderTemplate","columnWidth","dataCellTemplate","dataSource","excel","filterable","height","kpiStatusTemplate","kpiTrendTemplate","messages","name","pdf","reorderable","rowHeaderTemplate","sortable"],"kendoPopup":["anchor","animation","appendTo","name","origin","position"],"kendoProgressBar":["animation","chunkCount","enable","max","min","name","orientation","reverse","showStatus","type","value"],"kendoQRCode":["background","border","color","encoding","errorCorrection","name","padding","renderAs","size","value"],"kendoRadialGauge":["gaugeArea","name","pointer","renderAs","scale","transitions"],"kendoRangeSlider":["largeStep","max","min","name","orientation","selectionEnd","selectionStart","smallStep","tickPlacement","tooltip"],"kendoResponsivePanel":["autoClose","breakpoint","name","orientation","toggleButton"],"kendoScheduler":["allDayEventTemplate","allDaySlot","autoBind","currentTimeMarker","dataSource","date","dateHeaderTemplate","editable","endTime","eventTemplate","footer","group","groupHeaderTemplate","height","majorTick","majorTimeHeaderTemplate","max","messages","min","minorTickCount","minorTimeHeaderTemplate","mobile","name","pdf","resources","selectable","showWorkHours","snap","startTime","timezone","toolbar","views","width","workDayEnd","workDayStart","workWeekEnd","workWeekStart"],"kendoSlider":["decreaseButtonTitle","increaseButtonTitle","largeStep","max","min","name","orientation","showButtons","smallStep","tickPlacement","tooltip","value"],"kendoSortable":["autoScroll","axis","connectWith","container","cursor","cursorOffset","disabled","filter","handler","hint","holdToDrag","ignore","name","placeholder"],"kendoSparkline":["autoBind","axisDefaults","categoryAxis","chartArea","data","dataSource","name","plotArea","pointWidth","renderAs","series","seriesColors","seriesDefaults","theme","tooltip","transitions","type","valueAxis"],"kendoSplitter":["name","orientation","panes"],"kendoSpreadsheet":["activeSheet","columnWidth","columns","excel","headerHeight","headerWidth","name","pdf","rowHeight","rows","sheets","sheetsbar","toolbar"],"kendoStockChart":["autoBind","axisDefaults","categoryAxis","chartArea","dataSource","dateField","legend","name","navigator","panes","pdf","plotArea","renderAs","series","seriesColors","seriesDefaults","theme","title","tooltip","transitions","valueAxis"],"kendoTabStrip":["animation","collapsible","contentUrls","dataContentField","dataContentUrlField","dataImageUrlField","dataSource","dataSpriteCssClass","dataTextField","dataUrlField","name","navigatable","scrollable","tabPosition","value"],"kendoTimePicker":["animation","culture","dates","format","interval","max","min","name","parseFormats","value"],"kendoToolBar":["items","name","resizable"],"kendoTooltip":["animation","autoHide","callout","content","filter","height","iframe","name","position","showAfter","showOn","width"],"kendoTouch":["doubleTapTimeout","enableSwipe","filter","maxDuration","maxYDelta","minHold","minXDelta","multiTouch","name","surface"],"kendoTreeList":["autoBind","columnMenu","columns","dataSource","editable","excel","filterable","height","messages","name","pdf","reorderable","resizable","scrollable","selectable","sortable","toolbar"],"kendoTreeMap":["autoBind","colorField","colors","dataSource","name","template","textField","theme","type","valueField"],"kendoTreeView":["animation","autoBind","autoScroll","checkboxes","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","dragAndDrop","loadOnDemand","messages","name","template"],"kendoUpload":["async","enabled","files","localization","multiple","name","showFileList","template"],"kendoValidator":["errorTemplate","messages","name","rules","validateOnBlur"],"kendoWindow":["actions","animation","appendTo","autoFocus","content","draggable","height","iframe","maxHeight","maxWidth","minHeight","minWidth","modal","name","pinned","position","resizable","scrollable","title","visible","width"]}
export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-',
  attributePrefix: 'k-',
  elementPrefix: 'k-'
};

/***
* Available properties (merged together from several locations) are stored here per controlName
* so that this isn't done for each created wrapper instance
*/
export class ControlProperties {
  cache = [];

  /**
  * Merges together available properties for a specific control
  * and stores this in a cache so that this is done only once per control
  */
  getProperties(controlName) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    // get available properties of the options object inside a Kendo control
    let options1 = Object.keys(jQuery.fn[controlName].widget.prototype.options);
    // get available properties of the pre-generated bindables.json file
    let options2 = bindables[controlName];
    // merge together without duplicates
    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));

    // we also want k-widget on all wrappers
    keys.push('widget');

    this.cache[controlName] = keys;

    return keys;
  }
}

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string) {
  return function(target, key, descriptor) {
    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let controlProperties = (Container.instance || new Container()).get(ControlProperties);
    let optionKeys = controlProperties.getProperties(controlName);

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
      }

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data = {}) {
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
export function fireKendoEvent(element: Element, name: string, data = {}) {
  return fireEvent(element, `${constants.eventPrefix}${name}`, data);
}

/**
* Implicitly setting options to "undefined" for a kendo control can break things.
* this function prunes the supplied options object and removes values that
* aren't set to something explicit (i.e. not null)
* @param options the options object to prune the properties of
*/
export function pruneOptions(options: any) {
  let returnOptions = {};

  for (let prop in options) {
    if (typeof(options[prop]) !== 'undefined' && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

/**
* An adaptor which uses Aurelia's enhance capability to
* compile any template Kendo wants to have compiled
*/
@inject(TemplatingEngine)
export class TemplateCompiler {

  /**
  * We don't need to initialize the TemplateCompiler every time a Kendo controls
  * is initialized
  */
  isInitialized = false;

  constructor(templatingEngine) {
    this.templatingEngine = templatingEngine;
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
      let ctx;

      if (data && data[i]) {
        let _data = data[i];
        ctx = _data.dataItem;
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
          element: element,
          resources: viewResources
        });
      } else {
        view = this.templatingEngine.enhance(element);
      }

      // when we do cleanup, we need to get the view instance
      // so we can call detached/unbind
      // so we store this view instance in the DOM element using JQuery.data
      $(element).data('viewInstance', view);
    }

    view.bind(ctx, $parent); // call the bind() function on the view with the dataItem we got from Kendo
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

const capitalMatcher = /([A-Z])/g;
/**
* prepends hyphen and lowercases the input char
* @param char the char to add an hyphen in front for
*/
export function addHyphenAndLower(char: string): string {
  return '-' + char.toLowerCase();
}

/**
* hyphenates a string
* kTest -> k-test
* @param name the string to hyphenate
*/
export function _hyphenate(name: string): string {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

/**
* unhyphenate's a string
* k-test -> kTest
*/
export function _unhyphenate(name: string): string {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
* prepends prefix and unhyphenates the resulting string
* test -> kTest
*/
export function getBindablePropertyName(propertyName: string): string {
  let name = `${constants.bindablePrefix}${propertyName}`;

  return _unhyphenate(name);
}

/**
* converts all attributes found on an element to matching Kendo events
* returns a list of these Kendo events
*/
export function getEventsFromAttributes(element: Element): string[] {
  let attributes = Array.prototype.slice.call(element.attributes);
  let events: string[] = [];

  for (let attribute of attributes) {
    let attributeName = attribute.name;
    if (!attributeName.startsWith(constants.eventPrefix)) continue;

    // kendo-my-event.trigger -> my-event.trigger
    let hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

    // my-event.trigger -> my-event
    let withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

    // my-event -> myEvent
    let camelCased = _unhyphenate(withoutTriggerDelegate);

    events.push(camelCased);
  }

  return events;
}

/**
* Abstraction of commonly used code across wrappers
*/
@transient()
@inject(TaskQueue, TemplateCompiler, ControlProperties)
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
  * The constructor of a Kendo control
  */
  ctor: any;

  constructor(taskQueue, templateCompiler, controlProperties) {
    this.taskQueue = taskQueue;
    this.controlProperties = controlProperties;
    templateCompiler.initialize();
  }

  control(controlName) {
    if (!controlName || !jQuery.fn[controlName]) {
      throw new Error(`The name of control ${controlName} is invalid or not set`);
    }

    this.controlName = controlName;

    let ctor = jQuery.fn[this.controlName];
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

  useValueBinding() {
    this.withValueBinding = true;

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

    if (!options.parentCtx) {
      throw new Error('parentCtx is not set');
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

    // instantiate the Kendo control
    let widget = this._createWidget(options.element, allOptions, this.controlName);

    widget._$parent = options.parentCtx;
    widget._$resources = this.viewResources;

    if (this.withValueBinding) {
      widget.first('change', (args) => this._handleChange(args.sender));

      // sync kValue after initialization of the widget
      // some widgets (such as dropdownlist) select first item
      this._handleChange(widget);
    }

    if (options.afterInitialize) {
      options.afterInitialize();
    }

    return widget;
  }


  _createWidget(element, options, controlName) {
    return jQuery(element)[controlName](options).data(controlName);
  }


  /**
  * combines all options objects and properties into a single options object
  */
  _getOptions(element) {
    let options = this.getOptionsFromBindables();
    let eventOptions = this.getEventOptions(element);

    // merge all option objects together
    // - options on the wrapper
    // - options compiled from all the bindable properties
    // - event handler options
    return pruneOptions(Object.assign({}, this.viewModel.options, options, eventOptions));
  }

  /**
  * loops through all bindable properties generated by the @generateBindables decorator
  * and puts all these values in a single options object
  */
  getOptionsFromBindables() {
    let options = {};

    for (let prop of this.controlProperties.getProperties(this.controlName)) {
      // we don't need to pass the widget property to the Kendo control
      // it might also cause stackoverflow errors
      if (prop !== 'widget') {
        options[prop] = this.viewModel[getBindablePropertyName(prop)];
      }
    }

    return options;
  }


  /**
  * convert attributes into a list of events a user wants to subscribe to.
  * These events are then subscribed to, which when called
  * calls the fireKendoEvent function to raise a DOM event
  */
  getEventOptions(element) {
    let options = {};
    let allowedEvents = this.kendoEvents;

    // iterate all attributes on the custom elements
    // and only return the normalized kendo event's (dataBound etc)
    let events = getEventsFromAttributes(element);

    events.forEach(event => {
      // throw error if this event is not defined on the Kendo control
      if (!allowedEvents.includes(event)) {
        throw new Error(`${event} is not an event on the ${this.controlName} control`);
      }

      // add an event handler 'proxy' to the options object
      options[event] = e => {
        this.taskQueue.queueMicroTask(() => {
          fireKendoEvent(element, _hyphenate(event), e);
        });
      };
    });

    return options;
  }


  _handleChange(widget) {
    this.viewModel.kValue = widget.value();
  }

  handlePropertyChanged(widget, property, newValue, oldValue) {
    if (property === 'kValue' && this.withValueBinding) {
      widget.value(newValue);
    }
  }

  /**
  * destroys the widget
  */
  destroy(widget) {
    widget.destroy();
  }
}


@customAttribute(`${constants.attributePrefix}datepicker`)
@generateBindables('kendoDatePicker')
@inject(Element, WidgetBase)
export class DatePicker {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDatePicker')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customAttribute(`${constants.attributePrefix}datetimepicker`)
@generateBindables('kendoDateTimePicker')
@inject(Element, WidgetBase)
export class DateTimePicker {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDateTimePicker')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customAttribute(`${constants.attributePrefix}drop-down-list`)
@generateBindables('kendoDropDownList')
@inject(Element, WidgetBase)
export class DropDownList {

  @bindable options = {};
  @bindable kValue;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDropDownList')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });

	   // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.kWidget.bind('change', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.kWidget.bind('select', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    // Ensure the dropdown has an initial value/text
    this.kWidget.trigger('change');
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

@customElement(`${constants.attributePrefix}flat-color-picker`)
@generateBindables('kendoFlatColorPicker')
@inject(Element, WidgetBase)
export class FlatColorPicker {

  @bindable options = {};

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
    this.recreate();
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
@customElement(`${constants.elementPrefix}grid`)
@generateBindables('kendoGrid')
@inject(Element, WidgetBase, ViewResources)
export class Grid  {

  @children(`${constants.elementPrefix}col`) columns;
  @bindable options = {};

  constructor(element, widgetBase, viewResources) {
    this.element = element;
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
    this.recreate();
  }

  recreate() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    let element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;

      options.columns.forEach(c => {
        if (c.template && !c.withKendoTemplates) {
          let template = c.template;
          c.template = function() {
            return template;
          };
        }
      });
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

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
@customElement(`${constants.elementPrefix}col`)
export class Col {
  @bindable aggregates;
  @bindable attributes;
  @bindable columns;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable field;
  @bindable filterable;
  @bindable footerTemplate;
  @bindable format = '';
  @bindable groupable;
  @bindable groupFooterTemplate;
  @bindable groupHeaderTemplate;
  @bindable headerAttributes;
  @bindable headerTemplate;
  @bindable hidden;
  @bindable lockable;
  @bindable locked;
  @bindable menu;
  @bindable minScreenWidth;
  @bindable sortable;
  @bindable title;
  @bindable values;
  @bindable width;
  @bindable template;
  @bindable withKendoTemplates = false;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

@customAttribute(`${constants.attributePrefix}maskedtextbox`)
@generateBindables('kendoMaskedTextBox')
@inject(Element, WidgetBase)
export class MaskedTextBox {

  @bindable kDisableDates;
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMaskedTextBox')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customElement(`${constants.elementPrefix}menu`)
@generateBindables('kendoMenu')
@inject(Element, WidgetBase)
export class Menu {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMenu')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  }

  recreate() {
    let element;
    let ul = $(this.element).find('ul');
    if (ul.has()) {
      element = $(this.element).find('ul').first();
    } else {
      element = $(this.element).appendChild('<ul></ul>');
    }

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

@customAttribute(`${constants.attributePrefix}numerictextbox`)
@generateBindables('kendoNumericTextBox')
@inject(Element, WidgetBase)
export class NumericTextBox {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoNumericTextBox')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customElement('k-panel-bar')
@generateBindables('kendoPanelBar')
@inject(Element, WidgetBase)
export class PanelBar {

  @bindable options = {};

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
    this.recreate();
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

export class PDF {}

@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('kendoProgressBar')
@inject(Element, WidgetBase)
export class ProgressBar {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoProgressBar')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customElement(`${constants.elementPrefix}range-slider`)
@generateBindables('kendoRangeSlider')
@inject(Element, WidgetBase)
export class RangeSlider {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoRangeSlider')
                    .linkViewModel(this)
                    .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
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

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
@customElement(`${constants.elementPrefix}event-template`)
export class EventTemplate {
  @bindable template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

//eslint-disable-line no-unused-vars
@customElement(`${constants.elementPrefix}scheduler`)
@generateBindables('kendoScheduler')
@inject(Element, WidgetBase, ViewResources)
export class Scheduler {

  @bindable options = {};
  @children(`${constants.elementPrefix}event-template`) eventTemplates;

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
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: o => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    let eventTemplate;

    if (this.kEventTemplate) {
      eventTemplate = () => this.kEventTemplate;
    } else if (this.eventTemplates.length > 0) {
      eventTemplate = () => this.eventTemplates[0].template;
    }

    return Object.assign(options, pruneOptions({
      eventTemplate: eventTemplate
    }));
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('kendoSlider')
@inject(Element, WidgetBase)
export class Slider {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoSlider')
                    .linkViewModel(this)
                    .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
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

@customAttribute(`${constants.attributePrefix}tabstrip`)
@generateBindables('kendoTabStrip')
@inject(Element, WidgetBase)
export class TabStrip {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTabStrip')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

@customAttribute(`${constants.attributePrefix}timepicker`)
@generateBindables('kendoTimePicker')
@inject(Element, WidgetBase)
export class TimePicker {

  @bindable kDisableDates;
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTimePicker')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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

export class AuToolbar {

}

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
@customElement(`${constants.elementPrefix}tree-col`)
export class TreeCol {
  @bindable attributes;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable expandable;
  @bindable field;
  @bindable filterable;
  @bindable footerTemplate;
  @bindable format = '';
  @bindable headerAttributes;
  @bindable headerTemplate;
  @bindable minScreenWidth;
  @bindable sortable;
  @bindable template;
  @bindable title;
  @bindable width;
  @bindable hidden;
  @bindable menu;
  @bindable locked;
  @bindable lockable;
  @bindable withKendoTemplates = false;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

//eslint-disable-line no-unused-vars
@customElement(`${constants.elementPrefix}tree-list`)
@generateBindables('kendoTreeList')
@inject(Element, WidgetBase, ViewResources)
export class TreeList  {

  @children(`${constants.elementPrefix}tree-col`) columns;
  @bindable options = {};

  constructor(element, widgetBase, viewResources) {
    this.element = element;
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
    this.recreate();
  }

  recreate() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
//    let element = isInitFromTable(this.element) ? this.element.children[0] : this.element;
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

      this.columns.forEach(c => {
        if (c.template && !c.withKendoTemplates) {
          let template = c.template;
          c.template = function() {
            return template;
          };
        }

        options.columns.push(pruneOptions(c));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// // existing table
// function isInitFromTable(element) {
//   return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
// }

@customAttribute(`${constants.attributePrefix}treeview`)
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase)
export class TreeView {
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeView')
                        .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
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
