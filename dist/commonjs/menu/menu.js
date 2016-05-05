'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.menu.min');

var Menu = (function () {
  function Menu(element, widgetBase) {
    _classCallCheck(this, _Menu);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
  }

  Menu.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Menu.prototype.attached = function attached() {
    this.recreate();
  };

  Menu.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Menu.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Menu = Menu;
  Menu = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Menu) || Menu;
  Menu = _commonDecorators.generateBindables('kendoMenu')(Menu) || Menu;
  Menu = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;