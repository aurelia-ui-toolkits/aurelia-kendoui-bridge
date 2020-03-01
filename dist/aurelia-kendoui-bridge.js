import * as LogManager from 'aurelia-logging';
import {PLATFORM} from 'aurelia-pal';
import {inject,Container,transient} from 'aurelia-dependency-injection';
import {customElement,customAttribute,bindable,BindableProperty,HtmlBehaviorResource,TemplatingEngine,ViewResources,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {bindingMode,EventManager,createOverrideContext} from 'aurelia-binding';
import {TaskQueue} from 'aurelia-task-queue';
import {RepeatStrategyLocator,ArrayRepeatStrategy} from 'aurelia-templating-resources';

/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {
 resources: string[] = [];
  registerRepeatStrategy = true;
  _propogatePreventDefault = false;

  constructor() {
    this.logger = LogManager.getLogger('aurelia-kendoui-bridge');
  }

  /**
  * Automatically detect which Kendo controls are loaded, and load matching wrappers
  */
  detect(): KendoConfigBuilder {
    if (!window.kendo) return this;

    this.kendoTemplateSupport()
      .useValueConverters();

    let kendoControls = kendo.widgets.map(w => w.name);
    for (let i = 0; i < kendoControls.length; i++) {
      if (this[kendoControls[i]]) {
        this[kendoControls[i]]();
      }
    }

    return this;
  }

  /**
  * Globally register all Kendo Core wrappers including templating support
  */
  core(): KendoConfigBuilder {
    this.kendoAutoComplete()
      .kendoButton()
      .kendoMobileButtonGroup()
      .kendoCalendar()
      .kendoColorPicker()
      .kendoColorPalette()
      .kendoComboBox()
      .kendoContextMenu()
      .kendoDialog()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoDateRangePicker()
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
      .kendoPopup()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoResponsivePanel()
      .kendoMobileScrollView()
      .kendoSortable()
      .kendoSlider()
      .kendoSplitter()
      .kendoMobileSwitch()
      .kendoTabStrip()
      .kendoTemplateSupport()
      .kendoTimePicker()
      .kendoToolBar()
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
	  .kendoChat()
	  .kendoDiagram()
	  .kendoDropDownTree()
      .kendoEditor()
      .kendoFilterMenu()
      .kendoGantt()
      .kendoGrid()
      .kendoMap()
	  .kendoLinearGauge()
	  .kendoPager()
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
    this.resources.push(PLATFORM.moduleName('./valueconverters/valueconverters'));
    return this;
  }

  /**
  * Adds kendo templating support
  */
  kendoTemplateSupport(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/template'));
    return this;
  }

  /**
   * Propogates .preventDefault() to Kendo events
   */
  propogatePreventDefault(): KendoConfigBuilder {
    this._propogatePreventDefault = true;
    return this;
  }

  /**
  * Adds kendo templating support
  */
  debug(): KendoConfigBuilder {
    logger.warn('.debug() is no longer needed and will be removed in the future.');
    return this;
  }

  /**
  * Loads the notify binding behavior
  */
  notifyBindingBehavior(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/notify-binding-behavior'));
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
    this.resources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }

  kendoBarcode(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./barcode/barcode'));
    return this;
  }

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./calendar/calendar'));
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./chart/chart'));
    this.resources.push(PLATFORM.moduleName('./chart/sparkline'));
    this.resources.push(PLATFORM.moduleName('./chart/stock'));
    this.resources.push(PLATFORM.moduleName('./chart/treemap'));
    return this;
  }

  kendoChat(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./chat/chat'));
    return this;
  }

  kendoComboBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./combobox/combobox'));
    return this;
  }

  kendoContextMenu(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./contextmenu/contextmenu'));
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./colorpicker/colorpicker'));
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./colorpalette/colorpalette'));
    return this;
  }

  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  }

  kendoDateInput(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dateinput/dateinput'));
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datetimepicker/datetimepicker'));
    return this;
  }

  kendoDateRangePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./daterangepicker/daterangepicker'));
    return this;
  }

  kendoDiagram(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./diagram/diagram'));
    return this;
  }

  kendoDialog(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dialog/dialog'));
    return this;
  }

  kendoDraggable(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./draggable/draggable'));
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dropdownlist/dropdownlist'));
    return this;
  }

  kendoDropDownTree(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dropdowntree/dropdowntree'));
    return this;
  }

  kendoDropTarget(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./drop-target/drop-target'));
    this.resources.push(PLATFORM.moduleName('./drop-target/drop-target-area'));
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./editor/editor'));
    return this;
  }

  kendoFilterMenu(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./filter-menu/filter-menu'));
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./flatcolorpicker/flatcolorpicker'));
    return this;
  }

  kendoGantt(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gantt/gantt'));
    this.resources.push(PLATFORM.moduleName('./gantt/gantt-col'));
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./grid/grid'));
    this.resources.push(PLATFORM.moduleName('./grid/col'));
    this.resources.push(PLATFORM.moduleName('./grid/grid-toolbar'));
    this.resources.push(PLATFORM.moduleName('./grid/grid-command'));
    return this;
  }

  kendoLinearGauge(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gauges/linear-gauge'));
    return this;
  }

  kendoArcGauge(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gauges/arc-gauge'));
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listview/listview'));
    return this;
  }

  kendoListBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listbox/listbox'));
    return this;
  }

  kendoNotification(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./notification/notification'));
    this.resources.push(PLATFORM.moduleName('./notification/notification-template'));
    return this;
  }

  kendoMap(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./map/map'));
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./menu/menu'));
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./maskedtextbox/maskedtextbox'));
    return this;
  }

  kendoMobileButtonGroup(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./buttongroup/buttongroup'));
    return this;
  }

  kendoMultiSelect(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./multiselect/multiselect'));
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./numerictextbox/numerictextbox'));
    return this;
  }

  kendoPager(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pager/pager'));
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./panelbar/panelbar'));
    return this;
  }

  kendoPivotGrid(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotgrid'));
    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotconfigurator'));
    return this;
  }

  kendoPopup(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./popup/popup'));
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./progressbar/progressbar'));
    return this;
  }

  kendoQRCode(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./qrcode/qrcode'));
    return this;
  }

  kendoRadialGauge(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gauges/radial-gauge'));
    return this;
  }

  kendoResponsivePanel(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./responsivepanel/responsivepanel'));
    return this;
  }

  kendoMediaPlayer(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./mediaplayer/mediaplayer'));
    return this;
  }

  kendoMobileScrollView(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./scrollview/scrollview'));
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./scheduler/scheduler'));
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./slider/slider'));
    return this;
  }

  kendoSortable(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./sortable/sortable'));
    return this;
  }

  kendoSpreadsheet(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./spreadsheet/spreadsheet'));
    return this;
  }

  kendoSplitter(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./splitter/splitter'));
    return this;
  }

  kendoMobileSwitch(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./switch/switch'));
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tabstrip/tabstrip'));
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treelist/treelist'));
    this.resources.push(PLATFORM.moduleName('./treelist/tree-col'));
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treeview/treeview'));
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./timepicker/timepicker'));
    return this;
  }

  kendoToolBar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar-item'));
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar-item-button'));
    return this;
  }

  kendoTooltip(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rangeslider/rangeslider'));
    return this;
  }

  kendoUpload(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./upload/upload'));
    return this;
  }

  kendoValidator(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./validator/validator'));
    return this;
  }

  kendoWindow(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./window/window'));
    return this;
  }

  // deprecated
  kendoButtonGroup(): KendoConfigBuilder {
    this.logger.warn('kendoButtonGroup is deprecated, use .kendoMobileButtonGroup() instead');
    return this.kendoMobileButtonGroup();
  }

  kendoCombobox(): KendoConfigBuilder {
    this.logger.warn('kendoCombobox is deprecated, use .kendoComboBox() instead');
    return this.kendoComboBox();
  }

  kendoScrollView(): KendoConfigBuilder {
    this.logger.warn('kendoScrollView is deprecated, use .kendoMobileScrollView() instead');
    return this.kendoMobileScrollView();
  }

  kendoSwitch(): KendoConfigBuilder {
    this.logger.warn('kendoSwitch is deprecated, use .kendoMobileSwitch() instead');
    return this.kendoMobileSwitch();
  }

  kendoToolbar(): KendoConfigBuilder {
    this.logger.warn('kendoToolbar is deprecated, use .kendoToolBar() instead');
    return this.kendoToolBar();
  }
}

