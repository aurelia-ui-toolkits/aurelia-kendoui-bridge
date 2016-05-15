define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.menu.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoMenuMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ContextMenu = (function () {
    function ContextMenu(element, widgetBase) {
      _classCallCheck(this, _ContextMenu);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoContextMenu').linkViewModel(this);
    }

    ContextMenu.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    ContextMenu.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
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
    ContextMenu = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(ContextMenu) || ContextMenu;
    ContextMenu = _commonDecorators.generateBindables('kendoContextMenu')(ContextMenu) || ContextMenu;
    ContextMenu = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'contextmenu')(ContextMenu) || ContextMenu;
    return ContextMenu;
  })();

  exports.ContextMenu = ContextMenu;
});