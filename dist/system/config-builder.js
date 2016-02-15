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
          this.useGlobalResources = true;
        }

        KendoConfigBuilder.prototype.core = function core() {
          this.kendoButton().kendoCalendar().kendoTabStrip().kendoProgressBar().kendoSlider().kendoRangeSlider().kendoDropDownList().kendoDateTimePicker().kendoDatePicker().kendoTimePicker().kendoMaskedTextBox().kendoNumericTextBox().kendoPanelBar().kendoColorPicker().kendoColorPalette().kendoFlatColorPicker();
          return this;
        };

        KendoConfigBuilder.prototype.pro = function pro() {
          this.core().kendoGrid().kendoAutoComplete().kendoChart().kendoTreeView().kendoScheduler().kendoTreeList();
          return this;
        };

        KendoConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
          this.resources.push('autocomplete/autocomplete');
          return this;
        };

        KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
          this.resources.push('button/button');
          return this;
        };

        KendoConfigBuilder.prototype.kendoCalendar = function kendoCalendar() {
          this.resources.push('calendar/calendar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
          this.resources.push('menu/menu');
          return this;
        };

        KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
          this.resources.push('combobox/combobox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
          this.resources.push('dropdownlist/dropdownlist');
          return this;
        };

        KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
          this.resources.push('grid/grid');
          this.resources.push('grid/k-col');
          return this;
        };

        KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
          this.resources.push('scheduler/scheduler');
          this.resources.push('scheduler/event-template');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
          this.resources.push('tabstrip/tabstrip');
          return this;
        };

        KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
          this.resources.push('toolbar/toolbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
          this.resources.push('chart/chart');
          this.resources.push('chart/sparkline');
          this.resources.push('chart/stock');
          this.resources.push('chart/treemap');
          return this;
        };

        KendoConfigBuilder.prototype.kendoPanelBar = function kendoPanelBar() {
          this.resources.push('panelbar/panelbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
          this.resources.push('progressbar/progressbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
          this.resources.push('slider/slider');
          return this;
        };

        KendoConfigBuilder.prototype.kendoRangeSlider = function kendoRangeSlider() {
          this.resources.push('rangeslider/rangeslider');
          return this;
        };

        KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
          this.resources.push('colorpicker/colorpicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoColorPalette = function kendoColorPalette() {
          this.resources.push('colorpalette/colorpalette');
          return this;
        };

        KendoConfigBuilder.prototype.kendoFlatColorPicker = function kendoFlatColorPicker() {
          this.resources.push('flatcolorpicker/flatcolorpicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
          this.resources.push('treeview/treeview');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
          this.resources.push('datepicker/datepicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDateTimePicker = function kendoDateTimePicker() {
          this.resources.push('datetimepicker/datetimepicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTimePicker = function kendoTimePicker() {
          this.resources.push('timepicker/timepicker');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMaskedTextBox = function kendoMaskedTextBox() {
          this.resources.push('maskedtextbox/maskedtextbox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoNumericTextBox = function kendoNumericTextBox() {
          this.resources.push('numerictextbox/numerictextbox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTreeList = function kendoTreeList() {
          this.resources.push('treelist/treelist');
          this.resources.push('treelist/k-tree-col');
          return this;
        };

        return KendoConfigBuilder;
      })();

      _export('KendoConfigBuilder', KendoConfigBuilder);
    }
  };
});