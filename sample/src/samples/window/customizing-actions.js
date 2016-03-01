import {TaskQueue, inject} from 'aurelia-framework';

@inject(TaskQueue)
export class CustomizingActions {
  actions = ['Custom', 'Minimize', 'Maximize', 'Close'];

  constructor(taskQueue) {
    this.taskQueue = taskQueue;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.window.wrapper
      .find('.k-i-custom').click((e) => {
        alert('Custom action button clicked');
        e.preventDefault();
      });
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
