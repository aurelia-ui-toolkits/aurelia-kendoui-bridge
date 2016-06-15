'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sortable = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

require('kendo.sortable.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sortable = exports.Sortable = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'sortable'), _dec2 = (0, _decorators.generateBindables)('kendoSortable'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Sortable(element, widgetBase) {
    _classCallCheck(this, Sortable);

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
}()) || _class) || _class) || _class);