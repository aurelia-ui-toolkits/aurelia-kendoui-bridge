import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.datepicker.min';

@customAttribute('k-datepicker')
@generateBindables('kendoDatePicker')
@inject(Element, WidgetBase)
export class DatePicker {

  @bindable kValue;
  @bindable kDisableDates;
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDatePicker')
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

  _beforeInitialize(options) {
    return Object.assign({}, options, { disableDates: this.kDisableDates });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
