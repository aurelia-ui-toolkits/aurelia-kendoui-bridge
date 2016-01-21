import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('k-button')
@generateBindables('kendoButton')
@inject(Element, WidgetBase)
export class Button {

  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoButton');
  }

  bind(ctx) {
    this.widgetBase.createWidget(this.element);
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(enable) {
    if (this.widget) {
      this.widget.enable(enable);
    }
  }
}
