'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.draganddrop.min');

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