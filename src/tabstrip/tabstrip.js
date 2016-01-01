import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.tabstrip.min';

@customAttribute('k-tabstrip')
@generateBindables('kendoTabStrip')
@inject(Element)
export class TabStrip extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoTabStrip', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}
