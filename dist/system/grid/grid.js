System.register(['aurelia-framework', '../common/index', 'kendo-ui/js/kendo.filtercell.min', 'kendo-ui/js/kendo.grid.min'], function (_export) {
  'use strict';

  var inject, children, customElement, bindable, WidgetBase, TemplateCompiler, generateBindables, Grid;

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
    }, function (_commonIndex) {
      WidgetBase = _commonIndex.WidgetBase;
      TemplateCompiler = _commonIndex.TemplateCompiler;
      generateBindables = _commonIndex.generateBindables;
    }, function (_kendoUiJsKendoFiltercellMin) {}, function (_kendoUiJsKendoGridMin) {}],
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
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'kDataSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element, templateCompiler) {
          _classCallCheck(this, _Grid);

          _WidgetBase.call(this, 'kendoGrid', element);

          _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

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

        var _Grid = Grid;
        Grid = inject(Element, TemplateCompiler)(Grid) || Grid;
        Grid = generateBindables('kendoGrid')(Grid) || Grid;
        Grid = customElement('k-grid')(Grid) || Grid;
        return Grid;
      })(WidgetBase);

      _export('Grid', Grid);
    }
  };
});