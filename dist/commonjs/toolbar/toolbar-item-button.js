'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonConstants = require('../common/constants');

var _commonDecorators = require('../common/decorators');

var _commonOptionsBuilder = require('../common/options-builder');

var ToolbarItemButton = (function () {
  function ToolbarItemButton(optionsBuilder) {
    _classCallCheck(this, _ToolbarItemButton);

    this.optionsBuilder = optionsBuilder;
  }

  ToolbarItemButton.prototype.getOptions = function getOptions() {
    return this.optionsBuilder.getOptions(this, 'ToolBarItemButton');
  };

  var _ToolbarItemButton = ToolbarItemButton;
  ToolbarItemButton = _aureliaDependencyInjection.inject(_commonOptionsBuilder.OptionsBuilder)(ToolbarItemButton) || ToolbarItemButton;
  ToolbarItemButton = _commonDecorators.generateBindables('ToolBarItemButton')(ToolbarItemButton) || ToolbarItemButton;
  ToolbarItemButton = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'toolbar-item-button')(ToolbarItemButton) || ToolbarItemButton;
  return ToolbarItemButton;
})();

exports.ToolbarItemButton = ToolbarItemButton;