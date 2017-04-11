'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _pdf = require('../pdf/pdf');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scheduler = exports.Scheduler = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'scheduler'), _dec2 = (0, _decorators.generateBindables)('kendoScheduler'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Scheduler(element, widgetBase, container) {
    _classCallCheck(this, Scheduler);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoScheduler').useRootElement(this.element).linkViewModel(this).useContainer(container);
  }

  Scheduler.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  Scheduler.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Scheduler.prototype.attached = function attached() {
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

  Scheduler.prototype.recreate = function recreate() {
    var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.widgetBase.useTemplates(this, 'kendoScheduler', templates);

    this.kWidget = this.widgetBase.recreate();
  };

  Scheduler.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Scheduler.prototype.detached = function detached() {
    this.destroy();
  };

  return Scheduler;
}()) || _class) || _class) || _class);