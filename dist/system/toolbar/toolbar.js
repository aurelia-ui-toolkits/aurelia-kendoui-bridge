'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, OptionsBuilder, _dec, _dec2, _dec3, _class, Toolbar;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
      _export('Toolbar', Toolbar = (_dec = customElement(constants.elementPrefix + 'toolbar'), _dec2 = generateBindables('kendoToolBar'), _dec3 = inject(Element, WidgetBase, OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Toolbar(element, widgetBase, optionsBuilder) {
          _classCallCheck(this, Toolbar);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoToolBar').linkViewModel(this);
        }

        Toolbar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Toolbar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Toolbar.prototype.recreate = function recreate() {
          var _this = this;

          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this._beforeInitialize(o);
            }
          });
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

        Toolbar.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Toolbar;
      }()) || _class) || _class) || _class));

      _export('Toolbar', Toolbar);
    }
  };
});