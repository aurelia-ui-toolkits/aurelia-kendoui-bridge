System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, ListView;

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
    }],
    execute: function () {
      _export('ListView', ListView = (_dec = customElement(constants.elementPrefix + 'list-view'), _dec2 = generateBindables('kendoListView'), _dec3 = inject(Element, WidgetBase, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ListView(element, widgetBase, container) {
          _classCallCheck(this, ListView);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoListView').useElement(this.element).linkViewModel(this).useContainer(container);
        }

        ListView.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        ListView.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        ListView.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ListView.prototype.recreate = function recreate() {
          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoListView', templates);

          this.kWidget = this.widgetBase.recreate();
        };

        ListView.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        ListView.prototype.detached = function detached() {
          this.destroy();
        };

        return ListView;
      }()) || _class) || _class) || _class));

      _export('ListView', ListView);
    }
  };
});
//# sourceMappingURL=../dist/dev/listview/listview.js.map
