define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.map.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoDatavizMapMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Map = (function () {
    function Map(element, widgetBase) {
      _classCallCheck(this, _Map);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
    }

    Map.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Map.prototype.attached = function attached() {
      this.recreate();
    };

    Map.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    Map.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Map = Map;
    Map = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Map) || Map;
    Map = _commonDecorators.generateBindables('kendoMap')(Map) || Map;
    Map = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'map')(Map) || Map;
    return Map;
  })();

  exports.Map = Map;
});