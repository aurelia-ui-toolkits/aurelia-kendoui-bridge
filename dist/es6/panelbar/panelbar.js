import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';

@customElement(`${constants.elementPrefix}panel-bar`)
@generateBindables('kendoPanelBar')
@inject(Element, WidgetBase)
export class PanelBar {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPanelBar')
                        .useRootElement(this.element)
                        .linkViewModel(this);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let element = this.element;

    // Insert a node in between the parent/children if no UL/OL is found
    if (!hasListChildNode(element)) {
      let ul = document.createElement('ul');

      while (element.children.length > 0) {
        ul.appendChild(element.children[0]);
      }

      element.appendChild(ul);
      element = ul;
    } else {
      element = this.element.children[0];
    }

    this.widgetBase.useElement(element);

    this.kWidget = this.widgetBase.recreate();
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}


// if the first child is not a UL/OL then create one to use as the target, otherwise the panelbar can look a bit mangled
function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}
