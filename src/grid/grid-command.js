import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {Util} from '../common/util';

@customElement(`${constants.elementPrefix}grid-command`)
@generateBindables('GridColumnCommandItem')
export class GridCommand {
}
