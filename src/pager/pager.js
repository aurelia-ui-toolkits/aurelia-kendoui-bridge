import {inject, Container} from 'aurelia-dependency-injection';
import {customAttribute, customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}pager`)
@generateBindables("kendoPager")
@inject(Element, WidgetBase, Container)
export class Pager {
  @bindable kEnabled;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control("kendoPager")
      .linkViewModel(this)
      .useElement(this.element)
      .useContainer(container)
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
    let templates = this.widgetBase.util.getChildrenVMs(
      this.element,
      `${constants.elementPrefix}template`
    );
    this.widgetBase.useTemplates(this, "kendoPager", templates);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
