define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.window.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoWindowMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Window = (function () {
    function Window(element, widgetBase) {
      _classCallCheck(this, _Window);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
    }

    Window.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Window.prototype.attached = function attached() {
      this.recreate();
    };

    Window.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Window.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Window = Window;
    Window = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Window) || Window;
    Window = _commonDecorators.generateBindables('kendoWindow')(Window) || Window;
    Window = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'window')(Window) || Window;
    return Window;
  })();

  exports.Window = Window;
});