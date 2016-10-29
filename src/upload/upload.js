import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}upload`)
@generateBindables('kendoUpload')
@inject(Element, WidgetBase, Container)
export class Upload {

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoUpload')
                        .linkViewModel(this)
                        .useContainer(container);
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
    let target;
    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      target = inputs[0];
    } else {
      target = document.createElement('input');
      this.element.appendChild(target);
    }

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoUpload', templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: target,
      parentCtx: this.$parent
    });
  }

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}
