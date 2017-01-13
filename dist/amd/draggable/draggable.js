define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Draggable = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Draggable = exports.Draggable = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'draggable'), _dec2 = (0, _decorators.generateBindables)('kendoDraggable'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Draggable(element, widgetBase) {
      var _this = this;

      _classCallCheck(this, Draggable);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoDraggable').useElement(this.element).beforeInitialize(function (options) {
        return _this.beforeInitialize(options);
      }).linkViewModel(this);
    }

    Draggable.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Draggable.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Draggable.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Draggable.prototype.beforeInitialize = function beforeInitialize(options) {
      if (options.container) {
        Object.assign(options, { container: kendo.jQuery(options.container) });
      }
    };

    Draggable.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Draggable.prototype.detached = function detached() {
      this.destroy();
    };

    return Draggable;
  }()) || _class) || _class) || _class);
});