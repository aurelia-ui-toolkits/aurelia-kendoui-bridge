import {inject} from 'aurelia-framework';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Instructions {

  get previous() {
    if(this.wizardConfig.version == "pro") {
      return "pro";
    } else {
      return "version";
    }
  }

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {
    this.wizardConfig.title = 'Instructions';
  }
}
