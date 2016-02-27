import {bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';

@inject(TaskQueue)
export class ScaleOptions {

  @bindable showLabels = true;
  @bindable labelsPosition = 'inside';
  @bindable showRanges = true;

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  scale = {
    minorUnit: 5,
    startAngle: -30,
    endAngle: 210,
    max: 180,
    labels: {
      position: 'inside'
    },
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
  };

  attached() {
    this.taskQueue.queueTask(() => {
      this.configuredRanges = this.gauge.options.scale.ranges;
    });
  }

  propertyChanged() {
    let options = this.gauge.options;

    options.transitions = false;
    options.scale.labels.visible = this.showLabels;
    options.scale.labels.position = this.labelsPosition;
    options.scale.ranges = this.showRanges ? this.configuredRanges : [];

    this.gauge.redraw();
  }
}
