import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.treeview.min';

@customAttribute('k-treeview')
@generateBindables('kendoTreeView')
@inject(Element, WidgetBase)
export class TreeView {
  @bindable options = {};

  constructor(element, widgetBase) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoTreeView')
                        .linkViewModel(this)
                        .setDefaultBindableValues();

    // kendo tree view has a wrong default value for the dataSource
    this.kDataSource = undefined;
  }

  bind(ctx) {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: ctx
    });
  }
}
