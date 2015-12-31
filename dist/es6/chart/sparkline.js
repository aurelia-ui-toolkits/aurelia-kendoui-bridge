import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import '../pdf/pdf';
import 'kendo-ui/js/kendo.dataviz.sparkline.min';

@customElement('k-sparkline')
@generateBindables('kendoSparkline')
@inject(Element)
export class Sparkline extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

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
