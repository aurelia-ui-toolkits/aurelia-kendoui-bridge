import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {OptionsBuilder} from '../common/options-builder';
import {Util} from '../common/util';

@customElement(`${constants.elementPrefix}toolbar-item`)
@generateBindables('ToolBarItem')
@inject(TemplateGatherer, OptionsBuilder, Util, Element)
export class ToolbarItem {
  constructor(templateGatherer, optionsBuilder, util, element) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  getOptions() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'ToolBarItem', templates);

    let buttons = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}toolbar-item-button`);
    if (buttons && buttons.length > 0) {
      this.kButtons = [];

      buttons.forEach(item => {
        this.kButtons.push(item.getOptions());
      });
    }

    return this.optionsBuilder.getOptions(this, 'ToolBarItem');
  }
}
