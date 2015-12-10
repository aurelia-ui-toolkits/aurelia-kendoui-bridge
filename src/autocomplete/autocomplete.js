import {customAttribute, bindable, inject} from 'aurelia-framework';
import {fireEvent, pruneOptions} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';

@customAttribute('au-kendo-autocomplete')
@inject(Element)
export class AuKendoAutoComplete {

  element;

  // Autocomplete API
  // Full options object if you want to set options that way
  @bindable options = {};

  // Individual properties - default values need setting
  @bindable animation;
  @bindable dataSource;
  @bindable dataTextField = null;
  @bindable delay = 200;
  @bindable enable = true;
  @bindable filter = 'startswith';
  @bindable fixedGroupTemplate;
  @bindable groupTemplate;
  @bindable height;
  @bindable highlightFirst;
  @bindable ignoreCase;
  @bindable minLength;
  @bindable placeholder;
  @bindable popup;
  @bindable separator = '';
  @bindable suggest = true;
  @bindable headerTemplate;
  @bindable template;
  @bindable valuePrimitive;
  @bindable virtual;

  // Aurelia value-added API
  @bindable value;

  constructor(element) {
    this.element = element;
  }

  bind() {
    this._component = $(this.element).kendoAutoComplete(this.getOptions()).data('kendoAutoComplete');

    this._component.bind('change', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this._component.bind('select', (event) => {
      this.value = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
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
      suggest: this.suggest,
      headerTemplate: this.headerTemplate,
      template: this.template,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}
