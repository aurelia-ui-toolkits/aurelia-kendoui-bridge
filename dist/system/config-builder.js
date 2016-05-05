System.register([], function (_export) {
  'use strict';

  var KendoConfigBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      KendoConfigBuilder = (function () {
        function KendoConfigBuilder() {
          _classCallCheck(this, KendoConfigBuilder);

          this.resources = [];
          this.debugMode = false;
          this.registerRepeatStrategy = true;
        }

        KendoConfigBuilder.prototype.core = function core() {
          this.kendoAutoComplete().kendoButton().kendoButtonGroup().kendoCalendar().kendoColorPicker().kendoColorPalette().kendoCombobox().kendoContextMenu().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoDraggable().kendoDropTarget().kendoFlatColorPicker().kendoListView().kendoMaskedTextBox().kendoMenu().kendoMultiSelect().kendoNotification().kendoNumericTextBox().kendoPanelBar().kendoProgressBar().kendoRangeSlider().kendoResponsivePanel().kendoScrollView().kendoSortable().kendoSlider().kendoSplitter().kendoSwitch().kendoTabStrip().kendoTemplateSupport().kendoTimePicker().kendoToolbar().kendoTooltip().kendoValidator().kendoWindow().useValueConverters();
          return this;
        };

        KendoConfigBuilder.prototype.pro = function pro() {
          this.core().kendoBarcode().kendoChart().kendoDiagram().kendoEditor().kendoGantt().kendoGrid().kendoMap().kendoLinearGauge().kendoPivotGrid().kendoQRCode().kendoRadialGauge().kendoScheduler().kendoTreeList().kendoTreeView().kendoUpload();
          return this;
        };

        KendoConfigBuilder.prototype.useValueConverters = function useValueConverters() {
          this.resources.push('./valueconverters/valueconverters');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTemplateSupport = function kendoTemplateSupport() {
          this.resources.push('./common/template');
          return this;
        };

        KendoConfigBuilder.prototype.debug = function debug() {
          this.debugMode = true;
          return this;
        };

        KendoConfigBuilder.prototype.withoutRepeatStrategy = function withoutRepeatStrategy() {
          this.registerRepeatStrategy = false;
        };

        KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
          this.resources.push('./autocomplete/autocomplete');
          return this;
        };

        KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
          this.resources.push('./button/button');
          return this;
        };

        KendoConfigBuilder.prototype.kendoButtonGroup = function kendoButtonGroup() {
          this.resources.push('./buttongroup/buttongroup');
          return this;
        };

        KendoConfigBuilder.prototype.kendoBarcode = function kendoBarcode() {
          this.resources.push('./barcode/barcode');
          return this;
        };

        KendoConfigBuilder.prototype.kendoCalendar = function kendoCalendar() {
          this.resources.push('./calendar/calendar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
          this.resources.push('./chart/chart');
          this.resources.push('./chart/sparkline');
          this.resources.push('./chart/stock');
          this.resources.push('./chart/treemap');
          return this;
        };

        KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
          this.resources.push('./combobox/combobox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoContextMenu = function kendoContextMenu() {
          this.resources.push('./contextmenu/contextmenu');
          return this;
        };

        KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
          this.resources.push('./colorpicker/colorpicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoColorPalette = function kendoColorPalette() {
          this.resources.push('./colorpalette/colorpalette');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
          this.resources.push('./datepicker/datepicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDateTimePicker = function kendoDateTimePicker() {
          this.resources.push('./datetimepicker/datetimepicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDiagram = function kendoDiagram() {
          this.resources.push('./diagram/diagram');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDraggable = function kendoDraggable() {
          this.resources.push('./draggable/draggable');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
          this.resources.push('./dropdownlist/dropdownlist');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDropTarget = function kendoDropTarget() {
          this.resources.push('./drop-target/drop-target');
          this.resources.push('./drop-target/drop-target-area');
          return this;
        };

        KendoConfigBuilder.prototype.kendoEditor = function kendoEditor() {
          this.resources.push('./editor/editor');
          return this;
        };

        KendoConfigBuilder.prototype.kendoFlatColorPicker = function kendoFlatColorPicker() {
          this.resources.push('./flatcolorpicker/flatcolorpicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoGantt = function kendoGantt() {
          this.resources.push('./gantt/gantt');
          this.resources.push('./gantt/gantt-col');
          return this;
        };

        KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
          this.resources.push('./grid/grid');
          this.resources.push('./grid/col');
          this.resources.push('./grid/grid-toolbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoLinearGauge = function kendoLinearGauge() {
          this.resources.push('./gauges/linear-gauge');
          return this;
        };

        KendoConfigBuilder.prototype.kendoListView = function kendoListView() {
          this.resources.push('./listview/listview');
          return this;
        };

        KendoConfigBuilder.prototype.kendoNotification = function kendoNotification() {
          this.resources.push('./notification/notification');
          this.resources.push('./notification/notification-template');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMap = function kendoMap() {
          this.resources.push('./map/map');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
          this.resources.push('./menu/menu');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMaskedTextBox = function kendoMaskedTextBox() {
          this.resources.push('./maskedtextbox/maskedtextbox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMultiSelect = function kendoMultiSelect() {
          this.resources.push('./multiselect/multiselect');
          return this;
        };

        KendoConfigBuilder.prototype.kendoNumericTextBox = function kendoNumericTextBox() {
          this.resources.push('./numerictextbox/numerictextbox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoPanelBar = function kendoPanelBar() {
          this.resources.push('./panelbar/panelbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoPivotGrid = function kendoPivotGrid() {
          this.resources.push('./pivotgrid/pivotgrid');
          this.resources.push('./pivotgrid/pivotconfigurator');
          return this;
        };

        KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
          this.resources.push('./progressbar/progressbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoQRCode = function kendoQRCode() {
          this.resources.push('./qrcode/qrcode');
          return this;
        };

        KendoConfigBuilder.prototype.kendoRadialGauge = function kendoRadialGauge() {
          this.resources.push('./gauges/radial-gauge');
          return this;
        };

        KendoConfigBuilder.prototype.kendoResponsivePanel = function kendoResponsivePanel() {
          this.resources.push('./responsivepanel/responsivepanel');
          return this;
        };

        KendoConfigBuilder.prototype.kendoScrollView = function kendoScrollView() {
          this.resources.push('./scrollview/scrollview');
          return this;
        };

        KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
          this.resources.push('./scheduler/scheduler');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
          this.resources.push('./slider/slider');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSortable = function kendoSortable() {
          this.resources.push('./sortable/sortable');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSpreadsheet = function kendoSpreadsheet() {
          this.resources.push('./spreadsheet/spreadsheet');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSplitter = function kendoSplitter() {
          this.resources.push('./splitter/splitter');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
          this.resources.push('./slider/slider');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSwitch = function kendoSwitch() {
          this.resources.push('./switch/switch');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
          this.resources.push('./tabstrip/tabstrip');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTreeList = function kendoTreeList() {
          this.resources.push('./treelist/treelist');
          this.resources.push('./treelist/tree-col');
          return this;
        };

        KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
          this.resources.push('./toolbar/toolbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
          this.resources.push('./treeview/treeview');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTimePicker = function kendoTimePicker() {
          this.resources.push('./timepicker/timepicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
          this.resources.push('./toolbar/toolbar');
          this.resources.push('./toolbar/toolbar-item');
          this.resources.push('./toolbar/toolbar-item-button');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTooltip = function kendoTooltip() {
          this.resources.push('./tooltip/tooltip');
          return this;
        };

        KendoConfigBuilder.prototype.kendoRangeSlider = function kendoRangeSlider() {
          this.resources.push('./rangeslider/rangeslider');
          return this;
        };

        KendoConfigBuilder.prototype.kendoUpload = function kendoUpload() {
          this.resources.push('./upload/upload');
          return this;
        };

        KendoConfigBuilder.prototype.kendoValidator = function kendoValidator() {
          this.resources.push('./validator/validator');
          return this;
        };

        KendoConfigBuilder.prototype.kendoWindow = function kendoWindow() {
          this.resources.push('./window/window');
          return this;
        };

        return KendoConfigBuilder;
      })();

      _export('KendoConfigBuilder', KendoConfigBuilder);
    }
  };
});