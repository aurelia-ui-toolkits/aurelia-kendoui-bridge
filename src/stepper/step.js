import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {OptionsBuilder} from '../common/options-builder';
import {Util} from '../common/util';

@customElement(`${constants.elementPrefix}step`)
@generateBindables('StepperStep')
@inject(TemplateGatherer, OptionsBuilder, Util, Element)
export class Step {
  constructor(templateGatherer, optionsBuilder, util, element) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  getOptions() {
    const templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'StepperStep', templates);

    return this.optionsBuilder.getOptions(this, 'StepperStep');
  }
}