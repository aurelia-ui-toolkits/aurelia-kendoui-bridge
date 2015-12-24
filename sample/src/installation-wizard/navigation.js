import {inject, bindable} from 'aurelia-framework';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Navigation {

  @bindable previous;
  @bindable next;

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  goNext() {
    if (!this.next) return;

    this.wizardConfig._goToStep(this.next);
  }

  goBack() {
    if (!this.previous) return;

    this.wizardConfig._goToStep(this.previous);
  }
}
