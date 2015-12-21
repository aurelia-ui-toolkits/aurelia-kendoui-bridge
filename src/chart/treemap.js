import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.treemap.min';

@customElement('au-kendo-treemap')
@generateBindables('kendoTreeMap')
@inject(Element)
export class TreeMap extends WidgetBase {

  @bindable options = {};
  @bindable dataSource;

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
