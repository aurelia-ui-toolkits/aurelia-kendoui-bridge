import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {fireEvent} from '../common/events';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-drop-down-list')
@inject(Element)
@generateBindables('kendoDropDownList')
export class DropDownList extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;
  @bindable kValue;

  constructor(element) {
    super('kendoDropDownList', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialized() {
	// without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();
      this.kText = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    // Ensure the dropdown has an initial value/text
    this.widget.trigger('change');
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  }

  value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  }

  select(index) {
    if (this.widget) {
      this.widget.select(index);
      // Need to make sure the kendo binding stays up to date
      this.widget.trigger('change');
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
      // Need to make sure the kendo binding stays up to date
      this.widget.trigger('change');
    }
  }
}
