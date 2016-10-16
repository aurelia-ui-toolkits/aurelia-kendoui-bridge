'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, OptionsBuilder, PDF, _dec, _dec2, _dec3, _class, TreeList;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }],
    execute: function () {
      _export('TreeList', TreeList = (_dec = customElement(constants.elementPrefix + 'tree-list'), _dec2 = generateBindables('kendoTreeList'), _dec3 = inject(Element, WidgetBase, Container, OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function TreeList(element, widgetBase, container, optionsBuilder) {
          _classCallCheck(this, TreeList);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useContainer(container);
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

          var columns = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'tree-col');

          if (columns && columns.length > 0) {
            options.columns = [];

            columns.forEach(function (column) {
              options.columns.push(_this2.optionsBuilder.getOptions(column, 'TreeListColumn'));
            });
          }
        };

        TreeList.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TreeList;
      }()) || _class) || _class) || _class));

      _export('TreeList', TreeList);
    }
  };
});
//# sourceMappingURL=../dist/dev/treelist/treelist.js.map
