'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.draganddrop.min');

var DropTarget = (function () {
  function DropTarget(element, widgetBase) {
    _classCallCheck(this, _DropTarget);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTarget').linkViewModel(this);
  }

  DropTarget.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropTarget.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTarget.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DropTarget.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropTarget = DropTarget;
  DropTarget = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(DropTarget) || DropTarget;
  DropTarget = _commonDecorators.generateBindables('kendoDropTarget')(DropTarget) || DropTarget;
  DropTarget = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'drop-target')(DropTarget) || DropTarget;
  return DropTarget;
})();

exports.DropTarget = DropTarget;