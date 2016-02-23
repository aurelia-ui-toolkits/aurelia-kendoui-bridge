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
      .kendoDraggable()
      .kendoDropTarget()
      .kendoFlatColorPicker()
      .kendoListView()
      .kendoMap()
      .kendoMaskedTextBox()
      .kendoMenu()
      .kendoMultiselect()
      .kendoNumericTextBox()
      .kendoPanelBar()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoSlider()
      .kendoSwitch()
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
      .kendoBarcode()
      .kendoChart()
      .kendoDiagram()
      .kendoEditor()
      .kendoGrid()
      .kendoLinearGauge()
      .kendoRadialGauge()
      .kendoScheduler()
      .kendoTreeList()
      .kendoTreeView()
      .kendoUpload();
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

  kendoBarcode(): KendoConfigBuilder {
    this.resources.push('barcode/barcode');
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

  kendoDiagram(): KendoConfigBuilder {
    this.resources.push('diagram/diagram');
    return this;
  }

  kendoDraggable(): KendoConfigBuilder {
    this.resources.push('draggable/draggable');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  }

  kendoDropTarget(): KendoConfigBuilder {
    this.resources.push('drop-target/drop-target');
    this.resources.push('drop-target/drop-target-area');
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push('editor/editor');
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

  kendoLinearGauge(): KendoConfigBuilder {
    this.resources.push('gauges/linear-gauge');
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push('listview/listview');
    this.resources.push('listview/k-list-template');
    this.resources.push('listview/k-list-edit-template');
    return this;
  }

  kendoMap(): KendoConfigBuilder {
    this.resources.push('map/map');
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

  kendoMultiselect(): KendoConfigBuilder {
    this.resources.push('multiselect/multiselect');
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

  kendoRadialGauge(): KendoConfigBuilder {
    this.resources.push('gauges/radial-gauge');
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

  kendoSwitch(): KendoConfigBuilder {
    this.resources.push('switch/switch');
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

  kendoUpload(): KendoConfigBuilder {
    this.resources.push('upload/upload');
    return this;
  }
}
