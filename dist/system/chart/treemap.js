System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.treemap.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, TreeMap;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoDatavizTreemapMin) {}],
    execute: function () {
      TreeMap = (function () {
        function TreeMap(element, widgetBase) {
          _classCallCheck(this, _TreeMap);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this);
        }

        TreeMap.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeMap.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeMap.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        TreeMap.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _TreeMap = TreeMap;
        TreeMap = inject(Element, WidgetBase)(TreeMap) || TreeMap;
        TreeMap = generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
        TreeMap = customElement(constants.elementPrefix + 'treemap')(TreeMap) || TreeMap;
        return TreeMap;
      })();

      _export('TreeMap', TreeMap);
    }
  };
});