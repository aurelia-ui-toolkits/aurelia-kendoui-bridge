import {inject} from 'aurelia-dependency-injection';
import {customElement, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {delayed} from '../common/decorators';
import 'kendo.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@generateBindables('kendoListView')
@inject(Element, WidgetBase, ViewResources)
export class ListView  {

  @children(`${constants.elementPrefix}template`) templates = [];

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoListView')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  @delayed()
  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoListView', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
