import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.button.min';
import 'kendo-ui/js/kendo.grid.min';
import 'kendo-ui/js/kendo.scheduler.min';
import 'kendo-ui/js/kendo.tabstrip.min';
import 'kendo-ui/js/kendo.toolbar.min';
import {customAttribute,bindable,inject,ViewCompiler,ViewResources,Container,customElement,processContent,TargetInstruction} from 'aurelia-framework';
import {ViewSlot} from 'aurelia-templating';

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
      .kendoGrid()
			.kendoAutoComplete();
    return this;
  }

  kendoAutoComplete() {
    this.resources.push('autocomplete');
    return this;
  }

  kendoButton() {
    this.resources.push('button');
    return this;
  }

  kendoCombobox() {
    this.resources.push('combobox');
    return this;
  }

  kendoDropDownList() {
    this.resources.push('dropdownlist');
    return this;
  }

  kendoGrid() {
    this.resources.push('grid');
    return this;
  }

  kendoScheduler() {
    this.resources.push('scheduler');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('tabstrip');
    return this;
  }

  kendoToolbar() {
    this.resources.push('toolbar');
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

  bind() {
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

  bind() {
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


/**
* Compiler service
*
* compiles an HTML element with aurelia
*/
@inject(ViewCompiler, ViewResources, Container)
export class Compiler {

  constructor(viewCompiler, resources, container) {
    this.viewCompiler = viewCompiler;
    this.resources = resources;
  }

  compile(templateOrFragment):any {
    let view = this.viewCompiler.compile(templateOrFragment, this.resources).create();

    return view;
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
@processContent((compiler, resources, element, instruction) => {
  parseUserTemplate(element, resources, instruction);
  return true;
})
@inject(Element, Compiler, TargetInstruction)
export class Grid {

  columns = null;

  @bindable selectable;
  @bindable filterable;
  @bindable pageable;
  @bindable sortable;
  @bindable pageSize = 10;
  @bindable page = 1;
  @bindable selectedItem;
  @bindable selectedItems
  @bindable autoBind = true;
  @bindable resizable = true;
  @bindable reorderable = true;
  @bindable editable;
  @bindable sort;
  @bindable group;
  @bindable dataSource;

  @bindable groupable = true;

  constructor(element, compiler, targetInstruction) {
    this.element = element;
    this.compiler = compiler;
    this.columns = targetInstruction.behaviorInstructions[0].kendoGridColumns;
  }

  bind(ctx) {
    this._component = $(this.element).kendoGrid(this.getOptions()).data('kendoGrid');
    this.$parent = ctx;
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
      columns: this.columns,
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
      sortable: this.sortable,
      groupable: this.groupable,
      headerTemplate: this.headerTemplate,
      template: this.template,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual,
      dataBound: (e) => {
        // After data binding we need to find the rows and the associated
        // data context using the row UID
        let tbody = e.sender.tbody[0];
        let rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));

        rows.forEach(row => {
          let uid = row.getAttribute('data-uid');
          let data = e.sender.dataSource.data();
          // Get the row...
          let ctx = find(data, (item) => { return item.uid === uid; }, this);
          let cellctx = { $item: ctx, $parent: this.$parent };
          // Replace any switched out html
          row.innerHTML = row.innerHTML.replace(/!{/g, '${');

          let view = this.compiler.compile(row);
          let viewSlot = new ViewSlot(row, false);
          viewSlot.add(view);
          viewSlot.bind(cellctx);
          viewSlot.attached();
          // Remove the original row
          row.parentNode.removeChild(row);
          return viewSlot;
        });
      }
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}


// these functions are not inside the kendo grid class because @processContent needs to call parseUserTemplate
// consider them 'static' functions
function find(arr, test, ctx) {
  let result = null;
  arr.some(function(el, i) {
    return test.call(ctx, el, i, arr) ? ((result = el), true) : false;
  });
  return result;
}

function parseUserTemplate(element, resources, instruction) {
  // Pull all of the attributes off the kendo-grid-col element
  let columns = Array.prototype.slice.call(element.querySelectorAll('au-kendo-grid-col'));
  let colSpecs = columns.map(col => {
    let obj = {};

    for (let i = col.attributes.length - 1; i >= 0; i--) {
      let attr = col.attributes.item(i);
      obj[attr.name] = attr.value;
    }

    // if (obj.field) {
    //   obj.template = col.innerHTML;
    // }

    parseCellTemplate(col, obj);

    return obj;
  });

  // Remove any inner HTML from the element - we don't want it in the DOM
  element.innerHTML = '';

  instruction.kendoGridColumns = colSpecs;
}

function parseCellTemplate(element, spec) {
  // Hack to avoid kendo hijacking Aurelia interpolations - need a good workaround for this
  if (element.childNodes.length > 0) {
    spec.template = element.innerHTML.replace(/\${/g, '!{');
  }
}

// @customAttribute('au-kendo-button')
@inject(Element)
export class AuScheduler {

  _component;

  // @bindable enable = true;
  // @bindable icon;
  // @bindable imageUrl;
  // @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    //this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      // icon: this.icon,
      // enable: this.enable,
      // imageUrl: this.imageUrl,
      // spriteCssClass: this.spriteCssClass
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

  bind() {
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

// @customAttribute('au-kendo-button')
@inject(Element)
export class AuToolbar {

  _component;

  // @bindable enable = true;
  // @bindable icon;
  // @bindable imageUrl;
  // @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    //this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      // icon: this.icon,
      // enable: this.enable,
      // imageUrl: this.imageUrl,
      // spriteCssClass: this.spriteCssClass
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}
