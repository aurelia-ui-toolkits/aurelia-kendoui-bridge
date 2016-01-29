import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.menu.min';

@customElement('k-menu')
@generateBindables('kendoMenu')
@inject(Element, WidgetBase)
export class Menu {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoMenu')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  }

  recreate() {
    let element;
    let ul = $(this.element).find('ul');
    if (ul.has()) {
      element = $(this.element).find('ul').first();
    } else {
      element = $(this.element).appendChild('<ul></ul>');
    }

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
