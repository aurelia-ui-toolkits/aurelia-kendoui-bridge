'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Editor;

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
      _export('Editor', Editor = (_dec = customAttribute(constants.attributePrefix + 'rich-editor'), _dec2 = generateBindables('kendoEditor'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Editor(element, widgetBase) {
          _classCallCheck(this, Editor);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoEditor').linkViewModel(this).useValueBinding();
        }

        Editor.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Editor.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Editor.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Editor.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Editor.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Editor;
      }()) || _class) || _class) || _class));

      _export('Editor', Editor);
    }
  };
});
//# sourceMappingURL=../dist/dev/editor/editor.js.map
