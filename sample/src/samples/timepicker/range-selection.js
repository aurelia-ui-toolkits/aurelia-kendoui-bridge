import {bindable} from 'aurelia-templating';
import {inject, TaskQueue} from 'aurelia-framework';

@inject(TaskQueue)
export class RangeSelection {
    @bindable startTime = '8:00 AM';

    constructor(taskQueue) {
      this.taskQueue = taskQueue;
    }

    attached() {
      this.taskQueue.queueTask(() => {
        this.start.min('8:00 AM');
        this.start.max('6:00 PM');

        this.end.min('8:00 AM');
        this.end.max('7:30 AM');
      });
    }

    startTimeChanged() {
      if (this.startTime) {
        let time = new Date(this.startTime);

        this.end.max(time);

        time.setMinutes(time.getMinutes() + this.end.options.interval);

        this.end.min(time);
        this.end.value(time);
      }
    }
}
