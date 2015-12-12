'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonIndex = require('../common/index');

require('jquery');

require('kendo-ui/js/kendo.menu.min');

var Menu = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'dataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'closeOnClick',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'animation',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'direction',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hoverDelay',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'orientation',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'popupCollision',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function Menu(element) {
    _classCallCheck(this, _Menu);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'closeOnClick', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'direction', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'hoverDelay', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'orientation', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'popupCollision', _instanceInitializers);

    this.element = element;
    this.options = {};
  }

  Menu.prototype.bind = function bind() {
    this._initialize();
  };

  Menu.prototype.recreate = function recreate() {
    this._initialize();
  };

  Menu.prototype._initialize = function _initialize() {
    var target = undefined;
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      target = $(this.element).find('ul').first();
    } else {
      target = $(this.element).appendChild('<ul></ul>');
    }

    this.widget = target.kendoMenu(this.getOptions()).data('kendoMenu');
  };

  Menu.prototype.getOptions = function getOptions() {
    var _this = this;

    var options = _commonIndex.pruneOptions({
      dataSource: this.dataSource,
      closeOnClick: this.closeOnClick,
      animation: this.animation,
      direction: this.direction,
      hoverDelay: this.hoverDelay,
      orientation: this.orientation,
      popupCollision: this.popupCollision,
      close: function close(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'close', e);
      },
      open: function open(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'open', e);
      },
      activate: function activate(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'activate', e);
      },
      deactivate: function deactivate(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'deactivate', e);
      },
      select: function select(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'select', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  Menu.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _Menu = Menu;
  Menu = _aureliaFramework.inject(Element)(Menu) || Menu;
  Menu = _aureliaFramework.customElement('au-kendo-menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;