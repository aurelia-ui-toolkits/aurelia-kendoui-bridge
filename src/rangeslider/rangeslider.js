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

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.destroy();

    let divs = this.element.querySelectorAll('div');
    if (divs.length === 0) {
      let div = document.createElement('div');
      this.element.appendChild(div);
      divs = [div];
    }
    
    let inputs = divs[0].querySelectorAll('input');
    if (inputs.length === 0) {
      divs[0].appendChild(document.createElement('input'));
      divs[0].appendChild(document.createElement('input'));
    }
    
    this.widgetBase.useElement(divs[0]);

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
