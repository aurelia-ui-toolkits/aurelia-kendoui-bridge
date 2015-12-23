import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import {DOM} from 'aurelia-pal';
import 'jquery';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('au-kendo-button')
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

  getOptions() {
    return {
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass
    };
  }

  enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  }
}
