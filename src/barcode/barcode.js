import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.dataviz.barcode.min';

@customAttribute(`${constants.attributePrefix}barcode`)
@generateBindables('kendoBarcode')
@inject(Element, WidgetBase)
export class Barcode {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoBarcode')
                        .linkViewModel(this);
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
