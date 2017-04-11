import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}notification`)
@generateBindables('kendoNotification')
@inject(Element, WidgetBase, Container)
export class Notification {

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoNotification')
                        .useElement(this.element)
                        .beforeInitialize(options => this.beforeInitialize(options))
                        .linkViewModel(this)
                        .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
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

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
