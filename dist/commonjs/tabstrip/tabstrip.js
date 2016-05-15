'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.tabstrip.min');

var TabStrip = (function () {
  function TabStrip(element, widgetBase) {
    _classCallCheck(this, _TabStrip);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this);
  }

  TabStrip.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TabStrip.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  TabStrip.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TabStrip.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(TabStrip) || TabStrip;
  TabStrip = _commonDecorators.generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
  TabStrip = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})();

exports.TabStrip = TabStrip;