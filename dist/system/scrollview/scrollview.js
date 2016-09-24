'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, ViewResources, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Scrollview;

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
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Scrollview', Scrollview = (_dec = customElement(constants.elementPrefix + 'scrollview'), _dec2 = generateBindables('kendoMobileScrollView'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Scrollview(element, widgetBase, viewResources) {
          _classCallCheck(this, Scrollview);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMobileScrollView').linkViewModel(this).useViewResources(viewResources).useValueBinding();
        }

        Scrollview.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Scrollview.prototype.attached = function attached() {
          if (isInitFromDiv(this.element)) {
            this.target = this.element.querySelectorAll('div')[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Scrollview.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoMobileScrollView', templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent
          });
        };

        Scrollview.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Scrollview;
      }()) || _class) || _class) || _class));

      _export('Scrollview', Scrollview);
    }
  };
});