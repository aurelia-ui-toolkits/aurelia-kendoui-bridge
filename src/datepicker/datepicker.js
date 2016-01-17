import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {fireEvent} from '../common/events';
import 'kendo-ui/js/kendo.datepicker.min';

@customAttribute('k-datepicker')
@inject(Element)
@generateBindables('kendoDatePicker')
export class DatePicker extends WidgetBase {


  @bindable options = {};

  constructor(element) {
    super('kendoDatePicker', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
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

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
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
        this.widget.trigger('change');
      } else {
        return this.widget.value();
      }
    }
  }
}
