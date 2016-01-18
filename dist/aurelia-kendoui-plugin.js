import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';
import 'kendo-ui/js/kendo.button.min';
import 'kendo-ui/js/kendo.dataviz.chart.min';
import 'kendo-ui/js/kendo.dataviz.chart.polar.min';
import 'kendo-ui/js/kendo.dataviz.chart.funnel.min';
import 'kendo-ui/js/kendo.dataviz.sparkline.min';
import 'kendo-ui/js/kendo.dataviz.stock.min';
import 'kendo-ui/js/kendo.dataviz.treemap.min';
import 'kendo-ui/js/kendo.colorpicker.min';
import 'kendo-ui/js/kendo.datepicker.min';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';
import 'kendo-ui/js/kendo.menu.min';
import 'kendo-ui/js/kendo.pdf.min';
import 'kendo-ui/js/jszip.min';
import 'kendo-ui/js/kendo.progressbar.min';
import 'kendo-ui/js/kendo.slider.min';
import 'kendo-ui/js/kendo.tabstrip.min';
import 'kendo-ui/js/kendo.treeview.min';
import {Aurelia,customAttribute,bindable,inject,customElement,TaskQueue,noView,processContent,TargetInstruction,children} from 'aurelia-framework';
import {BindableProperty,HtmlBehaviorResource,TemplatingEngine} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {Container} from 'aurelia-dependency-injection';

