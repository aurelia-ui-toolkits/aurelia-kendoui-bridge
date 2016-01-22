/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoColorPicker()
      .kendoDropDownList()
      .kendoDatePicker()
      .kendoNumericTextBox();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoGrid()
	  .kendoAutoComplete()
      .kendoChart()
      .kendoTreeView();
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): KendoConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push('button/button');
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push('menu/menu');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('slider/slider');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('treeview/treeview');
    return this;
  }

  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push('datepicker/datepicker');
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push('numerictextbox/numerictextbox');
    return this;
  }
}
