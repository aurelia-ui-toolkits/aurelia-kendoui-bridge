import {inject} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import 'kendo.spreadsheet.min';

@customElement(`${constants.elementPrefix}spreadsheet`)
@generateBindables('kendoSpreadsheet')
@inject(Element, WidgetBase)
export class Spreadsheet {

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                    .control('kendoSpreadsheet')
                    .linkViewModel(this);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  unbind() {
    this.widgetBase.destroy(this.kWidget);
  }
}
