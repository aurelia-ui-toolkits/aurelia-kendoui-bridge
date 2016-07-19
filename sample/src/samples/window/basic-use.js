import {TaskQueue, inject} from 'aurelia-framework';

@inject(TaskQueue)
export class BasicUse {
  actions = ['Pin', 'Minimize', 'Maximize', 'Close'];

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.window.center().open();
    });
  }

  open() {
    this.window.open();
    kendo.jQuery(this.undo).fadeOut();
  }

  onClose() {
    kendo.jQuery(this.undo).fadeIn();
  }
}
