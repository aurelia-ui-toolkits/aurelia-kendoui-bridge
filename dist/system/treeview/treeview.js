'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, ViewResources, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, TreeView;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function isInitFromUl(element) {
    return element.querySelectorAll('ul').length > 0;
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('TreeView', TreeView = (_dec = customElement(constants.elementPrefix + 'treeview'), _dec2 = generateBindables('kendoTreeView'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function TreeView(element, widgetBase, viewResources) {
          _classCallCheck(this, TreeView);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this).useViewResources(viewResources);
        }

        TreeView.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeView.prototype.attached = function attached() {
          if (isInitFromUl(this.element)) {
            this.target = this.element.querySelectorAll('ul')[0];
          } else {
            this.target = document.createElement('div');
            this.element.appendChild(this.target);
          }

          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeView.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoTreeView', templates);

          this.kWidget = this.widgetBase.createWidget({
            element: this.target,
            rootElement: this.element,
            parentCtx: this.$parent
          });
        };

        TreeView.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TreeView;
      }()) || _class) || _class) || _class));

      _export('TreeView', TreeView);
    }
  };
});