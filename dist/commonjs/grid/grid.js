'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _pdfPdf = require('../pdf/pdf');

require('kendo-ui/js/kendo.data.signalr.min');

require('kendo-ui/js/kendo.filtercell.min');

require('kendo-ui/js/kendo.grid.min');

var Grid = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaFramework.children('k-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function Grid(element, widgetBase) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).setDefaultBindableValues();
  }

  Grid.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Grid.prototype.attached = function attached() {
    this.recreate();
  };

  Grid.prototype.recreate = function recreate() {
    var _this = this;

    var element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this._beforeInitialize(o);
      }
    });
  };

  Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  };

  Grid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element, _commonWidgetBase.WidgetBase)(Grid) || Grid;
  Grid = _commonDecorators.generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaFramework.customElement('k-grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}