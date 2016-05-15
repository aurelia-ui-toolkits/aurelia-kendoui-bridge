define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.colorpicker.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoColorpickerMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
      if (!this.kNoInit) {
        this.recreate();
      }
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
});