import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';

@customElement(`${constants.elementPrefix}toolbar`)
@generateBindables('kendoToolBar')
@inject(Element, WidgetBase, OptionsBuilder, Container)
export class Toolbar {

  constructor(element, widgetBase, optionsBuilder, container) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoToolBar')
                        .linkViewModel(this)
                        .useContainer(container);
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
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    let toolbarItems = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}toolbar-item`);
    if (toolbarItems && toolbarItems.length > 0) {
      options.items = [];

      toolbarItems.forEach(item => {
        options.items.push(item.getOptions());
      });
    }
  }

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}
