import {children, customElement, bindable} from 'aurelia-templating';
import {constants} from '../common/constants';
import {templateProperty} from '../common/decorators';
import {useTemplates} from '../common/templating';
import {getKendoPropertyName} from '../common/util';

@customElement(`${constants.elementPrefix}col`)
export class Col {
  @bindable kAggregates;
  @bindable kAttributes;
  @bindable kColumns;
  @bindable kCommand;
  @bindable kEditor;
  @bindable kEncoded;
  @bindable kField;
  @bindable kFilterable;
  @templateProperty() kFooterTemplate;
  @bindable kFormat = '';
  @bindable kGroupable;
  @templateProperty() kGroupFooterTemplate;
  @templateProperty() kGroupHeaderTemplate;
  @bindable kHeaderAttributes;
  @templateProperty() kHeaderTemplate;
  @bindable kHidden;
  @bindable kLockable;
  @bindable kLocked;
  @bindable kMenu;
  @bindable kMinScreenWidth;
  @bindable kSortable;
  @bindable kTitle;
  @bindable kValues;
  @bindable kWidth;
  @templateProperty(true) kTemplate;

  // For multi template support
  @children(`${constants.elementPrefix}template`) templates;

  bind() {
    useTemplates(this, this.templates);
  }

  getOptions() {
    let props = {};

    for (let property in this) {
      if (property === 'templates') continue;

      if (this.hasOwnProperty(property)) {
        if (property.toLowerCase().indexOf('template') > -1) {
          props[getKendoPropertyName(property)] = () => this[property];
        } else {
          props[getKendoPropertyName(property)] = this[property];
        }
      }
    }

    return props;
  }
}
