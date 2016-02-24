import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.autocomplete.min';
import 'kendo.virtuallist.min';

@customElement(`${constants.elementPrefix}autocomplete`)
@generateBindables('kendoAutoComplete')
@inject(Element, WidgetBase, ViewResources)
export class AutoComplete {

  @bindable options = {};
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoAutoComplete')
                        .linkViewModel(this)
                        .useValueBinding()
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;

    let inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.target = inputs[0];
    } else {
      this.target = document.createElement('input');
      this.element.appendChild(this.target);
    }
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: this.target,
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
