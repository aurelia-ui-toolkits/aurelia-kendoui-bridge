import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {OptionsBuilder} from '../common/options-builder';

@customElement(`${constants.elementPrefix}toolbar-item-button`)
@generateBindables('ToolBarItemButton')
@inject(OptionsBuilder)
export class ToolbarItemButton {

  constructor(optionsBuilder) {
    this.optionsBuilder = optionsBuilder;
  }

  getOptions() {
    return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
  }
}
