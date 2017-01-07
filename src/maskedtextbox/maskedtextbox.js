import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customAttribute(`${constants.attributePrefix}maskedtextbox`)
@generateBindables('kendoMaskedTextBox')
@inject(Element, WidgetBase)
export class MaskedTextBox {

  @bindable kDisableDates;
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMaskedTextBox')
                        .useElement(this.element)
                        .linkViewModel(this)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.widgetBase.useParentCtx(ctx);
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
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
