define(['exports', 'aurelia-templating', '../common/constants', '../common/decorators', '../common/util'], function (exports, _aureliaTemplating, _commonConstants, _commonDecorators, _commonUtil) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var TreeCol = (function () {
    var _instanceInitializers = {};

    function TreeCol() {
      _classCallCheck(this, _TreeCol);

      _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);
    }

    TreeCol.prototype.bind = function bind() {
      _commonUtil.useTemplates(this, 'TreeListColumn', this.templates);
    };

    _createDecoratedClass(TreeCol, [{
      key: 'templates',
      decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'template')],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    var _TreeCol = TreeCol;
    TreeCol = _commonDecorators.generateBindables('TreeListColumn')(TreeCol) || TreeCol;
    TreeCol = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'tree-col')(TreeCol) || TreeCol;
    return TreeCol;
  })();

  exports.TreeCol = TreeCol;
});