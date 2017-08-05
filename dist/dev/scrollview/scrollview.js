System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Scrollview;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
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
      _export('Scrollview', Scrollview = (_dec = customElement(constants.elementPrefix + 'scrollview'), _dec2 = generateBindables('kendoMobileScrollView'), _dec3 = inject(Element, WidgetBase, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Scrollview(element, widgetBase, container) {
          _classCallCheck(this, Scrollview);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMobileScrollView').useRootElement(this.element).linkViewModel(this).useContainer(container).useValueBinding();
        }

        Scrollview.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Scrollview.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Scrollview.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.widgetBase.useElement(this.element.querySelectorAll('div')[0]);
          } else {
            var target = document.createElement('div');
            this.element.appendChild(target);
            this.widgetBase.useElement(target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Scrollview.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoMobileScrollView', templates);

          this.kWidget = this.widgetBase.recreate();
        };

        Scrollview.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Scrollview.prototype.detached = function detached() {
          this.destroy();
        };

        return Scrollview;
      }()) || _class) || _class) || _class));

      _export('Scrollview', Scrollview);
    }
  };
});
//# sourceMappingURL=../dist/dev/scrollview/scrollview.js.map
