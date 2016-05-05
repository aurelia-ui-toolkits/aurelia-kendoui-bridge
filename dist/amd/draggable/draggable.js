define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.draganddrop.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoDraganddropMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Draggabke = (function () {
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
    Draggabke = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Draggabke) || Draggabke;
    Draggabke = _commonDecorators.generateBindables('kendoDraggable')(Draggabke) || Draggabke;
    Draggabke = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'draggable')(Draggabke) || Draggabke;
    return Draggabke;
  })();

  exports.Draggabke = Draggabke;
});