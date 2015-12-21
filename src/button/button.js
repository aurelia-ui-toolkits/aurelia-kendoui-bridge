import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton extends WidgetBase {

  @bindable options = {};

  @bindable enable = true;
  @bindable icon;
  @bindable imageUrl;
  @bindable spriteCssClass

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

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
