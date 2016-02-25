import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Instructions {

  constructor(router) {
    this.router = router;
  }

  activate(params) {
    this.params = params;
  }

  attached() {
    let type = this.params.type;

    this.tabstrip.kWidget.select(this[type]);
  }

  tabChanged(e) {
    this.router.navigateToRoute($(e.item).data('type'));
  }
}
