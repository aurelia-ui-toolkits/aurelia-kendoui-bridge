define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _constants, _decorators, _templateGatherer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GanttCol = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var GanttCol = exports.GanttCol = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'gantt-col'), _dec2 = (0, _decorators.generateBindables)('GanttColumn'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer), _dec(_class = _dec2(_class = _dec3(_class = function GanttCol() {
    _classCallCheck(this, GanttCol);
  }) || _class) || _class) || _class);
});