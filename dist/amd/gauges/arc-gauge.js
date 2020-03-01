define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ArcGauge = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var ArcGauge = exports.ArcGauge = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'arc-gauge'), _dec2 = (0, _decorators.generateBindables)('kendoArcGauge'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function ArcGauge(element, widgetBase) {
      _classCallCheck(this, ArcGauge);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoArcGauge').useElement(this.element).linkViewModel(this).useValueBinding();
    }

    ArcGauge.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    ArcGauge.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    ArcGauge.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    ArcGauge.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    ArcGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    ArcGauge.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    ArcGauge.prototype.detached = function detached() {
      this.destroy();
    };

    return ArcGauge;
  }()) || _class) || _class) || _class);
});