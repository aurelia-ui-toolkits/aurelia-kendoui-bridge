import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.grid.min';

@customElement('k-grid')
@generateBindables('kendoGrid')
@inject(Element, WidgetBase, ViewResources)
export class Grid  {

  @children('k-col') columns;
  @bindable options = {};

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    this.recreate();
  }

  recreate() {
    // init grid on the <table> tag if initialization is from table
    // else, just use the root element
    let element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
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
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}
