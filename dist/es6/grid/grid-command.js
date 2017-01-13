import {customElement} from 'aurelia-templating';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';

@customElement(`${constants.elementPrefix}grid-command`)
@generateBindables('GridColumnCommandItem')
export class GridCommand {
}
