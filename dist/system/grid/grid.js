System.register(['aurelia-framework', '../common/index', 'jquery', 'kendo-ui/js/kendo.grid.min'], function (_export) {
  'use strict';

  var inject, children, customElement, bindable, pruneOptions, TemplateCompiler, fireKendoEvent, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function isInitFromTable(element) {
    return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      children = _aureliaFramework.children;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_commonIndex) {
      pruneOptions = _commonIndex.pruneOptions;
      TemplateCompiler = _commonIndex.TemplateCompiler;
      fireKendoEvent = _commonIndex.fireKendoEvent;
    }, function (_jquery) {}, function (_kendoUiJsKendoGridMin) {}],
    execute: function () {
      Grid = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Grid, [{
          key: 'columns',
          decorators: [children('au-col')],
          initializer: null,
          enumerable: true
        }, {
          key: 'autoBind',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'columnMenu',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'dataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'editable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'filterable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'group',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'groupable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'height',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'navigatable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'page',
          decorators: [bindable],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'pageable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'sortable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'pageSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'scrollable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'selectable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'selectedItem',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'selectedItems',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'sort',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'reorderable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'resizable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'toolbar',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element, templateCompiler) {
          _classCallCheck(this, _Grid);

          _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'autoBind', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'columnMenu', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'editable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'group', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'height', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'navigatable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'selectedItems', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sort', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'reorderable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'resizable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'toolbar', _instanceInitializers);

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

          var options = pruneOptions({
            animation: this.animation,
            columns: this.columns,
            columnMenu: this.columnMenu,
            dataSource: this.dataSource,
            dataTextField: this.dataTextField,
            delay: this.delay,
            enable: this.enable,
            editable: this.editable,
            filter: this.filter,
            filterable: this.filterable,
            fixedGroupTemplate: this.fixedGroupTemplate,
            groupTemplate: this.groupTemplate,
            groupable: this.groupable,
            headerTemplate: this.headerTemplate,
            height: this.height,
            highlightFirst: this.highlightFirst,
            ignoreCase: this.ignoreCase,
            minLength: this.minLength,
            navigatable: this.navigatable,
            pageable: this.pageable,
            placeholder: this.placeholder,
            popup: this.popup,
            reorderable: this.reorderable,
            resizable: this.resizable,
            separator: this.separator,
            scrollable: this.scrollable,
            sortable: this.sortable,
            suggest: this.suggest,
            template: this.template,
            toolbar: this.toolbar,
            valuePrimitive: this.valuePrimitive,
            virtual: this.virtual,

            cancel: function cancel(e) {
              return fireKendoEvent(_this.element, 'cancel', e);
            },
            change: function change(e) {
              return fireKendoEvent(_this.element, 'change', e);
            },
            columnHide: function columnHide(e) {
              return fireKendoEvent(_this.element, 'column-hide', e);
            },
            columnLock: function columnLock(e) {
              return fireKendoEvent(_this.element, 'column-lock', e);
            },
            columnUnlock: function columnUnlock(e) {
              return fireKendoEvent(_this.element, 'column-unlock', e);
            },
            columnMenuInit: function columnMenuInit(e) {
              return fireKendoEvent(_this.element, 'column-menu-init', e);
            },
            columnReorder: function columnReorder(e) {
              return fireKendoEvent(_this.element, 'column-reorder', e);
            },
            columnResize: function columnResize(e) {
              return fireKendoEvent(_this.element, 'column-resize', e);
            },
            columnShow: function columnShow(e) {
              return fireKendoEvent(_this.element, 'column-show', e);
            },
            dataBinding: function dataBinding(e) {
              return fireKendoEvent(_this.element, 'data-binding', e);
            },
            dataBound: function dataBound(e) {
              return fireKendoEvent(_this.element, 'data-bound', e);
            },
            detailCollapse: function detailCollapse(e) {
              return fireKendoEvent(_this.element, 'detail-collapse', e);
            },

            detailExpand: function detailExpand(e) {
              return fireKendoEvent(_this.element, 'detail-expand', e);
            },
            edit: function edit(e) {
              return fireKendoEvent(_this.element, 'edit', e);
            },
            excelExport: function excelExport(e) {
              return fireKendoEvent(_this.element, 'excel-export', e);
            },
            filterMenuInit: function filterMenuInit(e) {
              return fireKendoEvent(_this.element, 'filter-menu-init', e);
            },
            navigate: function navigate(e) {
              return fireKendoEvent(_this.element, 'navigate', e);
            },
            pdfExport: function pdfExport(e) {
              return fireKendoEvent(_this.element, 'pdf-export', e);
            },
            remove: function remove(e) {
              return fireKendoEvent(_this.element, 'remove', e);
            },
            save: function save(e) {
              return fireKendoEvent(_this.element, 'save', e);
            },
            saveChanges: function saveChanges(e) {
              return fireKendoEvent(_this.element, 'save-changes', e);
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
        Grid = inject(Element, TemplateCompiler)(Grid) || Grid;
        Grid = customElement('au-kendo-grid')(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});