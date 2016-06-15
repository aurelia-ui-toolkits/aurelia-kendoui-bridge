import {inject} from 'aurelia-dependency-injection';
import {customElement, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.notification.min';

@customElement(`${constants.elementPrefix}notification`)
@generateBindables('kendoNotification')
@inject(Element, WidgetBase, ViewResources)
export class Notification {

  @children(`${constants.elementPrefix}notification-template`) templates = [];

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
    if (this.templates && this.templates.length > 0) {
      options.templates = [];

      this.templates.forEach(template => options.templates.push({
        type: template.type,
        template: () => template.template
      }));
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
