'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, LinearGauge;

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
      _export('LinearGauge', LinearGauge = (_dec = customElement(constants.elementPrefix + 'linear-gauge'), _dec2 = generateBindables('kendoLinearGauge'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function LinearGauge(element, widgetBase) {
          _classCallCheck(this, LinearGauge);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoLinearGauge').useElement(this.element).linkViewModel(this).useValueBinding();
        }

        LinearGauge.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        LinearGauge.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        LinearGauge.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        LinearGauge.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        LinearGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        LinearGauge.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        LinearGauge.prototype.detached = function detached() {
          this.destroy();
        };

        return LinearGauge;
      }()) || _class) || _class) || _class));

      _export('LinearGauge', LinearGauge);
    }
  };
});