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
    widgetBase.linkViewModel(this, element, 'kendoTabStrip');
  }

  bind(ctx) {
    this.widgetBase.createWidget(this.element);
  }
}
