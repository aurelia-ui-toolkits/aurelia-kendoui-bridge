import {inject, children, customElement, bindable} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';

@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element, WidgetBase)
export class Grid  {

  @children('au-col') columns;
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoGrid')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    let element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
      controlName: 'kendoGrid',
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  addRow() {
    if (this.widget) {
      this.widget.addRow();
    }
  }

  autoFitColumn(value) {
    if (this.widget) {
      this.widget.autoFitColumn(value);
    }
  }

  cancelChanges() {
    if (this.widget) {
      this.widget.cancelChanges();
    }
  }

  cancelRow() {
    if (this.widget) {
      this.widget.cancelRow();
    }
  }

  cellIndex(cell) {
    if (this.widget) {
      return this.widget.cellIndex(cell);
    }
  }

  clearSelection() {
    if (this.widget) {
      this.widget.clearSelection();
    }
  }

  closeCell() {
    if (this.widget) {
      this.widget.closeCell();
    }
  }

  collapseGroup(group) {
    if (this.widget) {
      this.widget.collapseGroup(group);
    }
  }

  collapseRow(row) {
    if (this.widget) {
      this.widget.collapseRow(row);
    }
  }

  current(cell) {
    if (this.widget) {
      return this.widget.current(cell);
    }
  }

  dataItem(row) {
    if (this.widget) {
      return this.widget.dataItem(row);
    }
  }

  destroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  }

  editCell(cell) {
    if (this.widget) {
      this.widget.editCell(cell);
    }
  }

  editRow(row) {
    if (this.widget) {
      this.widget.editRow(row);
    }
  }

  expandGroup(row) {
    if (this.widget) {
      this.widget.expandGroup(row);
    }
  }

  expandRow(row) {
    if (this.widget) {
      this.widget.expandRow(row);
    }
  }

  getOptions() {
    if (this.widget) {
      return this.widget.getOptions();
    }
  }

  hideColumn(column) {
    if (this.widget) {
      this.widget.hideColumn(column);
    }
  }

  lockColumn(column) {
    if (this.widget) {
      this.widget.lockColumn(column);
    }
  }

  refresh() {
    if (this.widget) {
      this.widget.refresh();
    }
  }

  removeRow(row) {
    if (this.widget) {
      this.widget.removeRow(row);
    }
  }

  reorderColumn(destIndex, column) {
    if (this.widget) {
      this.widget.reorderColumn(destIndex, column);
    }
  }

  saveAsExcel() {
    if (this.widget) {
      this.widget.saveAsExcel();
    }
  }

  saveAsPDF() {
    if (this.widget) {
      this.widget.saveAsPDF();
    }
  }

  saveChanges() {
    if (this.widget) {
      this.widget.saveChanges();
    }
  }

  saveRow() {
    if (this.widget) {
      this.widget.saveRow();
    }
  }

  select(rows) {
    if (this.widget) {
      return this.widget.select(rows);
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      this.widget.setDataSource(dataSource);
    }
  }

  setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  }

  showColumn(column) {
    if (this.widget) {
      this.widget.showColumn(column);
    }
  }

  unlockColumn(column) {
    if (this.widget) {
      this.widget.unlockColumn(column);
    }
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}
