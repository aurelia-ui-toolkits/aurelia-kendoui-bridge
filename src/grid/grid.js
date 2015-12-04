import {inject, customElement, processContent, bindable, TargetInstruction} from 'aurelia-framework';
import {ViewSlot} from 'aurelia-templating';
import {Compiler} from '../common/compiler';
import {pruneOptions} from '../common/options';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

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
          let view = this.compiler.compile(row, cellctx);
          let viewSlot = new ViewSlot(row, false);
          viewSlot.add(view);
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