/**
* Configure the Aurelia-KendoUI-plugin
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoColorPicker()
      .kendoDropDownList();
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
      .kendoTreeView();
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
    this.resources.push('grid/au-col');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('scheduler/scheduler');
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

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('slider/slider');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('treeview/treeview');
    return this;
  }
}

let logger = LogManager.getLogger('aurelia-kendoui-plugin');
export function configure(aurelia: Aurelia, configCallback?: (builder: KendoConfigBuilder) => void) {
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

@customAttribute('k-autocomplete')
@inject(Element)
@generateBindables('kendoAutoComplete')
export class AutoComplete extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoAutoComplete', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  }

  value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
        this.widget.trigger('change');
      } else {
        return this.widget.value();
      }
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  }

  close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  }

  dataItem(value) {
    if (this.widget) {
      return this.widget.dataItem(value);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  focus() {
    if (this.widget) {
      return this.widget.focus();
    }
  }

  readonly(value) {
    if (this.widget) {
      return this.widget.readonly(value);
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  select(value) {
    if (this.widget) {
      return this.widget.select(value);
    }
  }

  setDataSource(value) {
    if (this.widget) {
      return this.widget.setDataSource(value);
    }
  }

  suggest(value) {
    if (this.widget) {
      return this.widget.suggest(value);
    }
  }
}

@customAttribute('k-button')
@generateBindables('kendoButton')
@inject(Element)
export class Button extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoButton', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(enable) {
    if (this.widget) {
      this.widget.enable(enable);
    }
  }
}

//eslint-disable-line no-unused-vars
@customElement('k-chart')
@generateBindables('kendoChart')
@inject(Element)
export class Chart extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoChart', element);
  }

  attached() {
    this._initialize();
  }

  exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  }

  exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  }

  exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  }

  getAxis(name) {
    if (this.widget) {
      return this.widget.getAxis(name);
    }
  }

  redraw() {
    if (this.widget) {
      return this.widget.redraw();
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }

  saveAsPDF() {
    if (this.widget) {
      return this.widget.saveAsPDF();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  }

  svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  }

  imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  }

  toggleHighlight(show, options) {
    if (this.widget) {
      return this.widget.toggleHighlight(show, options);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }
}

//eslint-disable-line no-unused-vars
@customElement('k-sparkline')
@generateBindables('kendoSparkline')
@inject(Element)
export class Sparkline extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoSparkline', element);
  }

  attached() {
    this._initialize();
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  }

  exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  }

  exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  }

  svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  }

  imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }
}

//eslint-disable-line no-unused-vars
@customElement('k-stock')
@generateBindables('kendoStockChart')
@inject(Element)
export class Stock extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoStockChart', element);
  }

  attached() {
    this._initialize();
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  }

  exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  }

  exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  }

  redraw() {
    if (this.widget) {
      return this.widget.redraw();
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  }

  imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  }
}

//eslint-disable-line no-unused-vars
@customElement('k-treemap')
@generateBindables('kendoTreeMap')
@inject(Element)
export class TreeMap extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoTreeMap', element);
  }

  attached() {
    this._initialize();
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  }

  findByUid(text) {
    if (this.widget) {
      return this.widget.findByUid(text);
    }
  }

  dataItem(tile) {
    if (this.widget) {
      return this.widget.dataItem(tile);
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }
}

@customAttribute('k-color-picker')
@generateBindables('kendoColorPicker')
@inject(Element)
export class ColorPicker extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoColorPicker', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }
}


export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-'
};

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string) {
  return function(target, key, descriptor) {
    // get all options defined in the Kendo control
    let options = jQuery.fn[controlName].widget.prototype.options;

    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let optionKeys = Object.keys(options);
    optionKeys.push('dataSource');

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

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
export function fireEvent(element: Element, name: string, data? = {}) {
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
export function fireKendoEvent(element: Element, name: string, data? = {}) {
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
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
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

    let $parent = widget._$parent;

    if (!$parent) return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile($parent, elements, data);
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
  compile($parent, elements, data) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let ctx;

      if (data && data[i]) {
        let _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each((index, elem) => this.enhanceView($parent, elem, ctx));
      } else {
        this.enhanceView($parent, element, ctx);
      }
    }
  }

  /**
  * uses the enhance function of Aurelia's TemplatingEngine
  * to "compile" existing DOM elements
  * @param element The Element to compile
  * @param ctx The dataitem (context) to compile the Element with
  */
  enhanceView($parent, element, ctx) {
    let view = this.templatingEngine.enhance(element);

    view.bind(ctx, $parent); // call the bind() function on the view with the dataItem we got from Kendo
    view.attached(); // attach it to the DOM

    // when we do cleanup, we need to get the view instance
    // so we can call detached/unbind
    // so we store this view instance in the DOM element using JQuery.data
    $(element).data('viewInstance', view);
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
export class WidgetBase {

  /**
  * the Kendo widget after initialization
  */
  widget: any;

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
  * The templating compiler adaptor
  */
  templateCompiler: TemplateCompiler;

  constructor(controlName: string, element: Element) {
    // access root container
    let container = Container.instance;
    this.taskQueue = container.get(TaskQueue);
    this.templateCompiler = container.get(TemplateCompiler);
    this.templateCompiler.initialize();

    this.element = element;

    this.target = this.element;

    this.controlName = controlName;

    // the BindableProperty's are created by the generateBindables decorator
    // but the values of the bindables can only be set now the class has been
    // instantiated
    this.setDefaultBindableValues();
  }


  bind(ctx) {
    this.$parent = ctx;
  }

  /**
  * collects all options objects
  * calls all hooks
  * then initialized the Kendo control as "widget"
  */
  _initialize() {
    if (!this.$parent) {
      throw new Error('$parent is not set. Did you call bind(ctx) on the widget base?');
    }

    // get the jQuery selector of the target element
    let target = jQuery(this.target);

    // get the constructor of the Kendo control
    // equivalent to jQuery("<div>").kendoChart
    let ctor = target[this.controlName];

    // generate all options, including event handlers
    let options = this._getOptions(ctor);

    // before initialization callback
    // allows you to modify/add/remove options before the control gets initialized
    this._beforeInitialize(options);

    // instantiate the Kendo control, pass in the target and the options
    this.widget = ctor.call(target, options).data(this.controlName);

    this.widget._$parent = this.$parent;

    this._initialized();
  }

  /**
  * hook that allows a wrapper to modify options before
  * the Kendo control is initialized
  * @param options the options object that a wrapper can modify
  */
  _beforeInitialize(options) {

  }

  /**
  * hook that allows a wrapper to take actions after the widget is initialized
  */
  _initialized() {

  }

  /**
  * Re-initializes the control
  */
  recreate() {
    this._initialize();
  }

  /**
  * combines all options objects and properties into a single options object
  */
  _getOptions(ctor) {
    let options = this.getOptionsFromBindables();
    let eventOptions = this.getEventOptions(ctor);

    // merge all option objects together
    // - options property on the wrapper
    // - options compiled from all the bindable properties
    // - event handler options
    return Object.assign({}, this.options, pruneOptions(options), eventOptions);
  }

  /**
  * loops through all bindable properties generated by the @generateBindables decorator
  * and puts all these values in a single options object
  */
  getOptionsFromBindables() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;
    let options = {};

    for (let prop of Object.keys(props)) {
      options[prop] = this[getBindablePropertyName(prop)];
    }

    if (this.kDataSource) {
      options.dataSource = this.kDataSource;
    }

    return options;
  }

  /**
  * sets the default value of all bindable properties
  *  gets the value from the options object in the Kendo control itself
  */
  setDefaultBindableValues() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;

    for (let prop of Object.keys(props)) {
      this[getBindablePropertyName(prop)] = props[prop];
    }
  }

  /**
  * convert attributes into a list of events a user wants to subscribe to.
  * These events are then subscribed to, which when called
  * calls the fireKendoEvent function to raise a DOM event
  */
  getEventOptions(ctor) {
    let options = {};
    let allowedEvents = ctor.widget.prototype.events;

    // iterate all attributes on the custom elements
    // and only return the normalized kendo event's (dataBound etc)
    let events = getEventsFromAttributes(this.element);

    events.forEach(event => {
      // throw error if this event is not defined on the Kendo control
      if (!allowedEvents.includes(event)) {
        throw new Error(`${event} is not an event on the ${this.controlName} control`);
      }

      // add an event handler 'proxy' to the options object
      options[event] = e => {
        this.taskQueue.queueMicroTask(() => {
          fireKendoEvent(this.target, _hyphenate(event), e);
        });
      };
    });

    return options;
  }

  /**
  * destroys the widget when the view gets detached
  */
  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

