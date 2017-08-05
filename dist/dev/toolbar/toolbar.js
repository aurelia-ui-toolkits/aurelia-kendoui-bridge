System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder'], function (_export, _context) {
  "use strict";

  var inject, Container, customElement, WidgetBase, generateBindables, constants, OptionsBuilder, _dec, _dec2, _dec3, _class, Toolbar;

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
    }],
    execute: function () {
      _export('Toolbar', Toolbar = (_dec = customElement(constants.elementPrefix + 'toolbar'), _dec2 = generateBindables('kendoToolBar'), _dec3 = inject(Element, WidgetBase, OptionsBuilder, Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Toolbar(element, widgetBase, optionsBuilder, container) {
          var _this = this;

          _classCallCheck(this, Toolbar);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoToolBar').useElement(this.element).beforeInitialize(function (options) {
            return _this._beforeInitialize(options);
          }).linkViewModel(this).useContainer(container);
        }

        Toolbar.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Toolbar.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Toolbar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Toolbar.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Toolbar.prototype._beforeInitialize = function _beforeInitialize(options) {
          var toolbarItems = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'toolbar-item');
          if (toolbarItems && toolbarItems.length > 0) {
            options.items = [];

            toolbarItems.forEach(function (item) {
              options.items.push(item.getOptions());
            });
          }
        };

        Toolbar.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Toolbar.prototype.detached = function detached() {
          this.destroy();
        };

        return Toolbar;
      }()) || _class) || _class) || _class));

      _export('Toolbar', Toolbar);
    }
  };
});
//# sourceMappingURL=../dist/dev/toolbar/toolbar.js.map
