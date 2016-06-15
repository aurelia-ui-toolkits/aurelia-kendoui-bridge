'use strict';

System.register(['jquery', 'aurelia-logging', 'aurelia-templating-resources', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-metadata', 'aurelia-binding', 'aurelia-task-queue', 'kendo.data.min', './common/decorators', 'kendo.autocomplete.min', 'kendo.virtuallist.min', 'kendo.dataviz.barcode.min', 'kendo.button.min', 'kendo.mobile.buttongroup.min', 'kendo.calendar.min', 'kendo.dataviz.chart.min', 'kendo.dataviz.chart.polar.min', 'kendo.dataviz.chart.funnel.min', 'kendo.dataviz.sparkline.min', 'kendo.dataviz.stock.min', 'kendo.dataviz.treemap.min', 'kendo.colorpicker.min', 'kendo.combobox.min', 'kendo.menu.min', 'kendo.datepicker.min', 'kendo.datetimepicker.min', 'kendo.dataviz.diagram.min', 'kendo.draganddrop.min', 'kendo.dropdownlist.min', 'kendo.editor.min', 'kendo.gantt.min', 'kendo.dataviz.gauge.min', 'kendo.data.signalr.min', 'kendo.filtercell.min', 'kendo.grid.min', 'kendo.listview.min', 'kendo.dataviz.map.min', 'kendo.maskedtextbox.min', 'kendo.multiselect.min', 'kendo.notification.min', 'kendo.numerictextbox.min', 'kendo.panelbar.min', 'kendo.pdf.min', 'kendo.excel.min', 'kendo.pivot.configurator.min', 'kendo.pivotgrid.min', 'kendo.pivot.fieldmenu.min', 'kendo.progressbar.min', 'kendo.dataviz.qrcode.min', 'kendo.slider.min', 'kendo.responsivepanel.min', 'kendo.scheduler.min', 'kendo.scheduler.agendaview.min', 'kendo.scheduler.dayview.min', 'kendo.scheduler.monthview.min', 'kendo.scheduler.recurrence.min', 'kendo.scheduler.timelineview.min', 'kendo.mobile.scrollview.min', 'kendo.sortable.min', 'kendo.splitter.min', 'kendo.spreadsheet.min', 'kendo.mobile.switch.min', 'kendo.tabstrip.min', 'kendo.timepicker.min', 'kendo.toolbar.min', 'kendo.tooltip.min', 'kendo.treelist.min', 'kendo.treeview.min', 'kendo.upload.min', 'kendo.validator.min', 'kendo.window.min'], function (_export, _context) {
  "use strict";

  var LogManager, RepeatStrategyLocator, ArrayRepeatStrategy, inject, Container, transient, customElement, children, ViewResources, customAttribute, bindable, BindableProperty, HtmlBehaviorResource, TemplatingEngine, noView, processContent, TargetInstruction, metadata, bindingMode, EventManager, createOverrideContext, Lexer, ParserImplementation, TaskQueue, _typeof, _dec, _dec2, _dec3, _dec4, _class2, _desc, _value, _class3, _descriptor, _dec5, _dec6, _dec7, _class5, _dec8, _dec9, _dec10, _class6, _desc2, _value2, _class7, _descriptor2, _dec11, _dec12, _dec13, _class9, _desc3, _value3, _class10, _descriptor3, _dec14, _dec15, _dec16, _class12, _dec17, _dec18, _dec19, _class13, _dec20, _dec21, _dec22, _class14, _dec23, _dec24, _dec25, _class15, _dec26, _dec27, _dec28, _class16, _dec29, _dec30, _dec31, _class17, _dec32, _dec33, _dec34, _class18, _desc4, _value4, _class19, _descriptor4, _dec35, _dec36, _dec37, _dec38, _class21, _desc5, _value5, _class22, _descriptor5, _descriptor6, _descriptor7, _dec39, _class24, _dec40, _class26, _dec41, _class27, _dec42, _class28, _dec43, _class30, _dec44, _dec45, _dec46, _dec47, _class32, _desc6, _value6, _class33, _descriptor8, _descriptor9, _descriptor10, _dec48, _dec49, _class35, _dec50, _dec51, _dec52, _class37, _dec53, _dec54, _dec55, _class38, _desc7, _value7, _class39, _descriptor11, _descriptor12, _dec56, _dec57, _dec58, _class41, _desc8, _value8, _class42, _descriptor13, _descriptor14, _dec59, _dec60, _dec61, _class44, _dec62, _dec63, _dec64, _class45, _dec65, _dec66, _dec67, _class46, _dec68, _dec69, _dec70, _class47, _dec71, _dec72, _dec73, _dec74, _class48, _desc9, _value9, _class49, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _dec75, _dec76, _dec77, _class51, _dec78, _dec79, _dec80, _class52, _dec81, _dec82, _dec83, _class53, _dec84, _dec85, _dec86, _dec87, _dec88, _class54, _desc10, _value10, _class55, _descriptor19, _descriptor20, _dec89, _dec90, _dec91, _class57, _dec92, _dec93, _dec94, _class58, _dec95, _dec96, _dec97, _dec98, _dec99, _class59, _desc11, _value11, _class60, _descriptor21, _descriptor22, _dec100, _dec101, _dec102, _dec103, _class62, _desc12, _value12, _class63, _descriptor23, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _class65, _desc13, _value13, _class66, _descriptor24, _descriptor25, _descriptor26, _dec110, _dec111, _dec112, _dec113, _class68, _desc14, _value14, _class69, _descriptor27, _dec114, _dec115, _dec116, _class71, _dec117, _dec118, _dec119, _class72, _desc15, _value15, _class73, _descriptor28, _descriptor29, _descriptor30, _dec120, _dec121, _dec122, _class75, _dec123, _dec124, _dec125, _dec126, _class76, _desc16, _value16, _class77, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _dec127, _dec128, _dec129, _dec130, _class79, _desc17, _value17, _class80, _descriptor35, _descriptor36, _dec131, _dec132, _dec133, _dec134, _class82, _desc18, _value18, _class83, _descriptor37, _dec135, _dec136, _dec137, _class85, _desc19, _value19, _class86, _descriptor38, _descriptor39, _dec138, _dec139, _dec140, _class88, _dec141, _dec142, _dec143, _class89, _dec144, _dec145, _dec146, _dec147, _class90, _desc20, _value20, _class91, _descriptor40, _dec148, _dec149, _dec150, _class93, _desc21, _value21, _class94, _descriptor41, _dec151, _dec152, _dec153, _class96, _dec154, _dec155, _dec156, _class97, _desc22, _value22, _class98, _descriptor42, _dec157, _dec158, _dec159, _class100, _dec160, _dec161, _dec162, _dec163, _class101, _desc23, _value23, _class102, _descriptor43, _dec164, _dec165, _dec166, _dec167, _class104, _desc24, _value24, _class105, _descriptor44, _dec168, _dec169, _dec170, _class107, _desc25, _value25, _class108, _descriptor45, _dec171, _dec172, _dec173, _class110, _dec174, _dec175, _dec176, _class111, _dec177, _dec178, _dec179, _class112, _dec180, _dec181, _dec182, _class113, _desc26, _value26, _class114, _descriptor46, _dec183, _dec184, _dec185, _class116, _dec186, _dec187, _dec188, _class117, _desc27, _value27, _class118, _descriptor47, _descriptor48, _descriptor49, _dec189, _dec190, _dec191, _class120, _dec192, _dec193, _dec194, _dec195, _dec196, _class121, _desc28, _value28, _class122, _descriptor50, _descriptor51, _dec197, _dec198, _dec199, _dec200, _class124, _desc29, _value29, _class125, _descriptor52, _dec201, _dec202, _dec203, _class127, _dec204, _dec205, _dec206, _dec207, _class128, _desc30, _value30, _class129, _descriptor53, _dec208, _dec209, _dec210, _dec211, _class131, _desc31, _value31, _class132, _descriptor54, _dec212, _dec213, _dec214, _class134, _dec215, _dec216, _dec217, _dec218, _class135, _desc32, _value32, _class136, _descriptor55, _dec219, _dec220, _dec221, _class138, _dec222, _dec223, _dec224, _class139, KendoConfigBuilder, AutoComplete, Barcode, Button, ButtonGroup, Calendar, Chart, Sparkline, Stock, TreeMap, ColorPalette, ColorPicker, ComboBox, bindables, constants, ControlProperties, NotifyBindingBehavior, OptionsBuilder, TemplateCompiler, TemplateGatherer, Template, capitalMatcher, Util, logger, WidgetBase, ContextMenu, DatePicker, DateTimePicker, Diagram, Draggabke, DropTargetArea, DropTarget, DropDownList, Editor, FlatColorPicker, GanttCol, Gantt, LinearGauge, RadialGauge, Col, GridToolbar, Grid, ListView, Map, MaskedTextBox, Menu, Multiselect, NotificationTemplate, Notification, NumericTextBox, PanelBar, PDF, PivotConfigurator, PivotGrid, ProgressBar, QRCode, RangeSlider, ResponsivePanel, Scheduler, Scrollview, Slider, Sortable, Splitter, Spreadsheet, Switch, TabStrip, TimePicker, ToolbarItemButton, ToolbarItem, Toolbar, Tooltip, TreeCol, TreeList, TreeView, Upload, Validator, kendoToStringValueConverter, kendoParseDateValueConverter, kendoParseIntValueConverter, kendoParseFloatValueConverter, kendoParseColorValueConverter, kendoStringifyValueConverter, kendoFormatValueConverter, Window;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  

  function getSelectNode(element) {
    return element.querySelectorAll('select');
  }

  function getSelectNode(element) {
    return element.querySelectorAll('select');
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }

  function isInitFromTable(element) {
    return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }

  function getSelectNode(element) {
    return element.querySelectorAll('select');
  }

  function hasListChildNode(element) {
    return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }

  return {
    setters: [function (_jquery) {}, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaTemplatingResources) {
      RepeatStrategyLocator = _aureliaTemplatingResources.RepeatStrategyLocator;
      ArrayRepeatStrategy = _aureliaTemplatingResources.ArrayRepeatStrategy;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
      transient = _aureliaDependencyInjection.transient;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
      BindableProperty = _aureliaTemplating.BindableProperty;
      HtmlBehaviorResource = _aureliaTemplating.HtmlBehaviorResource;
      TemplatingEngine = _aureliaTemplating.TemplatingEngine;
      noView = _aureliaTemplating.noView;
      processContent = _aureliaTemplating.processContent;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
      EventManager = _aureliaBinding.EventManager;
      createOverrideContext = _aureliaBinding.createOverrideContext;
      Lexer = _aureliaBinding.Lexer;
      ParserImplementation = _aureliaBinding.ParserImplementation;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_kendoDataMin) {}, function (_commonDecorators) {
      var _exportObj = {};

      for (var _key3 in _commonDecorators) {
        if (_key3 !== "default") _exportObj[_key3] = _commonDecorators[_key3];
      }

      _export(_exportObj);
    }, function (_kendoAutocompleteMin) {}, function (_kendoVirtuallistMin) {}, function (_kendoDatavizBarcodeMin) {}, function (_kendoButtonMin) {}, function (_kendoMobileButtongroupMin) {}, function (_kendoCalendarMin) {}, function (_kendoDatavizChartMin) {}, function (_kendoDatavizChartPolarMin) {}, function (_kendoDatavizChartFunnelMin) {}, function (_kendoDatavizSparklineMin) {}, function (_kendoDatavizStockMin) {}, function (_kendoDatavizTreemapMin) {}, function (_kendoColorpickerMin) {}, function (_kendoComboboxMin) {}, function (_kendoMenuMin) {}, function (_kendoDatepickerMin) {}, function (_kendoDatetimepickerMin) {}, function (_kendoDatavizDiagramMin) {}, function (_kendoDraganddropMin) {}, function (_kendoDropdownlistMin) {}, function (_kendoEditorMin) {}, function (_kendoGanttMin) {}, function (_kendoDatavizGaugeMin) {}, function (_kendoDataSignalrMin) {}, function (_kendoFiltercellMin) {}, function (_kendoGridMin) {}, function (_kendoListviewMin) {}, function (_kendoDatavizMapMin) {}, function (_kendoMaskedtextboxMin) {}, function (_kendoMultiselectMin) {}, function (_kendoNotificationMin) {}, function (_kendoNumerictextboxMin) {}, function (_kendoPanelbarMin) {}, function (_kendoPdfMin) {}, function (_kendoExcelMin) {}, function (_kendoPivotConfiguratorMin) {}, function (_kendoPivotgridMin) {}, function (_kendoPivotFieldmenuMin) {}, function (_kendoProgressbarMin) {}, function (_kendoDatavizQrcodeMin) {}, function (_kendoSliderMin) {}, function (_kendoResponsivepanelMin) {}, function (_kendoSchedulerMin) {}, function (_kendoSchedulerAgendaviewMin) {}, function (_kendoSchedulerDayviewMin) {}, function (_kendoSchedulerMonthviewMin) {}, function (_kendoSchedulerRecurrenceMin) {}, function (_kendoSchedulerTimelineviewMin) {}, function (_kendoMobileScrollviewMin) {}, function (_kendoSortableMin) {}, function (_kendoSplitterMin) {}, function (_kendoSpreadsheetMin) {}, function (_kendoMobileSwitchMin) {}, function (_kendoTabstripMin) {}, function (_kendoTimepickerMin) {}, function (_kendoToolbarMin) {}, function (_kendoTooltipMin) {}, function (_kendoTreelistMin) {}, function (_kendoTreeviewMin) {}, function (_kendoUploadMin) {}, function (_kendoValidatorMin) {}, function (_kendoWindowMin) {}],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('KendoConfigBuilder', KendoConfigBuilder = function () {
        function KendoConfigBuilder() {
          

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

        KendoConfigBuilder.prototype.notifyBindingBehavior = function notifyBindingBehavior() {
          this.resources.push('./common/notify-binding-behavior');
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
      }());

      _export('KendoConfigBuilder', KendoConfigBuilder);

      function configure(aurelia, configCallback) {
        var builder = aurelia.container.get(KendoConfigBuilder);

        if (configCallback !== undefined && typeof configCallback === 'function') {
          configCallback(builder);
        }

        var resources = builder.resources;

        if (resources.length > 0) {
          aurelia.globalResources(resources);
        }

        if (builder.registerRepeatStrategy) {
          var repeatStrategyLocator = aurelia.container.get(RepeatStrategyLocator);
          repeatStrategyLocator.addStrategy(function (items) {
            return items instanceof kendo.data.ObservableArray;
          }, new ArrayRepeatStrategy());
        }
      }

      _export('configure', configure);

      _export('AutoComplete', AutoComplete = (_dec = customElement(constants.elementPrefix + 'autocomplete'), _dec2 = generateBindables('kendoAutoComplete'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec4 = children(constants.elementPrefix + 'template'), _dec(_class2 = _dec2(_class2 = _dec3(_class2 = (_class3 = function () {
        function AutoComplete(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useViewResources(viewResources).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        AutoComplete.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        AutoComplete.prototype.attached = function attached() {
          var inputs = this.element.querySelectorAll('input');
          if (inputs.length > 0) {
            this.target = inputs[0];
          } else {
            this.target = document.createElement('input');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        AutoComplete.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoAutoComplete', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: this.target,
            parentCtx: this.$parent
          });
        };

        AutoComplete.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        AutoComplete.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return AutoComplete;
      }(), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, 'templates', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class3)) || _class2) || _class2) || _class2));

      _export('AutoComplete', AutoComplete);

      _export('Barcode', Barcode = (_dec5 = customAttribute(constants.attributePrefix + 'barcode'), _dec6 = generateBindables('kendoBarcode'), _dec7 = inject(Element, WidgetBase), _dec5(_class5 = _dec6(_class5 = _dec7(_class5 = function () {
        function Barcode(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoBarcode').linkViewModel(this);
        }

        Barcode.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Barcode.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Barcode.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Barcode.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Barcode;
      }()) || _class5) || _class5) || _class5));

      _export('Barcode', Barcode);

      _export('Button', Button = (_dec8 = customAttribute(constants.attributePrefix + 'button'), _dec9 = generateBindables('kendoButton'), _dec10 = inject(Element, WidgetBase), _dec8(_class6 = _dec9(_class6 = _dec10(_class6 = (_class7 = function () {
        function Button(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor2, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoButton').bindToKendo('kEnabled', 'enable').linkViewModel(this);
        }

        Button.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Button.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Button.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Button.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Button.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Button;
      }(), (_descriptor2 = _applyDecoratedDescriptor(_class7.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class7)) || _class6) || _class6) || _class6));

      _export('Button', Button);

      _export('ButtonGroup', ButtonGroup = (_dec11 = customAttribute(constants.attributePrefix + 'buttongroup'), _dec12 = generateBindables('kendoMobileButtonGroup'), _dec13 = inject(Element, WidgetBase), _dec11(_class9 = _dec12(_class9 = _dec13(_class9 = (_class10 = function () {
        function ButtonGroup(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor3, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMobileButtonGroup').bindToKendo('kEnabled', 'enable').linkViewModel(this);
        }

        ButtonGroup.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ButtonGroup.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ButtonGroup.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ButtonGroup.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ButtonGroup.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ButtonGroup;
      }(), (_descriptor3 = _applyDecoratedDescriptor(_class10.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class10)) || _class9) || _class9) || _class9));

      _export('ButtonGroup', ButtonGroup);

      _export('Calendar', Calendar = (_dec14 = customElement(constants.elementPrefix + 'calendar'), _dec15 = generateBindables('kendoCalendar'), _dec16 = inject(Element, WidgetBase), _dec14(_class12 = _dec15(_class12 = _dec16(_class12 = function () {
        function Calendar(element, widgetBase, viewResources) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoCalendar').linkViewModel(this).useValueBinding();
        }

        Calendar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Calendar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Calendar.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Calendar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Calendar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Calendar;
      }()) || _class12) || _class12) || _class12));

      _export('Calendar', Calendar);

      _export('Chart', Chart = (_dec17 = customElement(constants.elementPrefix + 'chart'), _dec18 = generateBindables('kendoChart'), _dec19 = inject(Element, WidgetBase), _dec17(_class13 = _dec18(_class13 = _dec19(_class13 = function () {
        function Chart(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this);
        }

        Chart.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Chart.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Chart.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Chart.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Chart;
      }()) || _class13) || _class13) || _class13));

      _export('Chart', Chart);

      _export('Sparkline', Sparkline = (_dec20 = customElement(constants.elementPrefix + 'sparkline'), _dec21 = generateBindables('kendoSparkline'), _dec22 = inject(Element, WidgetBase), _dec20(_class14 = _dec21(_class14 = _dec22(_class14 = function () {
        function Sparkline(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSparkline').linkViewModel(this);
        }

        Sparkline.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Sparkline.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Sparkline.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Sparkline.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Sparkline;
      }()) || _class14) || _class14) || _class14));

      _export('Sparkline', Sparkline);

      _export('Stock', Stock = (_dec23 = customElement(constants.elementPrefix + 'stock'), _dec24 = generateBindables('kendoStockChart'), _dec25 = inject(Element, WidgetBase), _dec23(_class15 = _dec24(_class15 = _dec25(_class15 = function () {
        function Stock(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this);
        }

        Stock.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Stock.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Stock.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Stock.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Stock;
      }()) || _class15) || _class15) || _class15));

      _export('Stock', Stock);

      _export('TreeMap', TreeMap = (_dec26 = customElement(constants.elementPrefix + 'treemap'), _dec27 = generateBindables('kendoTreeMap'), _dec28 = inject(Element, WidgetBase), _dec26(_class16 = _dec27(_class16 = _dec28(_class16 = function () {
        function TreeMap(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
        }

        TreeMap.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeMap.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeMap.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        TreeMap.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TreeMap;
      }()) || _class16) || _class16) || _class16));

      _export('TreeMap', TreeMap);

      _export('ColorPalette', ColorPalette = (_dec29 = customElement(constants.attributePrefix + 'color-palette'), _dec30 = generateBindables('kendoColorPalette'), _dec31 = inject(Element, WidgetBase), _dec29(_class17 = _dec30(_class17 = _dec31(_class17 = function () {
        function ColorPalette(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
        }

        ColorPalette.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ColorPalette.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ColorPalette.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ColorPalette.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ColorPalette.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ColorPalette;
      }()) || _class17) || _class17) || _class17));

      _export('ColorPalette', ColorPalette);

      _export('ColorPicker', ColorPicker = (_dec32 = customAttribute(constants.attributePrefix + 'color-picker'), _dec33 = generateBindables('kendoColorPicker'), _dec34 = inject(Element, WidgetBase), _dec32(_class18 = _dec33(_class18 = _dec34(_class18 = (_class19 = function () {
        function ColorPicker(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor4, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoColorPicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
        }

        ColorPicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ColorPicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ColorPicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ColorPicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ColorPicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ColorPicker;
      }(), (_descriptor4 = _applyDecoratedDescriptor(_class19.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class19)) || _class18) || _class18) || _class18));

      _export('ColorPicker', ColorPicker);

      _export('ComboBox', ComboBox = (_dec35 = customElement(constants.elementPrefix + 'combobox'), _dec36 = generateBindables('kendoComboBox'), _dec37 = inject(Element, WidgetBase, ViewResources), _dec38 = children(constants.elementPrefix + 'template'), _dec35(_class21 = _dec36(_class21 = _dec37(_class21 = (_class22 = function () {
        function ComboBox(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'kEnabled', _descriptor5, this);

          _initDefineProp(this, 'kReadOnly', _descriptor6, this);

          _initDefineProp(this, 'templates', _descriptor7, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoComboBox').linkViewModel(this).useValueBinding().useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        ComboBox.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ComboBox.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ComboBox.prototype.recreate = function recreate() {
          var selectNode = getSelectNode(this.element);
          this.widgetBase.useTemplates(this, 'kendoComboBox', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: selectNode.length > 0 ? selectNode[0] : this.element,
            parentCtx: this.$parent
          });
        };

        ComboBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ComboBox.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ComboBox;
      }(), (_descriptor5 = _applyDecoratedDescriptor(_class22.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class22.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class22.prototype, 'templates', [_dec38], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class22)) || _class21) || _class21) || _class21));

      _export('ComboBox', ComboBox);

      _export('bindables', bindables = { "kendoAutoComplete": ["animation", "dataSource", "dataTextField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "minLength", "name", "placeholder", "popup", "separator", "suggest", "template", "valuePrimitive", "virtual"], "kendoBarcode": ["background", "border", "checksum", "color", "height", "name", "padding", "renderAs", "text", "type", "value", "width"], "kendoButton": ["enable", "icon", "imageUrl", "name", "spriteCssClass"], "kendoCalendar": ["culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "start", "value"], "kendoChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "legend", "name", "panes", "pannable", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis", "xAxis", "yAxis", "zoomable"], "kendoColorPalette": ["columns", "name", "palette", "tileSize", "value"], "kendoColorPicker": ["buttons", "columns", "messages", "name", "opacity", "palette", "preview", "tileSize", "toolIcon", "value"], "kendoComboBox": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "index", "minLength", "name", "placeholder", "popup", "suggest", "template", "text", "value", "valuePrimitive", "virtual"], "kendoContextMenu": ["alignToAnchor", "animation", "closeOnClick", "dataSource", "direction", "filter", "hoverDelay", "name", "orientation", "popupCollision", "showOn", "target"], "kendoDatePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "max", "min", "month", "name", "parseFormats", "start", "value"], "kendoDateTimePicker": ["ARIATemplate", "animation", "culture", "dates", "depth", "disableDates", "footer", "format", "interval", "max", "min", "month", "name", "parseFormats", "start", "timeFormat", "value"], "kendoDiagram": ["autoBind", "connectionDefaults", "connections", "connectionsDataSource", "dataSource", "editable", "layout", "name", "pannable", "pdf", "selectable", "shapeDefaults", "shapes", "template", "zoom", "zoomMax", "zoomMin", "zoomRate"], "kendoDraggable": ["axis", "container", "cursorOffset", "distance", "filter", "group", "hint", "ignore"], "kendoDropDownList": ["animation", "autoBind", "cascadeFrom", "cascadeFromField", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "ignoreCase", "index", "minLength", "name", "optionLabel", "optionLabelTemplate", "popup", "template", "text", "value", "valuePrimitive", "valueTemplate", "virtual"], "kendoDropTarget": ["group"], "kendoDropTargetArea": ["filter", "group"], "kendoEditor": ["domain", "encoded", "fileBrowser", "imageBrowser", "messages", "name", "pdf", "resizable", "serialization", "stylesheets", "tools"], "kendoFlatColorPicker": ["autoupdate", "buttons", "messages", "name", "opacity", "preview", "value"], "kendoGantt": ["assignments", "autoBind", "columnResizeHandleWidth", "columns", "currentTimeMarker", "dataSource", "dependencies", "editable", "height", "hourSpan", "listWidth", "messages", "name", "navigatable", "pdf", "resizable", "resources", "rowHeight", "selectable", "showWorkDays", "showWorkHours", "snap", "taskTemplate", "toolbar", "tooltip", "views", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoGrid": ["allowCopy", "altRowTemplate", "autoBind", "columnMenu", "columnResizeHandleWidth", "columns", "dataSource", "detailTemplate", "editable", "excel", "filterable", "groupable", "height", "messages", "mobile", "name", "navigatable", "noRecords", "pageable", "pdf", "reorderable", "resizable", "rowTemplate", "scrollable", "selectable", "sortable", "toolbar"], "kendoLinearGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoListView": ["altTemplate", "autoBind", "dataSource", "editTemplate", "name", "navigatable", "selectable", "template"], "kendoMap": ["center", "controls", "layerDefaults", "layers", "markerDefaults", "markers", "maxZoom", "minSize", "minZoom", "name", "pannable", "wraparound", "zoom", "zoomable"], "kendoMaskedTextBox": ["clearPromptChar", "culture", "mask", "name", "promptChar", "rules", "unmaskOnPost", "value"], "kendoMenu": ["animation", "closeOnClick", "dataSource", "direction", "hoverDelay", "name", "openOnClick", "orientation", "popupCollision"], "kendoMobileActionSheet": ["cancel", "name", "popup", "type"], "kendoMobileBackButton": ["name"], "kendoMobileButton": ["badge", "clickOn", "enable", "icon", "name"], "kendoMobileButtonGroup": ["enable", "index", "name", "selectOn"], "kendoMobileCollapsible": ["animation", "collapsed", "expandIcon", "iconPosition", "inset", "name"], "kendoMobileDetailButton": ["name"], "kendoMobileDrawer": ["container", "name", "position", "swipeToOpen", "swipeToOpenViews", "title", "views"], "kendoMobileLayout": ["id", "name", "platform"], "kendoMobileListView": ["appendOnRefresh", "autoBind", "dataSource", "endlessScroll", "filterable", "fixedHeaders", "headerTemplate", "loadMore", "messages", "name", "pullParameters", "pullToRefresh", "style", "template", "type", "virtualViewSize"], "kendoMobileLoader": ["name"], "kendoMobileModalView": ["height", "modal", "name", "width"], "kendoMobileNavBar": ["name"], "kendoMobilePane": ["collapsible", "initial", "layout", "loading", "name", "portraitWidth", "transition"], "kendoMobilePopOver": ["name", "pane", "popup"], "kendoMobileScrollView": ["autoBind", "bounceVelocityThreshold", "contentHeight", "dataSource", "duration", "emptyTemplate", "enablePager", "itemsPerPage", "name", "page", "pageSize", "template", "velocityThreshold"], "kendoMobileScroller": ["elastic", "messages", "name", "pullOffset", "pullToRefresh", "useNative", "visibleScrollHints", "zoom"], "kendoMobileSplitView": ["name", "style"], "kendoMobileSwitch": ["checked", "enable", "name", "offLabel", "onLabel"], "kendoMobileTabStrip": ["name", "selectedIndex"], "kendoMobileView": ["model", "name", "reload", "scroller", "stretch", "title", "useNativeScrolling", "zoom"], "kendoMultiSelect": ["animation", "autoBind", "autoClose", "dataSource", "dataTextField", "dataValueField", "delay", "enable", "filter", "fixedGroupTemplate", "groupTemplate", "headerTemplate", "height", "highlightFirst", "ignoreCase", "itemTemplate", "maxSelectedItems", "minLength", "name", "placeholder", "popup", "tagMode", "tagTemplate", "value", "valuePrimitive", "virtual"], "kendoNotification": ["allowHideAfter", "animation", "appendTo", "autoHideAfter", "button", "height", "hideOnClick", "name", "position", "stacking", "templates", "width"], "kendoNumericTextBox": ["culture", "decimals", "downArrowText", "format", "max", "min", "name", "placeholder", "spinners", "step", "upArrowText", "value"], "kendoPager": ["autoBind", "buttonCount", "dataSource", "info", "input", "linkTemplate", "messages", "name", "numeric", "pageSizes", "previousNext", "refresh", "selectTemplate"], "kendoPanelBar": ["animation", "contentUrls", "dataSource", "expandMode", "name"], "kendoPivotConfigurator": ["dataSource", "filterable", "height", "messages", "name", "sortable"], "kendoPivotGrid": ["autoBind", "columnHeaderTemplate", "columnWidth", "dataCellTemplate", "dataSource", "excel", "filterable", "height", "kpiStatusTemplate", "kpiTrendTemplate", "messages", "name", "pdf", "reorderable", "rowHeaderTemplate", "sortable"], "kendoPopup": ["anchor", "animation", "appendTo", "name", "origin", "position"], "kendoProgressBar": ["animation", "chunkCount", "enable", "max", "min", "name", "orientation", "reverse", "showStatus", "type", "value"], "kendoQRCode": ["background", "border", "color", "encoding", "errorCorrection", "name", "padding", "renderAs", "size", "value"], "kendoRadialGauge": ["gaugeArea", "name", "pointer", "renderAs", "scale", "transitions"], "kendoRangeSlider": ["largeStep", "max", "min", "name", "orientation", "selectionEnd", "selectionStart", "smallStep", "tickPlacement", "tooltip"], "kendoResponsivePanel": ["autoClose", "breakpoint", "name", "orientation", "toggleButton"], "kendoScheduler": ["allDayEventTemplate", "allDaySlot", "autoBind", "currentTimeMarker", "dataSource", "date", "dateHeaderTemplate", "editable", "endTime", "eventTemplate", "footer", "group", "groupHeaderTemplate", "height", "majorTick", "majorTimeHeaderTemplate", "max", "messages", "min", "minorTickCount", "minorTimeHeaderTemplate", "mobile", "name", "pdf", "resources", "selectable", "showWorkHours", "snap", "startTime", "timezone", "toolbar", "views", "width", "workDayEnd", "workDayStart", "workWeekEnd", "workWeekStart"], "kendoSlider": ["decreaseButtonTitle", "increaseButtonTitle", "largeStep", "max", "min", "name", "orientation", "showButtons", "smallStep", "tickPlacement", "tooltip", "value"], "kendoSortable": ["autoScroll", "axis", "connectWith", "container", "cursor", "cursorOffset", "disabled", "filter", "handler", "hint", "holdToDrag", "ignore", "name", "placeholder"], "kendoSparkline": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "data", "dataSource", "name", "plotArea", "pointWidth", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "tooltip", "transitions", "type", "valueAxis"], "kendoSplitter": ["name", "orientation", "panes"], "kendoSpreadsheet": ["activeSheet", "columnWidth", "columns", "excel", "headerHeight", "headerWidth", "name", "pdf", "rowHeight", "rows", "sheets", "sheetsbar", "toolbar"], "kendoStockChart": ["autoBind", "axisDefaults", "categoryAxis", "chartArea", "dataSource", "dateField", "legend", "name", "navigator", "panes", "pdf", "plotArea", "renderAs", "series", "seriesColors", "seriesDefaults", "theme", "title", "tooltip", "transitions", "valueAxis"], "kendoTabStrip": ["animation", "collapsible", "contentUrls", "dataContentField", "dataContentUrlField", "dataImageUrlField", "dataSource", "dataSpriteCssClass", "dataTextField", "dataUrlField", "name", "navigatable", "scrollable", "tabPosition", "value"], "kendoTimePicker": ["animation", "culture", "dates", "format", "interval", "max", "min", "name", "parseFormats", "value"], "kendoToolBar": ["items", "name", "resizable"], "kendoTooltip": ["animation", "autoHide", "callout", "content", "filter", "height", "iframe", "name", "position", "showAfter", "showOn", "width"], "kendoTouch": ["doubleTapTimeout", "enableSwipe", "filter", "maxDuration", "maxYDelta", "minHold", "minXDelta", "multiTouch", "name", "surface"], "kendoTreeList": ["autoBind", "columnMenu", "columns", "dataSource", "editable", "excel", "filterable", "height", "messages", "name", "pdf", "reorderable", "resizable", "scrollable", "selectable", "sortable", "toolbar"], "kendoTreeMap": ["autoBind", "colorField", "colors", "dataSource", "name", "template", "textField", "theme", "type", "valueField"], "kendoTreeView": ["animation", "autoBind", "autoScroll", "checkboxes", "dataImageUrlField", "dataSource", "dataSpriteCssClassField", "dataTextField", "dataUrlField", "dragAndDrop", "loadOnDemand", "messages", "name", "template"], "kendoUpload": ["async", "enabled", "files", "localization", "multiple", "name", "showFileList", "template"], "kendoValidator": ["errorTemplate", "messages", "name", "rules", "validateOnBlur"], "kendoWindow": ["actions", "animation", "appendTo", "autoFocus", "content", "draggable", "height", "iframe", "maxHeight", "maxWidth", "minHeight", "minWidth", "modal", "name", "pinned", "position", "resizable", "scrollable", "title", "visible", "width"], "GanttColumn": ["editable", "field", "format", "sortable", "title", "width"], "GridColumn": ["aggregates", "attributes", "columns", "command", "encoded", "field", "filterable", "footerTemplate", "format", "groupFooterTemplate", "groupHeaderTemplate", "groupable", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "values", "width", "editor"], "GridToolbarItem": ["name", "template", "text"], "ToolBarItem": ["attributes", "buttons", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "menuButtons", "overflow", "overflowTemplate", "primary", "selected", "showIcon", "showText", "spriteCssClass", "template", "text", "togglable", "toggle", "type", "url"], "ToolBarItemButton": ["attributes", "click", "enable", "group", "hidden", "icon", "id", "imageUrl", "selected", "showIcon", "showText", "spriteCssClass", "text", "togglable", "toggle", "url"], "TreeListColumn": ["attributes", "command", "encoded", "expandable", "field", "filterable", "footerTemplate", "format", "headerAttributes", "headerTemplate", "hidden", "lockable", "locked", "menu", "minScreenWidth", "sortable", "template", "title", "width", "editor"] });

      _export('bindables', bindables);

      _export('constants', constants = {
        eventPrefix: 'k-on-',
        bindablePrefix: 'k-',
        attributePrefix: 'ak-',
        elementPrefix: 'ak-'
      });

      _export('constants', constants);

      _export('ControlProperties', ControlProperties = (_dec39 = inject(Util), _dec39(_class24 = function () {
        function ControlProperties(util) {
          

          this.cache = {};

          this.util = util;
        }

        ControlProperties.prototype.getProperties = function getProperties(controlName) {
          var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

          if (this.cache[controlName]) {
            return this.cache[controlName];
          }

          var options1 = this.getWidgetProperties(controlName);

          var options2 = this.getGeneratedProperties(controlName);

          var keys = options1.concat(options2.filter(function (item) {
            return options1.indexOf(item) < 0;
          }));
          keys = keys.concat(extraProperties.filter(function (item) {
            return keys.indexOf(item) < 0;
          }));

          this.cache[controlName] = keys;

          return keys;
        };

        ControlProperties.prototype.getGeneratedProperties = function getGeneratedProperties(controlName) {
          if (!bindables[controlName]) {
            throw new Error(controlName + ' not found in generated bindables.js');
          }

          return bindables[controlName];
        };

        ControlProperties.prototype.getWidgetProperties = function getWidgetProperties(controlName) {
          if (jQuery.fn[controlName]) {
            return Object.keys(jQuery.fn[controlName].widget.prototype.options);
          }

          return [];
        };

        ControlProperties.prototype.getTemplateProperties = function getTemplateProperties(controlName) {
          var _this2 = this;

          var properties = this.getProperties(controlName);

          var templates = properties.filter(function (prop) {
            return _this2.util.isTemplateProperty(prop);
          });

          return templates;
        };

        return ControlProperties;
      }()) || _class24));

      _export('ControlProperties', ControlProperties);

      function generateBindables(controlName) {
        var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        return function (target, key, descriptor) {
          var behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
          var container = Container.instance || new Container();
          var controlProperties = container.get(ControlProperties);
          var util = container.get(Util);
          var optionKeys = controlProperties.getProperties(controlName, extraProperties);

          optionKeys.push('widget');
          optionKeys.push('options');
          optionKeys.push('noInit');

          for (var i = 0; i < optionKeys.length; i++) {
            var option = optionKeys[i];

            var nameOrConfigOrTarget = {
              name: util.getBindablePropertyName(option)
            };

            if (option === 'widget') {
              nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
            }

            var prop = new BindableProperty(nameOrConfigOrTarget);
            prop.registerWith(target, behaviorResource, descriptor);
          }
        };
      }

      _export('generateBindables', generateBindables);

      function delayed() {
        return function (target, key, descriptor) {
          var taskQueue = Container.instance.get(TaskQueue);
          var ptr = descriptor.value;

          descriptor.value = function () {
            var _this3 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            taskQueue.queueTask(function () {
              return ptr.apply(_this3, args);
            });
          };

          return descriptor;
        };
      }

      _export('delayed', delayed);

      _export('NotifyBindingBehavior', NotifyBindingBehavior = (_dec40 = inject(EventManager), _dec40(_class26 = function () {
        function NotifyBindingBehavior(eventManager) {
          

          this.eventManager = eventManager;
        }

        NotifyBindingBehavior.prototype.bind = function bind(binding, scope, target, fieldName) {
          if (!binding.updateSource) return;

          var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
          binding.targetObserver = targetObserver;
          targetObserver.originalHandler = binding.targetObserver.handler;
          var handler = this.eventManager.createElementHandler(['blur']);
          targetObserver.handler = handler;

          var observable = target || binding.source.bindingContext;
          var field = fieldName || binding.sourceExpression.expression.name;
          var intercept = binding.updateSource;

          binding['intercepted-updateSource'] = intercept;
          binding.updateSource = function (value) {
            if (observable.set && observable.trigger) {
              setTimeout(function () {
                return observable.trigger.call(observable, 'change', { field: field });
              }, 100);

              if (observable.dirty === false) {
                observable.dirty = true;
              }
            }

            return intercept.call(binding, value);
          };
        };

        NotifyBindingBehavior.prototype.unbind = function unbind(binding, scope) {
          if (!binding['intercepted-updateSource']) return;

          binding.updateSource = binding['intercepted-updateSource'];
          binding['intercepted-updateSource'] = null;
        };

        return NotifyBindingBehavior;
      }()) || _class26));

      _export('NotifyBindingBehavior', NotifyBindingBehavior);

      _export('OptionsBuilder', OptionsBuilder = (_dec41 = inject(ControlProperties, Util), _dec41(_class27 = function () {
        function OptionsBuilder(controlProperties, util) {
          

          this.controlProperties = controlProperties;
          this.util = util;
        }

        OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
          var options = {};
          var props = this.controlProperties.getProperties(className);

          if (viewModel.beforeOptionsBuild) {
            viewModel.beforeOptionsBuild(options);
          }

          for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            var value = viewModel[this.util.getBindablePropertyName(prop)];

            if (this.util.hasValue(value)) {
              options[prop] = value;
            }
          }

          if (viewModel.afterOptionsBuild) {
            viewModel.afterOptionsBuild(options);
          }

          return this.util.pruneOptions(options);
        };

        return OptionsBuilder;
      }()) || _class27));

      _export('OptionsBuilder', OptionsBuilder);

      _export('TemplateCompiler', TemplateCompiler = (_dec42 = inject(TemplatingEngine, Util), _dec42(_class28 = function () {
        function TemplateCompiler(templatingEngine, util) {
          

          this.isInitialized = false;

          this.templatingEngine = templatingEngine;
          this.util = util;
        }

        TemplateCompiler.prototype.initialize = function initialize() {
          if (this.isInitialized) return;

          var _this = this;
          kendo.ui.Widget.prototype.angular = function (_event, _args) {
            _this.handleTemplateEvents(this, _event, _args);
          };
          kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
            _this.handleTemplateEvents(this, _event, _args);
          };

          this.isInitialized = true;
        };

        TemplateCompiler.prototype.handleTemplateEvents = function handleTemplateEvents(widget, _event, _args) {
          if (_event !== 'compile' && _event !== 'cleanup') return;

          var $parent = widget._$parent || (widget.options._$parent ? widget.options._$parent[0] : undefined);
          var viewResources = widget._$resources || (widget.options._$resources ? widget.options._$resources[0] : undefined);

          if (!$parent) return;

          var args = _args();
          var elements = args.elements;
          var data = args.data;

          switch (_event) {
            case 'compile':
              this.compile($parent, elements, data, viewResources);
              break;

            case 'cleanup':
              this.cleanup(elements);
              break;

            default:
              break;
          }
        };

        TemplateCompiler.prototype.compile = function compile($parent, elements, data, viewResources) {
          var _this4 = this;

          var _loop = function _loop(i) {
            var element = elements[i];
            var ctx = undefined;

            if (data && data[i]) {
              var _data = data[i];
              var dataItem = _data.dataItem || _data.aggregate || _data;

              if (!_this4.util.isObject(dataItem)) {
                ctx = {
                  dataItem: dataItem
                };
              } else {
                ctx = dataItem;
              }
            }

            if (element instanceof jQuery) {
              element.each(function (index, elem) {
                return _this4.enhanceView($parent, elem, ctx, viewResources);
              });
            } else {
              _this4.enhanceView($parent, element, ctx, viewResources);
            }
          };

          for (var i = 0; i < elements.length; i++) {
            _loop(i);
          }
        };

        TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx, viewResources) {
          var view = $(element).data('viewInstance');

          if (element.querySelectorAll('.au-target').length === 0) {
            if (viewResources) {
              view = this.templatingEngine.enhance({
                bindingContext: ctx,
                overrideContext: createOverrideContext(ctx, $parent),
                element: element,
                resources: viewResources
              });
            } else {
              view = this.templatingEngine.enhance({
                bindingContext: ctx,
                overrideContext: createOverrideContext(ctx, $parent),
                element: element
              });
            }

            $(element).data('viewInstance', view);
          }

          view.attached();
        };

        TemplateCompiler.prototype.cleanup = function cleanup(elements) {
          if (!elements) return;

          for (var i = 0; i < elements.length; i++) {
            var _element = elements[i];
            this.cleanupView(_element);
          }
        };

        TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
          var view = $(element).data('viewInstance');
          if (!view) return;

          view.detached();
          view.unbind();
        };

        return TemplateCompiler;
      }()) || _class28));

      _export('TemplateCompiler', TemplateCompiler);

      _export('TemplateGatherer', TemplateGatherer = (_dec43 = inject(ControlProperties, Util, KendoConfigBuilder), _dec43(_class30 = function () {
        function TemplateGatherer(controlProperties, util, config) {
          

          this.controlProperties = controlProperties;
          this.config = config;
          this.util = util;
        }

        TemplateGatherer.prototype.useTemplates = function useTemplates(target, controlName, templates) {
          var _this5 = this;

          var templateProps = this.controlProperties.getTemplateProperties(controlName);

          if (!templates) {
            templates = [];
          }

          templates.forEach(function (c) {
            if (!c.for) {
              throw new Error('Templating support is not enabled. Call .kendoTemplateSupport() in main.js or import common/template via require');
            }

            if (templateProps.indexOf(c.for) === -1) {
              if (c.for.indexOf('.') === -1) {
                throw new Error('Invalid template property name: "' + c.for + '", valid values are: ' + templateProps.join(', '));
              }
            }

            if (_this5.util.hasValue(c.template)) {
              (function () {
                var template = c.template;

                if (_this5.config.templateCallback) {
                  template = _this5.config.templateCallback(target, c, c.template);
                }

                var parser = new ParserImplementation(new Lexer(), c.for);

                var expression = parser.parseExpression();

                var iterator = expression;
                while (iterator) {
                  if (!iterator.object) {
                    iterator.name = _this5.util.getBindablePropertyName(iterator.name);
                  }
                  iterator = iterator.object;
                }

                var scope = createOverrideContext(target, {});

                expression.assign(scope, c.kendoTemplate ? template : function () {
                  return template;
                });
              })();
            }
          });
        };

        return TemplateGatherer;
      }()) || _class30));

      _export('TemplateGatherer', TemplateGatherer);

      _export('Template', Template = (_dec44 = customElement(constants.elementPrefix + 'template'), _dec45 = noView(), _dec46 = processContent(function (compiler, resources, element, instruction) {
        var html = element.innerHTML;
        if (html !== '') {
          instruction.template = html;
        }
        element.innerHTML = '';
      }), _dec47 = inject(TargetInstruction), _dec44(_class32 = _dec45(_class32 = _dec46(_class32 = _dec47(_class32 = (_class33 = function Template(targetInstruction) {
        

        _initDefineProp(this, 'template', _descriptor8, this);

        _initDefineProp(this, 'for', _descriptor9, this);

        _initDefineProp(this, 'kendoTemplate', _descriptor10, this);

        this.template = targetInstruction.elementInstruction.template;
      }, (_descriptor8 = _applyDecoratedDescriptor(_class33.prototype, 'template', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class33.prototype, 'for', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'template';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class33.prototype, 'kendoTemplate', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class33)) || _class32) || _class32) || _class32) || _class32));

      _export('Template', Template);

      capitalMatcher = /([A-Z])/g;

      _export('Util', Util = function () {
        function Util() {
          
        }

        Util.prototype.addHyphenAndLower = function addHyphenAndLower(char) {
          return '-' + char.toLowerCase();
        };

        Util.prototype._hyphenate = function _hyphenate(name) {
          return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, this.addHyphenAndLower);
        };

        Util.prototype._unhyphenate = function _unhyphenate(name) {
          return name.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          });
        };

        Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
          var name = '' + constants.bindablePrefix + propertyName;

          return this._unhyphenate(name);
        };

        Util.prototype.getKendoPropertyName = function getKendoPropertyName(propertyName) {
          var withoutPrefix = propertyName.substring(1);

          return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
        };

        Util.prototype.getEventsFromAttributes = function getEventsFromAttributes(element) {
          var attributes = Array.prototype.slice.call(element.attributes);
          var events = [];

          for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            var attributeName = attribute.name;
            if (!attributeName.startsWith(constants.eventPrefix)) continue;

            var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

            var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

            var camelCased = this._unhyphenate(withoutTriggerDelegate);

            events.push(camelCased);
          }

          return events;
        };

        Util.prototype.pruneOptions = function pruneOptions(options) {
          var returnOptions = {};

          for (var prop in options) {
            if (this.hasValue(options[prop])) {
              returnOptions[prop] = options[prop];
            }
          }

          return returnOptions;
        };

        Util.prototype.hasValue = function hasValue(prop) {
          return typeof prop !== 'undefined' && prop !== null;
        };

        Util.prototype.fireEvent = function fireEvent(element, name) {
          var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          var event = new CustomEvent(name, {
            detail: data,
            bubbles: true
          });
          element.dispatchEvent(event);

          return event;
        };

        Util.prototype.fireKendoEvent = function fireKendoEvent(element, name) {
          var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          return this.fireEvent(element, '' + constants.eventPrefix + name, data);
        };

        Util.prototype.isTemplateProperty = function isTemplateProperty(propertyName) {
          return propertyName.toLowerCase().indexOf('template') > -1;
        };

        Util.prototype.isObject = function isObject(obj) {
          return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
        };

        return Util;
      }());

      _export('Util', Util);

      logger = LogManager.getLogger('aurelia-kendoui-bridge');

      _export('WidgetBase', WidgetBase = (_dec48 = transient(), _dec49 = inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder), _dec48(_class35 = _dec49(_class35 = function () {
        function WidgetBase(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder) {
          

          this.bindingsToKendo = [];

          this.taskQueue = taskQueue;
          this.optionsBuilder = optionsBuilder;
          this.util = util;
          this.configBuilder = configBuilder;
          this.templateGatherer = templateGatherer;
          templateCompiler.initialize();
        }

        WidgetBase.prototype.control = function control(controlName) {
          if (!controlName || !kendo.jQuery.fn[controlName]) {
            throw new Error('The name of control ' + controlName + ' is invalid or not set');
          }

          this.controlName = controlName;

          var ctor = kendo.jQuery.fn[this.controlName];
          this.kendoOptions = ctor.widget.prototype.options;
          this.kendoEvents = ctor.widget.prototype.events;

          return this;
        };

        WidgetBase.prototype.linkViewModel = function linkViewModel(viewModel) {
          if (!viewModel) {
            throw new Error('viewModel is not set');
          }

          this.viewModel = viewModel;

          return this;
        };

        WidgetBase.prototype.useViewResources = function useViewResources(resources) {
          if (!resources) {
            throw new Error('resources is not set');
          }

          this.viewResources = resources;

          return this;
        };

        WidgetBase.prototype.useValueBinding = function useValueBinding() {
          var valueBindingProperty = arguments.length <= 0 || arguments[0] === undefined ? 'kValue' : arguments[0];
          var valueFunction = arguments.length <= 1 || arguments[1] === undefined ? 'value' : arguments[1];

          this.valueBindingProperty = valueBindingProperty;
          this.valueFunction = valueFunction;
          this.withValueBinding = true;

          this.bindToKendo(valueBindingProperty, valueFunction);

          return this;
        };

        WidgetBase.prototype.bindToKendo = function bindToKendo(propertyName, functionName) {
          this.bindingsToKendo.push({
            propertyName: propertyName,
            functionName: functionName
          });

          return this;
        };

        WidgetBase.prototype.createWidget = function createWidget(options) {
          var _this6 = this;

          if (!options) {
            throw new Error('the createWidget() function needs to be called with an object');
          }

          if (!options.element) {
            throw new Error('element is not set');
          }

          if (this.viewModel && this.viewModel.kWidget) {
            this.destroy(this.viewModel.kWidget);
          }

          var allOptions = this._getOptions(options.rootElement || options.element);

          if (options.beforeInitialize) {
            options.beforeInitialize(allOptions);
          }

          Object.assign(allOptions, {
            _$parent: [options.parentCtx],
            _$resources: [this.viewResources]
          });

          if (this.configBuilder.debugMode) {
            logger.debug('initializing ' + this.controlName + ' with the following config', allOptions);
          }

          var widget = this._createWidget(options.element, allOptions, this.controlName);

          widget._$parent = options.parentCtx;
          widget._$resources = this.viewResources;

          if (this.withValueBinding) {
            widget.first('change', function (args) {
              return _this6._handleValueChange(args.sender);
            });
            widget.first('dataBound', function (args) {
              return _this6._handleValueChange(args.sender);
            });
          }

          this.bindingsToKendo.forEach(function (binding) {
            var value = _this6.viewModel[binding.propertyName];

            if (typeof value !== 'undefined' && value !== null && value !== '') {
              widget[binding.functionName](value);
            }
          });

          if (options.afterInitialize) {
            options.afterInitialize();
          }

          return widget;
        };

        WidgetBase.prototype._createWidget = function _createWidget(element, options, controlName) {
          return kendo.jQuery(element)[controlName](options).data(controlName);
        };

        WidgetBase.prototype._getOptions = function _getOptions(element) {
          var options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
          var eventOptions = this.getEventOptions(element);

          return this.util.pruneOptions(Object.assign({}, this.viewModel.kOptions || {}, options, eventOptions));
        };

        WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
          var _this7 = this;

          var options = {};
          var allowedEvents = this.kendoEvents;
          var delayedExecution = ['change'];

          var events = this.util.getEventsFromAttributes(element);

          events.forEach(function (event) {
            if (!allowedEvents.includes(event)) {
              throw new Error(event + ' is not an event on the ' + _this7.controlName + ' control');
            }

            if (delayedExecution.includes(event)) {
              options[event] = function (e) {
                _this7.taskQueue.queueMicroTask(function () {
                  return _this7.util.fireKendoEvent(element, _this7.util._hyphenate(event), e);
                });
              };
            } else {
              options[event] = function (e) {
                return _this7.util.fireKendoEvent(element, _this7.util._hyphenate(event), e);
              };
            }
          });

          return options;
        };

        WidgetBase.prototype._handleValueChange = function _handleValueChange(widget) {
          this.viewModel[this.valueBindingProperty] = this.getValue(widget);
        };

        WidgetBase.prototype.getValue = function getValue(widget) {
          return widget[this.valueFunction]();
        };

        WidgetBase.prototype.handlePropertyChanged = function handlePropertyChanged(widget, property, newValue, oldValue) {
          var binding = this.bindingsToKendo.find(function (i) {
            return i.propertyName === property;
          });
          if (binding) {
            widget[binding.functionName](newValue);
          }
        };

        WidgetBase.prototype.useTemplates = function useTemplates(target, controlName, templates) {
          return this.templateGatherer.useTemplates(target, controlName, templates);
        };

        WidgetBase.prototype.destroy = function destroy(widget) {
          if (widget) {
            kendo.destroy(widget.element);
            widget = null;

            if (this.viewModel.kWidget) {
              this.viewModel.kWidget = null;
            }
          }
        };

        return WidgetBase;
      }()) || _class35) || _class35));

      _export('WidgetBase', WidgetBase);

      _export('ContextMenu', ContextMenu = (_dec50 = customAttribute(constants.attributePrefix + 'contextmenu'), _dec51 = generateBindables('kendoContextMenu'), _dec52 = inject(Element, WidgetBase), _dec50(_class37 = _dec51(_class37 = _dec52(_class37 = function () {
        function ContextMenu(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoContextMenu').linkViewModel(this);
        }

        ContextMenu.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ContextMenu.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ContextMenu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ContextMenu.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ContextMenu;
      }()) || _class37) || _class37) || _class37));

      _export('ContextMenu', ContextMenu);

      _export('DatePicker', DatePicker = (_dec53 = customAttribute(constants.attributePrefix + 'datepicker'), _dec54 = generateBindables('kendoDatePicker'), _dec55 = inject(Element, WidgetBase), _dec53(_class38 = _dec54(_class38 = _dec55(_class38 = (_class39 = function () {
        function DatePicker(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor11, this);

          _initDefineProp(this, 'kReadOnly', _descriptor12, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDatePicker').linkViewModel(this).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly').useValueBinding();
        }

        DatePicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DatePicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DatePicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        DatePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        DatePicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return DatePicker;
      }(), (_descriptor11 = _applyDecoratedDescriptor(_class39.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class39.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      })), _class39)) || _class38) || _class38) || _class38));

      _export('DatePicker', DatePicker);

      _export('DateTimePicker', DateTimePicker = (_dec56 = customAttribute(constants.attributePrefix + 'datetimepicker'), _dec57 = generateBindables('kendoDateTimePicker'), _dec58 = inject(Element, WidgetBase), _dec56(_class41 = _dec57(_class41 = _dec58(_class41 = (_class42 = function () {
        function DateTimePicker(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor13, this);

          _initDefineProp(this, 'kReadOnly', _descriptor14, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDateTimePicker').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        DateTimePicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DateTimePicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DateTimePicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        DateTimePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        DateTimePicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return DateTimePicker;
      }(), (_descriptor13 = _applyDecoratedDescriptor(_class42.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class42.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      })), _class42)) || _class41) || _class41) || _class41));

      _export('DateTimePicker', DateTimePicker);

      _export('Diagram', Diagram = (_dec59 = customElement(constants.elementPrefix + 'diagram'), _dec60 = generateBindables('kendoDiagram'), _dec61 = inject(Element, WidgetBase), _dec59(_class44 = _dec60(_class44 = _dec61(_class44 = function () {
        function Diagram(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDiagram').linkViewModel(this);
        }

        Diagram.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Diagram.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Diagram.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Diagram.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Diagram;
      }()) || _class44) || _class44) || _class44));

      _export('Diagram', Diagram);

      _export('Draggabke', Draggabke = (_dec62 = customAttribute(constants.attributePrefix + 'draggable'), _dec63 = generateBindables('kendoDraggable'), _dec64 = inject(Element, WidgetBase), _dec62(_class45 = _dec63(_class45 = _dec64(_class45 = function () {
        function Draggabke(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDraggable').linkViewModel(this);
        }

        Draggabke.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Draggabke.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Draggabke.prototype.recreate = function recreate() {
          var _this8 = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(options) {
              return _this8.beforeInitialize(options);
            }
          });
        };

        Draggabke.prototype.beforeInitialize = function beforeInitialize(options) {
          if (options.container) {
            Object.assign(options, { container: $(options.container) });
          }
        };

        Draggabke.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Draggabke;
      }()) || _class45) || _class45) || _class45));

      _export('Draggabke', Draggabke);

      _export('DropTargetArea', DropTargetArea = (_dec65 = customAttribute(constants.attributePrefix + 'drop-target-area'), _dec66 = generateBindables('kendoDropTargetArea'), _dec67 = inject(Element, WidgetBase), _dec65(_class46 = _dec66(_class46 = _dec67(_class46 = function () {
        function DropTargetArea(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropTargetArea').linkViewModel(this);
        }

        DropTargetArea.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DropTargetArea.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropTargetArea.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        DropTargetArea.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return DropTargetArea;
      }()) || _class46) || _class46) || _class46));

      _export('DropTargetArea', DropTargetArea);

      _export('DropTarget', DropTarget = (_dec68 = customAttribute(constants.attributePrefix + 'drop-target'), _dec69 = generateBindables('kendoDropTarget'), _dec70 = inject(Element, WidgetBase), _dec68(_class47 = _dec69(_class47 = _dec70(_class47 = function () {
        function DropTarget(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropTarget').linkViewModel(this);
        }

        DropTarget.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DropTarget.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropTarget.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        DropTarget.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return DropTarget;
      }()) || _class47) || _class47) || _class47));

      _export('DropTarget', DropTarget);

      _export('DropDownList', DropDownList = (_dec71 = customElement(constants.elementPrefix + 'drop-down-list'), _dec72 = generateBindables('kendoDropDownList'), _dec73 = inject(Element, WidgetBase, ViewResources), _dec74 = children(constants.elementPrefix + 'template'), _dec71(_class48 = _dec72(_class48 = _dec73(_class48 = (_class49 = function () {
        function DropDownList(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'kNoValueBinding', _descriptor15, this);

          _initDefineProp(this, 'kEnabled', _descriptor16, this);

          _initDefineProp(this, 'kReadOnly', _descriptor17, this);

          _initDefineProp(this, 'templates', _descriptor18, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        DropDownList.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DropDownList.prototype.attached = function attached() {
          if (!this.kNoValueBinding) {
            this.widgetBase.useValueBinding();
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropDownList.prototype.recreate = function recreate() {
          var selectNode = getSelectNode(this.element);
          this.widgetBase.useTemplates(this, 'kendoDropDownList', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: selectNode.length > 0 ? selectNode[0] : this.element,
            parentCtx: this.$parent
          });
        };

        DropDownList.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        DropDownList.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return DropDownList;
      }(), (_descriptor15 = _applyDecoratedDescriptor(_class49.prototype, 'kNoValueBinding', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class49.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class49.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class49.prototype, 'templates', [_dec74], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class49)) || _class48) || _class48) || _class48));

      _export('DropDownList', DropDownList);

      _export('Editor', Editor = (_dec75 = customAttribute(constants.attributePrefix + 'rich-editor'), _dec76 = generateBindables('kendoEditor'), _dec77 = inject(Element, WidgetBase), _dec75(_class51 = _dec76(_class51 = _dec77(_class51 = function () {
        function Editor(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoEditor').linkViewModel(this).useValueBinding();
        }

        Editor.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Editor.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Editor.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Editor.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Editor.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Editor;
      }()) || _class51) || _class51) || _class51));

      _export('Editor', Editor);

      _export('FlatColorPicker', FlatColorPicker = (_dec78 = customElement(constants.attributePrefix + 'flat-color-picker'), _dec79 = generateBindables('kendoFlatColorPicker'), _dec80 = inject(Element, WidgetBase), _dec78(_class52 = _dec79(_class52 = _dec80(_class52 = function () {
        function FlatColorPicker(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
        }

        FlatColorPicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        FlatColorPicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        FlatColorPicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        FlatColorPicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return FlatColorPicker;
      }()) || _class52) || _class52) || _class52));

      _export('FlatColorPicker', FlatColorPicker);

      _export('GanttCol', GanttCol = (_dec81 = customElement(constants.elementPrefix + 'gantt-col'), _dec82 = generateBindables('GanttColumn'), _dec83 = inject(TemplateGatherer), _dec81(_class53 = _dec82(_class53 = _dec83(_class53 = function GanttCol() {
        
      }) || _class53) || _class53) || _class53));

      _export('GanttCol', GanttCol);

      _export('Gantt', Gantt = (_dec84 = customElement(constants.elementPrefix + 'gantt'), _dec85 = generateBindables('kendoGantt'), _dec86 = inject(Element, WidgetBase, ViewResources, OptionsBuilder), _dec87 = children(constants.elementPrefix + 'gantt-col'), _dec88 = children(constants.elementPrefix + 'template'), _dec84(_class54 = _dec85(_class54 = _dec86(_class54 = (_class55 = function () {
        function Gantt(element, widgetBase, viewResources, optionsBuilder) {
          

          _initDefineProp(this, 'columns', _descriptor19, this);

          _initDefineProp(this, 'templates', _descriptor20, this);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoGantt').linkViewModel(this).useViewResources(viewResources);
        }

        Gantt.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Gantt.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Gantt.prototype.recreate = function recreate() {
          var _this9 = this;

          this.widgetBase.useTemplates(this, 'kendoGantt', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this9._beforeInitialize(o);
            }
          });
        };

        Gantt.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this10 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (column) {
              options.columns.push(_this10.optionsBuilder.getOptions(column, 'GanttColumn'));
            });
          }
        };

        Gantt.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Gantt;
      }(), (_descriptor19 = _applyDecoratedDescriptor(_class55.prototype, 'columns', [_dec87], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class55.prototype, 'templates', [_dec88], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class55)) || _class54) || _class54) || _class54));

      _export('Gantt', Gantt);

      _export('LinearGauge', LinearGauge = (_dec89 = customElement(constants.elementPrefix + 'linear-gauge'), _dec90 = generateBindables('kendoLinearGauge'), _dec91 = inject(Element, WidgetBase), _dec89(_class57 = _dec90(_class57 = _dec91(_class57 = function () {
        function LinearGauge(element, widgetBase, viewResources) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoLinearGauge').linkViewModel(this).useValueBinding();
        }

        LinearGauge.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        LinearGauge.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        LinearGauge.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        LinearGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        LinearGauge.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return LinearGauge;
      }()) || _class57) || _class57) || _class57));

      _export('LinearGauge', LinearGauge);

      _export('RadialGauge', RadialGauge = (_dec92 = customElement(constants.elementPrefix + 'radial-gauge'), _dec93 = generateBindables('kendoRadialGauge'), _dec94 = inject(Element, WidgetBase), _dec92(_class58 = _dec93(_class58 = _dec94(_class58 = function () {
        function RadialGauge(element, widgetBase, viewResources) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
        }

        RadialGauge.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        RadialGauge.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        RadialGauge.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        RadialGauge.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return RadialGauge;
      }()) || _class58) || _class58) || _class58));

      _export('RadialGauge', RadialGauge);

      _export('Col', Col = (_dec95 = customElement(constants.elementPrefix + 'col'), _dec96 = generateBindables('GridColumn'), _dec97 = inject(TemplateGatherer, OptionsBuilder), _dec98 = children(constants.elementPrefix + 'template'), _dec99 = children(constants.elementPrefix + 'col'), _dec95(_class59 = _dec96(_class59 = _dec97(_class59 = (_class60 = function () {
        function Col(templateGatherer, optionsBuilder) {
          

          _initDefineProp(this, 'templates', _descriptor21, this);

          _initDefineProp(this, 'columns', _descriptor22, this);

          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
        }

        Col.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
          this.templateGatherer.useTemplates(this, 'GridColumn', this.templates);
        };

        Col.prototype.afterOptionsBuild = function afterOptionsBuild(options) {
          var _this11 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (col) {
              options.columns.push(_this11.optionsBuilder.getOptions(col, 'GridColumn'));
            });
          }
        };

        return Col;
      }(), (_descriptor21 = _applyDecoratedDescriptor(_class60.prototype, 'templates', [_dec98], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class60.prototype, 'columns', [_dec99], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class60)) || _class59) || _class59) || _class59));

      _export('Col', Col);

      _export('GridToolbar', GridToolbar = (_dec100 = customElement(constants.elementPrefix + 'grid-toolbar'), _dec101 = generateBindables('GridToolbarItem'), _dec102 = inject(TemplateGatherer), _dec103 = children(constants.elementPrefix + 'template'), _dec100(_class62 = _dec101(_class62 = _dec102(_class62 = (_class63 = function () {
        function GridToolbar(templateGatherer) {
          

          _initDefineProp(this, 'templates', _descriptor23, this);

          this.templateGatherer = templateGatherer;
        }

        GridToolbar.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
          this.templateGatherer.useTemplates(this, 'GridToolbarItem', this.templates);
        };

        return GridToolbar;
      }(), (_descriptor23 = _applyDecoratedDescriptor(_class63.prototype, 'templates', [_dec103], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class63)) || _class62) || _class62) || _class62));

      _export('GridToolbar', GridToolbar);

      _export('Grid', Grid = (_dec104 = customElement(constants.elementPrefix + 'grid'), _dec105 = generateBindables('kendoGrid'), _dec106 = inject(Element, WidgetBase, ViewResources, OptionsBuilder, TemplateGatherer), _dec107 = children(constants.elementPrefix + 'col'), _dec108 = children(constants.elementPrefix + 'template'), _dec109 = children(constants.elementPrefix + 'grid-toolbar'), _dec104(_class65 = _dec105(_class65 = _dec106(_class65 = (_class66 = function () {
        function Grid(element, widgetBase, viewResources, optionsBuilder, templateGatherer) {
          

          _initDefineProp(this, 'columns', _descriptor24, this);

          _initDefineProp(this, 'templates', _descriptor25, this);

          _initDefineProp(this, 'gridToolbars', _descriptor26, this);

          this.element = element;
          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).useViewResources(viewResources);
        }

        Grid.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Grid.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else if (isInitFromTable(this.element)) {
            this.target = this.element.children[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Grid.prototype.recreate = function recreate() {
          var _this12 = this;

          this.templateGatherer.useTemplates(this, 'kendoGrid', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this12._beforeInitialize(o);
            }
          });
        };

        Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this13 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (column) {
              options.columns.push(_this13.optionsBuilder.getOptions(column, 'GridColumn'));
            });
          }

          if (this.gridToolbars && this.gridToolbars.length > 0) {
            var toolbar = this.gridToolbars[0];
            var o = this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem');
            if (o.template) {
              options.toolbar = o.template;
            } else {
              options.toolbar = o;
            }
          }
        };

        Grid.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Grid;
      }(), (_descriptor24 = _applyDecoratedDescriptor(_class66.prototype, 'columns', [_dec107], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class66.prototype, 'templates', [_dec108], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class66.prototype, 'gridToolbars', [_dec109], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class66)) || _class65) || _class65) || _class65));

      _export('Grid', Grid);

      _export('ListView', ListView = (_dec110 = customElement(constants.elementPrefix + 'list-view'), _dec111 = generateBindables('kendoListView'), _dec112 = inject(Element, WidgetBase, ViewResources), _dec113 = children(constants.elementPrefix + 'template'), _dec110(_class68 = _dec111(_class68 = _dec112(_class68 = (_class69 = function () {
        function ListView(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor27, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
        }

        ListView.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ListView.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ListView.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoListView', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ListView.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ListView;
      }(), (_descriptor27 = _applyDecoratedDescriptor(_class69.prototype, 'templates', [_dec113], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class69)) || _class68) || _class68) || _class68));

      _export('ListView', ListView);

      _export('Map', Map = (_dec114 = customElement(constants.elementPrefix + 'map'), _dec115 = generateBindables('kendoMap'), _dec116 = inject(Element, WidgetBase), _dec114(_class71 = _dec115(_class71 = _dec116(_class71 = function () {
        function Map(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
        }

        Map.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Map.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Map.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Map.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Map;
      }()) || _class71) || _class71) || _class71));

      _export('Map', Map);

      _export('MaskedTextBox', MaskedTextBox = (_dec117 = customAttribute(constants.attributePrefix + 'maskedtextbox'), _dec118 = generateBindables('kendoMaskedTextBox'), _dec119 = inject(Element, WidgetBase), _dec117(_class72 = _dec118(_class72 = _dec119(_class72 = (_class73 = function () {
        function MaskedTextBox(element, widgetBase) {
          

          _initDefineProp(this, 'kDisableDates', _descriptor28, this);

          _initDefineProp(this, 'kEnabled', _descriptor29, this);

          _initDefineProp(this, 'kReadOnly', _descriptor30, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMaskedTextBox').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        MaskedTextBox.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        MaskedTextBox.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        MaskedTextBox.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        MaskedTextBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        MaskedTextBox.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return MaskedTextBox;
      }(), (_descriptor28 = _applyDecoratedDescriptor(_class73.prototype, 'kDisableDates', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class73.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class73.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      })), _class73)) || _class72) || _class72) || _class72));

      _export('MaskedTextBox', MaskedTextBox);

      _export('Menu', Menu = (_dec120 = customAttribute(constants.attributePrefix + 'menu'), _dec121 = generateBindables('kendoMenu'), _dec122 = inject(Element, WidgetBase), _dec120(_class75 = _dec121(_class75 = _dec122(_class75 = function () {
        function Menu(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
        }

        Menu.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Menu.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Menu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Menu.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Menu;
      }()) || _class75) || _class75) || _class75));

      _export('Menu', Menu);

      _export('Multiselect', Multiselect = (_dec123 = customElement(constants.elementPrefix + 'multiselect'), _dec124 = generateBindables('kendoMultiSelect', ['template']), _dec125 = inject(Element, WidgetBase, ViewResources), _dec126 = children(constants.elementPrefix + 'template'), _dec123(_class76 = _dec124(_class76 = _dec125(_class76 = (_class77 = function () {
        function Multiselect(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'kEnabled', _descriptor31, this);

          _initDefineProp(this, 'kReadOnly', _descriptor32, this);

          _initDefineProp(this, 'kNoValueBinding', _descriptor33, this);

          _initDefineProp(this, 'templates', _descriptor34, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMultiSelect').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        Multiselect.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Multiselect.prototype.attached = function attached() {
          if (!this.kNoValueBinding) {
            this.widgetBase.useValueBinding();
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Multiselect.prototype.recreate = function recreate() {
          var selectNode = getSelectNode(this.element);
          this.widgetBase.useTemplates(this, 'kendoMultiSelect', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: selectNode.length > 0 ? selectNode[0] : this.element,
            parentCtx: this.$parent
          });
        };

        Multiselect.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          if (property !== 'kValue' || this.kWidget.input.val() === '') {
            this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
          }
        };

        Multiselect.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Multiselect;
      }(), (_descriptor31 = _applyDecoratedDescriptor(_class77.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class77.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class77.prototype, 'kNoValueBinding', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class77.prototype, 'templates', [_dec126], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class77)) || _class76) || _class76) || _class76));

      _export('Multiselect', Multiselect);

      _export('NotificationTemplate', NotificationTemplate = (_dec127 = customElement(constants.elementPrefix + 'notification-template'), _dec128 = noView(), _dec129 = processContent(function (compiler, resources, element, instruction) {
        var html = element.innerHTML;
        if (html !== '') {
          instruction.template = html;
        }
        return true;
      }), _dec130 = inject(TargetInstruction), _dec127(_class79 = _dec128(_class79 = _dec129(_class79 = _dec130(_class79 = (_class80 = function NotificationTemplate(targetInstruction) {
        

        _initDefineProp(this, 'template', _descriptor35, this);

        _initDefineProp(this, 'type', _descriptor36, this);

        this.template = targetInstruction.elementInstruction.template;
      }, (_descriptor35 = _applyDecoratedDescriptor(_class80.prototype, 'template', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class80.prototype, 'type', [bindable], {
        enumerable: true,
        initializer: null
      })), _class80)) || _class79) || _class79) || _class79) || _class79));

      _export('NotificationTemplate', NotificationTemplate);

      _export('Notification', Notification = (_dec131 = customElement(constants.elementPrefix + 'notification'), _dec132 = generateBindables('kendoNotification'), _dec133 = inject(Element, WidgetBase, ViewResources), _dec134 = children(constants.elementPrefix + 'notification-template'), _dec131(_class82 = _dec132(_class82 = _dec133(_class82 = (_class83 = function () {
        function Notification(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor37, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoNotification').linkViewModel(this).useViewResources(viewResources);
        }

        Notification.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Notification.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Notification.prototype.recreate = function recreate() {
          var _this14 = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(e) {
              return _this14.beforeInitialize(e);
            }
          });
        };

        Notification.prototype.beforeInitialize = function beforeInitialize(options) {
          if (this.templates && this.templates.length > 0) {
            options.templates = [];

            this.templates.forEach(function (_template) {
              return options.templates.push({
                type: _template.type,
                template: function template() {
                  return _template.template;
                }
              });
            });
          }
        };

        Notification.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Notification;
      }(), (_descriptor37 = _applyDecoratedDescriptor(_class83.prototype, 'templates', [_dec134], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class83)) || _class82) || _class82) || _class82));

      _export('Notification', Notification);

      _export('NumericTextBox', NumericTextBox = (_dec135 = customAttribute(constants.attributePrefix + 'numerictextbox'), _dec136 = generateBindables('kendoNumericTextBox'), _dec137 = inject(Element, WidgetBase), _dec135(_class85 = _dec136(_class85 = _dec137(_class85 = (_class86 = function () {
        function NumericTextBox(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor38, this);

          _initDefineProp(this, 'kReadOnly', _descriptor39, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        NumericTextBox.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        NumericTextBox.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        NumericTextBox.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        NumericTextBox.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        NumericTextBox.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return NumericTextBox;
      }(), (_descriptor38 = _applyDecoratedDescriptor(_class86.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class86.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      })), _class86)) || _class85) || _class85) || _class85));

      _export('NumericTextBox', NumericTextBox);

      _export('PanelBar', PanelBar = (_dec138 = customElement(constants.elementPrefix + 'panel-bar'), _dec139 = generateBindables('kendoPanelBar'), _dec140 = inject(Element, WidgetBase), _dec138(_class88 = _dec139(_class88 = _dec140(_class88 = function () {
        function PanelBar(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
        }

        PanelBar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PanelBar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PanelBar.prototype.recreate = function recreate() {
          var element = this.element;

          if (!hasListChildNode(element)) {
            var ul = document.createElement('ul');

            while (element.children.length > 0) {
              ul.appendChild(element.children[0]);
            }

            element.appendChild(ul);
            element = ul;
          } else {
            element = this.element.children[0];
          }

          this.kWidget = this.widgetBase.createWidget({
            element: element,
            parentCtx: this.$parent,
            rootElement: this.element
          });
        };

        PanelBar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return PanelBar;
      }()) || _class88) || _class88) || _class88));

      _export('PanelBar', PanelBar);

      _export('PDF', PDF = function PDF() {
        
      });

      _export('PDF', PDF);

      _export('PivotConfigurator', PivotConfigurator = (_dec141 = customElement(constants.elementPrefix + 'pivot-configurator'), _dec142 = generateBindables('kendoPivotConfigurator'), _dec143 = inject(Element, WidgetBase), _dec141(_class89 = _dec142(_class89 = _dec143(_class89 = function () {
        function PivotConfigurator(element, widgetBase, viewResources) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPivotConfigurator').linkViewModel(this);
        }

        PivotConfigurator.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PivotConfigurator.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PivotConfigurator.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        PivotConfigurator.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return PivotConfigurator;
      }()) || _class89) || _class89) || _class89));

      _export('PivotConfigurator', PivotConfigurator);

      _export('PivotGrid', PivotGrid = (_dec144 = customElement(constants.elementPrefix + 'pivot-grid'), _dec145 = generateBindables('kendoPivotGrid'), _dec146 = inject(Element, WidgetBase, ViewResources), _dec147 = children(constants.elementPrefix + 'template'), _dec144(_class90 = _dec145(_class90 = _dec146(_class90 = (_class91 = function () {
        function PivotGrid(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor40, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useViewResources(viewResources);
        }

        PivotGrid.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PivotGrid.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PivotGrid.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        PivotGrid.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return PivotGrid;
      }(), (_descriptor40 = _applyDecoratedDescriptor(_class91.prototype, 'templates', [_dec147], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class91)) || _class90) || _class90) || _class90));

      _export('PivotGrid', PivotGrid);

      _export('ProgressBar', ProgressBar = (_dec148 = customAttribute(constants.attributePrefix + 'progress-bar'), _dec149 = generateBindables('kendoProgressBar'), _dec150 = inject(Element, WidgetBase), _dec148(_class93 = _dec149(_class93 = _dec150(_class93 = (_class94 = function () {
        function ProgressBar(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor41, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoProgressBar').bindToKendo('kEnabled', 'enable').linkViewModel(this);
        }

        ProgressBar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ProgressBar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ProgressBar.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ProgressBar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        ProgressBar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ProgressBar;
      }(), (_descriptor41 = _applyDecoratedDescriptor(_class94.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class94)) || _class93) || _class93) || _class93));

      _export('ProgressBar', ProgressBar);

      _export('QRCode', QRCode = (_dec151 = customAttribute(constants.attributePrefix + 'qrcode'), _dec152 = generateBindables('kendoQRCode'), _dec153 = inject(Element, WidgetBase), _dec151(_class96 = _dec152(_class96 = _dec153(_class96 = function () {
        function QRCode(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoQRCode').linkViewModel(this);
        }

        QRCode.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        QRCode.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        QRCode.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        QRCode.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return QRCode;
      }()) || _class96) || _class96) || _class96));

      _export('QRCode', QRCode);

      _export('RangeSlider', RangeSlider = (_dec154 = customElement(constants.elementPrefix + 'range-slider'), _dec155 = generateBindables('kendoRangeSlider'), _dec156 = inject(Element, WidgetBase), _dec154(_class97 = _dec155(_class97 = _dec156(_class97 = (_class98 = function () {
        function RangeSlider(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor42, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoRangeSlider').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
        }

        RangeSlider.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        RangeSlider.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        RangeSlider.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        RangeSlider.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        RangeSlider.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return RangeSlider;
      }(), (_descriptor42 = _applyDecoratedDescriptor(_class98.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class98)) || _class97) || _class97) || _class97));

      _export('RangeSlider', RangeSlider);

      _export('ResponsivePanel', ResponsivePanel = (_dec157 = customAttribute(constants.attributePrefix + 'responsivepanel'), _dec158 = generateBindables('kendoResponsivePanel'), _dec159 = inject(Element, WidgetBase), _dec157(_class100 = _dec158(_class100 = _dec159(_class100 = function () {
        function ResponsivePanel(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoResponsivePanel').linkViewModel(this);
        }

        ResponsivePanel.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ResponsivePanel.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ResponsivePanel.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ResponsivePanel.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return ResponsivePanel;
      }()) || _class100) || _class100) || _class100));

      _export('ResponsivePanel', ResponsivePanel);

      _export('Scheduler', Scheduler = (_dec160 = customElement(constants.elementPrefix + 'scheduler'), _dec161 = generateBindables('kendoScheduler'), _dec162 = inject(Element, WidgetBase, ViewResources), _dec163 = children(constants.elementPrefix + 'template'), _dec160(_class101 = _dec161(_class101 = _dec162(_class101 = (_class102 = function () {
        function Scheduler(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor43, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoScheduler').linkViewModel(this).useViewResources(viewResources);
        }

        Scheduler.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Scheduler.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Scheduler.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoScheduler', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Scheduler.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Scheduler;
      }(), (_descriptor43 = _applyDecoratedDescriptor(_class102.prototype, 'templates', [_dec163], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class102)) || _class101) || _class101) || _class101));

      _export('Scheduler', Scheduler);

      _export('Scrollview', Scrollview = (_dec164 = customElement(constants.elementPrefix + 'scrollview'), _dec165 = generateBindables('kendoMobileScrollView'), _dec166 = inject(Element, WidgetBase, ViewResources), _dec167 = children(constants.elementPrefix + 'template'), _dec164(_class104 = _dec165(_class104 = _dec166(_class104 = (_class105 = function () {
        function Scrollview(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor44, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMobileScrollView').linkViewModel(this).useViewResources(viewResources).useValueBinding();
        }

        Scrollview.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Scrollview.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Scrollview.prototype.recreate = function recreate() {
          this.widgetBase.useTemplates(this, 'kendoMobileScrollView', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent
          });
        };

        Scrollview.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Scrollview;
      }(), (_descriptor44 = _applyDecoratedDescriptor(_class105.prototype, 'templates', [_dec167], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class105)) || _class104) || _class104) || _class104));

      _export('Scrollview', Scrollview);

      _export('Slider', Slider = (_dec168 = customAttribute(constants.attributePrefix + 'slider'), _dec169 = generateBindables('kendoSlider'), _dec170 = inject(Element, WidgetBase), _dec168(_class107 = _dec169(_class107 = _dec170(_class107 = (_class108 = function () {
        function Slider(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor45, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSlider').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding();
        }

        Slider.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Slider.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Slider.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Slider.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Slider.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Slider;
      }(), (_descriptor45 = _applyDecoratedDescriptor(_class108.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class108)) || _class107) || _class107) || _class107));

      _export('Slider', Slider);

      _export('Sortable', Sortable = (_dec171 = customAttribute(constants.attributePrefix + 'sortable'), _dec172 = generateBindables('kendoSortable'), _dec173 = inject(Element, WidgetBase), _dec171(_class110 = _dec172(_class110 = _dec173(_class110 = function () {
        function Sortable(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSortable').linkViewModel(this);
        }

        Sortable.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Sortable.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Sortable.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Sortable.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Sortable;
      }()) || _class110) || _class110) || _class110));

      _export('Sortable', Sortable);

      _export('Splitter', Splitter = (_dec174 = customAttribute(constants.attributePrefix + 'splitter'), _dec175 = generateBindables('kendoSplitter'), _dec176 = inject(Element, WidgetBase), _dec174(_class111 = _dec175(_class111 = _dec176(_class111 = function () {
        function Splitter(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSplitter').linkViewModel(this);
        }

        Splitter.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Splitter.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Splitter.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Splitter.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Splitter;
      }()) || _class111) || _class111) || _class111));

      _export('Splitter', Splitter);

      _export('Spreadsheet', Spreadsheet = (_dec177 = customElement(constants.elementPrefix + 'spreadsheet'), _dec178 = generateBindables('kendoSpreadsheet'), _dec179 = inject(Element, WidgetBase), _dec177(_class112 = _dec178(_class112 = _dec179(_class112 = function () {
        function Spreadsheet(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSpreadsheet').linkViewModel(this);
        }

        Spreadsheet.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Spreadsheet.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Spreadsheet.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Spreadsheet.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Spreadsheet;
      }()) || _class112) || _class112) || _class112));

      _export('Spreadsheet', Spreadsheet);

      _export('Switch', Switch = (_dec180 = customAttribute(constants.attributePrefix + 'switch'), _dec181 = generateBindables('kendoMobileSwitch'), _dec182 = inject(Element, WidgetBase), _dec180(_class113 = _dec181(_class113 = _dec182(_class113 = (_class114 = function () {
        function Switch(element, widgetBase) {
          

          _initDefineProp(this, 'kEnabled', _descriptor46, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMobileSwitch').linkViewModel(this).bindToKendo('kEnabled', 'enable').useValueBinding('kChecked', 'check');
        }

        Switch.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Switch.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Switch.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Switch.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Switch.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Switch;
      }(), (_descriptor46 = _applyDecoratedDescriptor(_class114.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      })), _class114)) || _class113) || _class113) || _class113));

      _export('Switch', Switch);

      _export('TabStrip', TabStrip = (_dec183 = customAttribute(constants.attributePrefix + 'tabstrip'), _dec184 = generateBindables('kendoTabStrip'), _dec185 = inject(Element, WidgetBase), _dec183(_class116 = _dec184(_class116 = _dec185(_class116 = function () {
        function TabStrip(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this);
        }

        TabStrip.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TabStrip.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TabStrip.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        TabStrip.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TabStrip;
      }()) || _class116) || _class116) || _class116));

      _export('TabStrip', TabStrip);

      _export('TimePicker', TimePicker = (_dec186 = customAttribute(constants.attributePrefix + 'timepicker'), _dec187 = generateBindables('kendoTimePicker'), _dec188 = inject(Element, WidgetBase), _dec186(_class117 = _dec187(_class117 = _dec188(_class117 = (_class118 = function () {
        function TimePicker(element, widgetBase) {
          

          _initDefineProp(this, 'kDisableDates', _descriptor47, this);

          _initDefineProp(this, 'kEnabled', _descriptor48, this);

          _initDefineProp(this, 'kReadOnly', _descriptor49, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTimePicker').linkViewModel(this).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        TimePicker.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TimePicker.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TimePicker.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        TimePicker.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        TimePicker.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TimePicker;
      }(), (_descriptor47 = _applyDecoratedDescriptor(_class118.prototype, 'kDisableDates', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor48 = _applyDecoratedDescriptor(_class118.prototype, 'kEnabled', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor49 = _applyDecoratedDescriptor(_class118.prototype, 'kReadOnly', [bindable], {
        enumerable: true,
        initializer: null
      })), _class118)) || _class117) || _class117) || _class117));

      _export('TimePicker', TimePicker);

      _export('ToolbarItemButton', ToolbarItemButton = (_dec189 = customElement(constants.elementPrefix + 'toolbar-item-button'), _dec190 = generateBindables('ToolBarItemButton'), _dec191 = inject(OptionsBuilder), _dec189(_class120 = _dec190(_class120 = _dec191(_class120 = function () {
        function ToolbarItemButton(optionsBuilder) {
          

          this.optionsBuilder = optionsBuilder;
        }

        ToolbarItemButton.prototype.getOptions = function getOptions() {
          return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
        };

        return ToolbarItemButton;
      }()) || _class120) || _class120) || _class120));

      _export('ToolbarItemButton', ToolbarItemButton);

      _export('ToolbarItem', ToolbarItem = (_dec192 = customElement(constants.elementPrefix + 'toolbar-item'), _dec193 = generateBindables('ToolBarItem'), _dec194 = inject(TemplateGatherer, OptionsBuilder), _dec195 = children(constants.elementPrefix + 'template'), _dec196 = children(constants.elementPrefix + 'toolbar-item-button'), _dec192(_class121 = _dec193(_class121 = _dec194(_class121 = (_class122 = function () {
        function ToolbarItem(templateGatherer, optionsBuilder) {
          

          _initDefineProp(this, 'templates', _descriptor50, this);

          _initDefineProp(this, 'buttons', _descriptor51, this);

          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
        }

        ToolbarItem.prototype.getOptions = function getOptions() {
          var _this15 = this;

          this.templateGatherer.useTemplates(this, 'ToolBarItem', this.templates);

          if (this.buttons && this.buttons.length > 0) {
            this.kButtons = [];

            this.buttons.forEach(function (item) {
              _this15.kButtons.push(item.getOptions());
            });
          }

          return this.optionsBuilder.getOptions(this, 'ToolBarItem');
        };

        return ToolbarItem;
      }(), (_descriptor50 = _applyDecoratedDescriptor(_class122.prototype, 'templates', [_dec195], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class122.prototype, 'buttons', [_dec196], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class122)) || _class121) || _class121) || _class121));

      _export('ToolbarItem', ToolbarItem);

      _export('Toolbar', Toolbar = (_dec197 = customElement(constants.elementPrefix + 'toolbar'), _dec198 = generateBindables('kendoToolBar'), _dec199 = inject(Element, WidgetBase, OptionsBuilder), _dec200 = children(constants.elementPrefix + 'toolbar-item'), _dec197(_class124 = _dec198(_class124 = _dec199(_class124 = (_class125 = function () {
        function Toolbar(element, widgetBase, optionsBuilder) {
          

          _initDefineProp(this, 'toolbarItems', _descriptor52, this);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoToolBar').linkViewModel(this);
        }

        Toolbar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Toolbar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Toolbar.prototype.recreate = function recreate() {
          var _this16 = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this16._beforeInitialize(o);
            }
          });
        };

        Toolbar.prototype._beforeInitialize = function _beforeInitialize(options) {
          if (this.toolbarItems && this.toolbarItems.length > 0) {
            options.items = [];

            this.toolbarItems.forEach(function (item) {
              options.items.push(item.getOptions());
            });
          }
        };

        Toolbar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Toolbar;
      }(), (_descriptor52 = _applyDecoratedDescriptor(_class125.prototype, 'toolbarItems', [_dec200], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class125)) || _class124) || _class124) || _class124));

      _export('Toolbar', Toolbar);

      _export('Tooltip', Tooltip = (_dec201 = customAttribute(constants.attributePrefix + 'tooltip'), _dec202 = generateBindables('kendoTooltip'), _dec203 = inject(Element, WidgetBase), _dec201(_class127 = _dec202(_class127 = _dec203(_class127 = function () {
        function Tooltip(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
        }

        Tooltip.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Tooltip.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Tooltip.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Tooltip.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Tooltip;
      }()) || _class127) || _class127) || _class127));

      _export('Tooltip', Tooltip);

      _export('TreeCol', TreeCol = (_dec204 = customElement(constants.elementPrefix + 'tree-col'), _dec205 = generateBindables('TreeListColumn'), _dec206 = inject(TemplateGatherer), _dec207 = children(constants.elementPrefix + 'template'), _dec204(_class128 = _dec205(_class128 = _dec206(_class128 = (_class129 = function () {
        function TreeCol(templateGatherer) {
          

          _initDefineProp(this, 'templates', _descriptor53, this);

          this.templateGatherer = templateGatherer;
        }

        TreeCol.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
          this.templateGatherer.useTemplates(this, 'TreeListColumn', this.templates);
        };

        return TreeCol;
      }(), (_descriptor53 = _applyDecoratedDescriptor(_class129.prototype, 'templates', [_dec207], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class129)) || _class128) || _class128) || _class128));

      _export('TreeCol', TreeCol);

      _export('TreeList', TreeList = (_dec208 = customElement(constants.elementPrefix + 'tree-list'), _dec209 = generateBindables('kendoTreeList'), _dec210 = inject(Element, WidgetBase, ViewResources, OptionsBuilder), _dec211 = children(constants.elementPrefix + 'tree-col'), _dec208(_class131 = _dec209(_class131 = _dec210(_class131 = (_class132 = function () {
        function TreeList(element, widgetBase, viewResources, optionsBuilder) {
          

          _initDefineProp(this, 'columns', _descriptor54, this);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
        }

        TreeList.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeList.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeList.prototype.recreate = function recreate() {
          var _this17 = this;

          var element = this.element;

          this.kWidget = this.widgetBase.createWidget({
            element: element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this17._beforeInitialize(o);
            }
          });
        };

        TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this18 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (column) {
              options.columns.push(_this18.optionsBuilder.getOptions(column, 'TreeListColumn'));
            });
          }
        };

        TreeList.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TreeList;
      }(), (_descriptor54 = _applyDecoratedDescriptor(_class132.prototype, 'columns', [_dec211], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class132)) || _class131) || _class131) || _class131));

      _export('TreeList', TreeList);

      _export('TreeView', TreeView = (_dec212 = customAttribute(constants.attributePrefix + 'treeview'), _dec213 = generateBindables('kendoTreeView'), _dec214 = inject(Element, WidgetBase), _dec212(_class134 = _dec213(_class134 = _dec214(_class134 = function () {
        function TreeView(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this);
        }

        TreeView.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeView.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeView.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        TreeView.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TreeView;
      }()) || _class134) || _class134) || _class134));

      _export('TreeView', TreeView);

      _export('Upload', Upload = (_dec215 = customElement(constants.elementPrefix + 'upload'), _dec216 = generateBindables('kendoUpload'), _dec217 = inject(Element, WidgetBase, ViewResources), _dec218 = children(constants.elementPrefix + 'template'), _dec215(_class135 = _dec216(_class135 = _dec217(_class135 = (_class136 = function () {
        function Upload(element, widgetBase, viewResources) {
          

          _initDefineProp(this, 'templates', _descriptor55, this);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoUpload').linkViewModel(this).useViewResources(viewResources);
        }

        Upload.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Upload.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Upload.prototype.recreate = function recreate() {
          var target = void 0;
          var inputs = this.element.querySelectorAll('input');
          if (inputs.length > 0) {
            target = inputs[0];
          } else {
            target = document.createElement('input');
            this.element.appendChild(target);
          }

          this.widgetBase.useTemplates(this, 'kendoUpload', this.templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: target,
            parentCtx: this.$parent
          });
        };

        Upload.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Upload;
      }(), (_descriptor55 = _applyDecoratedDescriptor(_class136.prototype, 'templates', [_dec218], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class136)) || _class135) || _class135) || _class135));

      _export('Upload', Upload);

      _export('Validator', Validator = (_dec219 = customAttribute(constants.attributePrefix + 'validator'), _dec220 = generateBindables('kendoValidator'), _dec221 = inject(Element, WidgetBase), _dec219(_class138 = _dec220(_class138 = _dec221(_class138 = function () {
        function Validator(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoValidator').linkViewModel(this);
        }

        Validator.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Validator.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Validator.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Validator.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Validator;
      }()) || _class138) || _class138) || _class138));

      _export('Validator', Validator);

      _export('kendoToStringValueConverter', kendoToStringValueConverter = function () {
        function kendoToStringValueConverter() {
          
        }

        kendoToStringValueConverter.prototype.toView = function toView(value, format, language) {
          return kendo.toString(value, format, language);
        };

        return kendoToStringValueConverter;
      }());

      _export('kendoToStringValueConverter', kendoToStringValueConverter);

      _export('kendoParseDateValueConverter', kendoParseDateValueConverter = function () {
        function kendoParseDateValueConverter() {
          
        }

        kendoParseDateValueConverter.prototype.toView = function toView(value, format, language) {
          return kendo.parseDate(value, format, language);
        };

        return kendoParseDateValueConverter;
      }());

      _export('kendoParseDateValueConverter', kendoParseDateValueConverter);

      _export('kendoParseIntValueConverter', kendoParseIntValueConverter = function () {
        function kendoParseIntValueConverter() {
          
        }

        kendoParseIntValueConverter.prototype.toView = function toView(value, language) {
          return kendo.parseInt(value, language);
        };

        return kendoParseIntValueConverter;
      }());

      _export('kendoParseIntValueConverter', kendoParseIntValueConverter);

      _export('kendoParseFloatValueConverter', kendoParseFloatValueConverter = function () {
        function kendoParseFloatValueConverter() {
          
        }

        kendoParseFloatValueConverter.prototype.toView = function toView(value, language) {
          return kendo.parseFloat(value, language);
        };

        return kendoParseFloatValueConverter;
      }());

      _export('kendoParseFloatValueConverter', kendoParseFloatValueConverter);

      _export('kendoParseColorValueConverter', kendoParseColorValueConverter = function () {
        function kendoParseColorValueConverter() {
          
        }

        kendoParseColorValueConverter.prototype.toView = function toView(value) {
          return kendo.parseColor(value);
        };

        return kendoParseColorValueConverter;
      }());

      _export('kendoParseColorValueConverter', kendoParseColorValueConverter);

      _export('kendoStringifyValueConverter', kendoStringifyValueConverter = function () {
        function kendoStringifyValueConverter() {
          
        }

        kendoStringifyValueConverter.prototype.toView = function toView(obj) {
          return kendo.stringify(obj);
        };

        return kendoStringifyValueConverter;
      }());

      _export('kendoStringifyValueConverter', kendoStringifyValueConverter);

      _export('kendoFormatValueConverter', kendoFormatValueConverter = function () {
        function kendoFormatValueConverter() {
          
        }

        kendoFormatValueConverter.prototype.toView = function toView(value) {
          for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            params[_key2 - 1] = arguments[_key2];
          }

          params.unshift(value);

          return kendo.format.apply(this, params);
        };

        return kendoFormatValueConverter;
      }());

      _export('kendoFormatValueConverter', kendoFormatValueConverter);

      _export('Window', Window = (_dec222 = customAttribute(constants.attributePrefix + 'window'), _dec223 = generateBindables('kendoWindow'), _dec224 = inject(Element, WidgetBase), _dec222(_class139 = _dec223(_class139 = _dec224(_class139 = function () {
        function Window(element, widgetBase) {
          

          this.element = element;
          this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
        }

        Window.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Window.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Window.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Window.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Window;
      }()) || _class139) || _class139) || _class139));

      _export('Window', Window);
    }
  };
});