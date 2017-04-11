'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotGrid = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _pdf = require('../pdf/pdf');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PivotGrid = exports.PivotGrid = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'pivot-grid'), _dec2 = (0, _decorators.generateBindables)('kendoPivotGrid'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function PivotGrid(element, widgetBase, container) {
    _classCallCheck(this, PivotGrid);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotGrid').useRootElement(this.element).linkViewModel(this).useContainer(container);
  }

  PivotGrid.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  PivotGrid.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  PivotGrid.prototype.attached = function attached() {
    var targets = this.element.querySelectorAll('div');
    if (targets.length > 0) {
      this.widgetBase.useElement(targets[0]);
    } else {
      var target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PivotGrid.prototype.recreate = function recreate() {
    var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', templates);

    this.kWidget = this.widgetBase.recreate();
  };

  PivotGrid.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  PivotGrid.prototype.detached = function detached() {
    this.destroy();
  };

  return PivotGrid;
}()) || _class) || _class) || _class);