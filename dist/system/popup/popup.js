'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Popup;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Popup', Popup = (_dec = customAttribute(constants.attributePrefix + 'popup'), _dec2 = generateBindables('kendoPopup'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Popup(element, widgetBase) {
          _classCallCheck(this, Popup);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPopup').linkViewModel(this);
        }

        Popup.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Popup.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Popup.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Popup.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Popup;
      }()) || _class) || _class) || _class));

      _export('Popup', Popup);
    }
  };
});