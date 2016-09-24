'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.scheduler.min', 'kendo.scheduler.agendaview.min', 'kendo.scheduler.dayview.min', 'kendo.scheduler.monthview.min', 'kendo.scheduler.recurrence.min', 'kendo.scheduler.timelineview.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, ViewResources, WidgetBase, generateBindables, constants, PDF, _dec, _dec2, _dec3, _class, Scheduler;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoSchedulerMin) {}, function (_kendoSchedulerAgendaviewMin) {}, function (_kendoSchedulerDayviewMin) {}, function (_kendoSchedulerMonthviewMin) {}, function (_kendoSchedulerRecurrenceMin) {}, function (_kendoSchedulerTimelineviewMin) {}],
    execute: function () {
      _export('Scheduler', Scheduler = (_dec = customElement(constants.elementPrefix + 'scheduler'), _dec2 = generateBindables('kendoScheduler'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Scheduler(element, widgetBase, viewResources) {
          _classCallCheck(this, Scheduler);

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
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoScheduler', templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Scheduler.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Scheduler;
      }()) || _class) || _class) || _class));

      _export('Scheduler', Scheduler);
    }
  };
});