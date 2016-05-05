define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.sortable.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoSortableMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Sortable = (function () {
    function Sortable(element, widgetBase) {
      _classCallCheck(this, _Sortable);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoSortable').linkViewModel(this);
    }

    Sortable.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Sortable.prototype.attached = function attached() {
      this.recreate();
    };

    Sortable.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Sortable.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Sortable = Sortable;
    Sortable = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Sortable) || Sortable;
    Sortable = _commonDecorators.generateBindables('kendoSortable')(Sortable) || Sortable;
    Sortable = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'sortable')(Sortable) || Sortable;
    return Sortable;
  })();

  exports.Sortable = Sortable;
});