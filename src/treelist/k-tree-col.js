import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, noView, processContent, TargetInstruction} from 'aurelia-templating';
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
@customElement(`${constants.elementPrefix}tree-col`)
export class TreeCol {
  @bindable attributes;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable expandable;
  @bindable field;
  @bindable filterable;
  @bindable footerTemplate;
  @bindable format = '';
  @bindable headerAttributes;
  @bindable headerTemplate;
  @bindable minScreenWidth;
  @bindable sortable;
  @bindable template;
  @bindable title;
  @bindable width;
  @bindable hidden;
  @bindable menu;
  @bindable locked;
  @bindable lockable;
  @bindable withKendoTemplates = false;

  constructor(targetInstruction) {
    this.template = targetInstruction.elementInstruction.template;
  }
}
