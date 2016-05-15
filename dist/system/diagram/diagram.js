System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.diagram.min'], function (_export) {
  'use strict';

  var inject, customElement, WidgetBase, generateBindables, constants, Diagram;

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
    }, function (_kendoDatavizDiagramMin) {}],
    execute: function () {
      Diagram = (function () {
        function Diagram(element, widgetBase) {
          _classCallCheck(this, _Diagram);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDiagram').linkViewModel(this);
        }

        Diagram.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Diagram.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Diagram.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Diagram.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Diagram = Diagram;
        Diagram = inject(Element, WidgetBase)(Diagram) || Diagram;
        Diagram = generateBindables('kendoDiagram')(Diagram) || Diagram;
        Diagram = customElement(constants.elementPrefix + 'diagram')(Diagram) || Diagram;
        return Diagram;
      })();

      _export('Diagram', Diagram);
    }
  };
});