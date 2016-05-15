System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.draganddrop.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, DropTarget;

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
    }, function (_kendoDraganddropMin) {}],
    execute: function () {
      DropTarget = (function () {
        function DropTarget(element, widgetBase) {
          _classCallCheck(this, _DropTarget);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropTarget').linkViewModel(this);
        }

        DropTarget.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        DropTarget.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropTarget.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        DropTarget.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _DropTarget = DropTarget;
        DropTarget = inject(Element, WidgetBase)(DropTarget) || DropTarget;
        DropTarget = generateBindables('kendoDropTarget')(DropTarget) || DropTarget;
        DropTarget = customAttribute(constants.attributePrefix + 'drop-target')(DropTarget) || DropTarget;
        return DropTarget;
      })();

      _export('DropTarget', DropTarget);
    }
  };
});