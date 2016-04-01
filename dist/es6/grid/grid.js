import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';
import {TemplateGatherer} from '../common/template-gatherer';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo.data.signalr.min';
import 'kendo.filtercell.min';
import 'kendo.grid.min';

@customElement(`${constants.elementPrefix}grid`)
@generateBindables('kendoGrid')
@inject(Element, WidgetBase, ViewResources, OptionsBuilder, TemplateGatherer)
export class Grid  {

  @children(`${constants.elementPrefix}col`) columns;
  @children(`${constants.elementPrefix}template`) templates;
  @children(`${constants.elementPrefix}grid-toolbar`) gridToolbars;
  @bindable kOptions = {};

  constructor(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
    this.element = element;
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
                        .control('kendoGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
  }

  // initialization in bind() is giving issues in some scenarios
  // so, attached() is used for this control
  attached() {
    // if <table> exists, initialize on that
    // if <div> exists, initialize on that
    // if neither exists, create <div>
    // grid needs to be initialized on a div https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/358
    if (isInitFromDiv(this.element)) {
      this.target = this.element.querySelectorAll('div')[0];
    } else if (isInitFromTable(this.element)) {
      this.target = this.element.children[0];
    } else {
      this.target = document.createElement('div');
      this.element.appendChild(this.target);
    }

    this.recreate();
  }

  recreate() {
    this.templateGatherer.useTemplates(this, 'kendoGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.target,
      rootElement: this.element,
      parentCtx: this.$parent,
      beforeInitialize: (o) => this._beforeInitialize(o)
    });
  }

  _beforeInitialize(options) {
    // allow for both column definitions via HTML and via an array of columns
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(column => {
        options.columns.push(this.optionsBuilder.getOptions(column, 'GridColumn'));
      });
    }

    if (this.gridToolbars && this.gridToolbars.length > 0) {
      options.toolbar = [];

      this.gridToolbars.forEach(toolbar => {
        options.toolbar.push(this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem'));
      });
    }
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}

// if the first child node is a table tag
// then the user wants to initialize the Kendo Grid from an
// existing table
function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}
