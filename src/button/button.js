import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('k-button')
@generateBindables('kendoButton')
@inject(Element)
export class Button extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoButton', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(enable) {
    if (this.widget) {
      this.widget.enable(enable);
    }
  }
}
