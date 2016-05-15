define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.listview.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoListviewMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ListView = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(ListView, [{
      key: 'templates',
      decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'template')],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function ListView(element, widgetBase, viewResources) {
      _classCallCheck(this, _ListView);

      _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
    }

    ListView.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
      this.widgetBase.useTemplates(this, 'kendoListView', this.templates);
    };

    ListView.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    ListView.prototype.recreate = function recreate() {
      this.widgetBase.useTemplates(this, 'kendoListView', this.templates);

      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    ListView.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _ListView = ListView;
    ListView = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _aureliaTemplating.ViewResources)(ListView) || ListView;
    ListView = _commonDecorators.generateBindables('kendoListView')(ListView) || ListView;
    ListView = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'list-view')(ListView) || ListView;
    return ListView;
  })();

  exports.ListView = ListView;
});