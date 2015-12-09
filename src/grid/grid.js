import {inject, customElement, processContent, bindable, TargetInstruction} from 'aurelia-framework';
import {pruneOptions} from '../common/options';
import {TemplateCompiler} from '../common/template-compiler';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

@customElement('au-kendo-grid')
@processContent((compiler, resources, element, instruction) => {
  let initFromTable = isInitFromTable(element);
  if (!initFromTable) {
    parseUserTemplate(element, resources, instruction);
  }
  return initFromTable;
})
@inject(Element, TemplateCompiler, TargetInstruction)
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
  @bindable scrollable;

  @bindable groupable = true;

  constructor(element, templateCompiler, targetInstruction) {
    this.element = element;
    this.templateCompiler = templateCompiler;
    this.columns = targetInstruction.behaviorInstructions[0].kendoGridColumns;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);

    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    let target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this._component = $(target).kendoGrid(this.getOptions()).data('kendoGrid');
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

function parseUserTemplate(element, resources, instruction) {
  // Pull all of the attributes off the kendo-grid-col element
  let columns = Array.prototype.slice.call(element.querySelectorAll('au-kendo-grid-col'));
  let colSpecs = columns.map(col => {
    let obj = {};

    for (let i = col.attributes.length - 1; i >= 0; i--) {
      let attr = col.attributes.item(i);
      obj[attr.name] = attr.value;
    }

    parseCellTemplate(col, obj);

    return obj;
  });

  // Remove any inner HTML from the element - we don't want it in the DOM
  element.innerHTML = '';

  // set the column definitions object on the instruction, so it can be retreived
  // from within the Grid view-model
  instruction.kendoGridColumns = colSpecs;
}

// checks if there are HTML tags inside of au-kendo-grid-col
// and sets this content as the "template" of the column specification
function parseCellTemplate(element, spec) {
  if (element.childNodes.length > 0) {
    spec.template = element.innerHTML;
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}
