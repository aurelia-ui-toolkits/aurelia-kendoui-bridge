'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarItem = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _templateGatherer = require('../common/template-gatherer');

var _optionsBuilder = require('../common/options-builder');

var _util = require('../common/util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolbarItem = exports.ToolbarItem = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'toolbar-item'), _dec2 = (0, _decorators.generateBindables)('ToolBarItem'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer, _optionsBuilder.OptionsBuilder, _util.Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function ToolbarItem(templateGatherer, optionsBuilder, util, element) {
    _classCallCheck(this, ToolbarItem);

    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  ToolbarItem.prototype.getOptions = function getOptions() {
    var _this = this;

    var templates = this.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.templateGatherer.useTemplates(this, 'ToolBarItem', templates);

    var buttons = this.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'toolbar-item-button');
    if (buttons && buttons.length > 0) {
      this.kButtons = [];

      buttons.forEach(function (item) {
        _this.kButtons.push(item.getOptions());
      });
    }

    return this.optionsBuilder.getOptions(this, 'ToolBarItem');
  };

  return ToolbarItem;
}()) || _class) || _class) || _class);