System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.pivot.configurator.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, PivotConfigurator;

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
    }, function (_kendoPivotConfiguratorMin) {}],
    execute: function () {
      PivotConfigurator = (function () {
        function PivotConfigurator(element, widgetBase, viewResources) {
          _classCallCheck(this, _PivotConfigurator);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPivotConfigurator').linkViewModel(this);
        }

        PivotConfigurator.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PivotConfigurator.prototype.attached = function attached() {
          this.recreate();
        };

        PivotConfigurator.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        PivotConfigurator.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _PivotConfigurator = PivotConfigurator;
        PivotConfigurator = inject(Element, WidgetBase)(PivotConfigurator) || PivotConfigurator;
        PivotConfigurator = generateBindables('kendoPivotConfigurator')(PivotConfigurator) || PivotConfigurator;
        PivotConfigurator = customElement(constants.elementPrefix + 'pivot-configurator')(PivotConfigurator) || PivotConfigurator;
        return PivotConfigurator;
      })();

      _export('PivotConfigurator', PivotConfigurator);
    }
  };
});