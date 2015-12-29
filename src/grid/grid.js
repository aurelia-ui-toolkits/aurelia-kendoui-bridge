import {inject, children, customElement, bindable} from 'aurelia-framework';
import {WidgetBase, TemplateCompiler, generateBindables} from '../common/index';
import '../pdf/pdf';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';

@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element, TemplateCompiler)
export class Grid extends WidgetBase {

  @children('au-col') columns;

  @bindable options = {};
  @bindable kDataSource;

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

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}
