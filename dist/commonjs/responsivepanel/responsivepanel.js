'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsivePanel = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsivePanel = exports.ResponsivePanel = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'responsivepanel'), _dec2 = (0, _decorators.generateBindables)('kendoResponsivePanel'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function ResponsivePanel(element, widgetBase) {
    _classCallCheck(this, ResponsivePanel);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoResponsivePanel').useElement(this.element).linkViewModel(this);
  }

  ResponsivePanel.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  ResponsivePanel.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  ResponsivePanel.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  ResponsivePanel.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  ResponsivePanel.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  ResponsivePanel.prototype.detached = function detached() {
    this.destroy();
  };

  return ResponsivePanel;
}()) || _class) || _class) || _class);