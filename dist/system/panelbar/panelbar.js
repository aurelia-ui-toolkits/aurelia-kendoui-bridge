System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/widget-base', '../common/decorators', 'kendo.panelbar.min'], function (_export) {
  'use strict';

  var customElement, inject, constants, WidgetBase, generateBindables, PanelBar;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function hasListChildNode(element) {
    return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
  }
  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_kendoPanelbarMin) {}],
    execute: function () {
      PanelBar = (function () {
        function PanelBar(element, widgetBase) {
          _classCallCheck(this, _PanelBar);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
        }

        PanelBar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        PanelBar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        PanelBar.prototype.recreate = function recreate() {
          var element = this.element;

          if (!hasListChildNode(element)) {
            var ul = document.createElement('ul');

            while (element.children.length > 0) {
              ul.appendChild(element.children[0]);
            }

            element.appendChild(ul);
            element = ul;
          } else {
            element = this.element.children[0];
          }

          this.kWidget = this.widgetBase.createWidget({
            element: element,
            parentCtx: this.$parent,
            rootElement: this.element
          });
        };

        PanelBar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _PanelBar = PanelBar;
        PanelBar = inject(Element, WidgetBase)(PanelBar) || PanelBar;
        PanelBar = generateBindables('kendoPanelBar')(PanelBar) || PanelBar;
        PanelBar = customElement(constants.elementPrefix + 'panel-bar')(PanelBar) || PanelBar;
        return PanelBar;
      })();

      _export('PanelBar', PanelBar);
    }
  };
});