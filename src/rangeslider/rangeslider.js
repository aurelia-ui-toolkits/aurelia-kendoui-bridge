import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}range-slider`)
@generateBindables('kendoRangeSlider')
@inject(Element, WidgetBase)
export class RangeSlider {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoRangeSlider')
                        .useElement(this.element)
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .useValueBinding();
  }

  bind(ctx) {
    this.widgetBase.useParentCtx(ctx);
  }

  attached() {
    let divs = this.element.querySelectorAll('div');
    if (divs.length > 0) {
      this.target =  this.widgetBase.useElement(divs[0]);
    } else {
      let target = document.createElement('div');
      target.appendChild(document.createElement('input'));
      target.appendChild(document.createElement('input'));
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

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
