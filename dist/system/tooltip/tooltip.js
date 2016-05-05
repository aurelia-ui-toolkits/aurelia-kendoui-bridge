System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.tooltip.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Tooltip;

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
    }, function (_kendoTooltipMin) {}],
    execute: function () {
      Tooltip = (function () {
        function Tooltip(element, widgetBase) {
          _classCallCheck(this, _Tooltip);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
        }

        Tooltip.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Tooltip.prototype.attached = function attached() {
          this.recreate();
        };

        Tooltip.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Tooltip.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Tooltip = Tooltip;
        Tooltip = inject(Element, WidgetBase)(Tooltip) || Tooltip;
        Tooltip = generateBindables('kendoTooltip')(Tooltip) || Tooltip;
        Tooltip = customAttribute(constants.attributePrefix + 'tooltip')(Tooltip) || Tooltip;
        return Tooltip;
      })();

      _export('Tooltip', Tooltip);
    }
  };
});