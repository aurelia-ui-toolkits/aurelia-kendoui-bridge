import {inject} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
//import 'kendo.dataviz.treemap.min';

@customElement(`${constants.elementPrefix}treemap`)
@generateBindables('kendoTreeMap')
@inject(Element, WidgetBase)
export class TreeMap {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeMap')
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

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
