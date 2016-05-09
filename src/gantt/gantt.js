import {inject} from 'aurelia-dependency-injection';
import {customElement, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo.gantt.min';

@customElement(`${constants.elementPrefix}gantt`)
@generateBindables('kendoGantt')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder)
export class Gantt  {

  @children(`${constants.elementPrefix}gantt-col`) columns;
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources, optionsBuilder) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoGantt')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    // if <div> exists, initialize on that, else create div
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoGantt', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GanttColumn'));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}
