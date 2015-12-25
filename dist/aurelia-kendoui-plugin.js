import * as LogManager from 'aurelia-logging';
import 'kendo-ui/js/kendo.pdf.min';
import 'kendo-ui/js/jszip.min';
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
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.grid.min';
import 'kendo-ui/js/kendo.menu.min';
import 'kendo-ui/js/kendo.progressbar.min';
import 'kendo-ui/js/kendo.slider.min';
import 'kendo-ui/js/kendo.tabstrip.min';
import {customAttribute,bindable,inject,customElement,noView,TaskQueue,processContent,TargetInstruction,children} from 'aurelia-framework';
import {BindableProperty,HtmlBehaviorResource,TemplatingEngine} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {Container} from 'aurelia-dependency-injection';

let logger = LogManager.getLogger('aurelia-kendoui-plugin');

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

  aurelia.globalResources(resources);
}

class KendoConfigBuilder {

	resources = [];

  core() {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoDropDownList();
    return this;
  }

  pro() {
    this.core()
      .kendoGrid()
			.kendoAutoComplete()
      .kendoChart();
    return this;
  }

  kendoAutoComplete() {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton() {
    this.resources.push('button/button');
    return this;
  }

  kendoMenu() {
    this.resources.push('menu/menu');
    return this;
  }

  kendoCombobox() {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoDropDownList() {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoGrid() {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  }

  kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoToolbar() {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoChart() {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoProgressBar() {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider() {
    this.resources.push('slider/slider');
    return this;
  }
}

@customAttribute('k-autocomplete')
@inject(Element, TemplateCompiler)
@generateBindables('kendoAutoComplete')
export class AutoComplete extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;
  @bindable value;

  constructor(element, templateCompiler) {
    super('kendoAutoComplete', element);
    this.templateCompiler = templateCompiler;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  setValue(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  }

  getValue(newValue) {
    if (this.widget) {
      return this.widget.value();
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
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

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}

@customElement('k-chart')
@generateBindables('kendoChart')
@inject(Element)
export class Chart extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoChart', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
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
}

@customElement('k-sparkline')
@noView
@generateBindables('kendoSparkline')
@inject(Element)
export class Sparkline extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoSparkline', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }
}

@customElement('k-stock')
@generateBindables('kendoStockChart')
@inject(Element)
export class Stock extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoStockChart', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }
}

@customElement('k-treemap')
@generateBindables('kendoTreeMap')
@inject(Element)
export class TreeMap extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoTreeMap', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }
}


export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-'
};

// creates a BindableProperty for every option defined
// in the option property of a Kendo control
export function generateBindables(controlName) {
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

export function fireEvent(element, name, data = {}) {
  let event = new CustomEvent(name, { 'detail': data});
  element.dispatchEvent(event);
}

export function fireKendoEvent(element, name, data = {}) {
  fireEvent(element, `${constants.eventPrefix}${name}`, data);
  return true;
}

export * from './events';
export * from './options';
export * from './template-compiler';
export * from './widget-base';
export * from './decorators';

export function pruneOptions(options) {
	// Implicitly setting options to "undefined" for a kendo control can break things.
	// this function prunes the supplied options object and removes values that
	// aren't set to something explicit (i.e. not null)

  let returnOptions = {};

  for (let prop in options) {
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

@inject(TemplatingEngine)
export class TemplateCompiler {

  constructor(templatingEngine) {
    this.templatingEngine = templatingEngine;
  }

  initialize($parent) {
    // store the parent view-model so we can pass this as the
    // overrideContext when we call bind() on all compiled Views
    this.$parent = $parent;

    // all controls derive from kendo.ui.Widget
    // override the angular property on these objects, and point it towards handleTemplateEvents
    kendo.ui.Widget.prototype.angular = (_event, _args) => this.handleTemplateEvents(_event, _args);
    kendo.mobile.ui.Widget.prototype.angular = (_event, _args) => this.handleTemplateEvents(_event, _args);
  }

  // this function filters out compile and cleanup events
  // and calls the compile or cleanup function with the needed arguments
  handleTemplateEvents(_event, _args) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile(elements, data);
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

  // loops through each element, and find the matching dataitem
  // and calls enhanceView(element, dataItem) for each element there is
  compile(elements, data) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let ctx;

      if (data && data[i]) {
        let _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each((index, elem) => this.enhanceView(elem, ctx));
      } else {
        this.enhanceView(element, ctx);
      }
    }
  }

  // uses the ehance function of Aurelia's TemplatingEngine
  // to "compile" the existing DOM element
  enhanceView(element, ctx) {
    let view = this.templatingEngine.enhance(element);
    view.bind(ctx, this.$parent); // call the bind() function on the view with the dataItem we got from Kendo
    view.attached(); // attach it to the DOM

    // when we do cleanup, we need to get the view instance
    // so we can call detached/unbind
    // so we store this view instance in the DOM element using JQuery.data
    $(element).data('viewInstance', view);
  }

  // loops through each element kendo asks us to clean up
  // calls cleanupView() for each element
  cleanup(elements) {
    if (!elements) return;

    for (let element of elements) {
      this.cleanupView(element);
    }
  }

  // cleans up the view kendo has asked us to clean up
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
export function addHyphenAndLower(char) {
  return '-' + char.toLowerCase();
}

export function _hyphenate(name) {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

export function _unhyphenate(name) {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export function getBindablePropertyName(propertyName) {
  let name = `${constants.bindablePrefix}${propertyName}`;

  return _unhyphenate(name);
}

export function getEventsFromAttributes(element) {
  let attributes = Array.prototype.slice.call(element.attributes);
  let events = [];

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

export class WidgetBase {
  constructor(controlName, element) {
    // access root container
    let container = Container.instance;
    this.taskQueue = container.get(TaskQueue);

    this.element = element;

    // the target is the element we're going to
    // instantiate the Kendo control on
    // by default, this is the custom element
    this.target = this.element;

    // controlName is something like kendoChart or kendoGrid
    this.controlName = controlName;

    // the BindableProperty's are created by the generateBindables decorator
    // but the values of the bindables can only be set now the class has been
    // instantiated
    this.setDefaultBindableValues();
  }

  _initialize() {
    // get the jQuery selector of the target element
    let target = jQuery(this.target);

    // get the constructor of the Kendo control
    // equivalent to jQuery("<div>").kendoChart
    let ctor = target[this.controlName];

    // generate all options, including event handlers
    let options = this._getOptions(ctor);

    // instantiate the Kendo control, pass in the target and the options
    this.widget = ctor.call(target, options).data(this.controlName);

    this._initialized();
  }

  _initialized() {

  }

  _getOptions(ctor) {
    let options = this.getOptionsFromBindables();
    let eventOptions = this.getEventOptions(ctor);

    // merge all option objects together
    // - options property on the wrapper
    // - options compiled from all the bindable properties
    // - event handler options
    return Object.assign({}, this.options, pruneOptions(options), eventOptions);
  }

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

  // sets the default value of all bindable properties
  // gets the value from the options object in the Kendo control itself
  setDefaultBindableValues() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;

    for (let prop of Object.keys(props)) {
      this[getBindablePropertyName(prop)] = props[prop];
    }
  }

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

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

@customAttribute('k-drop-down-list')
@inject(Element, TemplateCompiler)
@generateBindables('kendoDropDownList')
export class DropDownList extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;
  @bindable kValue;

  constructor(element, templateCompiler) {
    super('kendoDropDownList', element);

    this.templateCompiler = templateCompiler;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  }

  recreate() {
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

  valueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
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
  @bindable title;
  @bindable field;
  @bindable format = '';
  @bindable command;
  @bindable width;
  @bindable lockable;
  @bindable locked;
  template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element, TemplateCompiler)
export class Grid extends WidgetBase {

  @children('au-col') kColumns;

  @bindable options = {};
  @bindable kDataSource;

  constructor(element, templateCompiler) {
    super('kendoGrid', element);

    this.templateCompiler = templateCompiler;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    this.target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    super._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
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

  bind() {
    this._initialize();
  }

  recreate() {
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

@customAttribute('k-progress-bar')
@generateBindables('kendoProgressBar')
@inject(Element)
export class ProgressBar extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoProgressBar', element);

    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  valueChanged(newValue) {
    this.widget.value(newValue);
  }
}

export class AuScheduler {

}

@customAttribute('k-slider')
@generateBindables('kendoSlider')
@inject(Element)
export class Slider extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoSlider', element);

    this.element = element;
    this.options = {};
  }

  attached() {
    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  // valueChanged(newValue) {
    // this.widget.value(newValue);
  // }
}

@customAttribute('k-tabstrip')
@generateBindables('kendoTabStrip')
@inject(Element)
export class TabStrip extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoTabStrip', element);
  }

  bind() {
    this._initialize();
  }

  recreate() {
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
