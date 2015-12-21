import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.menu.min';

@customElement('au-kendo-menu')
@inject(Element)
export class Menu extends WidgetBase {

  @bindable options = {};

  @bindable animation;
  @bindable closeOnClick;
  @bindable dataSource;
  @bindable direction;
  @bindable hoverDelay;
  @bindable orientation;
  @bindable popupCollision;

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

  getOptions() {
    return {
      dataSource: this.dataSource,
      closeOnClick: this.closeOnClick,
      animation: this.animation,
      direction: this.direction,
      hoverDelay: this.hoverDelay,
      orientation: this.orientation,
      popupCollision: this.popupCollision
    };
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
