System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/options-builder'], function (_export) {
  'use strict';

  var customElement, inject, constants, generateBindables, OptionsBuilder, ToolbarItemButton;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
      ToolbarItemButton = (function () {
        function ToolbarItemButton(optionsBuilder) {
          _classCallCheck(this, _ToolbarItemButton);

          this.optionsBuilder = optionsBuilder;
        }

        ToolbarItemButton.prototype.getOptions = function getOptions() {
          return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
        };

        var _ToolbarItemButton = ToolbarItemButton;
        ToolbarItemButton = inject(OptionsBuilder)(ToolbarItemButton) || ToolbarItemButton;
        ToolbarItemButton = generateBindables('ToolBarItemButton')(ToolbarItemButton) || ToolbarItemButton;
        ToolbarItemButton = customElement(constants.elementPrefix + 'toolbar-item-button')(ToolbarItemButton) || ToolbarItemButton;
        return ToolbarItemButton;
      })();

      _export('ToolbarItemButton', ToolbarItemButton);
    }
  };
});