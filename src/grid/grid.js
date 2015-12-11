import {inject, children, customElement, processContent, bindable, TargetInstruction} from 'aurelia-framework';
import {pruneOptions, TemplateCompiler, parseChildren} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

@customElement('au-kendo-grid')
// @processContent((compiler, resources, element, instruction) => {
//   parseChildren('au-col', element, instruction);
//
//   return isInitFromTable(element);
// })
@inject(Element, TemplateCompiler, TargetInstruction)
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

  constructor(element, templateCompiler, targetInstruction) {
    this.element = element;
    this.templateCompiler = templateCompiler;
    // this.columns = targetInstruction.elementInstruction.children;
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
      columnMenu: this.columnMenu
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}
