import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.multiselect.min';
import 'kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}multiselect`)
@generateBindables('kendoMultiSelect', ['template'])
@inject(Element, WidgetBase, ViewResources)
export class Multiselect {

  @bindable kEnabled;
  @bindable kReadOnly;
  @bindable kNoValueBinding = false;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMultiSelect')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
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

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}
