'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, ListBox;

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
      _export('ListBox', ListBox = (_dec = customElement(constants.elementPrefix + 'list-box'), _dec2 = generateBindables('kendoListBox'), _dec3 = inject(Element, WidgetBase, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ListBox(element, widgetBase, container) {
          _classCallCheck(this, ListBox);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoListBox').useElement(this.element).linkViewModel(this).useContainer(container);
        }

        ListBox.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        ListBox.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        ListBox.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ListBox.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoListBox', templates);

          this.kWidget = this.widgetBase.recreate();
        };

        ListBox.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        ListBox.prototype.detached = function detached() {
          this.destroy();
        };

        return ListBox;
      }()) || _class) || _class) || _class));

      _export('ListBox', ListBox);
    }
  };
});