import {inject} from 'aurelia-dependency-injection';
import {customElement, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import {delayed} from '../common/decorators';
import 'kendo.pivotgrid.min';
import 'kendo.pivot.fieldmenu.min';


@customElement(`${constants.elementPrefix}pivot-grid`)
@generateBindables('kendoPivotGrid')
@inject(Element, WidgetBase, ViewResources)
export class PivotGrid {

  @children(`${constants.elementPrefix}template`) templates = [];

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPivotGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  @delayed()
  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
