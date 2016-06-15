import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';

@customElement(`${constants.elementPrefix}gantt-col`)
@generateBindables('GanttColumn')
@inject(TemplateGatherer)
export class GanttCol {}
