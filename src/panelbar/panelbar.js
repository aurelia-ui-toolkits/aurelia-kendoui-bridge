import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.panelbar.min';

@customElement('k-panel-bar')
@generateBindables('kendoPanelBar')
@inject(Element, WidgetBase)
export class PanelBar {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPanelBar')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
  }

  recreate() {

    let element = this.element;

    // Insert a node in between the parent/children if no UL/OL is found
    if(!hasListChildNode(element)) {
      var ul = document.createElement("ul");

      while (element.children.length > 0) {
        ul.appendChild(element.children[0]);
      }
      
      element.appendChild(ul);
      element = ul;
    }
    else {
      element = this.element.children[0];
    }

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      rootElement: this.element
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}


// if the first child is not a UL/OL then create one to use as the target, otherwise the panelbar can look a bit mangled
function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}
