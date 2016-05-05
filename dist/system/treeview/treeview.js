System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.treeview.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, TreeView;

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
    }, function (_kendoTreeviewMin) {}],
    execute: function () {
      TreeView = (function () {
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
        TreeView = inject(Element, WidgetBase)(TreeView) || TreeView;
        TreeView = generateBindables('kendoTreeView')(TreeView) || TreeView;
        TreeView = customAttribute(constants.attributePrefix + 'treeview')(TreeView) || TreeView;
        return TreeView;
      })();

      _export('TreeView', TreeView);
    }
  };
});