define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TreeMap = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var TreeMap = exports.TreeMap = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'treemap'), _dec2 = (0, _decorators.generateBindables)('kendoTreeMap'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function TreeMap(element, widgetBase) {
      _classCallCheck(this, TreeMap);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoTreeMap').useElement(this.element).linkViewModel(this);
    }

    TreeMap.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    TreeMap.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    TreeMap.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    TreeMap.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    TreeMap.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    TreeMap.prototype.detached = function detached() {
      this.destroy();
    };

    return TreeMap;
  }()) || _class) || _class) || _class);
});