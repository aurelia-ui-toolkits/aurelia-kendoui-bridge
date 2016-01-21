import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {fireEvent} from '../common/events';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-autocomplete')
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase)
export class AutoComplete {

  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoAutoComplete');
  }

  bind(ctx) {
    this._initialize();
  }

  _initialize() {
    this.widgetBase.createWidget(this.element);

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.kWidget.bind('change', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.kWidget.bind('select', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
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

  search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  }

  close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  }

  dataItem(value) {
    if (this.widget) {
      return this.widget.dataItem(value);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  focus() {
    if (this.widget) {
      return this.widget.focus();
    }
  }

  readonly(value) {
    if (this.widget) {
      return this.widget.readonly(value);
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  select(value) {
    if (this.widget) {
      return this.widget.select(value);
    }
  }

  setDataSource(value) {
    if (this.widget) {
      return this.widget.setDataSource(value);
    }
  }

  suggest(value) {
    if (this.widget) {
      return this.widget.suggest(value);
    }
  }
}
