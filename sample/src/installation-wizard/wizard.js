import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(Router, WizardConfig)
export class Wizard {

  constructor(router, wizardConfig) {
    this.wizardConfig = wizardConfig;
    this.router = router;
  }

  activate(params, route) {
    let page = params.page;

    if(page == 'begin') {
      this.wizardConfig.reset();
    } else {
      this.wizardConfig.currentPage = page;
    }
  }
}
