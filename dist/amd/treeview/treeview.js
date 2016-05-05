define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.treeview.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoTreeviewMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TreeView = (function () {
    function TreeView(element, widgetBase) {
      _classCallCheck(this, _TreeView);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this);
    }

    TreeView.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    TreeView.prototype.attached = function attached() {
      this.recreate();
    };

    TreeView.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    TreeView.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _TreeView = TreeView;
    TreeView = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(TreeView) || TreeView;
    TreeView = _commonDecorators.generateBindables('kendoTreeView')(TreeView) || TreeView;
    TreeView = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'treeview')(TreeView) || TreeView;
    return TreeView;
  })();

  exports.TreeView = TreeView;
});