import * as LogManager from 'aurelia-logging';
import {PLATFORM} from 'aurelia-pal';

/**
* Configure the Aurelia-KendoUI-bridge
*/
export class KendoConfigBuilder {
 resources: string[] = [];
  registerRepeatStrategy = true;
  _propogatePreventDefault = false;

  constructor() {
    this.logger = LogManager.getLogger('aurelia-kendoui-bridge');
  }

  /**
  * Automatically detect which Kendo controls are loaded, and load matching wrappers
  */
  detect(): KendoConfigBuilder {
    if (!window.kendo) return this;

    this.kendoTemplateSupport()
      .useValueConverters();

    let kendoControls = kendo.widgets.map(w => w.name);
    for (let i = 0; i < kendoControls.length; i++) {
      if (this[kendoControls[i]]) {
        this[kendoControls[i]]();
      }
    }

    return this;
  }

  /**
  * Globally register all Kendo Core wrappers including templating support
  */
  core(): KendoConfigBuilder {
    this.kendoAutoComplete()
      .kendoButton()
      .kendoMobileButtonGroup()
      .kendoCalendar()
      .kendoColorPicker()
      .kendoColorPalette()
      .kendoComboBox()
      .kendoContextMenu()
      .kendoDialog()
      .kendoDropDownList()
      .kendoDateTimePicker()
      .kendoDatePicker()
      .kendoDateRangePicker()
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
      .kendoPopup()
      .kendoProgressBar()
      .kendoRangeSlider()
      .kendoResponsivePanel()
      .kendoMobileScrollView()
      .kendoSortable()
      .kendoSlider()
      .kendoSplitter()
      .kendoMobileSwitch()
      .kendoTabStrip()
      .kendoTemplateSupport()
      .kendoTimePicker()
      .kendoToolBar()
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
	  .kendoChat()
	  .kendoDiagram()
	  .kendoDropDownTree()
      .kendoEditor()
      .kendoFilterMenu()
      .kendoGantt()
      .kendoGrid()
      .kendoMap()
	  .kendoLinearGauge()
	  .kendoPager()
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
    this.resources.push(PLATFORM.moduleName('./valueconverters/valueconverters'));
    return this;
  }

  /**
  * Adds kendo templating support
  */
  kendoTemplateSupport(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/template'));
    return this;
  }

  /**
   * Propogates .preventDefault() to Kendo events
   */
  propogatePreventDefault(): KendoConfigBuilder {
    this._propogatePreventDefault = true;
    return this;
  }

  /**
  * Adds kendo templating support
  */
  debug(): KendoConfigBuilder {
    logger.warn('.debug() is no longer needed and will be removed in the future.');
    return this;
  }

  /**
  * Loads the notify binding behavior
  */
  notifyBindingBehavior(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/notify-binding-behavior'));
    return this;
  }

  /**
  * Custom callback for template modification
  */
  withTemplateCallback(callback): KendoConfigBuilder {
    this.templateCallback = callback;
    return this;
  }

  /**
  * Don't register an array repeat strategy for kendo.data.ObservableArray
  */
  withoutRepeatStrategy() {
    this.registerRepeatStrategy = false;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }

  kendoBarcode(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./barcode/barcode'));
    return this;
  }

