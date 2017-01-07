import {inject} from 'aurelia-dependency-injection';
import {customAttribute} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customAttribute(`${constants.attributePrefix}draggable`)
@generateBindables('kendoDraggable')
@inject(Element, WidgetBase)
export class Draggable {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDraggable')
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
      parentCtx: this.$parent,
      beforeInitialize: options => this.beforeInitialize(options)
    });
  }

  beforeInitialize(options) {
    if (options.container) {
      Object.assign(options, { container: kendo.jQuery(options.container) });
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
