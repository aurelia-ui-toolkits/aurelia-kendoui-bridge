import {children, customElement} from 'aurelia-templating';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {useTemplates} from '../common/util';

@customElement(`${constants.elementPrefix}col`)
@generateBindables('GridColumn')
export class Col {
  @children(`${constants.elementPrefix}template`) templates;

  bind() {
    useTemplates(this, 'GridColumn', this.templates);
  }
}
