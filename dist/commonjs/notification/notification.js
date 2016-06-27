'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

require('kendo.notification.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = exports.Notification = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'notification'), _dec2 = (0, _decorators.generateBindables)('kendoNotification'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Notification(element, widgetBase, viewResources) {
    _classCallCheck(this, Notification);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNotification').linkViewModel(this).useViewResources(viewResources);
  }

  Notification.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Notification.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Notification.prototype.recreate = function recreate() {
    var _this = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(e) {
        return _this.beforeInitialize(e);
      }
    });
  };

  Notification.prototype.beforeInitialize = function beforeInitialize(options) {
    var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'notification-template');
    if (templates && templates.length > 0) {
      options.templates = [];

      templates.forEach(function (_template) {
        return options.templates.push({
          type: _template.type,
          template: function template() {
            return _template.template;
          }
        });
      });
    }
  };

  Notification.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  return Notification;
}()) || _class) || _class) || _class);