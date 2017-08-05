System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/util'], function (_export, _context) {
  "use strict";

  var customElement, inject, constants, generateBindables, TemplateGatherer, Util, _dec, _dec2, _dec3, _class, TreeCol;

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
    }, function (_commonUtil) {
      Util = _commonUtil.Util;
    }],
    execute: function () {
      _export('TreeCol', TreeCol = (_dec = customElement(constants.elementPrefix + 'tree-col'), _dec2 = generateBindables('TreeListColumn'), _dec3 = inject(TemplateGatherer, Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function TreeCol(templateGatherer, util, element) {
          _classCallCheck(this, TreeCol);

          this.templateGatherer = templateGatherer;
          this.util = util;
          this.element = element;
        }

        TreeCol.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
          var templates = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.templateGatherer.useTemplates(this, 'TreeListColumn', templates);
        };

        return TreeCol;
      }()) || _class) || _class) || _class));

      _export('TreeCol', TreeCol);
    }
  };
});