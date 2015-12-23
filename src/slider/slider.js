import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, TemplateCompiler, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.slider.min';

@customAttribute('au-kendo-slider')
@generateBindables('kendoSlider')
@inject(Element)
export class AuKendoSlider extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoSlider', element);

    this.element = element;
    this.options = {};
  }

  attached() {
    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  // valueChanged(newValue) {
    // this.widget.value(newValue);
  // }
}
