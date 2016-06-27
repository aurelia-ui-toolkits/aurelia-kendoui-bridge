import {inject} from 'aurelia-dependency-injection';
import {customElement, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo.data.signalr.min';
import 'kendo.filtercell.min';
import 'kendo.treelist.min';

@customElement(`${constants.elementPrefix}tree-list`)
@generateBindables('kendoTreeList')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder)
export class TreeList  {

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoTreeList')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    let columns = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}tree-col`);
    // allow for both column definitions via HTML and via an array of columns
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'TreeListColumn'));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
