import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {Util} from '../common/util';

@customElement(`${constants.elementPrefix}tree-col`)
@generateBindables('TreeListColumn')
@inject(TemplateGatherer, Util, Element)
export class TreeCol {
  constructor(templateGatherer, util, element) {
    this.templateGatherer = templateGatherer;
    this.util = util;
    this.element = element;
  }

  beforeOptionsBuild() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'TreeListColumn', templates);
  }
}
