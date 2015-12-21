import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.tabstrip.min';

@customAttribute('au-kendo-tabstrip')
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

  getOptions() {
    return {
      animation: this.animation,
      collapsible: this.collapsible,
      contentUrls: this.contentUrls,
      dataContentField: this.dataContentField,
      dataContentUrlField: this.dataContentUrlField,
      dataSpriteCssClass: this.dataSpriteCssClass,
      dataTextField: this.dataTextField,
      dataUrlField: this.dataUrlField,
      navigatable: this.navigatable,
      scrollable: this.scrollable,
      tabPosition: this.tabPosition,
      value: this.value
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
