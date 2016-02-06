import {children, customElement, bindable} from 'aurelia-templating';
import {constants} from '../common/constants';
import {templateProperty} from '../common/decorators';
import {useTemplates} from '../common/templating';

@customElement(`${constants.elementPrefix}tree-col`)
export class TreeCol {
  @bindable attributes;
  @bindable command;
  @bindable editor;
  @bindable encoded;
  @bindable expandable;
  @bindable field;
  @bindable filterable;
  @templateProperty() footerTemplate;
  @bindable format = '';
  @bindable headerAttributes;
  @templateProperty() headerTemplate;
  @bindable minScreenWidth;
  @bindable sortable;
  @templateProperty(true) template;
  @bindable title;
  @bindable width;
  @bindable hidden;
  @bindable menu;
  @bindable locked;
  @bindable lockable;
  @bindable withKendoTemplates = false;

  @children(`${constants.elementPrefix}template`) templateChildren;

  bind() {
    useTemplates(this, this.templateChildren);
  }
}
