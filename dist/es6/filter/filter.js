import { inject, Container } from 'aurelia-dependency-injection';
import { customElement, bindable } from 'aurelia-templating';
import { WidgetBase } from '../common/widget-base';
import { generateBindables } from '../common/decorators';
import { constants } from '../common/constants';

@customElement(`${constants.elementPrefix}filter`)
@generateBindables('kendoFilter')
@inject(Element, WidgetBase, Container)
export class Filter {
  @bindable kEnabled;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoFilter')
      .linkViewModel(this)
      .useElement(this.element)
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

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(
      this.kWidget,
      property,
      newValue,
      oldValue
    );
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
