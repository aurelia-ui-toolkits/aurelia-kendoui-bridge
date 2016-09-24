define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.gauge.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RadialGauge = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var RadialGauge = exports.RadialGauge = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'radial-gauge'), _dec2 = (0, _decorators.generateBindables)('kendoRadialGauge'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function RadialGauge(element, widgetBase, viewResources) {
      _classCallCheck(this, RadialGauge);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoRadialGauge').linkViewModel(this).useValueBinding();
    }

    RadialGauge.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    RadialGauge.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    RadialGauge.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    RadialGauge.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return RadialGauge;
  }()) || _class) || _class) || _class);
});