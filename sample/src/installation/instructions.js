import {inject, TaskQueue} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router, TaskQueue)
export class Instructions {

  constructor(router, taskqueue) {
    this.router = router;
    this.taskqueue = taskqueue;
  }

  activate(params, route) {
    this.route = route;
  }

  attached() {
    let type = this.route.route;

    if (type === 'jspm-git') {
      type = 'jspmGit';
    }

    this.taskqueue.queueTask(() => {
      this.tabstrip.select(this[type]);
    });
  }

  tabChanged(e) {
    this.router.navigateToRoute($(e.item).data('type'));
  }
}
