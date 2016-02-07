import {children, customElement} from 'aurelia-templating';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {useTemplates} from '../common/util';

@customElement(`${constants.elementPrefix}tree-col`)
@generateBindables('TreeListColumn')
export class TreeCol {
  @children(`${constants.elementPrefix}template`) templates;

  bind() {
    useTemplates(this, 'TreeListColumn', this.templates);
  }
}
