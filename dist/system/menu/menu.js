System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.menu.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Menu;

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
      Menu = (function () {
        function Menu(element, widgetBase) {
          _classCallCheck(this, _Menu);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
        }

        Menu.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Menu.prototype.attached = function attached() {
          this.recreate();
        };

        Menu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Menu.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Menu = Menu;
        Menu = inject(Element, WidgetBase)(Menu) || Menu;
        Menu = generateBindables('kendoMenu')(Menu) || Menu;
        Menu = customAttribute(constants.attributePrefix + 'menu')(Menu) || Menu;
        return Menu;
      })();

      _export('Menu', Menu);
    }
  };
});