import {inject, children, customElement, bindable} from 'aurelia-framework';
import {pruneOptions, TemplateCompiler, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

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
