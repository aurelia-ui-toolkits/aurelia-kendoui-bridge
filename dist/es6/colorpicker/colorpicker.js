import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.colorpicker.min';

@customAttribute('k-color-picker')
@generateBindables('kendoColorPicker')
@inject(Element)
export class ColorPicker extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoColorPicker', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }
}
