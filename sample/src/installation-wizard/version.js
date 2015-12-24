import {inject} from 'aurelia-framework';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Version {

  get next() {
    let version = this.wizardConfig.version;

    if (version) {
      if(version == 'pro') {
        return 'pro';
      } else {
        return 'instructions';
      }
    }

    return false;
  }

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {
    this.wizardConfig.title = 'Kendo-Core or Kendo-PRO';
  }

  select(version) {
    this.wizardConfig.version = version;
  }
}
