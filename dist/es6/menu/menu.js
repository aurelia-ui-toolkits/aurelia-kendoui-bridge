import {customElement, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.menu.min';

@customElement('au-kendo-menu')
@inject(Element)
export class Menu {

	_component;

  @bindable options;
  @bindable dataSource;
  @bindable closeOnClick;
  @bindable animation;
  @bindable direction;
  @bindable hoverDelay;
  @bindable orientation;
  @bindable popupCollision;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    let target;
    let ul = $(this.element).find('ul');
    if (ul.has()) {
      target = $(this.element).find('ul').first();
    } else {
      target = $(this.element).appendChild('<ul></ul>');
    }

    this._component = target.kendoMenu(this.getOptions()).data('kendoMenu');
  }

  detached() {
    if (this._component) {
      this._component.destroy();
    }
  }

  getOptions() {
    let options = pruneOptions({
      dataSource: this.dataSource,
      closeOnClick: this.closeOnClick,
      animation: this.animation,
      direction: this.direction,
      hoverDelay: this.hoverDelay,
      orientation: this.orientation,
      popupCollision: this.popupCollision,
      close: (e) => fireEvent(this.element, 'close', e),
      open: (e) => fireEvent(this.element, 'open', e),
      activate: (e) => fireEvent(this.element, 'activate', e),
      deactivate: (e) => fireEvent(this.element, 'deactivate', e),
      select: (e) => fireEvent(this.element, 'select', e)
    });

    return Object.assign({}, this.options, options);
  }
}
