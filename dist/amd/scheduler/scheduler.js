define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options', '../pdf/pdf', 'kendo-ui/js/kendo.scheduler.min', 'kendo-ui/js/kendo.scheduler.agendaview.min', 'kendo-ui/js/kendo.scheduler.dayview.min', 'kendo-ui/js/kendo.scheduler.monthview.min', 'kendo-ui/js/kendo.scheduler.recurrence.min', 'kendo-ui/js/kendo.scheduler.timelineview.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _commonOptions, _pdfPdf, _kendoUiJsKendoSchedulerMin, _kendoUiJsKendoSchedulerAgendaviewMin, _kendoUiJsKendoSchedulerDayviewMin, _kendoUiJsKendoSchedulerMonthviewMin, _kendoUiJsKendoSchedulerRecurrenceMin, _kendoUiJsKendoSchedulerTimelineviewMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Scheduler = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Scheduler, [{
      key: 'options',
      decorators: [_aureliaTemplating.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }, {
      key: 'eventTemplates',
      decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'event-template')],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Scheduler(element, widgetBase, viewResources) {
      _classCallCheck(this, _Scheduler);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'eventTemplates', _instanceInitializers);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoScheduler').linkViewModel(this).useViewResources(viewResources);
    }

    Scheduler.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Scheduler.prototype.attached = function attached() {
      this.recreate();
    };

    Scheduler.prototype.recreate = function recreate() {
      var _this = this;

      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent,
        beforeInitialize: function beforeInitialize(o) {
          return _this._beforeInitialize(o);
        }
      });
    };

    Scheduler.prototype._beforeInitialize = function _beforeInitialize(options) {
      var _this2 = this;

      var eventTemplate = undefined;

      if (this.kEventTemplate) {
        eventTemplate = function () {
          return _this2.kEventTemplate;
        };
      } else if (this.eventTemplates.length > 0) {
        eventTemplate = function () {
          return _this2.eventTemplates[0].template;
        };
      }

      return Object.assign(options, _commonOptions.pruneOptions({
        eventTemplate: eventTemplate
      }));
    };

    Scheduler.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Scheduler = Scheduler;
    Scheduler = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _aureliaTemplating.ViewResources)(Scheduler) || Scheduler;
    Scheduler = _commonDecorators.generateBindables('kendoScheduler')(Scheduler) || Scheduler;
    Scheduler = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'scheduler')(Scheduler) || Scheduler;
    return Scheduler;
  })();

  exports.Scheduler = Scheduler;
});