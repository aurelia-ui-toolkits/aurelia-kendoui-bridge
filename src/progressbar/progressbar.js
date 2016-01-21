import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.progressbar.min';

@customAttribute('k-progress-bar')
@generateBindables('kendoProgressBar')
@inject(Element, WidgetBase)
export class ProgressBar {

  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoProgressBar')
                        .linkViewModel(this)
                        .setDefaultBindableValues();
  }

  bind(ctx) {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: ctx
    });
  }
}
