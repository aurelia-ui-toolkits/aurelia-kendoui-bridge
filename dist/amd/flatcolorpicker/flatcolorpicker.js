define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FlatColorPicker = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var FlatColorPicker = exports.FlatColorPicker = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.attributePrefix + 'flat-color-picker'), _dec2 = (0, _decorators.generateBindables)('kendoFlatColorPicker'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function FlatColorPicker(element, widgetBase) {
      _classCallCheck(this, FlatColorPicker);

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

    FlatColorPicker.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return FlatColorPicker;
  }()) || _class) || _class) || _class);
});