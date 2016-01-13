System.register(['aurelia-framework', '../common/widget-base', '../common/decorators', '../pdf/pdf', 'kendo-ui/js/kendo.data.signalr.min', 'kendo-ui/js/kendo.filtercell.min', 'kendo-ui/js/kendo.grid.min'], function (_export) {
  'use strict';

  var inject, children, customElement, bindable, WidgetBase, generateBindables, PDF, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoUiJsKendoDataSignalrMin) {}, function (_kendoUiJsKendoFiltercellMin) {}, function (_kendoUiJsKendoGridMin) {}],
    execute: function () {
      Grid = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(Grid, _WidgetBase);

        _createDecoratedClass(Grid, [{
          key: 'columns',
          decorators: [children('au-col')],
          initializer: null,
          enumerable: true
        }, {
          key: 'kDataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element) {
          _classCallCheck(this, _Grid);

          _WidgetBase.call(this, 'kendoGrid', element);

          _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
        }

        Grid.prototype.attached = function attached() {
          this._initialize();
        };

        Grid.prototype._initialize = function _initialize() {
          this.target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

          _WidgetBase.prototype._initialize.call(this);
        };

        Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
          if (this.columns && this.columns.length > 0) {
            options.columns = this.columns;
          }
        };

        Grid.prototype.enableChanged = function enableChanged(newValue) {
          if (this.widget) {
            this.widget.enable(newValue);
          }
        };

        Grid.prototype.addRow = function addRow() {
          if (this.widget) {
            this.widget.addRow();
          }
        };

        Grid.prototype.autoFitColumn = function autoFitColumn(value) {
          if (this.widget) {
            this.widget.autoFitColumn(value);
          }
        };

        Grid.prototype.cancelChanges = function cancelChanges() {
          if (this.widget) {
            this.widget.cancelChanges();
          }
        };

        Grid.prototype.cancelRow = function cancelRow() {
          if (this.widget) {
            this.widget.cancelRow();
          }
        };

        Grid.prototype.cellIndex = function cellIndex(cell) {
          if (this.widget) {
            return this.widget.cellIndex(cell);
          }
        };

        Grid.prototype.clearSelection = function clearSelection() {
          if (this.widget) {
            this.widget.clearSelection();
          }
        };

        Grid.prototype.closeCell = function closeCell() {
          if (this.widget) {
            this.widget.closeCell();
          }
        };

        Grid.prototype.collapseGroup = function collapseGroup(group) {
          if (this.widget) {
            this.widget.collapseGroup(group);
          }
        };

        Grid.prototype.collapseRow = function collapseRow(row) {
          if (this.widget) {
            this.widget.collapseRow(row);
          }
        };

        Grid.prototype.current = function current(cell) {
          if (this.widget) {
            return this.widget.current(cell);
          }
        };

        Grid.prototype.dataItem = function dataItem(row) {
          if (this.widget) {
            return this.widget.dataItem(row);
          }
        };

        Grid.prototype.destroy = function destroy() {
          if (this.widget) {
            this.widget.destroy();
          }
        };

        Grid.prototype.editCell = function editCell(cell) {
          if (this.widget) {
            this.widget.editCell(cell);
          }
        };

        Grid.prototype.editRow = function editRow(row) {
          if (this.widget) {
            this.widget.editRow(row);
          }
        };

        Grid.prototype.expandGroup = function expandGroup(row) {
          if (this.widget) {
            this.widget.expandGroup(row);
          }
        };

        Grid.prototype.expandRow = function expandRow(row) {
          if (this.widget) {
            this.widget.expandRow(row);
          }
        };

        Grid.prototype.getOptions = function getOptions() {
          if (this.widget) {
            return this.widget.getOptions();
          }
        };

        Grid.prototype.hideColumn = function hideColumn(column) {
          if (this.widget) {
            this.widget.hideColumn(column);
          }
        };

        Grid.prototype.lockColumn = function lockColumn(column) {
          if (this.widget) {
            this.widget.lockColumn(column);
          }
        };

        Grid.prototype.refresh = function refresh() {
          if (this.widget) {
            this.widget.refresh();
          }
        };

        Grid.prototype.removeRow = function removeRow(row) {
          if (this.widget) {
            this.widget.removeRow(row);
          }
        };

        Grid.prototype.reorderColumn = function reorderColumn(destIndex, column) {
          if (this.widget) {
            this.widget.reorderColumn(destIndex, column);
          }
        };

        Grid.prototype.saveAsExcel = function saveAsExcel() {
          if (this.widget) {
            this.widget.saveAsExcel();
          }
        };

        Grid.prototype.saveAsPDF = function saveAsPDF() {
          if (this.widget) {
            this.widget.saveAsPDF();
          }
        };

        Grid.prototype.saveChanges = function saveChanges() {
          if (this.widget) {
            this.widget.saveChanges();
          }
        };

        Grid.prototype.saveRow = function saveRow() {
          if (this.widget) {
            this.widget.saveRow();
          }
        };

        Grid.prototype.select = function select(rows) {
          if (this.widget) {
            return this.widget.select(rows);
          }
        };

        Grid.prototype.setDataSource = function setDataSource(dataSource) {
          if (this.widget) {
            this.widget.setDataSource(dataSource);
          }
        };

        Grid.prototype.setOptions = function setOptions(options) {
          if (this.widget) {
            this.widget.setOptions(options);
          }
        };

        Grid.prototype.showColumn = function showColumn(column) {
          if (this.widget) {
            this.widget.showColumn(column);
          }
        };

        Grid.prototype.unlockColumn = function unlockColumn(column) {
          if (this.widget) {
            this.widget.unlockColumn(column);
          }
        };

        var _Grid = Grid;
        Grid = inject(Element)(Grid) || Grid;
        Grid = generateBindables('kendoGrid')(Grid) || Grid;
        Grid = customElement('k-grid')(Grid) || Grid;
        return Grid;
      })(WidgetBase);

      _export('Grid', Grid);
    }
  };
});