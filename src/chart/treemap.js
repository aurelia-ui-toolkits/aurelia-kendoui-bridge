import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.dataviz.treemap.min';

@customElement('k-treemap')
@generateBindables('kendoTreeMap')
@inject(Element, WidgetBase)
export class TreeMap {

  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoTreeMap');
  }

  attached() {
    this.widgetBase.createWidget(this.element);
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  }

  findByUid(text) {
    if (this.widget) {
      return this.widget.findByUid(text);
    }
  }

  dataItem(tile) {
    if (this.widget) {
      return this.widget.dataItem(tile);
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }
}
