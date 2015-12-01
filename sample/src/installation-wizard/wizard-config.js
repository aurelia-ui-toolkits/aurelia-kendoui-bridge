import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class WizardConfig {

  currentPage = 'welcome';
  nextPage = 'version';

  constructor(router) {
    this.router = router;
  }

  reset() {
    this.currentPage = 'welcome';
    this.nextPage = 'version';

    return this._goToStep(this.currentPage);
  }

  _goToStep(page) {
      return this.router.navigateToRoute('install', {
        page: page
      });
  }
}
