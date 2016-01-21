import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.colorpicker.min';

@customAttribute('k-color-picker')
@generateBindables('kendoColorPicker')
@inject(Element, WidgetBase)
export class ColorPicker {

  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoColorPicker');
  }

  bind(ctx) {
    this.widgetBase.createWidget(this.element);
  }
}
