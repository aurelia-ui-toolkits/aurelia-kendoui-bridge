define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.pivot.configurator.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoPivotConfiguratorMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var PivotConfigurator = (function () {
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
    PivotConfigurator = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(PivotConfigurator) || PivotConfigurator;
    PivotConfigurator = _commonDecorators.generateBindables('kendoPivotConfigurator')(PivotConfigurator) || PivotConfigurator;
    PivotConfigurator = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'pivot-configurator')(PivotConfigurator) || PivotConfigurator;
    return PivotConfigurator;
  })();

  exports.PivotConfigurator = PivotConfigurator;
});