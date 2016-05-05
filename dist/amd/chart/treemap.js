define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.treemap.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _pdfPdf, _kendoDatavizTreemapMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TreeMap = (function () {
    function TreeMap(element, widgetBase) {
      _classCallCheck(this, _TreeMap);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
    }

    TreeMap.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    TreeMap.prototype.attached = function attached() {
      this.recreate();
    };

    TreeMap.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    TreeMap.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _TreeMap = TreeMap;
    TreeMap = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(TreeMap) || TreeMap;
    TreeMap = _commonDecorators.generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
    TreeMap = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'treemap')(TreeMap) || TreeMap;
    return TreeMap;
  })();

  exports.TreeMap = TreeMap;
});