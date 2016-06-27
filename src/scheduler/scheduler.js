import {inject} from 'aurelia-dependency-injection';
import {customElement, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo.scheduler.min';
import 'kendo.scheduler.agendaview.min';
import 'kendo.scheduler.dayview.min';
import 'kendo.scheduler.monthview.min';
import 'kendo.scheduler.recurrence.min';
import 'kendo.scheduler.timelineview.min';

@customElement(`${constants.elementPrefix}scheduler`)
@generateBindables('kendoScheduler')
@inject(Element, WidgetBase, ViewResources)
export class Scheduler {

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoScheduler')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
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
    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoScheduler', templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
