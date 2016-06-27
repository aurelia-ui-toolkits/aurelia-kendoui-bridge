define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf', 'kendo.data.signalr.min', 'kendo.filtercell.min', 'kendo.treelist.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _optionsBuilder, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TreeList = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var TreeList = exports.TreeList = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'tree-list'), _dec2 = (0, _decorators.generateBindables)('kendoTreeList'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources, _optionsBuilder.OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function TreeList(element, widgetBase, viewResources, optionsBuilder) {
      _classCallCheck(this, TreeList);

      this.element = element;
      this.optionsBuilder = optionsBuilder;
      this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
    }

    TreeList.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    TreeList.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
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
      var _this2 = this;

      var columns = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'tree-col');

      if (columns && columns.length > 0) {
        options.columns = [];

        columns.forEach(function (column) {
          options.columns.push(_this2.optionsBuilder.getOptions(column, 'TreeListColumn'));
        });
      }
    };

    TreeList.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return TreeList;
  }()) || _class) || _class) || _class);
});