  kendoCalendar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./calendar/calendar'));
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./chart/chart'));
    this.resources.push(PLATFORM.moduleName('./chart/sparkline'));
    this.resources.push(PLATFORM.moduleName('./chart/stock'));
    this.resources.push(PLATFORM.moduleName('./chart/treemap'));
    return this;
  }

  kendoChat(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./chat/chat'));
    return this;
  }

  kendoComboBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./combobox/combobox'));
    return this;
  }

  kendoContextMenu(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./contextmenu/contextmenu'));
    return this;
  }

  kendoColorPicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./colorpicker/colorpicker'));
    return this;
  }

  kendoColorPalette(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./colorpalette/colorpalette'));
    return this;
  }

  kendoDatePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  }

  kendoDateInput(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dateinput/dateinput'));
  }

  kendoDateTimePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datetimepicker/datetimepicker'));
    return this;
  }

  kendoDateRangePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./daterangepicker/daterangepicker'));
    return this;
  }

  kendoDiagram(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./diagram/diagram'));
    return this;
  }

  kendoDialog(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dialog/dialog'));
    return this;
  }

  kendoDraggable(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./draggable/draggable'));
    return this;
  }

  kendoDropDownList(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dropdownlist/dropdownlist'));
    return this;
  }

  kendoDropDownTree(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dropdowntree/dropdowntree'));
    return this;
  }

  kendoDropTarget(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./drop-target/drop-target'));
    this.resources.push(PLATFORM.moduleName('./drop-target/drop-target-area'));
    return this;
  }

  kendoEditor(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./editor/editor'));
    return this;
  }

  kendoFilterMenu(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./filter-menu/filter-menu'));
    return this;
  }

  kendoFlatColorPicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./flatcolorpicker/flatcolorpicker'));
    return this;
  }

  kendoGantt(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gantt/gantt'));
    this.resources.push(PLATFORM.moduleName('./gantt/gantt-col'));
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./grid/grid'));
    this.resources.push(PLATFORM.moduleName('./grid/col'));
    this.resources.push(PLATFORM.moduleName('./grid/grid-toolbar'));
    this.resources.push(PLATFORM.moduleName('./grid/grid-command'));
    return this;
  }

  kendoLinearGauge(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gauges/linear-gauge'));
    return this;
  }

  kendoArcGauge(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gauges/arc-gauge'));
    return this;
  }

  kendoListView(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listview/listview'));
    return this;
  }

  kendoListBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listbox/listbox'));
    return this;
  }

  kendoNotification(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./notification/notification'));
    this.resources.push(PLATFORM.moduleName('./notification/notification-template'));
    return this;
  }

  kendoMap(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./map/map'));
    return this;
  }

  kendoMenu(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./menu/menu'));
    return this;
  }

  kendoMaskedTextBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./maskedtextbox/maskedtextbox'));
    return this;
  }

  kendoMobileButtonGroup(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./buttongroup/buttongroup'));
    return this;
  }

  kendoMultiSelect(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./multiselect/multiselect'));
    return this;
  }

  kendoNumericTextBox(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./numerictextbox/numerictextbox'));
    return this;
  }

  kendoPager(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pager/pager'));
    return this;
  }

  kendoPanelBar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./panelbar/panelbar'));
    return this;
  }

  kendoPivotGrid(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotgrid'));
    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotconfigurator'));
    return this;
  }

  kendoPopup(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./popup/popup'));
    return this;
  }

  kendoProgressBar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./progressbar/progressbar'));
    return this;
  }

  kendoQRCode(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./qrcode/qrcode'));
    return this;
  }

  kendoRadialGauge(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gauges/radial-gauge'));
    return this;
  }

  kendoResponsivePanel(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./responsivepanel/responsivepanel'));
    return this;
  }

  kendoMediaPlayer(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./mediaplayer/mediaplayer'));
    return this;
  }

  kendoMobileScrollView(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./scrollview/scrollview'));
    return this;
  }

  kendoScheduler(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./scheduler/scheduler'));
    return this;
  }

  kendoSlider(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./slider/slider'));
    return this;
  }

  kendoSortable(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./sortable/sortable'));
    return this;
  }

  kendoSpreadsheet(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./spreadsheet/spreadsheet'));
    return this;
  }

  kendoSplitter(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./splitter/splitter'));
    return this;
  }

  kendoMobileSwitch(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./switch/switch'));
    return this;
  }

  kendoTabStrip(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tabstrip/tabstrip'));
    return this;
  }

  kendoTreeList(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treelist/treelist'));
    this.resources.push(PLATFORM.moduleName('./treelist/tree-col'));
    return this;
  }

  kendoToolbar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    return this;
  }

  kendoTreeView(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treeview/treeview'));
    return this;
  }

  kendoTimePicker(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./timepicker/timepicker'));
    return this;
  }

  kendoToolBar(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar-item'));
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar-item-button'));
    return this;
  }

  kendoTooltip(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  }

  kendoRangeSlider(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rangeslider/rangeslider'));
    return this;
  }

  kendoUpload(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./upload/upload'));
    return this;
  }

  kendoValidator(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./validator/validator'));
    return this;
  }

  kendoWindow(): KendoConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./window/window'));
    return this;
  }

  // deprecated
  kendoButtonGroup(): KendoConfigBuilder {
    this.logger.warn('kendoButtonGroup is deprecated, use .kendoMobileButtonGroup() instead');
    return this.kendoMobileButtonGroup();
  }

  kendoCombobox(): KendoConfigBuilder {
    this.logger.warn('kendoCombobox is deprecated, use .kendoComboBox() instead');
    return this.kendoComboBox();
  }

  kendoScrollView(): KendoConfigBuilder {
    this.logger.warn('kendoScrollView is deprecated, use .kendoMobileScrollView() instead');
    return this.kendoMobileScrollView();
  }

  kendoSwitch(): KendoConfigBuilder {
    this.logger.warn('kendoSwitch is deprecated, use .kendoMobileSwitch() instead');
    return this.kendoMobileSwitch();
  }

  kendoToolbar(): KendoConfigBuilder {
    this.logger.warn('kendoToolbar is deprecated, use .kendoToolBar() instead');
    return this.kendoToolBar();
  }
}
