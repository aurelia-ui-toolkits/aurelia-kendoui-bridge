'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonIndex = require('../common/index');

require('jquery');

require('kendo-ui/js/kendo.grid.min');

var Grid = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaFramework.children('au-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'selectable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'pageable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'pageSize',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 10;
    },
    enumerable: true
  }, {
    key: 'page',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 1;
    },
    enumerable: true
  }, {
    key: 'selectedItem',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'selectedItems',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'autoBind',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'resizable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'reorderable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'editable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sort',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'group',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'dataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'scrollable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'toolbar',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'navigatable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'columnMenu',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }], null, _instanceInitializers);

  function Grid(element, templateCompiler) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'selectedItems', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'autoBind', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'resizable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'reorderable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sort', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'group', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'toolbar', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'navigatable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'columnMenu', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers);

    this.element = element;
    this.templateCompiler = templateCompiler;
  }

  Grid.prototype.bind = function bind(ctx) {
    this.templateCompiler.initialize(ctx);
  };

  Grid.prototype.attached = function attached() {
    this._initialize();
  };

  Grid.prototype.recreate = function recreate() {
    this._initialize();
  };

  Grid.prototype._initialize = function _initialize() {
    var target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.widget = $(target).kendoGrid(this.getOptions()).data('kendoGrid');
  };

  Grid.prototype.getOptions = function getOptions() {
    var _this = this;

    var options = _commonIndex.pruneOptions({
      animation: this.animation,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      columns: this.columns,
      editable: this.editable,
      delay: this.delay,
      enable: this.enable,
      filter: this.filter,
      filterable: this.filterable,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      height: this.height,
      pageable: this.pageable,
      scrollable: this.scrollable,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      placeholder: this.placeholder,
      popup: this.popup,
      separator: this.separator,
      suggest: this.suggest,
      sortable: this.sortable,
      groupable: this.groupable,
      headerTemplate: this.headerTemplate,
      template: this.template,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual,
      toolbar: this.toolbar,
      navigatable: this.navigatable,
      reorderable: this.reorderable,
      resizable: this.resizable,
      columnMenu: this.columnMenu,
      cancel: function cancel(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'cancel', e);
      },
      change: function change(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'change', e);
      },
      columnHide: function columnHide(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-hide', e);
      },
      columnMenuInit: function columnMenuInit(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-menu-init', e);
      },
      columnReorder: function columnReorder(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-reorder', e);
      },
      columnResize: function columnResize(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-resize', e);
      },
      columnShow: function columnShow(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-show', e);
      },
      dataBinding: function dataBinding(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'data-binding', e);
      },
      dataBound: function dataBound(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'data-bound', e);
      },
      detailCollapse: function detailCollapse(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'detail-collapse', e);
      },
      detailExpand: function detailExpand(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'detail-expand', e);
      },

      edit: function edit(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'edit', e);
      },
      excelExport: function excelExport(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'excel-export', e);
      },
      pdfExport: function pdfExport(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'pdf-export', e);
      },
      filterMenuInit: function filterMenuInit(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'filter-menu-init', e);
      },
      remove: function remove(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'remove', e);
      },
      save: function save(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'save', e);
      },
      saveChanges: function saveChanges(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'save-changes', e);
      },
      columnLock: function columnLock(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-lock', e);
      },
      columnUnlock: function columnUnlock(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'column-unlock', e);
      },
      navigate: function navigate(e) {
        return _commonIndex.fireKendoEvent(_this.element, 'navigate', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  Grid.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  Grid.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element, _commonIndex.TemplateCompiler)(Grid) || Grid;
  Grid = _aureliaFramework.customElement('au-kendo-grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}