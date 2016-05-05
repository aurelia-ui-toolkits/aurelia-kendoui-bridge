System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.sortable.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Sortable;

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
    }, function (_kendoSortableMin) {}],
    execute: function () {
      Sortable = (function () {
        function Sortable(element, widgetBase) {
          _classCallCheck(this, _Sortable);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSortable').linkViewModel(this);
        }

        Sortable.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Sortable.prototype.attached = function attached() {
          this.recreate();
        };

        Sortable.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Sortable.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Sortable = Sortable;
        Sortable = inject(Element, WidgetBase)(Sortable) || Sortable;
        Sortable = generateBindables('kendoSortable')(Sortable) || Sortable;
        Sortable = customAttribute(constants.attributePrefix + 'sortable')(Sortable) || Sortable;
        return Sortable;
      })();

      _export('Sortable', Sortable);
    }
  };
});