import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

  @bindable enable = true;
  @bindable icon;
  @bindable imageUrl;
  @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: (e) => fireKendoEvent(this.element, 'click', e)
    });

    return Object.assign({}, this.options, options);
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
