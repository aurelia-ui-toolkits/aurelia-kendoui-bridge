define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../common/template-gatherer', '../pdf/pdf'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _optionsBuilder, _templateGatherer, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Grid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Grid = exports.Grid = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'grid'), _dec2 = (0, _decorators.generateBindables)('kendoGrid'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container, _optionsBuilder.OptionsBuilder, _templateGatherer.TemplateGatherer), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Grid(element, widgetBase, container, optionsBuilder, templateGatherer) {
      _classCallCheck(this, Grid);

      this.element = element;
      this.templateGatherer = templateGatherer;
      this.optionsBuilder = optionsBuilder;
      this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).useContainer(container);
    }

    Grid.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Grid.prototype.attached = function attached() {
      if (isInitFromDiv(this.element)) {
        this.target = this.element.querySelectorAll('div')[0];
      } else if (isInitFromTable(this.element)) {
        this.target = this.element.children[0];
      } else {
        this.target = document.createElement('div');
        this.element.appendChild(this.target);
      }

      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Grid.prototype.recreate = function recreate() {
      var _this = this;

      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.templateGatherer.useTemplates(this, 'kendoGrid', templates);

      this.kWidget = this.widgetBase.createWidget({
        element: this.target,
        rootElement: this.element,
        parentCtx: this.$parent,
        beforeInitialize: function beforeInitialize(o) {
          return _this._beforeInitialize(o);
        }
      });
    };

    Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
      var _this2 = this;

      var columns = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'col');
      var gridToolbars = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'grid-toolbar');

      if (columns && columns.length > 0) {
        options.columns = [];

        columns.forEach(function (column) {
          options.columns.push(_this2.optionsBuilder.getOptions(column, 'GridColumn'));
        });
      }

      if (gridToolbars && gridToolbars.length > 0) {
        var toolbar = gridToolbars[0];
        var o = this.optionsBuilder.getOptions(toolbar, 'GridToolbarItem');
        if (o.template) {
          options.toolbar = o.template;
        } else {
          options.toolbar = o;
        }
      }
    };

    Grid.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Grid;
  }()) || _class) || _class) || _class);

  function isInitFromTable(element) {
    return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
  }

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
});