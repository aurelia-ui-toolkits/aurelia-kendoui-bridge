import {inject} from 'aurelia-framework';
import {TaskQueue} from 'aurelia-task-queue';

@inject(TaskQueue)
export class BasicUse {

  constructor(tq) {
    this.tq = tq;
  }

  attached() {
    this.tq.queueTask(() => {
      this.tooltip.show($(this.canton));
    });
  }
}
