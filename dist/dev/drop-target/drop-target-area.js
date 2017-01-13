'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, DropTargetArea;

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
      _export('DropTargetArea', DropTargetArea = (_dec = customAttribute(constants.attributePrefix + 'drop-target-area'), _dec2 = generateBindables('kendoDropTargetArea'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function DropTargetArea(element, widgetBase) {
          _classCallCheck(this, DropTargetArea);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropTargetArea').useElement(this.element).linkViewModel(this);
        }

        DropTargetArea.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        DropTargetArea.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropTargetArea.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        DropTargetArea.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        DropTargetArea.prototype.detached = function detached() {
          this.destroy();
        };

        return DropTargetArea;
      }()) || _class) || _class) || _class));

      _export('DropTargetArea', DropTargetArea);
    }
  };
});
//# sourceMappingURL=../dist/dev/drop-target/drop-target-area.js.map
