/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers including templating support
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoCalendar()
      .kendoColorPicker()
      .kendoColorPalette()
      .kendoCombobox()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoFlatColorPicker()
      .kendoListView()
      .kendoMaskedTextBox()
      .kendoNumericTextBox()
      .kendoPanelBar()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoSlider()
      .kendoTabStrip()
      .kendoTemplateSupport()
      .kendoTimePicker()
      .useValueConverters();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoAutoComplete()
      .kendoChart()
      .kendoEditor()
      .kendoGrid()
      .kendoScheduler()
      .kendoTreeList()
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

  /**
  * Registers value converters (wrappers around kendo functions)
  */
  useValueConverters(): KendoConfigBuilder {
    this.resources.push('valueconverters/valueconverters');
    return this;
  }

  /**
  * Adds kendo templating support
  */
  kendoTemplateSupport(): KendoConfigBuilder {
    this.resources.push('common/k-template');
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

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push('calendar/calendar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('combobox/combobox');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('colorpicker/colorpicker');
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push('colorpalette/colorpalette');
    return this;
  }
  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push('datepicker/datepicker');
    return this;
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push('datetimepicker/datetimepicker');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push('kendoEditor/kendoEditor');
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push('flatcolorpicker/flatcolorpicker');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('grid/grid');
    this.resources.push('grid/k-col');
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push('listview/listview');
    this.resources.push('listview/k-list-template');
    this.resources.push('listview/k-list-edit-template');
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push('menu/menu');
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push('maskedtextbox/maskedtextbox');
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push('numerictextbox/numerictextbox');
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push('panelbar/panelbar');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('progressbar/progressbar');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('scheduler/scheduler');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('slider/slider');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('tabstrip/tabstrip');
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push('treelist/treelist');
    this.resources.push('treelist/k-tree-col');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('toolbar/toolbar');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('treeview/treeview');
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push('timepicker/timepicker');
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push('rangeslider/rangeslider');
    return this;
  }
}
