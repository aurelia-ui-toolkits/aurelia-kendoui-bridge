import {Util} from './util';
import {OptionsBuilder} from './options-builder';
import {TemplateCompiler} from './template-compiler';
import {TemplateGatherer} from './template-gatherer';
import {KendoConfigBuilder} from '../config-builder';
import {inject, transient} from 'aurelia-dependency-injection';
import {RepeatStrategyLocator, ArrayRepeatStrategy} from 'aurelia-templating-resources';
import {TaskQueue} from 'aurelia-task-queue';
import * as LogManager from 'aurelia-logging';

const logger = LogManager.getLogger('aurelia-kendoui-bridge');

/**
* Abstraction of commonly used code across wrappers
*/
@transient()
@inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder, RepeatStrategyLocator)
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
  bindingsToKendo = [];

  constructor(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder, repeatStratLocator) {
    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.configBuilder = configBuilder;
    this.repeatStratLocator = repeatStratLocator;
    this.templateGatherer = templateGatherer;
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

    this.util.fireKendoEvent(this.rootElement, 'ready', widget);

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
          this.taskQueue.queueMicroTask(() => this.util.fireKendoEvent(element, this.util._hyphenate(event), e));
        };
      } else {
        options[event] = e => {
          let evt = this.util.fireKendoEvent(element, this.util._hyphenate(event), e);

          if (evt.defaultPrevented) {
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

  /**
  * destroys the widget
  */
  destroy(widget) {
    if (widget && widget.element.length > 0) {
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

      kendo.destroy(widget.element);
      widget.element.show().empty();

      widget = null;

      if (this.viewModel.kWidget) {
        this.viewModel.kWidget = null;
      }
    }
  }
}
