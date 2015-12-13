import {inject, noView, processContent, bindable, TargetInstruction} from 'aurelia-framework';

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
export class AuCol {
  @bindable title;
  @bindable field;
  @bindable format = '';
  @bindable command;
  @bindable width;
  @bindable lockable;
  @bindable locked;
  template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
