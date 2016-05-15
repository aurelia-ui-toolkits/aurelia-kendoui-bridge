'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.treeview.min');

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

  var _TreeView = TreeView;
  TreeView = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(TreeView) || TreeView;
  TreeView = _commonDecorators.generateBindables('kendoTreeView')(TreeView) || TreeView;
  TreeView = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'treeview')(TreeView) || TreeView;
  return TreeView;
})();

exports.TreeView = TreeView;