@customAttribute('k-datepicker')
@inject(Element)
@generateBindables('kendoDatePicker')
export class DatePicker extends WidgetBase {


  @bindable options = {};

  constructor(element) {
    super('kendoDatePicker', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  readonly(value) {
    if (this.widget) {
      this.widget.readonly(value);
    }
  }

  max(value) {
    if (this.widget) {
      return this.widget.max(value);
    }
  }

  min(value) {
    if (this.widget) {
      return this.widget.min(value);
    }
  }

  open() {
    if (this.widget) {
      this.widget.open();
    }
  }

  setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  }

  value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
        this.widget.trigger('change');
      } else {
        return this.widget.value();
      }
    }
  }
}

@customAttribute('k-drop-down-list')
@inject(Element)
@generateBindables('kendoDropDownList')
export class DropDownList extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;
  @bindable kValue;

  constructor(element) {
    super('kendoDropDownList', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  _initialized() {
	// without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    // Ensure the dropdown has an initial value/text
    this.widget.trigger('change');
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  }

  value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  }

  select(index) {
    if (this.widget) {
      this.widget.select(index);
      // Need to make sure the kendo binding stays up to date
      this.widget.trigger('change');
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
      // Need to make sure the kendo binding stays up to date
      this.widget.trigger('change');
    }
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
export class AuCol {
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

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

//eslint-disable-line no-unused-vars
@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element)
export class Grid extends WidgetBase {

  @children('au-col') columns;

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoGrid', element);
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    this._initialize();
  }

  _initialize() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    this.target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    super._initialize();
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  addRow() {
    if (this.widget) {
      this.widget.addRow();
    }
  }

  autoFitColumn(value) {
    if (this.widget) {
      this.widget.autoFitColumn(value);
    }
  }

  cancelChanges() {
    if (this.widget) {
      this.widget.cancelChanges();
    }
  }

  cancelRow() {
    if (this.widget) {
      this.widget.cancelRow();
    }
  }

  cellIndex(cell) {
    if (this.widget) {
      return this.widget.cellIndex(cell);
    }
  }

  clearSelection() {
    if (this.widget) {
      this.widget.clearSelection();
    }
  }

  closeCell() {
    if (this.widget) {
      this.widget.closeCell();
    }
  }

  collapseGroup(group) {
    if (this.widget) {
      this.widget.collapseGroup(group);
    }
  }

  collapseRow(row) {
    if (this.widget) {
      this.widget.collapseRow(row);
    }
  }

  current(cell) {
    if (this.widget) {
      return this.widget.current(cell);
    }
  }

  dataItem(row) {
    if (this.widget) {
      return this.widget.dataItem(row);
    }
  }

  destroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  }

  editCell(cell) {
    if (this.widget) {
      this.widget.editCell(cell);
    }
  }

  editRow(row) {
    if (this.widget) {
      this.widget.editRow(row);
    }
  }

  expandGroup(row) {
    if (this.widget) {
      this.widget.expandGroup(row);
    }
  }

  expandRow(row) {
    if (this.widget) {
      this.widget.expandRow(row);
    }
  }

  getOptions() {
    if (this.widget) {
      return this.widget.getOptions();
    }
  }

  hideColumn(column) {
    if (this.widget) {
      this.widget.hideColumn(column);
    }
  }

  lockColumn(column) {
    if (this.widget) {
      this.widget.lockColumn(column);
    }
  }

  refresh() {
    if (this.widget) {
      this.widget.refresh();
    }
  }

  removeRow(row) {
    if (this.widget) {
      this.widget.removeRow(row);
    }
  }

  reorderColumn(destIndex, column) {
    if (this.widget) {
      this.widget.reorderColumn(destIndex, column);
    }
  }

  saveAsExcel() {
    if (this.widget) {
      this.widget.saveAsExcel();
    }
  }

  saveAsPDF() {
    if (this.widget) {
      this.widget.saveAsPDF();
    }
  }

  saveChanges() {
    if (this.widget) {
      this.widget.saveChanges();
    }
  }

  saveRow() {
    if (this.widget) {
      this.widget.saveRow();
    }
  }

  select(rows) {
    if (this.widget) {
      return this.widget.select(rows);
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      this.widget.setDataSource(dataSource);
    }
  }

  setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  }

  showColumn(column) {
    if (this.widget) {
      this.widget.showColumn(column);
    }
  }

  unlockColumn(column) {
    if (this.widget) {
      this.widget.unlockColumn(column);
    }
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

@customElement('k-menu')
@generateBindables('kendoMenu')
@inject(Element)
export class Menu extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoMenu', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  _initialize() {
    let ul = $(this.element).find('ul');
    if (ul.has()) {
      this.target = $(this.element).find('ul').first();
    } else {
      this.target = $(this.element).appendChild('<ul></ul>');
    }

    super._initialize();
  }
}

