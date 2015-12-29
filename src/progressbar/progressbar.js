import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'kendo-ui/js/kendo.progressbar.min';

@customAttribute('k-progress-bar')
@generateBindables('kendoProgressBar')
@inject(Element)
export class ProgressBar extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoProgressBar', element);
  }

  bind() {
    this._initialize();
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  kValueChanged(newValue) {
    this.widget.value(newValue);
  }

  value(newValue) {
    return this.widget.value(newValue);
  }

  enable(newValue) {
    return this.widget.enable(newValue);
  }
}
