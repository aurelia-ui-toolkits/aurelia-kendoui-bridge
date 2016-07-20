define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Draggabke = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Draggabke = exports.Draggabke = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'draggable'), _dec2 = (0, _decorators.generateBindables)('kendoDraggable'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Draggabke(element, widgetBase) {
      _classCallCheck(this, Draggabke);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoDraggable').linkViewModel(this);
    }

    Draggabke.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Draggabke.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
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
        Object.assign(options, { container: kendo.jQuery(options.container) });
      }
    };

    Draggabke.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Draggabke;
  }()) || _class) || _class) || _class);
});