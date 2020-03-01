System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, ArcGauge;

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
      _export('ArcGauge', ArcGauge = (_dec = customElement(constants.elementPrefix + 'arc-gauge'), _dec2 = generateBindables('kendoArcGauge'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
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
      }()) || _class) || _class) || _class));

      _export('ArcGauge', ArcGauge);
    }
  };
});