System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.validator.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Validator;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
    }, function (_kendoValidatorMin) {}],
    execute: function () {
      Validator = (function () {
        function Validator(element, widgetBase) {
          _classCallCheck(this, _Validator);

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

        Validator.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Validator = Validator;
        Validator = inject(Element, WidgetBase)(Validator) || Validator;
        Validator = generateBindables('kendoValidator')(Validator) || Validator;
        Validator = customAttribute(constants.attributePrefix + 'validator')(Validator) || Validator;
        return Validator;
      })();

      _export('Validator', Validator);
    }
  };
});