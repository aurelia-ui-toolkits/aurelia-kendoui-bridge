define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Validator = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Validator = exports.Validator = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'validator'), _dec2 = (0, _decorators.generateBindables)('kendoValidator'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Validator(element, widgetBase) {
      _classCallCheck(this, Validator);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoValidator').linkViewModel(this);
    }

    Validator.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Validator.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Validator.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Validator.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Validator;
  }()) || _class) || _class) || _class);
});