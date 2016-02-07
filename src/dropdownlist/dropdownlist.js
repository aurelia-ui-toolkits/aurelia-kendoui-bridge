import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}drop-down-list`)
@generateBindables('kendoDropDownList')
@inject(Element, WidgetBase)
export class DropDownList {

  @bindable options = {};
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoDropDownList')
                        .linkViewModel(this)
                        .useValueBinding();
  }

  bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoDropDownList', this.templates);

    this.recreate();
  }

  recreate() {
    let selectNode = getSelectNode(this.element);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}
