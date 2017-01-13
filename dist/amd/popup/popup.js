define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Popup = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Popup = exports.Popup = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'popup'), _dec2 = (0, _decorators.generateBindables)('kendoPopup'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Popup(element, widgetBase) {
      _classCallCheck(this, Popup);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoPopup').useElement(this.element).linkViewModel(this);
    }

    Popup.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Popup.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Popup.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Popup.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Popup.prototype.detached = function detached() {
      this.destroy();
    };

    return Popup;
  }()) || _class) || _class) || _class);
});