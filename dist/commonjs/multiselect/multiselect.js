'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.multiselect.min');

require('kendo.virtuallist.min');

var Multiselect = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Multiselect, [{
    key: 'kEnabled',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kReadOnly',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kNoValueBinding',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'templates',
    decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function Multiselect(element, widgetBase, viewResources) {
    _classCallCheck(this, _Multiselect);

    _defineDecoratedPropertyDescriptor(this, 'kEnabled', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kReadOnly', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kNoValueBinding', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMultiSelect').linkViewModel(this).useViewResources(viewResources).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  Multiselect.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Multiselect.prototype.attached = function attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Multiselect.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoMultiSelect', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  };

  Multiselect.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Multiselect.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Multiselect = Multiselect;
  Multiselect = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _aureliaTemplating.ViewResources)(Multiselect) || Multiselect;
  Multiselect = _commonDecorators.generateBindables('kendoMultiSelect', ['template'])(Multiselect) || Multiselect;
  Multiselect = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'multiselect')(Multiselect) || Multiselect;
  return Multiselect;
})();

exports.Multiselect = Multiselect;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}