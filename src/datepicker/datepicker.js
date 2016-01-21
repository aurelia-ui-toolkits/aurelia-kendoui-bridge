import {customAttribute, bindable, inject} from 'aurelia-framework';
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
    widgetBase.linkViewModel(this, element, 'kendoDatePicker');
  }

  bind(ctx) {
    this.widgetBase.createWidget(this.element);
  }

  _beforeInitialize(options) {
    return Object.assign({}, options, { disableDates: this.kDisableDates });
  }

  _initialize() {
    super._initialize();
  }

  close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  enable(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  readonly(value) {
    if (this.widget) {
      this.widget.readonly(value);
    }
  }

  max(value) {
    if (this.widget) {
      return this.widget.max(value);
    }
  }

  min(value) {
    if (this.widget) {
      return this.widget.min(value);
    }
  }

  open() {
    if (this.widget) {
      this.widget.open();
    }
  }

  setOptions(options) {
    if (this.widget) {
      this.widget.setOptions(options);
    }
  }

  value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
      } else {
        return this.widget.value();
      }
    }
  }

  kValueChanged() {
    if (this.widget) {
      this.widget.value(this.kValue);
    }
  }
}
