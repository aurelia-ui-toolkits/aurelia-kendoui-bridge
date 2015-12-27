import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'kendo-ui/js/kendo.tabstrip.min';

@customAttribute('k-tabstrip')
@generateBindables('kendoTabStrip')
@inject(Element)
export class TabStrip extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoTabStrip', element);
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}
