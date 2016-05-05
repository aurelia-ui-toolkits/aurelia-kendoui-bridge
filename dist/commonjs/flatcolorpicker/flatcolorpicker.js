'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.colorpicker.min');

var FlatColorPicker = (function () {
  function FlatColorPicker(element, widgetBase) {
    _classCallCheck(this, _FlatColorPicker);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoFlatColorPicker').linkViewModel(this);
  }

  FlatColorPicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  FlatColorPicker.prototype.attached = function attached() {
    this.recreate();
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

  var _FlatColorPicker = FlatColorPicker;
  FlatColorPicker = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(FlatColorPicker) || FlatColorPicker;
  FlatColorPicker = _commonDecorators.generateBindables('kendoFlatColorPicker')(FlatColorPicker) || FlatColorPicker;
  FlatColorPicker = _aureliaTemplating.customElement(_commonConstants.constants.attributePrefix + 'flat-color-picker')(FlatColorPicker) || FlatColorPicker;
  return FlatColorPicker;
})();

exports.FlatColorPicker = FlatColorPicker;