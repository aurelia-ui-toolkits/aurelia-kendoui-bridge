define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Editor = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Editor = exports.Editor = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'rich-editor'), _dec2 = (0, _decorators.generateBindables)('kendoEditor'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Editor(element, widgetBase) {
      _classCallCheck(this, Editor);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoEditor').useElement(this.element).linkViewModel(this).useValueBinding();
    }

    Editor.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Editor.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Editor.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Editor.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    Editor.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Editor.prototype.detached = function detached() {
      this.destroy();
    };

    return Editor;
  }()) || _class) || _class) || _class);
});