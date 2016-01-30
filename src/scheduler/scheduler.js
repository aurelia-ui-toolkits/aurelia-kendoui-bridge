import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {pruneOptions} from '../common/options';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.scheduler.min';
import 'kendo-ui/js/kendo.scheduler.agendaview.min';
import 'kendo-ui/js/kendo.scheduler.dayview.min';
import 'kendo-ui/js/kendo.scheduler.monthview.min';
import 'kendo-ui/js/kendo.scheduler.recurrence.min';
import 'kendo-ui/js/kendo.scheduler.timelineview.min';

@customElement(`${constants.elementPrefix}scheduler`)
@generateBindables('kendoScheduler')
@inject(Element, WidgetBase, ViewResources)
export class Scheduler {

  @bindable options = {};
  @bindable kEventHeight;
  @bindable kStartTime;
  @bindable kMajorTick;
  @bindable kEventTemplate;
  @children(`${constants.elementPrefix}event-template`) eventTemplates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoScheduler')
                        .linkViewModel(this)
                        .useViewResources(viewResources)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: o => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    let eventTemplate;

    if (this.kEventTemplate) {
      eventTemplate = () => this.kEventTemplate;
    } else if (this.eventTemplates.length > 0) {
      eventTemplate = () => this.eventTemplates[0].template;
    }

    return Object.assign(options, pruneOptions({
      eventHeight: this.kEventHeight,
      majorTick: this.kMajorTick,
      startTime: this.kStartTime,
      eventTemplate: eventTemplate
    }));
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
