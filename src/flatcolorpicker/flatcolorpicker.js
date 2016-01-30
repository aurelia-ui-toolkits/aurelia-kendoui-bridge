import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo-ui/js/kendo.colorpicker.min';

@customElement(`${constants.attributePrefix}flat-color-picker`)
@generateBindables('kendoFlatColorPicker')
@inject(Element, WidgetBase)
export class FlatColorPicker {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoFlatColorPicker')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
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

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
