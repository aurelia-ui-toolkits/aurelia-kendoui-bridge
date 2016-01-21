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
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;

    this._initialize();
  }

  _initialize() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });

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
}
