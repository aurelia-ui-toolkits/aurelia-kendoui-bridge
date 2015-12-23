import {pruneOptions} from './options';
import {fireKendoEvent} from './events';
import {getEventsFromAttributes, _hyphenate} from './util';
import {TaskQueue} from 'aurelia-framework';
import {Container} from 'aurelia-dependency-injection';

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
      options[prop] = this[prop];
    }

    if (this.dataSource) {
      options.dataSource = this.dataSource;
    }

    return options;
  }

  // sets the default value of all bindable properties
  // gets the value from the options object in the Kendo control itself
  setDefaultBindableValues() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;

    for (let prop of Object.keys(props)) {
      this[prop] = props[prop];
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
      }
    });

    return options;
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
