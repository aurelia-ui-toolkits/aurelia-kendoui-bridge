import * as LogManager from 'aurelia-logging';
import 'kendo-ui/js/kendo.pdf.min';
import 'kendo-ui/js/jszip.min';
let logger = LogManager.getLogger('aurelia-kendoui-plugin');

export function configure(aurelia, configCallback) {
  let builder = new KendoConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Provide core if nothing was specified
  if (builder.resources.length === 0) {
    logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
    builder.core();
  }

    // Pull the data off the builder
  let resources = builder.resources;

  aurelia.globalResources(resources);
}

class KendoConfigBuilder {

	resources = [];

  core() {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoColorPicker()
      .kendoDropDownList();
    return this;
  }

  pro() {
    this.core()
      .kendoGrid()
			.kendoAutoComplete()
      .kendoChart();
    return this;
  }

  kendoAutoComplete() {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton() {
    this.resources.push('button/button');
    return this;
  }

  kendoMenu() {
    this.resources.push('menu/menu');
    return this;
  }

  kendoCombobox() {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoDropDownList() {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoGrid() {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  }

  kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoToolbar() {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoChart() {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoProgressBar() {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider() {
    this.resources.push('slider/slider');
    return this;
  }

  kendoColorPicker() {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }
}
