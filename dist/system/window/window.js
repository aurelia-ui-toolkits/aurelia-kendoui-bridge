System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.window.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Window;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoWindowMin) {}],
    execute: function () {
      Window = (function () {
        function Window(element, widgetBase) {
          _classCallCheck(this, _Window);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
        }

        Window.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Window.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Window.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Window.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Window = Window;
        Window = inject(Element, WidgetBase)(Window) || Window;
        Window = generateBindables('kendoWindow')(Window) || Window;
        Window = customAttribute(constants.attributePrefix + 'window')(Window) || Window;
        return Window;
      })();

      _export('Window', Window);
    }
  };
});