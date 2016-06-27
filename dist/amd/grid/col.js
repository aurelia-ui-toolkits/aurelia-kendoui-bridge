define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/options-builder', '../common/util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _constants, _decorators, _templateGatherer, _optionsBuilder, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Col = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Col = exports.Col = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'col'), _dec2 = (0, _decorators.generateBindables)('GridColumn'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer, _optionsBuilder.OptionsBuilder, _util.Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Col(templateGatherer, optionsBuilder, util, element) {
      _classCallCheck(this, Col);

      this.templateGatherer = templateGatherer;
      this.optionsBuilder = optionsBuilder;
      this.util = util;
      this.element = element;
    }

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
    };

    return Col;
  }()) || _class) || _class) || _class);
});