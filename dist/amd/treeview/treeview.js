define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.treeview.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TreeView = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var TreeView = exports.TreeView = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'treeview'), _dec2 = (0, _decorators.generateBindables)('kendoTreeView'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function TreeView(element, widgetBase) {
      _classCallCheck(this, TreeView);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this);
    }

    TreeView.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    TreeView.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
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

    return TreeView;
  }()) || _class) || _class) || _class);
});