System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, ContextMenu;

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
      _export('ContextMenu', ContextMenu = (_dec = customAttribute(constants.attributePrefix + 'contextmenu'), _dec2 = generateBindables('kendoContextMenu'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ContextMenu(element, widgetBase) {
          _classCallCheck(this, ContextMenu);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoContextMenu').useElement(this.element).linkViewModel(this);
        }

        ContextMenu.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        ContextMenu.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        ContextMenu.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ContextMenu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        ContextMenu.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        ContextMenu.prototype.detached = function detached() {
          this.destroy();
        };

        return ContextMenu;
      }()) || _class) || _class) || _class));

      _export('ContextMenu', ContextMenu);
    }
  };
});
//# sourceMappingURL=../dist/dev/contextmenu/contextmenu.js.map