export class PDF {}

@customAttribute('k-progress-bar')
@generateBindables('kendoProgressBar')
@inject(Element)
export class ProgressBar extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoProgressBar', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
    }
  }

  value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  }

  enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  }
}

export class AuScheduler {

}

@customAttribute('k-slider')
@generateBindables('kendoSlider')
@inject(Element)
export class Slider extends WidgetBase {

  @bindable kValue;
  @bindable options = {};

  constructor(element) {
    super('kendoSlider', element);

    this.element = element;
    this.options = {};
  }

  attached() {
    this._initialize();
  }

  _beforeInitialize(options) {
    if (!options.value && this.kValue) {
      options.value = this.kValue;
    }
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }

  kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  }
}

@customAttribute('k-tabstrip')
@generateBindables('kendoTabStrip')
@inject(Element)
export class TabStrip extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoTabStrip', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}

export class AuToolbar {

}

@customAttribute('k-treeview')
@inject(Element)
@generateBindables('kendoTreeView')
export class TreeView extends WidgetBase {

    @bindable kDataSource;
    @bindable options = {};

    constructor(element) {
      super('kendoTreeView', element);

      // kendo tree view has a wrong default value for the dataSource
      this.kDataSource = undefined;
    }

    bind(ctx) {
      super.bind(ctx);

      this._initialize();
    }


    append(nodeData, parentNode, success) {
      if (this.widget) {
        return this.widget.append(nodeData, parentNode, success);
      }
    }

    collapse(nodes) {
      if (this.widget) {
        this.widget.collapse(nodes);
      }
    }

    dataItem(node) {
      if (this.widget) {
        return this.widget.dataItem(node);
      }
    }

    destroy() {
      if (this.widget) {
        this.widget.destroy();
      }
    }

    detach(node) {
      if (this.widget) {
        return this.widget.detach(node);
      }
    }

    enable(nodes, enable) {
      if (this.widget) {
        return this.widget.enable(nodes, enable === undefined ? true : enable);
      }
    }

    expand(nodes) {
      if (this.widget) {
        this.widget.expand(nodes);
      }
    }

    expandPath(path, complete) {
      if (this.widget) {
        this.widget.expandPath(path, complete);
      }
    }

    expandTo(targetNode) {
      if (this.widget) {
        this.widget.expandTo(targetNode);
      }
    }

    findByText(text) {
      if (this.widget) {
        return this.widget.findByText(text);
      }
    }

    findByUid(text) {
      if (this.widget) {
        return this.widget.findByUid(text);
      }
    }

    insertAfter(nodeData, referenceNode) {
      if (this.widget) {
        this.widget.insertAfter(nodeData, referenceNode);
      }
    }

    insertBefore(nodeData, referenceNode) {
      if (this.widget) {
        this.widget.insertBefore(nodeData, referenceNode);
      }
    }


    parent(node) {
      if (this.widget) {
        return this.widget.parent(node);
      }
    }

    remove(node) {
      if (this.widget) {
        this.widget.remove(node);
      }
    }

    select(node) {
      if (this.widget) {
        if (node === undefined) {
          return this.widget.select();
        }
        return this.widget.select(node);
      }
    }

    setDataSource(dataSource) {
      if (this.widget) {
        this.widget.setDataSource(dataSource);
      }
    }

    text(node, newText) {
      if (this.widget) {
        return this.widget.text(node, newText);
      }
    }


    toggle(node) {
      if (this.widget) {
        this.widget.toggle(node);
      }
    }


    updateIndeterminate(node) {
      if (this.widget) {
        this.widget.updateIndeterminate(node);
      }
    }
}
