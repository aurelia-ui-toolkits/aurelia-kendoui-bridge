import {customAttribute, bindable, inject} from 'aurelia-framework';
import {fireEvent, TemplateCompiler, WidgetBase} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('au-kendo-autocomplete')
@inject(Element, TemplateCompiler)
export class AutoComplete extends WidgetBase {

  @bindable options = {};

  @bindable animation;
  @bindable dataSource;
  @bindable dataTextField = null;
  @bindable delay = 200;
  @bindable enable = true;
  @bindable filter = 'startswith';
  @bindable fixedGroupTemplate;
  @bindable groupTemplate;
  @bindable height;
  @bindable highlightFirst = false;
  @bindable ignoreCase = true;
  @bindable minLength = 1;
  @bindable placeholder = '';
  @bindable popup;

  // prevent weird suggestion bug
  // https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/issues/11
  @bindable separator = null;

  @bindable suggest = false;
  @bindable headerTemplate;
  @bindable template;
  @bindable valuePrimitive;
  @bindable virtual;

  // Aurelia value-added API
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

  getOptions() {
    return {
      animation: this.animation,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      delay: this.delay,
      enable: this.enable,
      filter: this.filter,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      height: this.height,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      placeholder: this.placeholder,
      popup: this.popup,
      separator: this.separator,
      template: this.template,
      virtual: this.virtual,
      headerTemplate: this.headerTemplate,
      suggest: this.suggest
    };
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

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
