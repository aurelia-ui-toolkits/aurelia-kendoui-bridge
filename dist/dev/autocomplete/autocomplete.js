'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, AutoComplete;

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
      _export('AutoComplete', AutoComplete = (_dec = customElement(constants.elementPrefix + 'autocomplete'), _dec2 = generateBindables('kendoAutoComplete'), _dec3 = inject(Element, WidgetBase, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function AutoComplete(element, widgetBase, container) {
          _classCallCheck(this, AutoComplete);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoAutoComplete').useRootElement(this.element).linkViewModel(this).useContainer(container).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
        }

        AutoComplete.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        AutoComplete.prototype.attached = function attached() {
          var inputs = this.element.querySelectorAll('input');
          if (inputs.length > 0) {
            this.widgetBase.useElement(inputs[0]);
          } else {
            var target = document.createElement('input');
            this.element.appendChild(target);
            this.widgetBase.useElement(target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        AutoComplete.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoAutoComplete', templates);

          this.kWidget = this.widgetBase.recreate();
        };

        AutoComplete.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        AutoComplete.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        AutoComplete.prototype.detached = function detached() {
          this.destroy();
        };

        return AutoComplete;
      }()) || _class) || _class) || _class));

      _export('AutoComplete', AutoComplete);
    }
  };
});
//# sourceMappingURL=../dist/dev/autocomplete/autocomplete.js.map
