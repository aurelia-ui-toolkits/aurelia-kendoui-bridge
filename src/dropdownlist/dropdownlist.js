import {customAttribute, bindable, inject} from 'aurelia-framework';
import {fireEvent, WidgetBase, TemplateCompiler, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('au-kendo-drop-down-list')
@inject(Element, TemplateCompiler)
@generateBindables('kendoDropDownList')
export class AuKendoDropDownList extends WidgetBase {

  @bindable options = {};
  @bindable dataSource;
  @bindable value;

  constructor(element, templateCompiler) {
    super('kendoDropDownList', element);

    this.templateCompiler = templateCompiler;
  }

  bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialized() {
	// without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.value = event.sender.value();
      this.text = event.sender.text();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.value = event.sender.value();
      this.text = event.sender.text();

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

  valueChanged(newValue) {
  	if(this.widget) {
	  	this.widget.value(newValue);
		this.widget.trigger('change');
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
