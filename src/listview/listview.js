import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@generateBindables('kendoListView')
@inject(Element, WidgetBase, ViewResources)
export class ListView  {

  @bindable options = {};
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoListView')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoListView', this.templates);
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
