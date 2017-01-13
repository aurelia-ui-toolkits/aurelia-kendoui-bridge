'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeView = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeView = exports.TreeView = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'treeview'), _dec2 = (0, _decorators.generateBindables)('kendoTreeView'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function TreeView(element, widgetBase, container) {
    _classCallCheck(this, TreeView);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeView').useRootElement(this.element).linkViewModel(this).useContainer(container);
  }

  TreeView.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  TreeView.prototype.attached = function attached() {
    if (isInitFromUl(this.element)) {
      this.widgetBase.useElement(this.element.querySelectorAll('ul')[0]);
    } else {
      var target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  TreeView.prototype.recreate = function recreate() {
    var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.widgetBase.useTemplates(this, 'kendoTreeView', templates);

    this.kWidget = this.widgetBase.recreate();
  };

  TreeView.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  TreeView.prototype.detached = function detached() {
    this.destroy();
  };

  return TreeView;
}()) || _class) || _class) || _class);


function isInitFromUl(element) {
  return element.querySelectorAll('ul').length > 0;
}