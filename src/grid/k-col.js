import {inject, noView, processContent, bindable, customElement, TargetInstruction} from 'aurelia-framework';

@noView
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }

  return true;
})
@inject(TargetInstruction)
@customElement('k-col')
export class Col {
  @bindable aggregates;
  @bindable attributes;
  @bindable columns;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable field;
  @bindable filterable;
  @bindable footerTemplate;
  @bindable format = '';
  @bindable groupable;
  @bindable groupFooterTemplate;
  @bindable groupHeaderTemplate;
  @bindable headerAttributes;
  @bindable headerTemplate;
  @bindable hidden;
  @bindable lockable;
  @bindable locked;
  @bindable menu;
  @bindable minScreenWidth;
  @bindable sortable;
  @bindable title;
  @bindable values;
  @bindable width;
  @bindable template;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
