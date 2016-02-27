import {bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';

@inject(TaskQueue)
export class ScaleOptions {

  @bindable showLabels = true;
  @bindable vertical = true;
  @bindable showRanges = true;

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  scale = {
    majorUnit: 20,
    minorUnit: 5,
    max: 180,
    ranges: [
      {
        from: 80,
        to: 120,
        color: '#ffc700'
      }, {
        from: 120,
        to: 150,
        color: '#ff7a00'
      }, {
        from: 150,
        to: 180,
        color: '#c20000'
      }
    ]
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.configuredRanges = this.gauge.options.scale.ranges;
    });
  }

  propertyChanged() {
    let options = this.gauge.options;

    options.transitions = false;
    options.scale.labels.visible = this.showLabels;
    options.scale.vertical = this.vertical;
    options.scale.ranges = this.showRanges ? this.configuredRanges : [];

    $(this.gaugeContainer).toggleClass('horizontal', !this.vertical);

    this.gauge.redraw();
  }
}
