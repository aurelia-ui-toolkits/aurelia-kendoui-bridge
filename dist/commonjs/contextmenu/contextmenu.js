'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContextMenu = exports.ContextMenu = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'contextmenu'), _dec2 = (0, _decorators.generateBindables)('kendoContextMenu'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function ContextMenu(element, widgetBase) {
    _classCallCheck(this, ContextMenu);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoContextMenu').useElement(this.element).linkViewModel(this);
  }

  ContextMenu.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  ContextMenu.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  ContextMenu.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ContextMenu.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  ContextMenu.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  ContextMenu.prototype.detached = function detached() {
    this.destroy();
  };

  return ContextMenu;
}()) || _class) || _class) || _class);