import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {pruneOptions} from '../common/options';
import 'kendo-ui/js/kendo.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@generateBindables('kendoListView')
@inject(Element, WidgetBase, ViewResources)
export class ListView  {

  @bindable options = {};
  @children(`${constants.elementPrefix}list-template`) listTemplates;
  @children(`${constants.elementPrefix}list-edit-template`) listEditTemplates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoListView')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    let template;
    let editTemplate;

    if (this.kTemplate) {
      template = () => this.kTemplate;
    } else if (this.listTemplates.length > 0) {
      let templ = this.listTemplates[0].template;
      template = () => templ;
    }

    if (this.kEditTemplate) {
      editTemplate = () => this.kEditTemplate;
    } else if (this.listEditTemplates.length > 0) {
      let templ = this.listEditTemplates[0].template;
      editTemplate = () => templ;
    }

    return Object.assign(options, pruneOptions({
      editTemplate: editTemplate,
      template: template
    }));
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
