import {inject} from 'aurelia-dependency-injection';
import {customAttribute} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('kendoMenu')
@inject(Element, WidgetBase)
export class Menu {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMenu')
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

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
