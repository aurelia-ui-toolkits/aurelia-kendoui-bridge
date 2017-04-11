'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropTargetArea = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropTargetArea = exports.DropTargetArea = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'drop-target-area'), _dec2 = (0, _decorators.generateBindables)('kendoDropTargetArea'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function DropTargetArea(element, widgetBase) {
    _classCallCheck(this, DropTargetArea);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTargetArea').useElement(this.element).linkViewModel(this);
  }

  DropTargetArea.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  DropTargetArea.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  DropTargetArea.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTargetArea.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  DropTargetArea.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  DropTargetArea.prototype.detached = function detached() {
    this.destroy();
  };

  return DropTargetArea;
}()) || _class) || _class) || _class);