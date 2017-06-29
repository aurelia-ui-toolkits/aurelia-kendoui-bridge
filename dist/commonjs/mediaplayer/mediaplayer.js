'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaPlayer = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaPlayer = exports.MediaPlayer = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'mediaplayer'), _dec2 = (0, _decorators.generateBindables)('kendoMediaPlayer'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function MediaPlayer(element, widgetBase) {
    _classCallCheck(this, MediaPlayer);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMediaPlayer').useElement(this.element).linkViewModel(this);
  }

  MediaPlayer.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  MediaPlayer.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  MediaPlayer.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  MediaPlayer.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  MediaPlayer.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  MediaPlayer.prototype.detached = function detached() {
    this.destroy();
  };

  return MediaPlayer;
}()) || _class) || _class) || _class);