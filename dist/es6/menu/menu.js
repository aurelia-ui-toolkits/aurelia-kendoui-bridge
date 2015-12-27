import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'kendo-ui/js/jquery.min';
import 'kendo-ui/js/kendo.menu.min';

@customElement('k-menu')
@generateBindables('kendoMenu')
@inject(Element)
export class Menu extends WidgetBase {

  @bindable options = {};
  @bindable kDataSource;

  constructor(element) {
    super('kendoMenu', element);
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    let ul = $(this.element).find('ul');
    if (ul.has()) {
      this.target = $(this.element).find('ul').first();
    } else {
      this.target = $(this.element).appendChild('<ul></ul>');
    }

    super._initialize();
  }
}
