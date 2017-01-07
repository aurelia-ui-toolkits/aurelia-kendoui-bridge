import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('kendoSlider')
@inject(Element, WidgetBase)
export class Slider {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoSlider')
                        .useElement(this.element)
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .useValueBinding();
  }

  bind(ctx) {
    this.widgetBase.useParentCtx(ctx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
