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

var _commonOptions = require('../common/options');

var _pdfPdf = require('../pdf/pdf');

require('kendo-ui/js/kendo.data.signalr.min');

require('kendo-ui/js/kendo.filtercell.min');

require('kendo-ui/js/kendo.treelist.min');

var TreeList = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(TreeList, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'tree-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function TreeList(element, widgetBase, viewResources) {
    _classCallCheck(this, _TreeList);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
  }

  TreeList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeList.prototype.attached = function attached() {
    this.recreate();
  };

  TreeList.prototype.recreate = function recreate() {
    var _this = this;

    var element = this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this._beforeInitialize(o);
      }
    });
  };

  TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(function (c) {
        if (c.template && !c.withKendoTemplates) {
          (function () {
            var template = c.template;
            c.template = function () {
              return template;
            };
          })();
        }

        options.columns.push(_commonOptions.pruneOptions(c));
      });
    }
  };

  TreeList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeList = TreeList;
  TreeList = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _aureliaTemplating.ViewResources)(TreeList) || TreeList;
  TreeList = _commonDecorators.generateBindables('kendoTreeList')(TreeList) || TreeList;
  TreeList = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'tree-list')(TreeList) || TreeList;
  return TreeList;
})();

exports.TreeList = TreeList;