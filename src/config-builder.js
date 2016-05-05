/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {

	resources: string[] = [];
  debugMode = false;
  registerRepeatStrategy = true;

  /**
  * Globally register all Kendo Core wrappers including templating support
  */
  core(): KendoConfigBuilder {
    this.kendoAutoComplete()
      .kendoButton()
      .kendoButtonGroup()
      .kendoCalendar()
      .kendoColorPicker()
      .kendoColorPalette()
      .kendoCombobox()
      .kendoContextMenu()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoDraggable()
      .kendoDropTarget()
      .kendoFlatColorPicker()
      .kendoListView()
      .kendoMaskedTextBox()
      .kendoMenu()
      .kendoMultiSelect()
      .kendoNotification()
      .kendoNumericTextBox()
      .kendoPanelBar()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoResponsivePanel()
      .kendoScrollView()
      .kendoSortable()
      .kendoSlider()
      .kendoSplitter()
      .kendoSwitch()
      .kendoTabStrip()
      .kendoTemplateSupport()
      .kendoTimePicker()
      .kendoToolbar()
      .kendoTooltip()
      .kendoValidator()
      .kendoWindow()
      .useValueConverters();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoBarcode()
      .kendoChart()
      .kendoDiagram()
      .kendoEditor()
      .kendoGantt()
      .kendoGrid()
      .kendoMap()
      .kendoLinearGauge()
      .kendoPivotGrid()
      .kendoQRCode()
      .kendoRadialGauge()
      .kendoScheduler()
      .kendoTreeList()
      .kendoTreeView()
      .kendoUpload();
    return this;
  }

  /**
  * Registers value converters (wrappers around kendo functions)
  */
  useValueConverters(): KendoConfigBuilder {
    this.resources.push('./valueconverters/valueconverters');
    return this;
  }

  /**
  * Adds kendo templating support
  */
  kendoTemplateSupport(): KendoConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }

  /**
  * Adds kendo templating support
  */
  debug(): KendoConfigBuilder {
    this.debugMode = true;
    return this;
  }

  /**
  * Don't register an array repeat strategy for kendo.data.ObservableArray
  */
  withoutRepeatStrategy() {
    this.registerRepeatStrategy = false;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }

  kendoButtonGroup(): KendoConfigBuilder {
    this.resources.push('./buttongroup/buttongroup');
    return this;
  }

  kendoBarcode(): KendoConfigBuilder {
    this.resources.push('./barcode/barcode');
    return this;
  }

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push('./calendar/calendar');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/sparkline');
    this.resources.push('./chart/stock');
    this.resources.push('./chart/treemap');
    return this;
  }

  kendoCombobox(): KendoConfigBuilder {
    this.resources.push('./combobox/combobox');
    return this;
  }

  kendoContextMenu(): KendoConfigBuilder {
    this.resources.push('./contextmenu/contextmenu');
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push('./colorpalette/colorpalette');
    return this;
  }

  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push('./datepicker/datepicker');
    return this;
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  }

  kendoDiagram(): KendoConfigBuilder {
    this.resources.push('./diagram/diagram');
    return this;
  }

  kendoDraggable(): KendoConfigBuilder {
    this.resources.push('./draggable/draggable');
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  }

  kendoDropTarget(): KendoConfigBuilder {
    this.resources.push('./drop-target/drop-target');
    this.resources.push('./drop-target/drop-target-area');
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push('./editor/editor');
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push('./flatcolorpicker/flatcolorpicker');
    return this;
  }

  kendoGantt(): KendoConfigBuilder {
    this.resources.push('./gantt/gantt');
    this.resources.push('./gantt/gantt-col');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/col');
    this.resources.push('./grid/grid-toolbar');
    return this;
  }

  kendoLinearGauge(): KendoConfigBuilder {
    this.resources.push('./gauges/linear-gauge');
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push('./listview/listview');
    return this;
  }

  kendoNotification(): KendoConfigBuilder {
    this.resources.push('./notification/notification');
    this.resources.push('./notification/notification-template');
    return this;
  }

  kendoMap(): KendoConfigBuilder {
    this.resources.push('./map/map');
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push('./maskedtextbox/maskedtextbox');
    return this;
  }

  kendoMultiSelect(): KendoConfigBuilder {
    this.resources.push('./multiselect/multiselect');
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push('./panelbar/panelbar');
    return this;
  }

  kendoPivotGrid(): KendoConfigBuilder {
    this.resources.push('./pivotgrid/pivotgrid');
    this.resources.push('./pivotgrid/pivotconfigurator');
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push('./progressbar/progressbar');
    return this;
  }

  kendoQRCode(): KendoConfigBuilder {
    this.resources.push('./qrcode/qrcode');
    return this;
  }

  kendoRadialGauge(): KendoConfigBuilder {
    this.resources.push('./gauges/radial-gauge');
    return this;
  }

  kendoResponsivePanel(): KendoConfigBuilder {
    this.resources.push('./responsivepanel/responsivepanel');
    return this;
  }

  kendoScrollView(): KendoConfigBuilder {
    this.resources.push('./scrollview/scrollview');
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push('./scheduler/scheduler');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('./slider/slider');
    return this;
  }

  kendoSortable(): KendoConfigBuilder {
    this.resources.push('./sortable/sortable');
    return this;
  }

  kendoSpreadsheet(): KendoConfigBuilder {
    this.resources.push('./spreadsheet/spreadsheet');
    return this;
  }

  kendoSplitter(): KendoConfigBuilder {
    this.resources.push('./splitter/splitter');
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push('./slider/slider');
    return this;
  }

  kendoSwitch(): KendoConfigBuilder {
    this.resources.push('./switch/switch');
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push('./tabstrip/tabstrip');
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push('./treelist/treelist');
    this.resources.push('./treelist/tree-col');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push('./treeview/treeview');
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push('./timepicker/timepicker');
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    this.resources.push('./toolbar/toolbar-item');
    this.resources.push('./toolbar/toolbar-item-button');
    return this;
  }

  kendoTooltip(): KendoConfigBuilder {
    this.resources.push('./tooltip/tooltip');
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push('./rangeslider/rangeslider');
    return this;
  }

  kendoUpload(): KendoConfigBuilder {
    this.resources.push('./upload/upload');
    return this;
  }

  kendoValidator(): KendoConfigBuilder {
    this.resources.push('./validator/validator');
    return this;
  }

  kendoWindow(): KendoConfigBuilder {
    this.resources.push('./window/window');
    return this;
  }
}
