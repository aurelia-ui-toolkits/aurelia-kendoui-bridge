import {customElement, noView, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.sparkline.min';

@customElement('au-kendo-sparkline')
@noView
@generateBindables('kendoSparkline')
@inject(Element)
export class Sparkline extends WidgetBase {

  @bindable options = {};
  @bindable dataSource;

  constructor(element) {
    super('kendoSparkline', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }
}
