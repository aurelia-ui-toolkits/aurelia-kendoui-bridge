import {inject} from 'aurelia-dependency-injection';
import {customElement, noView, bindable, processContent, TargetInstruction} from 'aurelia-templating';
import {constants} from '../common/constants';

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
@customElement(`${constants.elementPrefix}event-template`)
export class EventTemplate {
  @bindable template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
