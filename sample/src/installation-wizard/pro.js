import {inject} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Pro {

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {

    if(!this.wizardConfig.version) {
      return Promise.reject(this.wizardConfig.reset());
    }

    this.wizardConfig.title = 'Kendo pro';
  }

  select(hasCredentials) {
    this.wizardConfig.hasCredentials = hasCredentials;
  }
}
