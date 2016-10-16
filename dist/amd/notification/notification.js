define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Notification = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Notification = exports.Notification = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'notification'), _dec2 = (0, _decorators.generateBindables)('kendoNotification'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Notification(element, widgetBase, container) {
      _classCallCheck(this, Notification);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoNotification').linkViewModel(this).useContainer(container);
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

    Notification.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Notification;
  }()) || _class) || _class) || _class);
});