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
  element.innerHTML = ''; // remove any HTML from `<ak-template>` because it has already been retrieved above

  // don't return true, so aurelia does not process the content of <ak-template>
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
