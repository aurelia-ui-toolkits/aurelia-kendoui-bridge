import {children, customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {OptionsBuilder} from '../common/options-builder';

@customElement(`${constants.elementPrefix}toolbar-item`)
@generateBindables('ToolBarItem')
@inject(TemplateGatherer, OptionsBuilder)
export class ToolbarItem {
  @children(`${constants.elementPrefix}template`) templates = [];
  @children(`${constants.elementPrefix}toolbar-item-button`) buttons = [];

  constructor(templateGatherer, optionsBuilder) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  getOptions() {
    this.templateGatherer.useTemplates(this, 'ToolBarItem', this.templates);

    if (this.buttons && this.buttons.length > 0) {
      this.kButtons = [];

      this.buttons.forEach(item => {
        this.kButtons.push(item.getOptions());
      });
    }

    return this.optionsBuilder.getOptions(this, 'ToolBarItem');
  }
}
