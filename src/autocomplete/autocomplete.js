import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}autocomplete`)
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase, Container)
export class AutoComplete {

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .useRootElement(this.element)
                        .linkViewModel(this)
                        .useContainer(container)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.widgetBase.useElement(inputs[0]);
    } else {
      let target = document.createElement('input');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', templates);

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
