import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, TemplateCompiler, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.progressbar.min';

@customAttribute('k-progress-bar')
@generateBindables('kendoProgressBar')
@inject(Element)
export class ProgressBar extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoProgressBar', element);

    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  valueChanged(newValue) {
    this.widget.value(newValue);
  }
}
