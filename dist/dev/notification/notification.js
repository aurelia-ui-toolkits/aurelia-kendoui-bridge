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
          var _this = this;

          _classCallCheck(this, Notification);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoNotification').useElement(this.element).beforeInitialize(function (options) {
            return _this.beforeInitialize(options);
          }).linkViewModel(this).useContainer(container);
        }

        Notification.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Notification.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Notification.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Notification.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
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

        Notification.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Notification.prototype.detached = function detached() {
          this.destroy();
        };

        return Notification;
      }()) || _class) || _class) || _class));

      _export('Notification', Notification);
    }
  };
});
//# sourceMappingURL=../dist/dev/notification/notification.js.map
