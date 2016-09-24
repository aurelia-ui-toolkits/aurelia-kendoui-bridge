import {inject} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.dataviz.map.min';

@customElement(`${constants.elementPrefix}map`)
@generateBindables('kendoMap')
@inject(Element, WidgetBase)
export class Map {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoMap')
                    .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}
