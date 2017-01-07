import {inject, Container} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}combobox`)
@generateBindables('kendoComboBox')
@inject(Element, WidgetBase, Container)
export class ComboBox {

  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoComboBox')
                        .linkViewModel(this)
                        .useValueBinding()
                        .useContainer(container)
                        .bindToKendo('kEnabled', 'enable')
                        .bindToKendo('kReadOnly', 'readonly');
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
    let selectNode = getSelectNode(this.element);
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoComboBox', templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
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

function getSelectNode(element) {
  return element.querySelectorAll('select');
}
