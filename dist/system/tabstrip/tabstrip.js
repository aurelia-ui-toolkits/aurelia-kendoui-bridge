System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.tabstrip.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, TabStrip;

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
    }, function (_kendoTabstripMin) {}],
    execute: function () {
      TabStrip = (function () {
        function TabStrip(element, widgetBase) {
          _classCallCheck(this, _TabStrip);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this);
        }

        TabStrip.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TabStrip.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TabStrip.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        TabStrip.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _TabStrip = TabStrip;
        TabStrip = inject(Element, WidgetBase)(TabStrip) || TabStrip;
        TabStrip = generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
        TabStrip = customAttribute(constants.attributePrefix + 'tabstrip')(TabStrip) || TabStrip;
        return TabStrip;
      })();

      _export('TabStrip', TabStrip);
    }
  };
});