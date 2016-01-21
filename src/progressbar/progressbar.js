import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.progressbar.min';

@customAttribute('k-progress-bar')
@generateBindables('kendoProgressBar')
@inject(Element, WidgetBase)
export class ProgressBar {

  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoProgressBar');
  }

  bind(ctx) {
    this.widgetBase.createWidget(this.element);
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
    }
  }

  value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  }

  enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  }
}
