'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Diagram;

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
      _export('Diagram', Diagram = (_dec = customElement(constants.elementPrefix + 'diagram'), _dec2 = generateBindables('kendoDiagram'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Diagram(element, widgetBase) {
          _classCallCheck(this, Diagram);

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

        return Diagram;
      }()) || _class) || _class) || _class));

      _export('Diagram', Diagram);
    }
  };
});
//# sourceMappingURL=../dist/dev/diagram/diagram.js.map
