import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.tabstrip.min';

@customAttribute('k-tabstrip')
@generateBindables('kendoTabStrip')
@inject(Element, WidgetBase)
export class TabStrip {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTabStrip')
                        .linkViewModel(this)
                        .setDefaultBindableValues(this);
  }

  bind(ctx) {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: ctx
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
