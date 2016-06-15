'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

require('kendo.calendar.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calendar = exports.Calendar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'calendar'), _dec2 = (0, _decorators.generateBindables)('kendoCalendar'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Calendar(element, widgetBase, viewResources) {
    _classCallCheck(this, Calendar);

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
}()) || _class) || _class) || _class);