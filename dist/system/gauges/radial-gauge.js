'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, RadialGauge;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
    }],
    execute: function () {
      _export('RadialGauge', RadialGauge = (_dec = customElement(constants.elementPrefix + 'radial-gauge'), _dec2 = generateBindables('kendoRadialGauge'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function RadialGauge(element, widgetBase) {
          _classCallCheck(this, RadialGauge);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoRadialGauge').useElement(this.element).linkViewModel(this).useValueBinding();
        }

        RadialGauge.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        RadialGauge.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        RadialGauge.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        RadialGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        RadialGauge.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        RadialGauge.prototype.detached = function detached() {
          this.destroy();
        };

        return RadialGauge;
      }()) || _class) || _class) || _class));

      _export('RadialGauge', RadialGauge);
    }
  };
});