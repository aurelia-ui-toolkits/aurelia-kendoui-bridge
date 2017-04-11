define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Dialog = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Dialog = exports.Dialog = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'dialog'), _dec2 = (0, _decorators.generateBindables)('kendoDialog'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Dialog(element, widgetBase) {
      _classCallCheck(this, Dialog);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoDialog').useElement(this.element).linkViewModel(this);
    }

    Dialog.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    Dialog.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Dialog.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Dialog.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Dialog.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Dialog.prototype.detached = function detached() {
      this.destroy();
    };

    return Dialog;
  }()) || _class) || _class) || _class);
});