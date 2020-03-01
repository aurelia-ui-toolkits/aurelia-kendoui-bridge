define(['exports', 'aurelia-logging', 'aurelia-pal'], function (exports, _aureliaLogging, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KendoConfigBuilder = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var KendoConfigBuilder = exports.KendoConfigBuilder = function () {
    function KendoConfigBuilder() {
      _classCallCheck(this, KendoConfigBuilder);

      this.resources = [];
      this.registerRepeatStrategy = true;
      this._propogatePreventDefault = false;

      this.logger = LogManager.getLogger('aurelia-kendoui-bridge');
    }

    KendoConfigBuilder.prototype.detect = function detect() {
      if (!window.kendo) return this;

      this.kendoTemplateSupport().useValueConverters();

      var kendoControls = kendo.widgets.map(function (w) {
        return w.name;
      });
      for (var i = 0; i < kendoControls.length; i++) {
        if (this[kendoControls[i]]) {
          this[kendoControls[i]]();
        }
      }

      return this;
    };

    KendoConfigBuilder.prototype.core = function core() {
      this.kendoAutoComplete().kendoButton().kendoMobileButtonGroup().kendoCalendar().kendoColorPicker().kendoColorPalette().kendoComboBox().kendoContextMenu().kendoDialog().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoDateRangePicker().kendoDraggable().kendoDropTarget().kendoFlatColorPicker().kendoListView().kendoMaskedTextBox().kendoMenu().kendoMultiSelect().kendoNotification().kendoNumericTextBox().kendoPanelBar().kendoPopup().kendoProgressBar().kendoRangeSlider().kendoResponsivePanel().kendoMobileScrollView().kendoSortable().kendoSlider().kendoSplitter().kendoMobileSwitch().kendoTabStrip().kendoTemplateSupport().kendoTimePicker().kendoToolBar().kendoTooltip().kendoValidator().kendoWindow().useValueConverters();
      return this;
    };

    KendoConfigBuilder.prototype.pro = function pro() {
      this.core().kendoBarcode().kendoChart().kendoChat().kendoDiagram().kendoDropDownTree().kendoEditor().kendoFilterMenu().kendoGantt().kendoGrid().kendoMap().kendoLinearGauge().kendoPager().kendoPivotGrid().kendoQRCode().kendoRadialGauge().kendoScheduler().kendoTreeList().kendoTreeView().kendoUpload();

      return this;
    };

    KendoConfigBuilder.prototype.useValueConverters = function useValueConverters() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./valueconverters/valueconverters'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoTemplateSupport = function kendoTemplateSupport() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./common/template'));
      return this;
    };

    KendoConfigBuilder.prototype.propogatePreventDefault = function propogatePreventDefault() {
      this._propogatePreventDefault = true;
      return this;
    };

    KendoConfigBuilder.prototype.debug = function debug() {
      logger.warn('.debug() is no longer needed and will be removed in the future.');
      return this;
    };

    KendoConfigBuilder.prototype.notifyBindingBehavior = function notifyBindingBehavior() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./common/notify-binding-behavior'));
      return this;
    };

    KendoConfigBuilder.prototype.withTemplateCallback = function withTemplateCallback(callback) {
      this.templateCallback = callback;
      return this;
    };

    KendoConfigBuilder.prototype.withoutRepeatStrategy = function withoutRepeatStrategy() {
      this.registerRepeatStrategy = false;
    };

    KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoBarcode = function kendoBarcode() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./barcode/barcode'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoCalendar = function kendoCalendar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./calendar/calendar'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/chart'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/sparkline'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/stock'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/treemap'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoChat = function kendoChat() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chat/chat'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoComboBox = function kendoComboBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./combobox/combobox'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoContextMenu = function kendoContextMenu() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./contextmenu/contextmenu'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./colorpicker/colorpicker'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoColorPalette = function kendoColorPalette() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./colorpalette/colorpalette'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDateInput = function kendoDateInput() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./dateinput/dateinput'));
    };

    KendoConfigBuilder.prototype.kendoDateTimePicker = function kendoDateTimePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./datetimepicker/datetimepicker'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDateRangePicker = function kendoDateRangePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./daterangepicker/daterangepicker'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDiagram = function kendoDiagram() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./diagram/diagram'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDialog = function kendoDialog() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./dialog/dialog'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDraggable = function kendoDraggable() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./draggable/draggable'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./dropdownlist/dropdownlist'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDropDownTree = function kendoDropDownTree() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./dropdowntree/dropdowntree'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoDropTarget = function kendoDropTarget() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./drop-target/drop-target'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./drop-target/drop-target-area'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoEditor = function kendoEditor() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./editor/editor'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoFilterMenu = function kendoFilterMenu() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./filter-menu/filter-menu'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoFlatColorPicker = function kendoFlatColorPicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./flatcolorpicker/flatcolorpicker'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoGantt = function kendoGantt() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./gantt/gantt'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./gantt/gantt-col'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/col'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid-toolbar'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid-command'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoLinearGauge = function kendoLinearGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./gauges/linear-gauge'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoArcGauge = function kendoArcGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./gauges/arc-gauge'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoListView = function kendoListView() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./listview/listview'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoListBox = function kendoListBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./listbox/listbox'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoNotification = function kendoNotification() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./notification/notification'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./notification/notification-template'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMap = function kendoMap() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/map'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./menu/menu'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMaskedTextBox = function kendoMaskedTextBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./maskedtextbox/maskedtextbox'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMobileButtonGroup = function kendoMobileButtonGroup() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./buttongroup/buttongroup'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMultiSelect = function kendoMultiSelect() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./multiselect/multiselect'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoNumericTextBox = function kendoNumericTextBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./numerictextbox/numerictextbox'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoPager = function kendoPager() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pager/pager'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoPanelBar = function kendoPanelBar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./panelbar/panelbar'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoPivotGrid = function kendoPivotGrid() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgrid/pivotgrid'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgrid/pivotconfigurator'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoPopup = function kendoPopup() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./popup/popup'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./progressbar/progressbar'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoQRCode = function kendoQRCode() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./qrcode/qrcode'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoRadialGauge = function kendoRadialGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./gauges/radial-gauge'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoResponsivePanel = function kendoResponsivePanel() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./responsivepanel/responsivepanel'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMediaPlayer = function kendoMediaPlayer() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./mediaplayer/mediaplayer'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMobileScrollView = function kendoMobileScrollView() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./scrollview/scrollview'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./scheduler/scheduler'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoSortable = function kendoSortable() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./sortable/sortable'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoSpreadsheet = function kendoSpreadsheet() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/spreadsheet'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoSplitter = function kendoSplitter() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitter/splitter'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoMobileSwitch = function kendoMobileSwitch() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./switch/switch'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./tabstrip/tabstrip'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoTreeList = function kendoTreeList() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treelist/treelist'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treelist/tree-col'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treeview/treeview'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoTimePicker = function kendoTimePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./timepicker/timepicker'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoToolBar = function kendoToolBar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar-item'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar-item-button'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoTooltip = function kendoTooltip() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoRangeSlider = function kendoRangeSlider() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangeslider/rangeslider'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoUpload = function kendoUpload() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./upload/upload'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoValidator = function kendoValidator() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./validator/validator'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoWindow = function kendoWindow() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./window/window'));
      return this;
    };

    KendoConfigBuilder.prototype.kendoButtonGroup = function kendoButtonGroup() {
      this.logger.warn('kendoButtonGroup is deprecated, use .kendoMobileButtonGroup() instead');
      return this.kendoMobileButtonGroup();
    };

    KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
      this.logger.warn('kendoCombobox is deprecated, use .kendoComboBox() instead');
      return this.kendoComboBox();
    };

    KendoConfigBuilder.prototype.kendoScrollView = function kendoScrollView() {
      this.logger.warn('kendoScrollView is deprecated, use .kendoMobileScrollView() instead');
      return this.kendoMobileScrollView();
    };

    KendoConfigBuilder.prototype.kendoSwitch = function kendoSwitch() {
      this.logger.warn('kendoSwitch is deprecated, use .kendoMobileSwitch() instead');
      return this.kendoMobileSwitch();
    };

    KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
      this.logger.warn('kendoToolbar is deprecated, use .kendoToolBar() instead');
      return this.kendoToolBar();
    };

    return KendoConfigBuilder;
  }();
});