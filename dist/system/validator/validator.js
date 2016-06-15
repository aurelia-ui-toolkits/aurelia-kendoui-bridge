'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.validator.min'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Validator;

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
    }, function (_kendoValidatorMin) {}],
    execute: function () {
      _export('Validator', Validator = (_dec = customAttribute(constants.attributePrefix + 'validator'), _dec2 = generateBindables('kendoValidator'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
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

        Validator.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Validator;
      }()) || _class) || _class) || _class));

      _export('Validator', Validator);
    }
  };
});