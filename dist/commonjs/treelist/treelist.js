'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeList = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _optionsBuilder = require('../common/options-builder');

var _pdf = require('../pdf/pdf');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeList = exports.TreeList = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'tree-list'), _dec2 = (0, _decorators.generateBindables)('kendoTreeList'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container, _optionsBuilder.OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function TreeList(element, widgetBase, container, optionsBuilder) {
    var _this = this;

    _classCallCheck(this, TreeList);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoTreeList').useRootElement(this.element).beforeInitialize(function (options) {
      return _this._beforeInitialize(options);
    }).linkViewModel(this).useContainer(container);
  }

  TreeList.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  TreeList.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  TreeList.prototype.attached = function attached() {
    var targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.widgetBase.useElement(targets[0]);
    } else {
      var target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  TreeList.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this2 = this;

    var columns = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'tree-col');

    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(function (column) {
        options.columns.push(_this2.optionsBuilder.getOptions(column, 'TreeListColumn'));
      });
    }
  };

  TreeList.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  TreeList.prototype.detached = function detached() {
    this.destroy();
  };

  return TreeList;
}()) || _class) || _class) || _class);