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

require('kendo.dropdownlist.min');

require('kendo.virtuallist.min');

var DropDownList = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(DropDownList, [{
    key: 'kOptions',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
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

  function DropDownList(element, widgetBase, viewResources) {
    _classCallCheck(this, _DropDownList);

    _defineDecoratedPropertyDescriptor(this, 'kOptions', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kNoValueBinding', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).useValueBinding().useViewResources(viewResources);
  }

  DropDownList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropDownList.prototype.attached = function attached() {
    this.recreate();

    if (this.kNoValueBinding) {
      this.widgetBase.withValueBinding = false;
    }
  };

  DropDownList.prototype.recreate = function recreate() {
    var selectNode = getSelectNode(this.element);
    this.widgetBase.useTemplates(this, 'kendoDropDownList', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: selectNode.length > 0 ? selectNode[0] : this.element,
      parentCtx: this.$parent
    });
  };

  DropDownList.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  DropDownList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropDownList = DropDownList;
  DropDownList = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _aureliaTemplating.ViewResources)(DropDownList) || DropDownList;
  DropDownList = _commonDecorators.generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})();

exports.DropDownList = DropDownList;

function getSelectNode(element) {
  return element.querySelectorAll('select');
}