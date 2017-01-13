'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, PivotConfigurator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('PivotConfigurator', PivotConfigurator = (_dec = customElement(constants.elementPrefix + 'pivot-configurator'), _dec2 = generateBindables('kendoPivotConfigurator'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function PivotConfigurator(element, widgetBase) {
          _classCallCheck(this, PivotConfigurator);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPivotConfigurator').useElement(this.element).linkViewModel(this);
        }

        PivotConfigurator.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        PivotConfigurator.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PivotConfigurator.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        PivotConfigurator.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        PivotConfigurator.prototype.detached = function detached() {
          this.destroy();
        };

        return PivotConfigurator;
      }()) || _class) || _class) || _class));

      _export('PivotConfigurator', PivotConfigurator);
    }
  };
});
//# sourceMappingURL=../dist/dev/pivotgrid/pivotconfigurator.js.map
