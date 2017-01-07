import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}scheduler`)
@generateBindables('kendoScheduler')
@inject(Element, WidgetBase, Container)
export class Scheduler {

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoScheduler')
                        .linkViewModel(this)
                        .useContainer(container);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    let targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.target = targets[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoScheduler', templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
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
