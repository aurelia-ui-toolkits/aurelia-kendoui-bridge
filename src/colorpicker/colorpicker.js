import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.colorpicker.min';

@customAttribute('k-color-picker')
@generateBindables('kendoColorPicker')
@inject(Element, WidgetBase)
export class ColorPicker {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoColorPicker')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
