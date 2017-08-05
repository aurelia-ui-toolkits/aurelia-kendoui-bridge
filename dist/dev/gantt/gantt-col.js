System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer'], function (_export, _context) {
  "use strict";

  var customElement, inject, constants, generateBindables, TemplateGatherer, _dec, _dec2, _dec3, _class, GanttCol;

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
    }],
    execute: function () {
      _export('GanttCol', GanttCol = (_dec = customElement(constants.elementPrefix + 'gantt-col'), _dec2 = generateBindables('GanttColumn'), _dec3 = inject(TemplateGatherer), _dec(_class = _dec2(_class = _dec3(_class = function GanttCol() {
        _classCallCheck(this, GanttCol);
      }) || _class) || _class) || _class));

      _export('GanttCol', GanttCol);
    }
  };
});
//# sourceMappingURL=../dist/dev/gantt/gantt-col.js.map
