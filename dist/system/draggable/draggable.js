System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.draganddrop.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Draggabke;

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
      Draggabke = (function () {
        function Draggabke(element, widgetBase) {
          _classCallCheck(this, _Draggabke);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDraggable').linkViewModel(this);
        }

        Draggabke.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Draggabke.prototype.attached = function attached() {
          this.recreate();
        };

        Draggabke.prototype.recreate = function recreate() {
          var _this = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(options) {
              return _this.beforeInitialize(options);
            }
          });
        };

        Draggabke.prototype.beforeInitialize = function beforeInitialize(options) {
          if (options.container) {
            Object.assign(options, { container: $(options.container) });
          }
        };

        Draggabke.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Draggabke = Draggabke;
        Draggabke = inject(Element, WidgetBase)(Draggabke) || Draggabke;
        Draggabke = generateBindables('kendoDraggable')(Draggabke) || Draggabke;
        Draggabke = customAttribute(constants.attributePrefix + 'draggable')(Draggabke) || Draggabke;
        return Draggabke;
      })();

      _export('Draggabke', Draggabke);
    }
  };
});