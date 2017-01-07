import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars

@customElement(`${constants.elementPrefix}tree-list`)
@generateBindables('kendoTreeList')
@inject(Element, WidgetBase, Container, OptionsBuilder)
export class TreeList  {

  constructor(element, widgetBase, container, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoTreeList')
                        .linkViewModel(this)
                        .useContainer(container);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    let targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.target = targets[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    let columns = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}tree-col`);
    // allow for both column definitions via HTML and via an array of columns
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'TreeListColumn'));
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
