import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.button.min';
import 'kendo-ui/js/kendo.grid.min';
import 'kendo-ui/js/kendo.tabstrip.min';
import {customAttribute,bindable,inject,customElement} from 'aurelia-framework';
import {getLogger} from 'aurelia-logging';

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

    // Convert the resource names to paths
  resources = resources.map(r => r + '/' + r);

  aurelia.globalResources(resources);
}

class KendoConfigBuilder {

	resources = [];

  core() {
    this.kendoButton()
			.kendoTabStrip();
    return this;
  }

  pro() {
    this.core()
			.kendoAutoComplete();
    return this;
  }

  kendoButton() {
    this.resources.push('button');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('tabstrip');
    return this;
  }

  kendoAutoComplete() {
    this.resources.push('autocomplete');
    return this;
  }
}

@customAttribute('au-kendo-autocomplete')
@inject(Element)
export class AuKendoAutoComplete {

  element;

  // Autocomplete API
  // Full options object if you want to set options that way
  @bindable options = {};

  // Individual properties - default values need setting
  @bindable animation;
  @bindable dataSource;
  @bindable dataTextField = null;
  @bindable delay = 200;
  @bindable enable = true;
  @bindable filter = 'startswith';
  @bindable fixedGroupTemplate;
  @bindable groupTemplate;
  @bindable height;
  @bindable highlightFirst;
  @bindable ignoreCase;
  @bindable minLength;
  @bindable placeholder;
  @bindable popup;
  @bindable separator = '';
  @bindable suggest = true;
  @bindable headerTemplate;
  @bindable template;
  @bindable valuePrimitive;
  @bindable virtual;

  // Aurelia value-added API
  @bindable value;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this._component = $(this.element).kendoAutoComplete(this.getOptions()).data('kendoAutoComplete');

    this._component.bind('change', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this._component.bind('select', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      animation: this.animation,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      delay: this.delay,
      enable: this.enable,
      filter: this.filter,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      height: this.height,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      placeholder: this.placeholder,
      popup: this.popup,
      separator: this.separator,
      suggest: this.suggest,
      headerTemplate: this.headerTemplate,
      template: this.template,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

  _component;

  @bindable enable = true;
  @bindable icon;
  @bindable imageUrl;
  @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  attached() {
    this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}


function createEvent(name) {
  let event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

export function fireEvent(element, name) {
  let event = createEvent(name);
  element.dispatchEvent(event);
}

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


@customElement('au-kendo-grid')
@inject(Element)
export class Grid {

	host;
	_component;

  constructor() {
    let logger = getLogger('aurelia-kendoui');

    if (!Kendo.ui.Grid) {
      logger.error('Kendo.ui.Grid is not defined. Ensure that the professional version of Kendo UI is installed.');
      return;
    }

    this.logger = logger;
  }

  attached() {
    this._component = $(this.host).kendoGrid(this.getOptions()).data('kendoGrid');
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      animation: this.animation,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      delay: this.delay,
      enable: this.enable,
      filter: this.filter,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      height: this.height,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      placeholder: this.placeholder,
      popup: this.popup,
      separator: this.separator,
      suggest: this.suggest,
      headerTemplate: this.headerTemplate,
      template: this.template,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}

@customAttribute('au-kendo-tabstrip')
@inject(Element)
export class TabStrip {

	_component;

	@bindable animation;
    @bindable collapsible;
    @bindable contentUrls;
    @bindable dataContentField;
    @bindable dataContentUrlField;
    @bindable dataSpriteCssClass;
    @bindable dataTextField;
    @bindable dataUrlField;
    @bindable navigatable;
    @bindable scrollable;
    @bindable tabPosition;
    @bindable value;
    @bindable enable;

    @bindable options;

    constructor(element) {
      this.element = element;
      this.options = {};
    }

    attached() {
      this._component = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
    }

    detached() {
      if (this._component) {
        this._component.destroy();
      }
    }

    getOptions() {
      let options = pruneOptions({
        animation: this.animation,
        collapsible: this.collapsible,
        contentUrls: this.contentUrls,
        dataContentField: this.dataContentField,
        dataContentUrlField: this.dataContentUrlField,
        dataSpriteCssClass: this.dataSpriteCssClass,
        dataTextField: this.dataTextField,
        dataUrlField: this.dataUrlField,
        navigatable: this.navigatable,
        scrollable: this.scrollable,
        tabPosition: this.tabPosition,
        value: this.value
      });

      return Object.assign({}, this.options, options);
    }

    enableChanged(newValue) {
      if (this._component) {
        this._component.enable(newValue);
      }
    }
}
