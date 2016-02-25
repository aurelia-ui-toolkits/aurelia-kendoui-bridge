define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', 'kendo.panelbar.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _kendoPanelbarMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var PanelBar = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(PanelBar, [{
      key: 'options',
      decorators: [_aureliaTemplating.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function PanelBar(element, widgetBase) {
      _classCallCheck(this, _PanelBar);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
    }

    PanelBar.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    PanelBar.prototype.attached = function attached() {
      this.recreate();
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
    PanelBar = _aureliaTemplating.customElement('k-panel-bar')(PanelBar) || PanelBar;
    return PanelBar;
  })();

  exports.PanelBar = PanelBar;

  function hasListChildNode(element) {
    return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
  }
});