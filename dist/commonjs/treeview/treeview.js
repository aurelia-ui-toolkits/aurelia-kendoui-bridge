'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

require('kendo-ui/js/kendo.treeview.min');

var TreeView = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(TreeView, _WidgetBase);

  _createDecoratedClass(TreeView, [{
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
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

  function TreeView(element) {
    _classCallCheck(this, _TreeView);

    _WidgetBase.call(this, 'kendoTreeView', element);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.kDataSource = undefined;
  }

  TreeView.prototype.bind = function bind(ctx) {
    _WidgetBase.prototype.bind.call(this, ctx);

    this._initialize();
  };

  TreeView.prototype.append = function append(nodeData, parentNode, success) {
    if (this.widget) {
      return this.widget.append(nodeData, parentNode, success);
    }
  };

  TreeView.prototype.collapse = function collapse(nodes) {
    if (this.widget) {
      this.widget.collapse(nodes);
    }
  };

  TreeView.prototype.dataItem = function dataItem(node) {
    if (this.widget) {
      return this.widget.dataItem(node);
    }
  };

  TreeView.prototype.destroy = function destroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  TreeView.prototype.detach = function detach(node) {
    if (this.widget) {
      return this.widget.detach(node);
    }
  };

  TreeView.prototype.enable = function enable(nodes, _enable) {
    if (this.widget) {
      return this.widget.enable(nodes, _enable === undefined ? true : _enable);
    }
  };

  TreeView.prototype.expand = function expand(nodes) {
    if (this.widget) {
      this.widget.expand(nodes);
    }
  };

  TreeView.prototype.expandPath = function expandPath(path, complete) {
    if (this.widget) {
      this.widget.expandPath(path, complete);
    }
  };

  TreeView.prototype.expandTo = function expandTo(targetNode) {
    if (this.widget) {
      this.widget.expandTo(targetNode);
    }
  };

  TreeView.prototype.findByText = function findByText(text) {
    if (this.widget) {
      return this.widget.findByText(text);
    }
  };

  TreeView.prototype.findByUid = function findByUid(text) {
    if (this.widget) {
      return this.widget.findByUid(text);
    }
  };

  TreeView.prototype.insertAfter = function insertAfter(nodeData, referenceNode) {
    if (this.widget) {
      this.widget.insertAfter(nodeData, referenceNode);
    }
  };

  TreeView.prototype.insertBefore = function insertBefore(nodeData, referenceNode) {
    if (this.widget) {
      this.widget.insertBefore(nodeData, referenceNode);
    }
  };

  TreeView.prototype.parent = function parent(node) {
    if (this.widget) {
      return this.widget.parent(node);
    }
  };

  TreeView.prototype.remove = function remove(node) {
    if (this.widget) {
      this.widget.remove(node);
    }
  };

  TreeView.prototype.select = function select(node) {
    if (this.widget) {
      if (node === undefined) {
        return this.widget.select();
      }
      return this.widget.select(node);
    }
  };

  TreeView.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      this.widget.setDataSource(dataSource);
    }
  };

  TreeView.prototype.text = function text(node, newText) {
    if (this.widget) {
      return this.widget.text(node, newText);
    }
  };

  TreeView.prototype.toggle = function toggle(node) {
    if (this.widget) {
      this.widget.toggle(node);
    }
  };

  TreeView.prototype.updateIndeterminate = function updateIndeterminate(node) {
    if (this.widget) {
      this.widget.updateIndeterminate(node);
    }
  };

  var _TreeView = TreeView;
  TreeView = _commonDecorators.generateBindables('kendoTreeView')(TreeView) || TreeView;
  TreeView = _aureliaFramework.inject(Element)(TreeView) || TreeView;
  TreeView = _aureliaFramework.customAttribute('k-treeview')(TreeView) || TreeView;
  return TreeView;
})(_commonWidgetBase.WidgetBase);

exports.TreeView = TreeView;