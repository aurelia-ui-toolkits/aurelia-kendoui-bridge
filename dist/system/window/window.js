'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Window;

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
      _export('Window', Window = (_dec = customAttribute(constants.attributePrefix + 'window'), _dec2 = generateBindables('kendoWindow'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Window(element, widgetBase) {
          _classCallCheck(this, Window);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
        }

        Window.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Window.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Window.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Window.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Window;
      }()) || _class) || _class) || _class));

      _export('Window', Window);
    }
  };
});