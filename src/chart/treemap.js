import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.treemap.min';

@customElement('k-treemap')
@generateBindables('kendoTreeMap')
@inject(Element)
export class TreeMap extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoTreeMap', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }
}
