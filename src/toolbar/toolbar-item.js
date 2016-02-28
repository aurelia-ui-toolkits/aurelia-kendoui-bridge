import {children, customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';

@customElement(`${constants.elementPrefix}toolbar-item`)
@generateBindables('ToolBarItem')
@inject(TemplateGatherer)
export class ToolbarItem {
  @children(`${constants.elementPrefix}template`) templates;

  constructor(templateGatherer) {
    this.templateGatherer = templateGatherer;
  }

  bind() {
    this.templateGatherer.useTemplates(this, 'ToolBarItem', this.templates);
  }
}
