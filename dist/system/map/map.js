System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.map.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, Map;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoDatavizMapMin) {}],
    execute: function () {
      Map = (function () {
        function Map(element, widgetBase) {
          _classCallCheck(this, _Map);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
        }

        Map.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Map.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
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
        Map = inject(Element, WidgetBase)(Map) || Map;
        Map = generateBindables('kendoMap')(Map) || Map;
        Map = customElement(constants.elementPrefix + 'map')(Map) || Map;
        return Map;
      })();

      _export('Map', Map);
    }
  };
});