export function configure(aurelia, configCallback) {
  let builder = aurelia.container.get(KendoConfigBuilder);
  let logger = LogManager.getLogger('aurelia-kendoui-bridge');

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  // Pull the data off the builder
  let resources = builder.resources;

  if (resources.length > 0) {
    aurelia.globalResources(resources);
  }

  logger.info(`Loading ${resources.length} wrappers`, resources);

  if (resources.length > 10) {
    logger.warn('when using many wrappers, it is recommended not to use .core(), .pro() or .dynamic()' +
      ' but instead to load wrappers via <require></require>.' +
      'this should significantly speed up load times of your application.');
  }
}



export let version = '1.10.0';
@customElement(`${constants.elementPrefix}autocomplete`)
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase, Container)
export class AutoComplete {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoAutoComplete')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container)
      .useValueBinding()
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  attached() {
    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.widgetBase.useElement(inputs[0]);
    } else {
      let target = document.createElement('input');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}barcode`)
@generateBindables('kendoBarcode')
@inject(Element, WidgetBase)
export class Barcode {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoBarcode')
      .useElement(this.element)
      .linkViewModel(this);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('kendoButton')
@inject(Element, WidgetBase)
export class Button {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoButton')
      .useElement(this.element)
      .bindToKendo('kEnabled', 'enable')
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}buttongroup`)
@generateBindables('kendoMobileButtonGroup')
@inject(Element, WidgetBase)
export class ButtonGroup {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMobileButtonGroup')
      .useElement(this.element)
      .bindToKendo('kEnabled', 'enable')
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}calendar`)
@generateBindables('kendoCalendar')
@inject(Element, WidgetBase)
export class Calendar {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoCalendar')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}chart`)
@generateBindables('kendoChart')
@inject(Element, WidgetBase)
export class Chart {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoChart')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}sparkline`)
@generateBindables('kendoSparkline')
@inject(Element, WidgetBase)
export class Sparkline {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoSparkline')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}stock`)
@generateBindables('kendoStockChart')
@inject(Element, WidgetBase)
export class Stock {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoStockChart')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}treemap`)
@generateBindables('kendoTreeMap')
@inject(Element, WidgetBase)
export class TreeMap {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoTreeMap')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}chat`)
@generateBindables('kendoChat')
@inject(Element, WidgetBase)
export class Chat {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoChat')
      .useElement(this.element)
      .bindToKendo('kEnabled', 'enable')
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.attributePrefix}color-palette`)
@generateBindables('kendoColorPalette')
@inject(Element, WidgetBase)
export class ColorPalette {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoColorPalette')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('kendoColorPicker')
@inject(Element, WidgetBase)
export class ColorPicker {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoColorPicker')
      .useElement(this.element)
      .linkViewModel(this)
      .bindToKendo('kEnabled', 'enable')
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}combobox`)
@generateBindables('kendoComboBox')
@inject(Element, WidgetBase, Container)
export class ComboBox {
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoComboBox')
      .linkViewModel(this)
      .useRootElement(this.element)
      .useValueBinding()
      .useContainer(container)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNodes = getSelectNode(this.element);
    this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoComboBox', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

export let bindables = {"kendoAlert":["messages","name"],"kendoArcGauge":["centerTemplate","color","colors","gaugeArea","name","opacity","renderAs","scale","theme","transitions","value"],"kendoAutoComplete":["animation","autoWidth","clearButton","dataSource","dataTextField","delay","enable","enforceMinLength","filter","fixedGroupTemplate","footerTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","minLength","name","noDataTemplate","placeholder","popup","separator","suggest","template","value","valuePrimitive","virtual"],"kendoBarcode":["background","border","checksum","color","height","name","padding","renderAs","text","type","value","width"],"kendoButton":["enable","icon","iconClass","imageUrl","name","spriteCssClass"],"kendoButtonGroup":["enable","index","items","name","selection"],"kendoCalendar":["culture","dates","depth","disableDates","footer","format","max","messages","min","month","name","selectDates","selectable","start","value","weekNumber"],"kendoChart":["autoBind","axisDefaults","categoryAxis","chartArea","dataSource","legend","name","panes","pannable","pdf","persistSeriesVisibility","plotArea","renderAs","series","seriesColors","seriesDefaults","theme","title","tooltip","transitions","valueAxis","xAxis","yAxis","zoomable"],"kendoChat":["messages","name","user"],"kendoColorPalette":["columns","name","palette","tileSize","value"],"kendoColorPicker":["buttons","clearButton","columns","messages","name","opacity","palette","preview","tileSize","toolIcon","value"],"kendoComboBox":["animation","autoBind","autoWidth","cascadeFrom","cascadeFromField","clearButton","dataSource","dataTextField","dataValueField","delay","enable","enforceMinLength","filter","fixedGroupTemplate","footerTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","index","minLength","name","noDataTemplate","placeholder","popup","suggest","syncValueAndText","template","text","value","valuePrimitive","virtual"],"kendoConfirm":["content","messages","name","title"],"kendoContextMenu":["alignToAnchor","animation","appendTo","closeOnClick","copyAnchorStyles","dataContentField","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","direction","filter","hoverDelay","name","orientation","popupCollision","scrollable","showOn","target"],"kendoDateInput":["format","max","messages","min","name","value"],"kendoDatePicker":["ARIATemplate","animation","culture","dateInput","dates","depth","disableDates","footer","format","max","min","month","name","parseFormats","start","value","weekNumber"],"kendoDateRangePicker":["ARIATemplate","culture","dates","depth","disableDates","footer","format","labels","max","messages","min","month","name","range","start","weekNumber"],"kendoDateTimePicker":["ARIATemplate","animation","culture","dateInput","dates","depth","disableDates","footer","format","interval","max","min","month","name","parseFormats","start","timeFormat","value","weekNumber"],"kendoDiagram":["autoBind","connectionDefaults","connections","connectionsDataSource","dataSource","editable","layout","name","pannable","pdf","selectable","shapeDefaults","shapes","template","theme","zoom","zoomMax","zoomMin","zoomRate"],"kendoDialog":["actions","animation","buttonLayout","closable","content","height","maxHeight","maxWidth","messages","minHeight","minWidth","modal","name","size","title","visible","width"],"kendoDraggable":["autoScroll","axis","container","cursorOffset","distance","filter","group","hint","holdToDrag","ignore"],"kendoDropDownList":["animation","autoBind","autoWidth","cascadeFrom","cascadeFromField","dataSource","dataTextField","dataValueField","delay","enable","enforceMinLength","filter","fixedGroupTemplate","footerTemplate","groupTemplate","headerTemplate","height","ignoreCase","index","minLength","name","noDataTemplate","optionLabel","optionLabelTemplate","popup","template","text","value","valuePrimitive","valueTemplate","virtual"],"kendoDropDownTree":["animation","autoBind","autoClose","autoWidth","checkAll","checkAllTemplate","checkboxes","clearButton","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","dataValueField","delay","enable","enforceMinLength","filter","footerTemplate","headerTemplate","height","ignoreCase","loadOnDemand","messages","minLength","name","noDataTemplate","placeholder","popup","tagMode","template","text","value","valuePrimitive","valueTemplate"],"kendoDropTarget":["group"],"kendoDropTargetArea":["filter","group"],"kendoEditor":["deserialization","domain","encoded","fileBrowser","imageBrowser","immutables","messages","name","pasteCleanup","pdf","placeholder","resizable","serialization","stylesheets","tools"],"kendoFilter":["applyButton","dataSource","expression","expressionPreview","fields","mainLogic","messages","name","operators"],"kendoFilterMenu":["dataSource","extra","field","messages","name","operators"],"kendoFlatColorPicker":["autoupdate","buttons","messages","name","opacity","preview","value"],"kendoGantt":["assignments","autoBind","columnResizeHandleWidth","columns","currentTimeMarker","dataSource","date","dependencies","editable","height","hourSpan","listWidth","messages","name","navigatable","pdf","range","resizable","resources","rowHeight","selectable","showWorkDays","showWorkHours","snap","taskTemplate","toolbar","tooltip","views","workDayEnd","workDayStart","workWeekEnd","workWeekStart"],"kendoGrid":["allowCopy","altRowTemplate","autoBind","columnMenu","columnResizeHandleWidth","columns","dataSource","detailTemplate","editable","excel","filterable","groupable","height","messages","mobile","name","navigatable","noRecords","pageable","pdf","persistSelection","reorderable","resizable","rowTemplate","scrollable","selectable","sortable","toolbar"],"kendoLinearGauge":["gaugeArea","name","pointer","renderAs","scale","theme","transitions"],"kendoListBox":["autoBind","connectWith","dataSource","dataTextField","dataValueField","draggable","dropSources","messages","name","navigatable","selectable","template","toolbar"],"kendoListView":["altTemplate","autoBind","dataSource","editTemplate","height","name","navigatable","scrollable","selectable","template"],"kendoMap":["center","controls","layerDefaults","layers","markerDefaults","markers","maxZoom","minSize","minZoom","name","pannable","wraparound","zoom","zoomable"],"kendoMaskedTextBox":["clearPromptChar","culture","mask","name","promptChar","rules","unmaskOnPost","value"],"kendoMediaPlayer":["autoPlay","autoRepeat","forwardSeek","fullScreen","media","messages","mute","name","navigatable","volume"],"kendoMenu":["animation","closeOnClick","dataContentField","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","direction","hoverDelay","name","openOnClick","orientation","popupCollision","scrollable"],"kendoMobileActionSheet":["cancel","name","popup","type"],"kendoMobileBackButton":["name"],"kendoMobileButton":["badge","clickOn","enable","icon","name"],"kendoMobileButtonGroup":["enable","index","name","selectOn"],"kendoMobileCollapsible":["animation","collapsed","expandIcon","iconPosition","inset","name"],"kendoMobileDetailButton":["name"],"kendoMobileDrawer":["container","name","position","swipeToOpen","swipeToOpenViews","title","views"],"kendoMobileLayout":["id","name","platform"],"kendoMobileListView":["appendOnRefresh","autoBind","dataSource","endlessScroll","filterable","fixedHeaders","headerTemplate","loadMore","messages","name","pullParameters","pullToRefresh","style","template","type","virtualViewSize"],"kendoMobileLoader":["name"],"kendoMobileModalView":["height","modal","name","width"],"kendoMobileNavBar":["name"],"kendoMobilePane":["collapsible","initial","layout","loading","name","portraitWidth","transition"],"kendoMobilePopOver":["name","pane","popup"],"kendoMobileScrollView":["autoBind","bounceVelocityThreshold","contentHeight","dataSource","duration","emptyTemplate","enablePager","itemsPerPage","name","page","pageSize","template","velocityThreshold"],"kendoMobileScroller":["elastic","messages","name","pullOffset","pullToRefresh","useNative","visibleScrollHints","zoom"],"kendoMobileSplitView":["name","style"],"kendoMobileSwitch":["checked","enable","name","offLabel","onLabel"],"kendoMobileTabStrip":["name","selectedIndex"],"kendoMobileView":["model","name","reload","scroller","stretch","title","useNativeScrolling","zoom"],"kendoMultiColumnComboBox":["animation","autoBind","autoWidth","cascadeFrom","cascadeFromField","clearButton","columns","dataSource","dataTextField","dataValueField","delay","dropDownWidth","enable","enforceMinLength","filter","filterFields","fixedGroupTemplate","footerTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","index","minLength","name","noDataTemplate","placeholder","popup","suggest","syncValueAndText","template","text","value","valuePrimitive","virtual"],"kendoMultiSelect":["animation","autoBind","autoClose","autoWidth","clearButton","dataSource","dataTextField","dataValueField","delay","enable","enforceMinLength","filter","fixedGroupTemplate","footerTemplate","groupTemplate","headerTemplate","height","highlightFirst","ignoreCase","itemTemplate","maxSelectedItems","minLength","name","noDataTemplate","placeholder","popup","tagMode","tagTemplate","value","valuePrimitive","virtual"],"kendoMultiViewCalendar":["culture","dates","depth","disableDates","footer","format","max","messages","min","month","name","range","selectDates","selectable","showViewHeader","start","value","views","weekNumber"],"kendoNotification":["allowHideAfter","animation","appendTo","autoHideAfter","button","height","hideOnClick","name","position","stacking","templates","width"],"kendoNumericTextBox":["culture","decimals","downArrowText","factor","format","max","min","name","placeholder","restrictDecimals","round","spinners","step","upArrowText","value"],"kendoPDFViewer":["defaultPageSize","dplProcessing","height","messages","name","page","pdfjsProcessing","toolbar","view","width"],"kendoPager":["autoBind","buttonCount","dataSource","info","input","linkTemplate","messages","name","numeric","pageSizes","previousNext","refresh","responsive","selectTemplate"],"kendoPanelBar":["animation","autoBind","contentUrls","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","expandMode","loadOnDemand","messages","name","template"],"kendoPivotConfigurator":["dataSource","filterable","height","messages","name","sortable"],"kendoPivotGrid":["autoBind","columnHeaderTemplate","columnWidth","dataCellTemplate","dataSource","excel","filterable","height","kpiStatusTemplate","kpiTrendTemplate","messages","name","pdf","reorderable","rowHeaderTemplate","sortable"],"kendoPopup":["adjustSize","anchor","animation","appendTo","collision","name","origin","position"],"kendoProgressBar":["animation","chunkCount","enable","max","min","name","orientation","reverse","showStatus","type","value"],"kendoPrompt":["messages","name"],"kendoQRCode":["background","border","color","encoding","errorCorrection","name","padding","renderAs","size","value"],"kendoRadialGauge":["gaugeArea","name","pointer","renderAs","scale","theme","transitions"],"kendoRangeSlider":["largeStep","leftDragHandleTitle","max","min","name","orientation","rightDragHandleTitle","selectionEnd","selectionStart","smallStep","tickPlacement","tooltip"],"kendoRating":["enabled","hoveredTemplate","itemTemplate","label","max","min","name","precision","readonly","selectValueOnFocus","selectedTemplate","selection","tooltip"],"kendoResponsivePanel":["autoClose","breakpoint","name","orientation","toggleButton"],"kendoScheduler":["allDayEventTemplate","allDaySlot","autoBind","currentTimeMarker","dataSource","date","dateHeaderTemplate","editable","endTime","eventTemplate","footer","group","groupHeaderTemplate","height","majorTick","majorTimeHeaderTemplate","max","messages","min","minorTickCount","minorTimeHeaderTemplate","mobile","name","pdf","resources","selectable","showWorkHours","snap","startTime","timezone","toolbar","views","width","workDayEnd","workDayStart","workWeekEnd","workWeekStart"],"kendoScrollView":["autoBind","bounceVelocityThreshold","contentHeight","dataSource","duration","emptyTemplate","enablePager","name","page","template","velocityThreshold"],"kendoSlider":["decreaseButtonTitle","dragHandleTitle","increaseButtonTitle","largeStep","max","min","name","orientation","showButtons","smallStep","tickPlacement","tooltip","value"],"kendoSortable":["autoScroll","axis","connectWith","container","cursor","cursorOffset","disabled","filter","handler","hint","holdToDrag","ignore","name","placeholder"],"kendoSparkline":["autoBind","axisDefaults","categoryAxis","chartArea","data","dataSource","name","plotArea","pointWidth","renderAs","series","seriesColors","seriesDefaults","theme","tooltip","transitions","type","valueAxis"],"kendoSplitter":["name","orientation","panes"],"kendoSpreadsheet":["activeSheet","columnWidth","columns","defaultCellStyle","excel","headerHeight","headerWidth","name","pdf","rowHeight","rows","sheets","sheetsbar","toolbar"],"kendoStockChart":["autoBind","axisDefaults","categoryAxis","chartArea","dataSource","dateField","legend","name","navigator","panes","pdf","persistSeriesVisibility","plotArea","renderAs","series","seriesColors","seriesDefaults","theme","title","tooltip","transitions","valueAxis"],"kendoSwitch":["checked","enabled","messages","name","readonly","width"],"kendoTabStrip":["animation","collapsible","contentUrls","dataContentField","dataContentUrlField","dataImageUrlField","dataSource","dataSpriteCssClass","dataTextField","dataUrlField","name","navigatable","scrollable","tabPosition","value"],"kendoTimePicker":["animation","culture","dateInput","dates","format","interval","max","min","name","parseFormats","value"],"kendoTimeline":["alternatingMode","collapsibleEvents","dataActionsField","dataDateField","dataDescriptionField","dataImagesField","dataSource","dataSubTitleField","dataTitleField","dateformat","eventHeight","eventTemplate","eventWidth","name","orientation","showDateLabels"],"kendoToolBar":["items","name","resizable"],"kendoTooltip":["animation","autoHide","callout","content","filter","height","iframe","name","position","showAfter","showOn","width"],"kendoTouch":["doubleTapTimeout","enableSwipe","filter","maxDuration","maxYDelta","minHold","minXDelta","multiTouch","name","surface"],"kendoTreeList":["autoBind","columnMenu","columns","dataSource","editable","excel","filterable","height","messages","name","navigatable","pageable","pdf","reorderable","resizable","scrollable","selectable","sortable","toolbar"],"kendoTreeMap":["autoBind","colorField","colors","dataSource","name","template","textField","theme","type","valueField"],"kendoTreeView":["animation","autoBind","autoScroll","checkboxes","dataImageUrlField","dataSource","dataSpriteCssClassField","dataTextField","dataUrlField","dragAndDrop","loadOnDemand","messages","name","template"],"kendoUpload":["async","directory","directoryDrop","dropZone","enabled","files","localization","multiple","name","showFileList","template","validation"],"kendoValidator":["errorTemplate","messages","name","rules","validateOnBlur"],"kendoWindow":["actions","animation","appendTo","autoFocus","content","draggable","height","iframe","maxHeight","maxWidth","minHeight","minWidth","modal","name","pinned","position","resizable","scrollable","size","title","visible","width"],"GanttColumn":["editable","field","format","sortable","title","width"],"GridColumn":["aggregates","attributes","columns","command","editable","encoded","field","filterable","footerAttributes","footerTemplate","format","groupFooterTemplate","groupHeaderColumnTemplate","groupHeaderTemplate","groupable","headerAttributes","headerTemplate","hidden","lockable","locked","media","menu","minResizableWidth","minScreenWidth","selectable","sortable","template","title","values","width","editor"],"GridColumnCommandItem":["className","click","iconClass","name","template","text","visible"],"GridToolbarItem":["iconClass","name","template","text"],"ToolBarItem":["attributes","buttons","click","enable","group","hidden","icon","id","imageUrl","menuButtons","overflow","overflowTemplate","primary","selected","showIcon","showText","spriteCssClass","template","text","togglable","toggle","type","url"],"ToolBarItemButton":["attributes","click","enable","group","hidden","icon","id","imageUrl","selected","showIcon","showText","spriteCssClass","text","togglable","toggle","url"],"TreeListColumn":["attributes","columns","command","editable","encoded","expandable","field","filterable","footerTemplate","format","headerAttributes","headerTemplate","hidden","lockable","locked","menu","minScreenWidth","sortable","template","title","width","editor"]}
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
    if (window.kendo && kendo.jQuery.fn[controlName]) {
      return Object.keys(kendo.jQuery.fn[controlName].widget.prototype.options);
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
    let taskQueue = (Container.instance || new Container()).get(TaskQueue);
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

@transient()
export class Observer {
  subscriptions = [];

  notify(evt, data) {
    for (let i = 0; i < this.subscriptions.length; i++) {
      if (this.subscriptions[i].event === evt) {
        this.subscriptions[i].callback(evt, data);
      }
    }
  }

  subscribe(evt, cb) {
    let subscription = { event: evt, callback: cb };

    this.subscriptions.push(subscription);

    return {
      dispose: () => this.unsubscribe(subscription)
    };
  }

  unsubscribe(subscription) {
    let index = this.subscriptions.indexOf(subscription);

    if (index > -1) {
      this.subscriptions.splice(index, 1);
    }
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

    // allows view-models to do some pre processing
    // for example, process all ak-templates
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

    if (!window.kendo) return;

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
    let $parent;
    let container;
    let $angular = widget.$angular || widget.options.$angular;

    if ($angular) {
      $parent = $angular[0]._$parent;
      container = $angular[0]._$container;
    }

    if (!$parent) return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args
    let scopeFrom = args.scopeFrom;

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile($parent, elements, data, scopeFrom, container);
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
  * @param elements an array of Elements or a kendo.jQuery selector
  * @param data optionally an array of dataitems
  */
  compile($parent, elements, data, scopeFrom, container) {
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
      } else if (scopeFrom) {
        ctx = scopeFrom;
      }

      if (element instanceof kendo.jQuery) {
        element.each((index, elem) => this.enhanceView($parent, elem, ctx, container));
      } else {
        this.enhanceView($parent, element, ctx, container);
      }
    }
  }

  /**
  * uses the enhance function of Aurelia's TemplatingEngine
  * to "compile" existing DOM elements
  * @param element The Element to compile
  * @param ctx The dataitem (context) to compile the Element with
  */
  enhanceView($parent, element, ctx, container) {
    let view = kendo.jQuery(element).data('viewInstance');

    kendo.jQuery(element).data('$$kendoScope', ctx);

    // check necessary due to https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/308
    if (element.querySelectorAll('.au-target').length === 0) {
      if (container) {
        let childContainer = container.createChild();
        let resources = container.get(ViewResources);

        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: createOverrideContext(ctx, $parent),
          container: childContainer,
          element: element,
          resources: resources
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
      // so we store this view instance in the DOM element using kendo.jQuery.data
      kendo.jQuery(element).data('viewInstance', view);
    } else {
      view.bind(ctx, createOverrideContext(ctx, $parent));
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
    let view = kendo.jQuery(element).data('viewInstance');
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
    // if there's a script tag in the template, take the innerHTML of the script tag
    // https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/580
    let script = kendo.jQuery(element).children('script');
    if (script.length > 0) {
      instruction.template = kendo.jQuery(script).html();
    } else {
      // no script tags? the template is the innerHTML
      instruction.template = html;
    }
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
      bubbles: true,
      cancelable: true
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

  getChildrenVMs(element, cssSelector) {
    let elements = kendo.jQuery(element).children(cssSelector);
    let viewModels = [];
    elements.each((index, elem) => {
      if (elem.au && elem.au.controller) {
        viewModels.push(elem.au.controller.viewModel);
      } else {
        throw new Error(`au property not found on element ${elem.tagName}. Did you load this custom element via <require> or via main.js?`);
      }
    });
    return viewModels;
  }
}

const logger = LogManager.getLogger('aurelia-kendoui-bridge');

/**
* Abstraction of commonly used code across wrappers
*/
@transient()
@inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder, RepeatStrategyLocator, Observer)
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
   * The observer for event callbacks
   */
  observer: any;


  /**
  * A list of bindings for properties such as kEnable/kReadOnly/kValue
  * whenever one of these properties changes an API function will be called on the Kendo control
  * for example, a change of an 'kEnable' property will result in a .enable(true/false) call
  */
  bindingsToKendo = [];

  constructor(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder, repeatStratLocator, observer) {
    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.configBuilder = configBuilder;
    this.repeatStratLocator = repeatStratLocator;
    this.templateGatherer = templateGatherer;
    this.observer = observer;
    templateCompiler.initialize();
    this.registerRepeatStrategy();
  }

  control(controlName) {
    if (!controlName || !window.kendo || !kendo.jQuery.fn[controlName]) {
      throw new Error(`The kendo control '${controlName}' is not available. Did you load Kendo (in addition to the bridge)?`);
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

  useContainer(container) {
    if (!container) {
      throw new Error('container is not set');
    }

    this.container = container;

    return this;
  }

  useElement(element) {
    this.element = element;

    if (!this.rootElement) {
      this.rootElement = element;
    }

    return this;
  }

  useRootElement(rootElement) {
    this.rootElement = rootElement;

    return this;
  }

  beforeInitialize(cb) {
    this._beforeInitialize = cb;

    return this;
  }

  afterInitialize(cb) {
    this._afterInitialize = cb;

    return this;
  }

  useParentCtx(overrideContext) {
    this.parentCtx = overrideContext;

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
  recreate() {
    if (!this.element) {
      throw new Error('element is not set. Call .useElement(<target element>)');
    }

    // destroy old widgets
    if (this.viewModel && this.viewModel.kWidget) {
      this.destroy(this.viewModel.kWidget);
    }

    // generate all options, including event handlers - use the rootElement if specified, otherwise fall back to the element
    // this allows a child element in a custom elements template to be the container for the kendo control
    // but allows the plugin to correctly discover attributes on the root element to match against events
    let allOptions = this._getOptions(this.rootElement);

    // before initialization callback
    // allows you to modify/add/remove options before the control gets initialized
    if (this._beforeInitialize) {
      this._beforeInitialize(allOptions);
    }

    // add parent context to options
    // deepExtend in kendo.core will fail with stack
    // overflow if we don't put it in an array :-\
    Object.assign(allOptions, {
      $angular: [{ _$parent: this.parentCtx, _$container: this.container }]
    });

    logger.debug(`initializing ${this.controlName} with the following config`, allOptions);

    let widget = this._createWidget(this.element, allOptions, this.controlName);

    widget.$angular = [{
      _$parent: this.parentCtx,
      _$container: this.container
    }];

    if (this.withValueBinding) {
      widget.first('change', (args) => this._handleValueChange(args.sender));
      widget.one('dataBound', (args) => this._handleValueChange(args.sender));
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

    if (this._afterInitialize) {
      this._afterInitialize();
    }

    this.observer.notify('ready', widget);

    if (this.util.getEventsFromAttributes(this.rootElement).indexOf('ready') > -1) {
      this.util.fireKendoEvent(this.rootElement, 'ready', widget);
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
    let allowedEvents = this.kendoEvents.concat(['ready']);
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
          this.taskQueue.queueMicroTask(() => {
            this.observer.notify(event, e);

            return this.util.fireKendoEvent(element, this.util._hyphenate(event), e);
          });
        };
      } else {
        options[event] = e => {
          this.observer.notify(event, e);

          let evt = this.util.fireKendoEvent(element, this.util._hyphenate(event), e);

          if (this.configBuilder._propogatePreventDefault && evt.defaultPrevented) {
            e.preventDefault();
          }
        };
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
    if (!widget) return;

    let binding = this.bindingsToKendo.find(i => i.propertyName === property);
    if (!binding) return;

    if (typeof newValue === 'undefined') {
      widget[binding.functionName](null);
    } else if (widget[binding.functionName]() !== newValue) {
      widget[binding.functionName](newValue);
    }
  }

  useTemplates(target, controlName, templates) {
    return this.templateGatherer.useTemplates(target, controlName, templates);
  }

  registerRepeatStrategy() {
    if (this.configBuilder.registerRepeatStrategy) {
      if (!window.kendo) {
        logger.warn('Could not add RepeatStrategy for kendo.data.ObservableArray as kendo.data.ObservableArray has not been loaded');
        return;
      }
      this.repeatStratLocator.addStrategy(items => items instanceof kendo.data.ObservableArray, new ArrayRepeatStrategy());
    }
  }

  subscribe(event, callback) {
    return this.observer.subscribe(event, callback);
  }

  /**
  * destroys the widget
  */
  destroy(widget) {
    if (widget && widget.element && widget.element.length > 0) {
      if (widget.wrapper && (widget.wrapper !== widget.element)) {
        widget.element.insertBefore(widget.wrapper);
        widget.wrapper.remove();
      }

      // remove all class attributes from the element starting with k-
      let classList = widget.element[0].classList;
      for (let i = 0; i < classList.length; i++) {
        let item = classList.item(i);
        if (item.startsWith('k-')) {
          classList.remove(item);
        }
      }

      let element = widget.element;

      kendo.destroy(element);

      if (element) {
        element.show().empty();
      }

      widget = null;

      if (this.viewModel.kWidget) {
        this.viewModel.kWidget = null;
      }
    }
  }
}

@customAttribute(`${constants.attributePrefix}contextmenu`)
@generateBindables('kendoContextMenu')
@inject(Element, WidgetBase)
export class ContextMenu {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoContextMenu')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}date-input`)
@generateBindables('kendoDateInput')
@inject(Element, WidgetBase)
export class DateInput {
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDateInput')
      .useElement(this.element)
      .linkViewModel(this)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly')
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

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
      .useElement(this.element)
      .linkViewModel(this)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly')
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}daterangepicker`)
@generateBindables('kendoDateRangePicker')
@inject(Element, WidgetBase)
export class DateRangePicker {
  @bindable kEnabled;
  @bindable kReadOnly;
  @bindable({defaultBindingMode: 2}) kRange;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDateRangePicker')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding('kRange', 'range')
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

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
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding()
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}diagram`)
@generateBindables('kendoDiagram')
@inject(Element, WidgetBase)
export class Diagram {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDiagram')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}dialog`)
@generateBindables('kendoDialog')
@inject(Element, WidgetBase)
export class Dialog {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDialog')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}draggable`)
@generateBindables('kendoDraggable')
@inject(Element, WidgetBase)
export class Draggable {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDraggable')
      .useElement(this.element)
      .beforeInitialize(options => this.beforeInitialize(options))
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  beforeInitialize(options) {
    if (options.container) {
      Object.assign(options, { container: kendo.jQuery(options.container) });
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}drop-target-area`)
@generateBindables('kendoDropTargetArea')
@inject(Element, WidgetBase)
export class DropTargetArea {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDropTargetArea')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}drop-target`)
@generateBindables('kendoDropTarget')
@inject(Element, WidgetBase)
export class DropTarget {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDropTarget')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}drop-down-list`)
@generateBindables('kendoDropDownList')
@inject(Element, WidgetBase, Container)
export class DropDownList {
  @bindable kNoValueBinding = false;
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDropDownList')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
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
    let selectNodes = getSelectNode(this.element);
    this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoDropDownList', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

@customElement(`${constants.elementPrefix}drop-down-tree`)
@generateBindables('kendoDropDownTree')
@inject(Element, WidgetBase, Container)
export class DropDownTree {
  @bindable kNoValueBinding = false;
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDropDownTree')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
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
    let selectNodes = getSelectNode(this.element);
    this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoDropDownTree', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

@customAttribute(`${constants.attributePrefix}rich-editor`)
@generateBindables('kendoEditor')
@inject(Element, WidgetBase)
export class Editor {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoEditor')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}filter-menu`)
@generateBindables('kendoFilterMenu')
@inject(Element, WidgetBase)
export class FilterMenu {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoFilterMenu')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.attributePrefix}flat-color-picker`)
@generateBindables('kendoFlatColorPicker')
@inject(Element, WidgetBase)
export class FlatColorPicker {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoFlatColorPicker')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}gantt-col`)
@generateBindables('GanttColumn')
@inject(TemplateGatherer)
export class GanttCol {}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}gantt`)
@generateBindables('kendoGantt')
@inject(Element, WidgetBase, Container, OptionsBuilder)
export class Gantt  {
  constructor(element, widgetBase, container, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
      .control('kendoGantt')
      .useRootElement(this.element)
      .beforeInitialize(options => this._beforeInitialize(options))
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    // if <div> exists, initialize on that, else create div
    if (isInitFromDiv(this.element)) {
      this.widgetBase.useElement(this.element.querySelectorAll('div')[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoGantt', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  _beforeInitialize(options) {
    let columns = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}gantt-col`);
    // allow for both column definitions via HTML and via an array of columns
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GanttColumn'));
      });
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

@customElement(`${constants.elementPrefix}arc-gauge`)
@generateBindables('kendoArcGauge')
@inject(Element, WidgetBase)
export class ArcGauge {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoArcGauge')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}linear-gauge`)
@generateBindables('kendoLinearGauge')
@inject(Element, WidgetBase)
export class LinearGauge {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoLinearGauge')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}radial-gauge`)
@generateBindables('kendoRadialGauge')
@inject(Element, WidgetBase)
export class RadialGauge {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoRadialGauge')
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}col`)
@generateBindables('GridColumn')
@inject(TemplateGatherer, OptionsBuilder, Util, Element)
export class Col {
  constructor(templateGatherer, optionsBuilder, util, element) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  bind($parent) {
    this.$parent = $parent;
  }

  beforeOptionsBuild() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'GridColumn', templates);
  }

  // recursively get options of all nested columns that we can pass to Kendo
  afterOptionsBuild(options) {
    let columns = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}col`);
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(col => {
        options.columns.push(this.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }

    if (options.editor) {
      options.editor = options.editor.bind(this.$parent);
    }

    let commands = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}grid-command`);
    if (commands && commands.length > 0) {
      options.command = [];

      commands.forEach(command => {
        let c = this.optionsBuilder.getOptions(command, 'GridColumnCommandItem');

        if (c.click) {
          c.click = c.click.bind(this.$parent);
        }

        options.command.push(c);
      });
    }
  }
}

@customElement(`${constants.elementPrefix}grid-command`)
@generateBindables('GridColumnCommandItem')
export class GridCommand {
}

@customElement(`${constants.elementPrefix}grid-toolbar`)
@generateBindables('GridToolbarItem')
@inject(TemplateGatherer, Util, Element)
export class GridToolbar {
  constructor(templateGatherer, util, element) {
    this.templateGatherer = templateGatherer;
    this.util = util;
    this.element = element;
  }

  beforeOptionsBuild() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'GridToolbarItem', templates);
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}grid`)
@generateBindables('kendoGrid')
@inject(Element, WidgetBase, Container, OptionsBuilder, TemplateGatherer)
export class Grid {
  constructor(element, widgetBase, container, optionsBuilder, templateGatherer) {
    this.element = element;
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
      .control('kendoGrid')
      .useRootElement(this.element)
      .beforeInitialize(options => this._beforeInitialize(options))
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    // if <table> exists, initialize on that
    // if <div> exists, initialize on that
    // if neither exists, create <div>
    // grid needs to be initialized on a div https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/358
    if (isInitFromDiv(this.element)) {
      this.widgetBase.useElement(this.element.querySelectorAll('div')[0]);
    } else if (isInitFromTable(this.element)) {
      this.widgetBase.useElement(this.element.children[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'kendoGrid', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  _beforeInitialize(options) {
    let columns = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}col`);
    let gridToolbars = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}grid-toolbar`);

    // allow for both column definitions via HTML and via an array of columns
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GridColumn'));
      });
    }

    if (gridToolbars && gridToolbars.length > 0) {
      let toolbar = gridToolbars[0];
      let o = this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem');
      if (o.template) {
        options.toolbar = o.template;
      } else {
        options.toolbar = o;
      }
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
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

@customElement(`${constants.elementPrefix}list-box`)
@generateBindables('kendoListBox')
@inject(Element, WidgetBase, Container)
export class ListBox  {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoListBox')
      .useElement(this.element)
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNodes = getSelectNode(this.element);
    this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoListBox', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}

@customElement(`${constants.elementPrefix}list-view`)
@generateBindables('kendoListView')
@inject(Element, WidgetBase, Container)
export class ListView  {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoListView')
      .useElement(this.element)
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoListView', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}map`)
@generateBindables('kendoMap')
@inject(Element, WidgetBase)
export class Map {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMap')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

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
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding()
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}mediaplayer`)
@generateBindables('kendoMediaPlayer')
@inject(Element, WidgetBase)
export class MediaPlayer {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMediaPlayer')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('kendoMenu')
@inject(Element, WidgetBase)
export class Menu {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMenu')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}multiselect`)
@generateBindables('kendoMultiSelect', ['template'])
@inject(Element, WidgetBase, Container)
export class Multiselect {
  @bindable kEnabled;
  @bindable kReadOnly;
  @bindable kNoValueBinding = false;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMultiSelect')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
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
    let selectNodes = getSelectNode(this.element);
    this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoMultiSelect', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    // do not process value changes when user input is present
    if (property !== 'kValue' || this.kWidget.input.val() === '' || this.kWidget.input.val() === this.kWidget.options.placeholder) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
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

@customElement(`${constants.elementPrefix}notification`)
@generateBindables('kendoNotification')
@inject(Element, WidgetBase, Container)
export class Notification {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoNotification')
      .useElement(this.element)
      .beforeInitialize(options => this.beforeInitialize(options))
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  beforeInitialize(options) {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}notification-template`);
    if (templates && templates.length > 0) {
      options.templates = [];

      templates.forEach(template => options.templates.push({
        type: template.type,
        template: () => template.template
      }));
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

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
      .useElement(this.element)
      .useValueBinding()
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}pager`)
@generateBindables('kendoPager')
@inject(Element, WidgetBase, Container)
export class Pager {
  @bindable kEnabled;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoPager')
      .linkViewModel(this)
      .useElement(this.element)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(
      this.element,
      `${constants.elementPrefix}template`
    );
    this.widgetBase.useTemplates(this, 'kendoPager', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}panel-bar`)
@generateBindables('kendoPanelBar')
@inject(Element, WidgetBase)
export class PanelBar {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoPanelBar')
      .useRootElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
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

    this.widgetBase.useElement(element);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}


// if the first child is not a UL/OL then create one to use as the target, otherwise the panelbar can look a bit mangled
function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}

export class PDF {}

@customElement(`${constants.elementPrefix}pivot-configurator`)
@generateBindables('kendoPivotConfigurator')
@inject(Element, WidgetBase)
export class PivotConfigurator {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoPivotConfigurator')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}pivot-grid`)
@generateBindables('kendoPivotGrid')
@inject(Element, WidgetBase, Container)
export class PivotGrid {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoPivotGrid')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    let targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.widgetBase.useElement(targets[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}popup`)
@generateBindables('kendoPopup')
@inject(Element, WidgetBase)
export class Popup {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoPopup')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('kendoProgressBar')
@inject(Element, WidgetBase)
export class ProgressBar {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoProgressBar')
      .useElement(this.element)
      .bindToKendo('kEnabled', 'enable')
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}qrcode`)
@generateBindables('kendoQRCode')
@inject(Element, WidgetBase)
export class QRCode {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoQRCode')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}range-slider`)
@generateBindables('kendoRangeSlider')
@inject(Element, WidgetBase)
export class RangeSlider {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoRangeSlider')
      .useElement(this.element)
      .linkViewModel(this)
      .bindToKendo('kEnabled', 'enable')
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.destroy();

    let divs = this.element.querySelectorAll('div');
    if (divs.length === 0) {
      let div = document.createElement('div');
      this.element.appendChild(div);
      divs = [div];
    }

    let inputs = divs[0].querySelectorAll('input');
    if (inputs.length === 0) {
      divs[0].appendChild(document.createElement('input'));
      divs[0].appendChild(document.createElement('input'));
    }

    this.widgetBase.useElement(divs[0]);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}responsivepanel`)
@generateBindables('kendoResponsivePanel')
@inject(Element, WidgetBase)
export class ResponsivePanel {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoResponsivePanel')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}scheduler`)
@generateBindables('kendoScheduler')
@inject(Element, WidgetBase, Container)
export class Scheduler {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoScheduler')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    let targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.widgetBase.useElement(targets[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoScheduler', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}scrollview`)
@generateBindables('kendoMobileScrollView')
@inject(Element, WidgetBase, Container)
export class Scrollview {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMobileScrollView')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container)
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (isInitFromDiv(this.element)) {
      this.widgetBase.useElement(this.element.querySelectorAll('div')[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoMobileScrollView', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('kendoSlider')
@inject(Element, WidgetBase)
export class Slider {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoSlider')
      .useElement(this.element)
      .linkViewModel(this)
      .bindToKendo('kEnabled', 'enable')
      .useValueBinding();
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}sortable`)
@generateBindables('kendoSortable')
@inject(Element, WidgetBase)
export class Sortable {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoSortable')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}splitter`)
@generateBindables('kendoSplitter')
@inject(Element, WidgetBase)
export class Splitter {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoSplitter')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}spreadsheet`)
@generateBindables('kendoSpreadsheet')
@inject(Element, WidgetBase)
export class Spreadsheet {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoSpreadsheet')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}switch`)
@generateBindables('kendoMobileSwitch')
@inject(Element, WidgetBase)
export class Switch {
  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoMobileSwitch')
      .useElement(this.element)
      .linkViewModel(this)
      .bindToKendo('kEnabled', 'enable')
      .useValueBinding('kChecked', 'check');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}tabstrip`)
@generateBindables('kendoTabStrip')
@inject(Element, WidgetBase)
export class TabStrip {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoTabStrip')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

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
      .useElement(this.element)
      .linkViewModel(this)
      .useValueBinding()
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
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
@inject(TemplateGatherer, OptionsBuilder, Util, Element)
export class ToolbarItem {
  constructor(templateGatherer, optionsBuilder, util, element) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  getOptions() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'ToolBarItem', templates);

    let buttons = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}toolbar-item-button`);
    if (buttons && buttons.length > 0) {
      this.kButtons = [];

      buttons.forEach(item => {
        this.kButtons.push(item.getOptions());
      });
    }

    return this.optionsBuilder.getOptions(this, 'ToolBarItem');
  }
}

@customElement(`${constants.elementPrefix}toolbar`)
@generateBindables('kendoToolBar')
@inject(Element, WidgetBase, OptionsBuilder, Container)
export class Toolbar {
  constructor(element, widgetBase, optionsBuilder, container) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
      .control('kendoToolBar')
      .useElement(this.element)
      .beforeInitialize(options => this._beforeInitialize(options))
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  _beforeInitialize(options) {
    let toolbarItems = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}toolbar-item`);
    if (toolbarItems && toolbarItems.length > 0) {
      options.items = [];

      toolbarItems.forEach(item => {
        options.items.push(item.getOptions());
      });
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}tooltip`)
@generateBindables('kendoTooltip')
@inject(Element, WidgetBase)
export class Tooltip {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoTooltip')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}tree-col`)
@generateBindables('TreeListColumn')
@inject(TemplateGatherer, Util, Element)
export class TreeCol {
  constructor(templateGatherer, util, element) {
    this.templateGatherer = templateGatherer;
    this.util = util;
    this.element = element;
  }

  beforeOptionsBuild() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'TreeListColumn', templates);
  }
}

//eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}tree-list`)
@generateBindables('kendoTreeList')
@inject(Element, WidgetBase, Container, OptionsBuilder)
export class TreeList  {
  constructor(element, widgetBase, container, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
      .control('kendoTreeList')
      .useRootElement(this.element)
      .beforeInitialize(options => this._beforeInitialize(options))
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    let targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.widgetBase.useElement(targets[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  _beforeInitialize(options) {
    let columns = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}tree-col`);
    // allow for both column definitions via HTML and via an array of columns
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'TreeListColumn'));
      });
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customElement(`${constants.elementPrefix}treeview`)
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase, Container)
export class TreeView {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoTreeView')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (isInitFromUl(this.element)) {
      this.widgetBase.useElement(this.element.querySelectorAll('ul')[0]);
    } else {
      let target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoTreeView', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function isInitFromUl(element) {
  return element.querySelectorAll('ul').length > 0;
}

@customElement(`${constants.elementPrefix}upload`)
@generateBindables('kendoUpload')
@inject(Element, WidgetBase, Container)
export class Upload {
  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoUpload')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
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

    this.widgetBase.useElement(target);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoUpload', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

@customAttribute(`${constants.attributePrefix}validator`)
@generateBindables('kendoValidator')
@inject(Element, WidgetBase)
export class Validator {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoValidator')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
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

@customAttribute(`${constants.attributePrefix}window`)
@generateBindables('kendoWindow')
@inject(Element, WidgetBase)
export class Window {
  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoWindow')
      .useElement(this.element)
      .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
