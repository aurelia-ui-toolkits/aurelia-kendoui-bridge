System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/options-builder', '../common/util'], function (_export, _context) {
  "use strict";

  var customElement, inject, constants, generateBindables, TemplateGatherer, OptionsBuilder, Util, _dec, _dec2, _dec3, _class, ToolbarItem;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonTemplateGatherer) {
      TemplateGatherer = _commonTemplateGatherer.TemplateGatherer;
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }, function (_commonUtil) {
      Util = _commonUtil.Util;
    }],
    execute: function () {
      _export('ToolbarItem', ToolbarItem = (_dec = customElement(constants.elementPrefix + 'toolbar-item'), _dec2 = generateBindables('ToolBarItem'), _dec3 = inject(TemplateGatherer, OptionsBuilder, Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ToolbarItem(templateGatherer, optionsBuilder, util, element) {
          _classCallCheck(this, ToolbarItem);

          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
          this.util = util;
          this.element = element;
        }

        ToolbarItem.prototype.getOptions = function getOptions() {
          var _this = this;

          var templates = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.templateGatherer.useTemplates(this, 'ToolBarItem', templates);

          var buttons = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'toolbar-item-button');
          if (buttons && buttons.length > 0) {
            this.kButtons = [];

            buttons.forEach(function (item) {
              _this.kButtons.push(item.getOptions());
            });
          }

          return this.optionsBuilder.getOptions(this, 'ToolBarItem');
        };

        return ToolbarItem;
      }()) || _class) || _class) || _class));

      _export('ToolbarItem', ToolbarItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/toolbar/toolbar-item.js.map
