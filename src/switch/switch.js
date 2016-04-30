import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.mobile.switch.min';

@customAttribute(`${constants.attributePrefix}switch`)
@generateBindables('kendoMobileSwitch')
@inject(Element, WidgetBase)
export class Switch {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMobileSwitch')
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .useValueBinding('kChecked', 'check');
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
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
