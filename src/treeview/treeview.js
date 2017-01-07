import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}treeview`)
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase, Container)
export class TreeView {

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeView')
                        .linkViewModel(this)
                        .useContainer(container);
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

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function isInitFromUl(element) {
  return element.querySelectorAll('ul').length > 0;
}
