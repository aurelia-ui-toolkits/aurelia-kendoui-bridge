System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer'], function (_export) {
  'use strict';

  var customElement, inject, constants, generateBindables, TemplateGatherer, GanttCol;

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
    }, function (_commonTemplateGatherer) {
      TemplateGatherer = _commonTemplateGatherer.TemplateGatherer;
    }],
    execute: function () {
      GanttCol = (function () {
        function GanttCol() {
          _classCallCheck(this, _GanttCol);
        }

        var _GanttCol = GanttCol;
        GanttCol = inject(TemplateGatherer)(GanttCol) || GanttCol;
        GanttCol = generateBindables('GanttColumn')(GanttCol) || GanttCol;
        GanttCol = customElement(constants.elementPrefix + 'gantt-col')(GanttCol) || GanttCol;
        return GanttCol;
      })();

      _export('GanttCol', GanttCol);
    }
  };
});