'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _templateGatherer = require('../common/template-gatherer');

var _optionsBuilder = require('../common/options-builder');

var _util = require('../common/util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Col = exports.Col = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'col'), _dec2 = (0, _decorators.generateBindables)('GridColumn'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer, _optionsBuilder.OptionsBuilder, _util.Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Col(templateGatherer, optionsBuilder, util, element) {
    _classCallCheck(this, Col);

    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  Col.prototype.bind = function bind($parent) {
    this.$parent = $parent;
  };

  Col.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
    var templates = this.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.templateGatherer.useTemplates(this, 'GridColumn', templates);
  };

  Col.prototype.afterOptionsBuild = function afterOptionsBuild(options) {
    var _this = this;

    var columns = this.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'col');
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(function (col) {
        options.columns.push(_this.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }

    if (options.editor) {
      options.editor = options.editor.bind(this.$parent);
    }
  };

  return Col;
}()) || _class) || _class) || _class);