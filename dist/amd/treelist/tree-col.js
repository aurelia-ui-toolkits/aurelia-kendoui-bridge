define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _constants, _decorators, _templateGatherer, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TreeCol = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var TreeCol = exports.TreeCol = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'tree-col'), _dec2 = (0, _decorators.generateBindables)('TreeListColumn'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer, _util.Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function TreeCol(templateGatherer, util, element) {
      _classCallCheck(this, TreeCol);

      this.templateGatherer = templateGatherer;
      this.util = util;
      this.element = element;
    }

    TreeCol.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
      var templates = this.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.templateGatherer.useTemplates(this, 'TreeListColumn', templates);
    };

    return TreeCol;
  }()) || _class) || _class) || _class);
});