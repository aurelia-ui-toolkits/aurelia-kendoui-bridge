define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/widget-base', '../common/decorators', 'kendo.panelbar.min'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _commonConstants, _commonWidgetBase, _commonDecorators, _kendoPanelbarMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var PanelBar = (function () {
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
    PanelBar = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(PanelBar) || PanelBar;
    PanelBar = _commonDecorators.generateBindables('kendoPanelBar')(PanelBar) || PanelBar;
    PanelBar = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'panel-bar')(PanelBar) || PanelBar;
    return PanelBar;
  })();

  exports.PanelBar = PanelBar;

  function hasListChildNode(element) {
    return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
  }
});