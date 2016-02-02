import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo-ui/js/kendo.slider.min';

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('kendoSlider')
@inject(Element, WidgetBase)
export class Slider {

  @bindable kValue;
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoSlider')
                    .linkViewModel(this)
                    .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    if (!options.value && this.kValue) {
      options.value = this.kValue;
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
