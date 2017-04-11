'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotConfigurator = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PivotConfigurator = exports.PivotConfigurator = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'pivot-configurator'), _dec2 = (0, _decorators.generateBindables)('kendoPivotConfigurator'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function PivotConfigurator(element, widgetBase) {
    _classCallCheck(this, PivotConfigurator);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotConfigurator').useElement(this.element).linkViewModel(this);
  }

  PivotConfigurator.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  PivotConfigurator.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  PivotConfigurator.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PivotConfigurator.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  PivotConfigurator.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  PivotConfigurator.prototype.detached = function detached() {
    this.destroy();
  };

  return PivotConfigurator;
}()) || _class) || _class) || _class);