'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, MediaPlayer;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('MediaPlayer', MediaPlayer = (_dec = customAttribute(constants.attributePrefix + 'mediaplayer'), _dec2 = generateBindables('kendoMediaPlayer'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
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
      }()) || _class) || _class) || _class));

      _export('MediaPlayer', MediaPlayer);
    }
  };
});