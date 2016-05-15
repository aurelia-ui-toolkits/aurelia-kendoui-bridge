'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.window.min');

var Window = (function () {
  function Window(element, widgetBase) {
    _classCallCheck(this, _Window);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
  }

  Window.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Window.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Window.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Window.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Window = Window;
  Window = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Window) || Window;
  Window = _commonDecorators.generateBindables('kendoWindow')(Window) || Window;
  Window = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'window')(Window) || Window;
  return Window;
})();

exports.Window = Window;