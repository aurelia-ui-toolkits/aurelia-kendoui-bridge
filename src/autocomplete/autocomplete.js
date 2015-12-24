import {customAttribute, bindable, inject} from 'aurelia-framework';
import {fireEvent, TemplateCompiler, WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-autocomplete')
@inject(Element, TemplateCompiler)
@generateBindables('kendoAutoComplete')
export class AutoComplete extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;
  @bindable value;

  constructor(element, templateCompiler) {
    super('kendoAutoComplete', element);
    this.templateCompiler = templateCompiler;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }

  setValue(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  }

  getValue(newValue) {
    if (this.widget) {
      return this.widget.value();
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  }
}
