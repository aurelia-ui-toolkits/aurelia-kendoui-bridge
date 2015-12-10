import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.toolbar.min';

// @customAttribute('au-kendo-button')
@inject(Element)
export class AuToolbar {

  _component;

  // @bindable enable = true;
  // @bindable icon;
  // @bindable imageUrl;
  // @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    //this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      // icon: this.icon,
      // enable: this.enable,
      // imageUrl: this.imageUrl,
      // spriteCssClass: this.spriteCssClass
    });

    return Object.assign({}, this.options, options);
  }

  enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  }
}
