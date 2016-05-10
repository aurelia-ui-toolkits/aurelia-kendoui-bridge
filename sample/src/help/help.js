import {inject, TaskQueue} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router, TaskQueue)
export class Help {

  constructor(router, taskqueue) {
    this.router = router;
    this.taskqueue = taskqueue;
  }

  activate(params, route) {
    this.route = route;
  }

  attached() {
    let tab = this.route.route;

    this.taskqueue.queueTask(() => {
      console.log(tab);
      this.tabstrip.select(this[tab]);
    });
  }

  tabSelected(e) {
    this.router.navigateToRoute($(e.item).data('tab'));
  }
}
