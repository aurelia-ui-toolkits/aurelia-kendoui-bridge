System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Dialog;

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
      _export('Dialog', Dialog = (_dec = customAttribute(constants.attributePrefix + 'dialog'), _dec2 = generateBindables('kendoDialog'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Dialog(element, widgetBase) {
          _classCallCheck(this, Dialog);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDialog').useElement(this.element).linkViewModel(this);
        }

        Dialog.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Dialog.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Dialog.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Dialog.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Dialog.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Dialog.prototype.detached = function detached() {
          this.destroy();
        };

        return Dialog;
      }()) || _class) || _class) || _class));

      _export('Dialog', Dialog);
    }
  };
});
//# sourceMappingURL=../dist/dev/dialog/dialog.js.map
