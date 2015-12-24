import {inject} from 'aurelia-framework';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Instructions {

  get previous() {
    if (this.wizardConfig.version === 'pro') {
      return 'pro';
    } else {
      return 'version';
    }
  }

  get lastStep() {
    if (this.wizardConfig.version === 'core') return 2;

    if (this.wizardConfig.hasCredentials) {
      return 4;
    }

    if (!this.wizardConfig.hasCredentials) {
      return 6;
    }
  }

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {
    if (!this.wizardConfig.version) {
      return Promise.reject(this.wizardConfig.reset());
    }

    this.wizardConfig.title = 'Thanks! Now, let\'s install this plugin!';
  }
}
