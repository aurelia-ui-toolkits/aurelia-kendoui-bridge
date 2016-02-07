import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {pruneOptions} from '../common/util';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.data.signalr.min';
import 'kendo-ui/js/kendo.filtercell.min';
import 'kendo-ui/js/kendo.treelist.min';

@customElement(`${constants.elementPrefix}tree-list`)
@generateBindables('kendoTreeList')
@inject(Element, WidgetBase, ViewResources)
export class TreeList  {

  @children(`${constants.elementPrefix}tree-col`) columns;
  @bindable options = {};

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeList')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
//    let element = isInitFromTable(this.element) ? this.element.children[0] : this.element;
    let element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(c => {
        if (c.template && !c.withKendoTemplates) {
          let template = c.template;
          c.template = function() {
            return template;
          };
        }

        options.columns.push(pruneOptions(c));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// // existing table
// function isInitFromTable(element) {
//   return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
// }
