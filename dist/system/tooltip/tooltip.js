'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Tooltip;

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
      _export('Tooltip', Tooltip = (_dec = customAttribute(constants.attributePrefix + 'tooltip'), _dec2 = generateBindables('kendoTooltip'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Tooltip(element, widgetBase) {
          _classCallCheck(this, Tooltip);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
        }

        Tooltip.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Tooltip.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Tooltip.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Tooltip.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Tooltip;
      }()) || _class) || _class) || _class));

      _export('Tooltip', Tooltip);
    }
  };
});