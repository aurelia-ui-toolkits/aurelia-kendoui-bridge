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
@customElement(`${constants.elementPrefix}list-template`)
export class ListTemplate {
  @bindable template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
