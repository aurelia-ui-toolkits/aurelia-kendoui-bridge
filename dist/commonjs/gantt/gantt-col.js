'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonConstants = require('../common/constants');

var _commonDecorators = require('../common/decorators');

var _commonTemplateGatherer = require('../common/template-gatherer');

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