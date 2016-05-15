'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.draganddrop.min');

var DropTargetArea = (function () {
  function DropTargetArea(element, widgetBase) {
    _classCallCheck(this, _DropTargetArea);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTargetArea').linkViewModel(this);
  }

  DropTargetArea.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropTargetArea.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTargetArea.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DropTargetArea.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropTargetArea = DropTargetArea;
  DropTargetArea = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(DropTargetArea) || DropTargetArea;
  DropTargetArea = _commonDecorators.generateBindables('kendoDropTargetArea')(DropTargetArea) || DropTargetArea;
  DropTargetArea = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'drop-target-area')(DropTargetArea) || DropTargetArea;
  return DropTargetArea;
})();

exports.DropTargetArea = DropTargetArea;