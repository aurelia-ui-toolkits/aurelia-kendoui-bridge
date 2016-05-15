System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.editor.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Editor;

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
    }, function (_kendoEditorMin) {}],
    execute: function () {
      Editor = (function () {
        function Editor(element, widgetBase) {
          _classCallCheck(this, _Editor);

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

        var _Editor = Editor;
        Editor = inject(Element, WidgetBase)(Editor) || Editor;
        Editor = generateBindables('kendoEditor')(Editor) || Editor;
        Editor = customAttribute(constants.attributePrefix + 'rich-editor')(Editor) || Editor;
        return Editor;
      })();

      _export('Editor', Editor);
    }
  };
});