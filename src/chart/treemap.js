import {customElement, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.treemap.min';

@customElement('au-kendo-treemap')
@inject(Element)
export class TreeMap {

  @bindable autoBind = true;
  @bindable dataSource;
  @bindable type = 'squarified';
  @bindable theme = 'default';
  @bindable valueField = 'value';
  @bindable colorField = 'color';
  @bindable textField = 'text';
  @bindable template;
  @bindable colors;

  get options() {
    return this.widget && this.widget.options;
  }

  constructor(element) {
    this.element = element;
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.target).kendoTreeMap(this.getOptions()).data('kendoTreeMap');
  }

  getOptions() {
    let options = pruneOptions({
      autoBind: this.autoBind,
      dataSource: this.dataSource,
      type: this.type,
      theme: this.theme,
      valueField: this.valueField,
      colorField: this.colorField,
      textField: this.textField,
      template: this.template,
      colors: this.colors,
      itemCreated: (e) => fireKendoEvent(this.element, 'item-created', e),
      dataBound: (e) => fireKendoEvent(this.element, 'data-bound', e)
    });

    return options;
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
