import {inject} from 'aurelia-dependency-injection';
import {customElement, children} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';
import 'kendo.toolbar.min';

@customElement(`${constants.elementPrefix}toolbar`)
@generateBindables('kendoToolBar')
@inject(Element, WidgetBase, OptionsBuilder)
export class Toolbar {

  @children(`${constants.elementPrefix}toolbar-item`) toolbarItems = [];

  constructor(element, widgetBase, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoToolBar')
                        .linkViewModel(this);
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
    if (this.toolbarItems && this.toolbarItems.length > 0) {
      options.items = [];

      this.toolbarItems.forEach(item => {
        options.items.push(item.getOptions());
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
