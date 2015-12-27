'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var AuCol = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(AuCol, [{
    key: 'aggregates',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'attributes',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'columns',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'command',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editor',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'encoded',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'field',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'footerTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'format',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'groupable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupFooterTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupHeaderTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerAttributes',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hidden',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'lockable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'locked',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'menu',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'minScreenWidth',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'template',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'values',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'width',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function AuCol(targetInstruction) {
    _classCallCheck(this, _AuCol);

    _defineDecoratedPropertyDescriptor(this, 'aggregates', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'attributes', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editor', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'encoded', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'footerTemplate', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'groupFooterTemplate', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'groupHeaderTemplate', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'headerAttributes', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'menu', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'minScreenWidth', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'values', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _AuCol = AuCol;
  AuCol = _aureliaFramework.inject(_aureliaFramework.TargetInstruction)(AuCol) || AuCol;
  AuCol = _aureliaFramework.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(AuCol) || AuCol;
  AuCol = _aureliaFramework.noView(AuCol) || AuCol;
  return AuCol;
})();

exports.AuCol = AuCol;