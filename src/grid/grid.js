import {inject, children, customElement, bindable} from 'aurelia-framework';
import {WidgetBase, TemplateCompiler} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

@customElement('au-kendo-grid')
@inject(Element, TemplateCompiler)
export class Grid extends WidgetBase {

  @children('au-col') columns;

  @bindable options = {};

  @bindable autoBind = true;
  @bindable columnMenu;
  @bindable dataSource;
  @bindable editable;
  @bindable filterable;
  @bindable group;
  @bindable groupable = true;
  @bindable height;
  @bindable navigatable;
  @bindable page = 1;
  @bindable pageable;
  @bindable sortable;
  @bindable pageSize = 10;
  @bindable scrollable;
  @bindable selectable;
  @bindable selectedItem;
  @bindable selectedItems;
  @bindable sort;
  @bindable reorderable = true;
  @bindable resizable = true;
  @bindable toolbar;

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

  getOptions() {
    return {
      animation: this.animation,
      columns: this.columns,
      columnMenu: this.columnMenu,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      delay: this.delay,
      enable: this.enable,
      editable: this.editable,
      filter: this.filter,
      filterable: this.filterable,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      groupable: this.groupable,
      headerTemplate: this.headerTemplate,
      height: this.height,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      navigatable: this.navigatable,
      pageable: this.pageable,
      placeholder: this.placeholder,
      popup: this.popup,
      reorderable: this.reorderable,
      resizable: this.resizable,
      separator: this.separator,
      scrollable: this.scrollable,
      sortable: this.sortable,
      suggest: this.suggest,
      template: this.template,
      toolbar: this.toolbar,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual
    };
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
