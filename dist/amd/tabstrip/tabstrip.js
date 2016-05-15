define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.tabstrip.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoTabstripMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TabStrip = (function () {
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
    TabStrip = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(TabStrip) || TabStrip;
    TabStrip = _commonDecorators.generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
    TabStrip = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'tabstrip')(TabStrip) || TabStrip;
    return TabStrip;
  })();

  exports.TabStrip = TabStrip;
});