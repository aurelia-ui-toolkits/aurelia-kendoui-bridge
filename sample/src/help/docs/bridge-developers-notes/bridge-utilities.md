<br>

<a name="top"></a>
### 2. Bridge utilities

<br>

This document describes the use of several utilities added by Aurelia UI Toolkits team to make the task of creating an Aurelia plugin simpler.
<br><br>

[[`constants.js`](#constants)]
In order to make the plugin a bit more maintainable, we use the [`constants.js`](#constants) file throughout the entire plugin. Currently, this file contains the conventions we use for the plugin. More specifically, the `k-on-` events and `k-` property conventions.
<br><br>

[[`control-properties.js`](#control-properties)]
A class that's responsible for compiling a list of available properties for a Kendo control
<br><br>

[[`decorators.js`](#decorators)]
The [`decorators.js`](#decorators) file contains decorators used within multiple wrappers. Currently, this file contains the `generateBindables` decorator, used to create `@bindable` properties for a particular Kendo control.
<br><br>

[[`k-template.js`](#k-template)]
The view-model for the `<k-template>` custom element
<br><br>

[[`events.js`](#decorators)]
In several parts of the `aurelia-kendoui-bridge` codebase, events are dispatched. In order to keep the logic of dispatching events in one place, we have put these functions in the [`events.js`](#decorators) file.
<br><br>

[[`options-builder.js`](#options)]
Kendo can act up when `options` objects are used with properties that are `undefined`. We use the `pruneOptions` function in [`options.js`](#options) to prevent these issues.
<br><br>

[[`template-compiler.js`](#template-compiler)]
The `TemplateCompiler` (found in the [`template-compiler.js`](#template-compiler) file) is responsible for compiling and cleaning up views requested by Kendo. It uses the `enhance` capability of Aurelia and hooks into Kendo with the `angular` callback.
<br><br>

[[`util.js`](#utils)]
The [`util.js`](#utils) file contains useful functions that are used in various parts of the codebase. For example, it contains functions to hyphenate and unhyphenate strings.
<br><br>

[[`widget-base.js`](#widget-base)]
The `WidgetBase` is the base class from which all wrappers inherit. The purpose of the `WidgetBase` is to extract common logic from  the wrappers.
<br><br>

* * *

<br><br>
<a name="constants"></a>
File `constants.js`
<br>
```javascript
export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-',
  attributePrefix: 'k-',
  elementPrefix: 'k-'
};

```
<br><br>


<a name="control-properties"></a>
File `control-properties.js`
<br>
```javascript
import {bindables} from './bindables';

/***
* Available properties (merged together from several locations) are stored here per controlName
* so that this isn't done for each created wrapper instance
*/
export class ControlProperties {
  cache = [];
  templateProperties = [];

  /**
  * Merges together available properties for a specific control
  * and stores this in a cache so that this is done only once per control
  */
  getProperties(controlName) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    // get available properties of the options object inside a Kendo control
    let options1 = this.getWidgetProperties(controlName);
    // get available properties of the pre-generated bindables.json file
    let options2 = bindables[controlName];

    if (!options2) {
      throw new Error(`${controlName} not found in generated bindables.js`);
    }

    // merge together without duplicates
    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));

    this.cache[controlName] = keys;

    return keys;
  }

  getWidgetProperties(controlName) {
    if (jQuery.fn[controlName]) {
      return Object.keys(jQuery.fn[controlName].widget.prototype.options);
    }

    return [];
  }

  getTemplateProperties(controlName) {
    let properties = this.getProperties(controlName);

    let templates = properties.filter(prop => prop.toLowerCase().indexOf('template') >= -1);

    return templates;
  }
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="decorators"></a>
File `decorators.js`
<br>
```javascript
import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {bindingMode} from 'aurelia-binding';
import {ControlProperties} from './control-properties';
import {getBindablePropertyName} from './util';

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

    optionKeys.push('widget');

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
```
<br>
[Go to top](#top)
* * *
<br>

<a name="k-template"></a>
File `k-template.js`
<br>
```javascript
import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, noView, processContent, TargetInstruction} from 'aurelia-templating';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  return true;
})
@inject(TargetInstruction)
export class Template {
  @bindable template;
  @bindable for = 'template';

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

```
<br>
[Go to top](#top)
* * *
<br>

<a name="options-builder"></a>
File `options-builder.js`
<br>
```javascript
import {inject} from 'aurelia-dependency-injection';
import {ControlProperties} from './control-properties';
import {getBindablePropertyName, pruneOptions, hasValue} from './util';

/***
* Converts an object with bindable properties (with k- convention)
* into an object that can be passed to a Kendo control
*/
@inject(ControlProperties)
export class OptionsBuilder {

  constructor(controlProperties) {
    this.controlProperties = controlProperties;
  }

  /**
  * converts properties of view-model (with k- convention) to an object
  * that can be passed to a Kendo control. It also wraps templates into a function
  * so the Kendo templating system is not used
  */
  getOptions(viewModel, className) {
    let options = {};

    for (let prop of this.controlProperties.getProperties(className)) {
      let value = viewModel[getBindablePropertyName(prop)];

      if (hasValue(value)) {
        if (this.isTemplate(prop)) {
          options[prop] = () => value;
        } else {
          options[prop] = value;
        }
      }
    }

    return pruneOptions(options);
  }

  isTemplate(propertyName) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  }
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="template-compiler"></a>
File `template-compiler.js`
<br>
```javascript
import {inject} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';

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
        ctx = _data.dataItem || _data.aggregate || _data;
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
```
<br>
[Go to top](#top)
* * *
<br>

<a name="utils"></a>
File `utils.js`
<br>
```javascript
const capitalMatcher = /([A-Z])/g;
import {constants} from './constants';
import {ControlProperties} from './control-properties';
import {Container} from 'aurelia-dependency-injection';

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
* removes prefix and unhyphenates the resulting string
* kTest -> test
*/
export function getKendoPropertyName(propertyName: string): string {
  let withoutPrefix = propertyName.substring(1); // remove 'k'

  return (withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1));
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
* Implicitly setting options to "undefined" for a kendo control can break things.
* this function prunes the supplied options object and removes values that
* aren't set to something explicit (i.e. not null)
* @param options the options object to prune the properties of
*/
export function pruneOptions(options: any) {
  let returnOptions = {};

  for (let prop in options) {
    if (hasValue(options[prop])) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

export function hasValue(prop) {
  return typeof(prop) !== 'undefined' && prop !== null;
}


/***
* parses array of k-template view-models (@children)
* <k-template for='test'>
* this function sets the property 'test' on the viewmodel to the template
* @param target the viewModel with template properties
* @param kendoGrid or GridColumn, properties are retrieved from bindables.js
* @param templates array of k-template view-models
*/
export function useTemplates(target, controlName, templates) {
  let controlProperties = (Container.instance || new Container()).get(ControlProperties);
  let templateProps = controlProperties.getTemplateProperties(controlName);

  templates.forEach(c => {
    if (templateProps.indexOf(c.for) > -1) {
      target[getBindablePropertyName(c.for)] = c.template;
    } else {
      throw new Error('Invalid template property name: "' + c.for + '", valid values are: ' + templateProps.join(', '));
    }
  });
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
```
<br>
[Go to top](#top)
* * *
<br>

<a name="widget-base"></a>
File `widget-base.js`
<br>
```javascript
import {fireKendoEvent, getEventsFromAttributes, _hyphenate, pruneOptions, useTemplates} from './util';
import {OptionsBuilder} from './options-builder';
import {TemplateCompiler} from './template-compiler';
import {inject, transient} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';

/**
* Abstraction of commonly used code across wrappers
*/
@transient()
@inject(TaskQueue, TemplateCompiler, OptionsBuilder)
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

  constructor(taskQueue, templateCompiler, optionsBuilder) {
    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
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
    let options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
    let eventOptions = this.getEventOptions(element);

    // merge all option objects together
    // - options on the wrapper
    // - options compiled from all the bindable properties
    // - event handler options
    return pruneOptions(Object.assign({}, this.viewModel.options, options, eventOptions));
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
    let events = getEventsFromAttributes(element);

    events.forEach(event => {
      // throw error if this event is not defined on the Kendo control
      if (!allowedEvents.includes(event)) {
        throw new Error(`${event} is not an event on the ${this.controlName} control`);
      }

      if (delayedExecution.includes(event)) {
        options[event] = e => {
          this.taskQueue.queueMicroTask(() => fireKendoEvent(element, _hyphenate(event), e));
        };
      } else {
        options[event] = e => fireKendoEvent(element, _hyphenate(event), e);
      }
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

  useTemplates(target, controlName, templates) {
    return useTemplates(target, controlName, templates);
  }

  /**
  * destroys the widget
  */
  destroy(widget) {
    widget.destroy();
  }
}
```
<br>
[Go to top](#top)
