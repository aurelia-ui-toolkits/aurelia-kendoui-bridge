import {inject} from 'aurelia-framework';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Welcome {
  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {
    this.wizardConfig.title = 'Installation wizard';
  }
}
