import {inject, Container} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}multiselect`)
@generateBindables('kendoMultiSelect', ['template'])
@inject(Element, WidgetBase, Container)
export class Multiselect {

  @bindable kEnabled;
  @bindable kReadOnly;
  @bindable kNoValueBinding = false;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMultiSelect')
                        .linkViewModel(this)
                        .useContainer(container)
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNode = getSelectNode(this.element);
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoMultiSelect', templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    // do not process value changes when user input is present
    if (property !== 'kValue' || this.kWidget.input.val() === '') {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}
