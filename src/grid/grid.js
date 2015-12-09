import {inject, customElement, processContent, bindable, TargetInstruction} from 'aurelia-framework';
import {ViewSlot, TemplatingEngine} from 'aurelia-templating';
import {Compiler} from '../common/compiler';
import {pruneOptions} from '../common/options';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

@customElement('au-kendo-grid')
@processContent((compiler, resources, element, instruction) => {
  parseUserTemplate(element, resources, instruction);
  return true;
})
@inject(Element, Compiler, TargetInstruction, TemplatingEngine)
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

  constructor(element, compiler, targetInstruction, templatingEngine) {
    this.element = element;
    this.compiler = compiler;
    this.templatingEngine = templatingEngine;
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
    kendo.ui.Widget.prototype.angular = (_event, _args) => {
      if (_event === 'compile') {
        let args = _args();
        let data = args.data;
        let elements = args.elements;

        for (let i = 0; i < data.length; i++) {
          let element = elements[i];
          let _data = data[i];
          let ctx = _data.dataItem;
          if (ctx) {
            ctx.$parent = this.$parent;
          }

          let view = this.templatingEngine.enhance(element);
          view.bind(ctx);
          view.attached();

          $(element).data('viewInstance', view);
        }
      }

      if (_event === 'cleanup') {
        let args = _args();
        let elements = args.elements;

        if (elements) {
          for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let view = $(element).data('viewInstance');
            if (view) {
              view.detached();
              view.unbind();
            }
          }
        }
      }
    };

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
