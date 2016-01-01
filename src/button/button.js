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

  recreate() {
    this._initialize();
  }

  kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}
