'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.spreadsheet.min');

var Spreadsheet = (function () {
  function Spreadsheet(element, widgetBase) {
    _classCallCheck(this, _Spreadsheet);

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

  var _Spreadsheet = Spreadsheet;
  Spreadsheet = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Spreadsheet) || Spreadsheet;
  Spreadsheet = _commonDecorators.generateBindables('kendoSpreadsheet')(Spreadsheet) || Spreadsheet;
  Spreadsheet = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'spreadsheet')(Spreadsheet) || Spreadsheet;
  return Spreadsheet;
})();

exports.Spreadsheet = Spreadsheet;