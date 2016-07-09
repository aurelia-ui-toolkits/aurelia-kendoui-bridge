import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
//import 'kendo.colorpicker.min';

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('kendoColorPicker')
@inject(Element, WidgetBase)
export class ColorPicker {

  @bindable kEnabled;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPicker')
                        .linkViewModel(this)
                        .bindToKendo('kEnabled', 'enable')
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
