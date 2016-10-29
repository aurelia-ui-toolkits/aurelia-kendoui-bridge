'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Notification;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Notification', Notification = (_dec = customElement(constants.elementPrefix + 'notification'), _dec2 = generateBindables('kendoNotification'), _dec3 = inject(Element, WidgetBase, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
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
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'notification-template');
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
      }()) || _class) || _class) || _class));

      _export('Notification', Notification);
    }
  };
});