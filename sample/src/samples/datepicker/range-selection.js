import {inject} from 'aurelia-dependency-injection';
import {TaskQueue} from 'aurelia-task-queue';

@inject(TaskQueue)
export class RangeSelection {

    constructor(taskQueue) {
      this.taskQueue = taskQueue;
    }

    startChange() {
      let startDate = this.startDatePicker.value();
      let endDate = this.endDatePicker.value();

      if (startDate) {
        startDate = new Date(startDate);
        startDate.setDate(startDate.getDate());
        this.endDatePicker.min(startDate);
      } else if (endDate) {
        this.startDatePicker.max(new Date(endDate));
      } else {
        endDate = new Date();
        this.startDatePicker.max(endDate);
        this.endDatePicker.min(endDate);
      }
    }

    endChange() {
      let endDate = this.endDatePicker.value();
      let startDate = this.startDatePicker.value();

      if (endDate) {
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate());
        this.startDatePicker.max(endDate);
      } else if (startDate) {
        this.endDatePicker.min(new Date(startDate));
      } else {
        endDate = new Date();
        this.startDatePicker.max(endDate);
        this.endDatePicker.min(endDate);
      }
    }

    attached() {
      this.taskQueue.queueTask(() => {
        this.startDatePicker.max(this.endDatePicker.value());
        this.endDatePicker.min(this.startDatePicker.value());
      });
    }
}
