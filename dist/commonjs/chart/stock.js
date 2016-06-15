'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stock = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _pdf = require('../pdf/pdf');

require('kendo.dataviz.stock.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stock = exports.Stock = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'stock'), _dec2 = (0, _decorators.generateBindables)('kendoStockChart'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Stock(element, widgetBase) {
    _classCallCheck(this, Stock);

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
}()) || _class) || _class) || _class);