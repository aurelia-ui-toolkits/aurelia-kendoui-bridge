define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _constants, _decorators, _templateGatherer, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GridToolbar = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var GridToolbar = exports.GridToolbar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'grid-toolbar'), _dec2 = (0, _decorators.generateBindables)('GridToolbarItem'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer, _util.Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function GridToolbar(templateGatherer, util, element) {
      _classCallCheck(this, GridToolbar);

      this.templateGatherer = templateGatherer;
      this.util = util;
      this.element = element;
    }

    GridToolbar.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
      var templates = this.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.templateGatherer.useTemplates(this, 'GridToolbarItem', templates);
    };

    return GridToolbar;
  }()) || _class) || _class) || _class);
});