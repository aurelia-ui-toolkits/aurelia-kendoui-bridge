import {inject} from 'aurelia-dependency-injection';
import {customElement, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}treeview`)
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase, ViewResources)
export class TreeView {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeView')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (isInitFromUl(this.element)) {
      this.target = this.element.querySelectorAll('ul')[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoTreeView', templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent
    });
  }

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}

function isInitFromUl(element) {
  return element.querySelectorAll('ul').length > 0;
}
