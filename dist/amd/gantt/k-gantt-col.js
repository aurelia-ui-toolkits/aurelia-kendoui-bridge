define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _commonConstants, _commonDecorators, _commonTemplateGatherer) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var GanttCol = (function () {
    function GanttCol() {
      _classCallCheck(this, _GanttCol);
    }

    var _GanttCol = GanttCol;
    GanttCol = _aureliaDependencyInjection.inject(_commonTemplateGatherer.TemplateGatherer)(GanttCol) || GanttCol;
    GanttCol = _commonDecorators.generateBindables('GanttColumn')(GanttCol) || GanttCol;
    GanttCol = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'gantt-col')(GanttCol) || GanttCol;
    return GanttCol;
  })();

  exports.GanttCol = GanttCol;
});