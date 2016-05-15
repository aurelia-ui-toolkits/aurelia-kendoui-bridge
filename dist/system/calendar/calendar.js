System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.calendar.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, Calendar;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoCalendarMin) {}],
    execute: function () {
      Calendar = (function () {
        function Calendar(element, widgetBase, viewResources) {
          _classCallCheck(this, _Calendar);

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

        var _Calendar = Calendar;
        Calendar = inject(Element, WidgetBase)(Calendar) || Calendar;
        Calendar = generateBindables('kendoCalendar')(Calendar) || Calendar;
        Calendar = customElement(constants.elementPrefix + 'calendar')(Calendar) || Calendar;
        return Calendar;
      })();

      _export('Calendar', Calendar);
    }
  };
});