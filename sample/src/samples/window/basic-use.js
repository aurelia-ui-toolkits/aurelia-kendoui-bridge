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
    $(this.undo).fadeOut();
  }

  onClose() {
    $(this.undo).fadeIn();
  }
}
