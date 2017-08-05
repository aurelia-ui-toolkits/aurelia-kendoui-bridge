System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/util'], function (_export, _context) {
  "use strict";

  var customElement, inject, constants, generateBindables, TemplateGatherer, Util, _dec, _dec2, _dec3, _class, GridToolbar;

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
      _export('GridToolbar', GridToolbar = (_dec = customElement(constants.elementPrefix + 'grid-toolbar'), _dec2 = generateBindables('GridToolbarItem'), _dec3 = inject(TemplateGatherer, Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function GridToolbar(templateGatherer, util, element) {
          _classCallCheck(this, GridToolbar);

          this.templateGatherer = templateGatherer;
          this.util = util;
          this.element = element;
        }

        GridToolbar.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
          var templates = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.templateGatherer.useTemplates(this, 'GridToolbarItem', templates);
        };

        return GridToolbar;
      }()) || _class) || _class) || _class));

      _export('GridToolbar', GridToolbar);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/grid-toolbar.js.map
