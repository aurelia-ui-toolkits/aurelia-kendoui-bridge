import {inject} from 'aurelia-framework';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Wizard {

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate(params, route) {
    let page = params.page;

    if (page === 'begin') {
      this.wizardConfig.reset();
    } else {
      this.wizardConfig.currentPage = page;
    }
  }
}
