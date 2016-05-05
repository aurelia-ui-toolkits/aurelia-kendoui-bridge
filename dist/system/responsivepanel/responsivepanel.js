System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.responsivepanel.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, ResponsivePanel;

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
    }, function (_kendoResponsivepanelMin) {}],
    execute: function () {
      ResponsivePanel = (function () {
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
        ResponsivePanel = inject(Element, WidgetBase)(ResponsivePanel) || ResponsivePanel;
        ResponsivePanel = generateBindables('kendoResponsivePanel')(ResponsivePanel) || ResponsivePanel;
        ResponsivePanel = customAttribute(constants.attributePrefix + 'responsivepanel')(ResponsivePanel) || ResponsivePanel;
        return ResponsivePanel;
      })();

      _export('ResponsivePanel', ResponsivePanel);
    }
  };
});