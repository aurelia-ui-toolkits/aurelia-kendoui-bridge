import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'kendo-ui/js/kendo.slider.min';

@customAttribute('k-slider')
@generateBindables('kendoSlider')
@inject(Element)
export class Slider extends WidgetBase {

  @bindable options = {};
  @bindable kValue;

  constructor(element) {
    super('kendoSlider', element);

    this.element = element;
    this.options = {};
  }

  attached() {
    this._initialize();
  }

  _beforeInitialize(options) {
    if (!options.value && this.kValue) {
      options.value = this.kValue;
    }
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  value(newValue) {
    if(this.widget) {
      return this.widget.value(newValue);
    }
  }

  kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  }
}
