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
                    .linkViewModel(this)
                    .bindToKendo('kEnabled', 'enable')
                    .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    let divs = this.element.querySelectorAll('div');
    if (divs.length > 0) {
      this.target = divs[0];
    } else {
      this.target = document.createElement('div');
      this.target.appendChild(document.createElement('input'));
      this.target.appendChild(document.createElement('input'));
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: this.target,
      parentCtx: this.$parent
    });
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
