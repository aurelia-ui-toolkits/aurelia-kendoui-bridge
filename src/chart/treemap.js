import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.treemap.min';

@customElement('au-kendo-treemap')
@inject(Element)
export class TreeMap extends WidgetBase {

  @bindable options = {};

  @bindable autoBind = true;
  @bindable dataSource;
  @bindable type = 'squarified';
  @bindable theme = 'default';
  @bindable valueField = 'value';
  @bindable colorField = 'color';
  @bindable textField = 'text';
  @bindable template;
  @bindable colors;

  constructor(element) {
    super('kendoTreeMap', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  getOptions() {
    return {
      autoBind: this.autoBind,
      dataSource: this.dataSource,
      type: this.type,
      theme: this.theme,
      valueField: this.valueField,
      colorField: this.colorField,
      textField: this.textField,
      template: this.template,
      colors: this.colors
    };
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
