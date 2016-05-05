'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.colorpicker.min');

var ColorPalette = (function () {
  function ColorPalette(element, widgetBase) {
    _classCallCheck(this, _ColorPalette);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
  }

  ColorPalette.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ColorPalette.prototype.attached = function attached() {
    this.recreate();
  };

  ColorPalette.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ColorPalette.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  ColorPalette.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ColorPalette = ColorPalette;
  ColorPalette = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(ColorPalette) || ColorPalette;
  ColorPalette = _commonDecorators.generateBindables('kendoColorPalette')(ColorPalette) || ColorPalette;
  ColorPalette = _aureliaTemplating.customElement(_commonConstants.constants.attributePrefix + 'color-palette')(ColorPalette) || ColorPalette;
  return ColorPalette;
})();

exports.ColorPalette = ColorPalette;