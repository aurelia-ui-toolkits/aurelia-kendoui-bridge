import * as LogManager from 'aurelia-logging';
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

    // Convert the resource names to paths
  resources = resources.map(r => r + '/' + r);

  aurelia.globalResources(resources);
}

class KendoConfigBuilder {

	resources = [];

  core() {
    this.kendoButton()
			.kendoTabStrip();
    return this;
  }

  pro() {
    this.core()
      .kendoGrid()
			.kendoAutoComplete();
    return this;
  }

  kendoAutoComplete() {
    this.resources.push('autocomplete');
    return this;
  }

  kendoButton() {
    this.resources.push('button');
    return this;
  }

  kendoCombobox() {
    this.resources.push('combobox');
    return this;
  }

  kendoDropDownList() {
    this.resources.push('dropdownlist');
    return this;
  }

  kendoGrid() {
    this.resources.push('grid');
    return this;
  }

  kendoScheduler() {
    this.resources.push('scheduler');
    return this;
  }

  kendoTabStrip() {
    this.resources.push('tabstrip');
    return this;
  }

  kendoToolbar() {
    this.resources.push('toolbar');
    return this;
  }
}
