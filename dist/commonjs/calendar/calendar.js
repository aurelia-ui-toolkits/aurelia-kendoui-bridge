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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calendar = exports.Calendar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'calendar'), _dec2 = (0, _decorators.generateBindables)('kendoCalendar'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Calendar(element, widgetBase) {
    _classCallCheck(this, Calendar);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoCalendar').useElement(this.element).linkViewModel(this).useValueBinding();
  }

  Calendar.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  Calendar.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Calendar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Calendar.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  Calendar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Calendar.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Calendar.prototype.detached = function detached() {
    this.destroy();
  };

  return Calendar;
}()) || _class) || _class) || _class);