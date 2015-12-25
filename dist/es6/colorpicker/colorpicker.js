import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.colorpicker.min';

@customAttribute('k-color-picker')
@generateBindables('kendoColorPicker')
@inject(Element)
export class ColorPicker extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoColorPicker', element);
  }

  bind() {
    this._initialize();
  }
}
