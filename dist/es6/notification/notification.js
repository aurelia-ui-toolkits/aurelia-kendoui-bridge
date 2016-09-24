import {inject} from 'aurelia-dependency-injection';
import {customElement, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}notification`)
@generateBindables('kendoNotification')
@inject(Element, WidgetBase, ViewResources)
export class Notification {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoNotification')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
      beforeInitialize: e => this.beforeInitialize(e)
    });
  }

  beforeInitialize(options) {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}notification-template`);
    if (templates && templates.length > 0) {
      options.templates = [];

      templates.forEach(template => options.templates.push({
        type: template.type,
        template: () => template.template
      }));
    }
  }

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}
