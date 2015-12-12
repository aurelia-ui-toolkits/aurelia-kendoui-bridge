import * as LogManager from 'aurelia-logging';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.button.min';
import 'kendo-ui/js/kendo.grid.min';
import 'kendo-ui/js/kendo.menu.min';
import 'kendo-ui/js/kendo.tabstrip.min';
import {customAttribute,bindable,inject,noView,processContent,TargetInstruction,children,customElement} from 'aurelia-framework';
import {TemplatingEngine} from 'aurelia-templating';

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
      .kendoMenu();
    return this;
  }

  pro() {
    this.core()
      .kendoGrid()
			.kendoAutoComplete();
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
}

@customAttribute('au-kendo-autocomplete')
@inject(Element, TemplateCompiler)
export class AuKendoAutoComplete {

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
  @bindable highlightFirst = false;
  @bindable ignoreCase = true;
  @bindable minLength = 1;
  @bindable placeholder = '';
  @bindable popup;

  // prevent weird suggestion bug
  // https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/issues/11
  @bindable separator = null;

  @bindable suggest = false;
  @bindable headerTemplate;
  @bindable template;
  @bindable valuePrimitive;
  @bindable virtual;

  // Aurelia value-added API
  @bindable value;

  constructor(element, templateCompiler) {
    this.element = element;
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
    this.widget = $(this.element).kendoAutoComplete(this.getOptions()).data('kendoAutoComplete');

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
      template: this.template,
      headerTemplate: this.headerTemplate,
      suggest: this.suggest,
      change: (e) => fireKendoEvent(this.element, 'change', e),
      close: (e) => fireKendoEvent(this.element, 'close', e),
      dataBound: (e) => fireKendoEvent(this.element, 'data-bound', e),
      filtering: (e) => fireKendoEvent(this.element, 'filtering', e),
      open: (e) => fireKendoEvent(this.element, 'open', e),
      select: (e) => fireKendoEvent(this.element, 'select', e)
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

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
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: (e) => fireKendoEvent(this.element, 'click', e)
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

export function fireEvent(element, name, data = {}) {
  let event = new CustomEvent(name, { 'detail': data});
  element.dispatchEvent(event);
}

export function fireKendoEvent(element, name, data = {}) {
  fireEvent(element, `kendo-${name}`, data);
  return true;
}

export * from './events';
export * from './options';
export * from './template-compiler';

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

      this.enhanceView(element, ctx);
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

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
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
  @bindable format;
  @bindable command;
  @bindable width;
  @bindable lockable;
  @bindable locked;
  template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}

@customElement('au-kendo-grid')
@inject(Element, TemplateCompiler)
export class Grid {

  @children('au-col') columns;

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
  @bindable scrollable;
  @bindable toolbar;
  @bindable navigatable;
  @bindable columnMenu;
  @bindable groupable = true;

  constructor(element, templateCompiler) {
    this.element = element;
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
    let target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.widget = $(target).kendoGrid(this.getOptions()).data('kendoGrid');
  }

  getOptions() {
    let options = pruneOptions({
      animation: this.animation,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      columns: this.columns,
      editable: this.editable,
      delay: this.delay,
      enable: this.enable,
      filter: this.filter,
      filterable: this.filterable,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      height: this.height,
      pageable: this.pageable,
      scrollable: this.scrollable,
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
      toolbar: this.toolbar,
      navigatable: this.navigatable,
      reorderable: this.reorderable,
      resizable: this.resizable,
      columnMenu: this.columnMenu,
      cancel: (e) => fireKendoEvent(this.element, 'cancel', e),
      change: (e) => fireKendoEvent(this.element, 'change', e),
      columnHide: (e) => fireKendoEvent(this.element, 'column-hide', e),
      columnMenuInit: (e) => fireKendoEvent(this.element, 'column-menu-init', e),
      columnReorder: (e) => fireKendoEvent(this.element, 'column-reorder', e),
      columnResize: (e) => fireKendoEvent(this.element, 'column-resize', e),
      columnShow: (e) => fireKendoEvent(this.element, 'column-show', e),
      dataBinding: (e) => fireKendoEvent(this.element, 'data-binding', e),
      dataBound: (e) => fireKendoEvent(this.element, 'data-bound', e),
      detailCollapse: (e) => fireKendoEvent(this.element, 'detail-collapse', e),
      detailExpand: (e) => fireKendoEvent(this.element, 'detail-expand', e),
      // disabled until https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/issues/133
      // detailInit: (e) => fireKendoEvent(this.element, 'detail-init', e),
      edit: (e) => fireKendoEvent(this.element, 'edit', e),
      excelExport: (e) => fireKendoEvent(this.element, 'excel-export', e),
      pdfExport: (e) => fireKendoEvent(this.element, 'pdf-export', e),
      filterMenuInit: (e) => fireKendoEvent(this.element, 'filter-menu-init', e),
      remove: (e) => fireKendoEvent(this.element, 'remove', e),
      save: (e) => fireKendoEvent(this.element, 'save', e),
      saveChanges: (e) => fireKendoEvent(this.element, 'save-changes', e),
      columnLock: (e) => fireKendoEvent(this.element, 'column-lock', e),
      columnUnlock: (e) => fireKendoEvent(this.element, 'column-unlock', e),
      navigate: (e) => fireKendoEvent(this.element, 'navigate', e)
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}


@customElement('au-kendo-menu')
@inject(Element)
export class Menu {

  @bindable options;
  @bindable dataSource;
  @bindable closeOnClick;
  @bindable animation;
  @bindable direction;
  @bindable hoverDelay;
  @bindable orientation;
  @bindable popupCollision;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    let target;
    let ul = $(this.element).find('ul');
    if (ul.has()) {
      target = $(this.element).find('ul').first();
    } else {
      target = $(this.element).appendChild('<ul></ul>');
    }

    this.widget = target.kendoMenu(this.getOptions()).data('kendoMenu');
  }

  getOptions() {
    let options = pruneOptions({
      dataSource: this.dataSource,
      closeOnClick: this.closeOnClick,
      animation: this.animation,
      direction: this.direction,
      hoverDelay: this.hoverDelay,
      orientation: this.orientation,
      popupCollision: this.popupCollision,
      close: (e) => fireKendoEvent(this.element, 'close', e),
      open: (e) => fireKendoEvent(this.element, 'open', e),
      activate: (e) => fireKendoEvent(this.element, 'activate', e),
      deactivate: (e) => fireKendoEvent(this.element, 'deactivate', e),
      select: (e) => fireKendoEvent(this.element, 'select', e)
    });

    return Object.assign({}, this.options, options);
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

export class AuScheduler {

}

@customAttribute('au-kendo-tabstrip')
@inject(Element)
export class TabStrip {

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
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
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
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

export class AuToolbar {

}
