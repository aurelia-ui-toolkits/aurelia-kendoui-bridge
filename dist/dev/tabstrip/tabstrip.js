'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, TabStrip;

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
      _export('TabStrip', TabStrip = (_dec = customAttribute(constants.attributePrefix + 'tabstrip'), _dec2 = generateBindables('kendoTabStrip'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function TabStrip(element, widgetBase) {
          _classCallCheck(this, TabStrip);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTabStrip').useElement(this.element).linkViewModel(this);
        }

        TabStrip.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        TabStrip.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TabStrip.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        TabStrip.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        TabStrip.prototype.detached = function detached() {
          this.destroy();
        };

        return TabStrip;
      }()) || _class) || _class) || _class));

      _export('TabStrip', TabStrip);
    }
  };
});
//# sourceMappingURL=../dist/dev/tabstrip/tabstrip.js.map
