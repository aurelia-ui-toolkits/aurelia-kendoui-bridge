define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.colorpicker.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ColorPalette = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var ColorPalette = exports.ColorPalette = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.attributePrefix + 'color-palette'), _dec2 = (0, _decorators.generateBindables)('kendoColorPalette'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function ColorPalette(element, widgetBase) {
      _classCallCheck(this, ColorPalette);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoColorPalette').linkViewModel(this).useValueBinding();
    }

    ColorPalette.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    ColorPalette.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
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

    return ColorPalette;
  }()) || _class) || _class) || _class);
});