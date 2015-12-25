import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('k-button')
@generateBindables('kendoButton')
@inject(Element)
export class Button extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoButton', element);
  }

  bind() {
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
