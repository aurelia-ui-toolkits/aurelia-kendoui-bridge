'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropTarget = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropTarget = exports.DropTarget = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'drop-target'), _dec2 = (0, _decorators.generateBindables)('kendoDropTarget'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function DropTarget(element, widgetBase) {
    _classCallCheck(this, DropTarget);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTarget').useElement(this.element).linkViewModel(this);
  }

  DropTarget.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  DropTarget.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  DropTarget.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTarget.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  DropTarget.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  DropTarget.prototype.detached = function detached() {
    this.destroy();
  };

  return DropTarget;
}()) || _class) || _class) || _class);