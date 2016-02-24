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

var _commonUtil = require('../common/util');

require('kendo.listview.min');

var ListView = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(ListView, [{
    key: 'options',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'listTemplates',
    decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'list-template')],
    initializer: null,
    enumerable: true
  }, {
    key: 'listEditTemplates',
    decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'list-edit-template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function ListView(element, widgetBase, viewResources) {
    _classCallCheck(this, _ListView);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'listTemplates', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'listEditTemplates', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
  }

  ListView.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  ListView.prototype.attached = function attached() {
    this.recreate();
  };

  ListView.prototype.recreate = function recreate() {
    var _this = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this._beforeInitialize(o);
      }
    });
  };

  ListView.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this2 = this;

    var template = undefined;
    var editTemplate = undefined;

    if (this.kTemplate) {
      template = function () {
        return _this2.kTemplate;
      };
    } else if (this.listTemplates.length > 0) {
      (function () {
        var templ = _this2.listTemplates[0].template;
        template = function () {
          return templ;
        };
      })();
    }

    if (this.kEditTemplate) {
      editTemplate = function () {
        return _this2.kEditTemplate;
      };
    } else if (this.listEditTemplates.length > 0) {
      (function () {
        var templ = _this2.listEditTemplates[0].template;
        editTemplate = function () {
          return templ;
        };
      })();
    }

    return Object.assign(options, _commonUtil.pruneOptions({
      editTemplate: editTemplate,
      template: template
    }));
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