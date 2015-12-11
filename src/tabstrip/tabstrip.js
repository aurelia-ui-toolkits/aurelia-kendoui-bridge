import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.tabstrip.min';

@customAttribute('au-kendo-tabstrip')
@inject(Element)
export class TabStrip {

	@bindable animation;
  @bindable collapsible;
  @bindable contentUrls;
  @bindable dataContentField;
  @bindable dataContentUrlField;
  @bindable dataSpriteCssClass;
  @bindable dataTextField;
  @bindable dataUrlField;
  @bindable navigatable;
  @bindable scrollable;
  @bindable tabPosition;
  @bindable value;
  @bindable enable;

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
    this.widget = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
  }

  getOptions() {
    let options = pruneOptions({
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
