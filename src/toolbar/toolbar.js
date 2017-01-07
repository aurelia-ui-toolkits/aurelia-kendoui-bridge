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
                        .useElement(this.element)
                        .beforeInitialize(options => this._beforeInitialize(options))
                        .linkViewModel(this)
                        .useContainer(container);
  }

  bind(ctx) {
    this.widgetBase.useParentCtx(ctx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
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

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
