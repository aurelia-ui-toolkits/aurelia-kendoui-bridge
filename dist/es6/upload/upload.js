import {inject} from 'aurelia-dependency-injection';
import {customElement, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {delayed} from '../common/decorators';
import 'kendo.upload.min';

@customElement(`${constants.elementPrefix}upload`)
@generateBindables('kendoUpload')
@inject(Element, WidgetBase, ViewResources)
export class Upload {

  @children(`${constants.elementPrefix}template`) templates = [];

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoUpload')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  @delayed()
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

    this.widgetBase.useTemplates(this, 'kendoUpload', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: target,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
