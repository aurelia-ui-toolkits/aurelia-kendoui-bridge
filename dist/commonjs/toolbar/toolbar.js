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

var _commonOptionsBuilder = require('../common/options-builder');

require('kendo.toolbar.min');

var Toolbar = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Toolbar, [{
    key: 'toolbarItems',
    decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'toolbar-item')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function Toolbar(element, widgetBase, optionsBuilder) {
    _classCallCheck(this, _Toolbar);

    _defineDecoratedPropertyDescriptor(this, 'toolbarItems', _instanceInitializers);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoToolBar').linkViewModel(this);
  }

  Toolbar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Toolbar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Toolbar.prototype.recreate = function recreate() {
    var _this = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this._beforeInitialize(o);
      }
    });
  };

  Toolbar.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.toolbarItems && this.toolbarItems.length > 0) {
      options.items = [];

      this.toolbarItems.forEach(function (item) {
        options.items.push(item.getOptions());
      });
    }
  };

  Toolbar.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Toolbar = Toolbar;
  Toolbar = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _commonOptionsBuilder.OptionsBuilder)(Toolbar) || Toolbar;
  Toolbar = _commonDecorators.generateBindables('kendoToolBar')(Toolbar) || Toolbar;
  Toolbar = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'toolbar')(Toolbar) || Toolbar;
  return Toolbar;
})();

exports.Toolbar = Toolbar;