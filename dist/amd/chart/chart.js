define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Chart = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Chart = exports.Chart = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'chart'), _dec2 = (0, _decorators.generateBindables)('kendoChart'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Chart(element, widgetBase) {
      _classCallCheck(this, Chart);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoChart').useElement(this.element).linkViewModel(this);
    }

    Chart.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    Chart.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Chart.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Chart.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Chart.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Chart.prototype.detached = function detached() {
      this.destroy();
    };

    return Chart;
  }()) || _class) || _class) || _class);
});