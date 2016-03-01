import {inject, TaskQueue} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router, TaskQueue)
export class Instructions {

  constructor(router, taskqueue) {
    this.router = router;
    this.taskqueue = taskqueue;
  }

  activate(params) {
    this.params = params;
  }

  attached() {
    let type = this.params.type;

    this.taskqueue.queueTask(() => {
      this.tabstrip.select(this[type]);
    });
  }

  tabChanged(e) {
    this.router.navigateToRoute($(e.item).data('type'));
  }
}
