import {children, customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';

@customElement(`${constants.elementPrefix}tree-col`)
@generateBindables('TreeListColumn')
@inject(TemplateGatherer)
export class TreeCol {
  @children(`${constants.elementPrefix}template`) templates;

  constructor(templateGatherer) {
    this.templateGatherer = templateGatherer;
  }

  beforeOptionsBuild() {
    this.templateGatherer.useTemplates(this, 'TreeListColumn', this.templates);
  }
}
