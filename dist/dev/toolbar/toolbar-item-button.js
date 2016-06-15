'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/options-builder'], function (_export, _context) {
  "use strict";

  var customElement, inject, constants, generateBindables, OptionsBuilder, _dec, _dec2, _dec3, _class, ToolbarItemButton;

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
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }],
    execute: function () {
      _export('ToolbarItemButton', ToolbarItemButton = (_dec = customElement(constants.elementPrefix + 'toolbar-item-button'), _dec2 = generateBindables('ToolBarItemButton'), _dec3 = inject(OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ToolbarItemButton(optionsBuilder) {
          _classCallCheck(this, ToolbarItemButton);

          this.optionsBuilder = optionsBuilder;
        }

        ToolbarItemButton.prototype.getOptions = function getOptions() {
          return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
        };

        return ToolbarItemButton;
      }()) || _class) || _class) || _class));

      _export('ToolbarItemButton', ToolbarItemButton);
    }
  };
});
//# sourceMappingURL=../dist/dev/toolbar/toolbar-item-button.js.map
