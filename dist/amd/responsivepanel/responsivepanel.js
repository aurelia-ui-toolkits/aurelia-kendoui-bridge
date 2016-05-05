define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.responsivepanel.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoResponsivepanelMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ResponsivePanel = (function () {
    function ResponsivePanel(element, widgetBase) {
      _classCallCheck(this, _ResponsivePanel);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoResponsivePanel').linkViewModel(this);
    }

    ResponsivePanel.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    ResponsivePanel.prototype.attached = function attached() {
      this.recreate();
    };

    ResponsivePanel.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    ResponsivePanel.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _ResponsivePanel = ResponsivePanel;
    ResponsivePanel = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(ResponsivePanel) || ResponsivePanel;
    ResponsivePanel = _commonDecorators.generateBindables('kendoResponsivePanel')(ResponsivePanel) || ResponsivePanel;
    ResponsivePanel = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'responsivepanel')(ResponsivePanel) || ResponsivePanel;
    return ResponsivePanel;
  })();

  exports.ResponsivePanel = ResponsivePanel;
});