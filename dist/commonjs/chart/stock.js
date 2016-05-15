'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

var _pdfPdf = require('../pdf/pdf');

require('kendo.dataviz.stock.min');

var Stock = (function () {
  function Stock(element, widgetBase) {
    _classCallCheck(this, _Stock);

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

  var _Stock = Stock;
  Stock = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Stock) || Stock;
  Stock = _commonDecorators.generateBindables('kendoStockChart')(Stock) || Stock;
  Stock = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'stock')(Stock) || Stock;
  return Stock;
})();

exports.Stock = Stock;