import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, noView, processContent, TargetInstruction} from 'aurelia-templating';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  return true;
})
@inject(TargetInstruction)
export class Template {
  @bindable template;
  @bindable for = 'template';
  @bindable kendoTemplate = false;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
