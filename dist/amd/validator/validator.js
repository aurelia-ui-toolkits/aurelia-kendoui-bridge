define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.validator.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoValidatorMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Validator = (function () {
    function Validator(element, widgetBase) {
      _classCallCheck(this, _Validator);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoValidator').linkViewModel(this);
    }

    Validator.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Validator.prototype.attached = function attached() {
      this.recreate();
    };

    Validator.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Validator.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Validator = Validator;
    Validator = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Validator) || Validator;
    Validator = _commonDecorators.generateBindables('kendoValidator')(Validator) || Validator;
    Validator = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'validator')(Validator) || Validator;
    return Validator;
  })();

  exports.Validator = Validator;
});