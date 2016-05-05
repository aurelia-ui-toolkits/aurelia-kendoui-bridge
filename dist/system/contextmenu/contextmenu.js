System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.menu.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, ContextMenu;

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
    }, function (_kendoMenuMin) {}],
    execute: function () {
      ContextMenu = (function () {
        function ContextMenu(element, widgetBase) {
          _classCallCheck(this, _ContextMenu);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoContextMenu').linkViewModel(this);
        }

        ContextMenu.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        ContextMenu.prototype.attached = function attached() {
          this.recreate();
        };

        ContextMenu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        ContextMenu.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _ContextMenu = ContextMenu;
        ContextMenu = inject(Element, WidgetBase)(ContextMenu) || ContextMenu;
        ContextMenu = generateBindables('kendoContextMenu')(ContextMenu) || ContextMenu;
        ContextMenu = customAttribute(constants.attributePrefix + 'contextmenu')(ContextMenu) || ContextMenu;
        return ContextMenu;
      })();

      _export('ContextMenu', ContextMenu);
    }
  };
});