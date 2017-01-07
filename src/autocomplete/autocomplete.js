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
                        .linkViewModel(this)
                        .useContainer(container)
                        .useValueBinding()
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.target = inputs[0];
    } else {
      this.target = document.createElement('input');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: this.target,
      parentCtx: this.$parent
    });
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
