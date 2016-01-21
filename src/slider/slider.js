import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.slider.min';

@customAttribute('k-slider')
@generateBindables('kendoSlider')
@inject(Element, WidgetBase)
export class Slider {

  @bindable kValue;
  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoSlider');
  }

  attached() {
    this.widgetBase.createWidget(this.element);
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
    if (this.widget) {
      return this.widget.value(newValue);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }

  kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  }
}
