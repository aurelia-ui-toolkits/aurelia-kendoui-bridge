'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonConstants = require('../common/constants');

var _commonDecorators = require('../common/decorators');

var _commonTemplateGatherer = require('../common/template-gatherer');

var GridToolbar = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(GridToolbar, [{
    key: 'templates',
    decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function GridToolbar(templateGatherer) {
    _classCallCheck(this, _GridToolbar);

    _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

    this.templateGatherer = templateGatherer;
  }

  GridToolbar.prototype.bind = function bind() {
    this.templateGatherer.useTemplates(this, 'GridToolbarItem', this.templates);
  };

  var _GridToolbar = GridToolbar;
  GridToolbar = _aureliaDependencyInjection.inject(_commonTemplateGatherer.TemplateGatherer)(GridToolbar) || GridToolbar;
  GridToolbar = _commonDecorators.generateBindables('GridToolbarItem')(GridToolbar) || GridToolbar;
  GridToolbar = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'grid-toolbar')(GridToolbar) || GridToolbar;
  return GridToolbar;
})();

exports.GridToolbar = GridToolbar;