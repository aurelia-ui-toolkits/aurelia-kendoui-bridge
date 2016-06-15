'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GanttCol = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _templateGatherer = require('../common/template-gatherer');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GanttCol = exports.GanttCol = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'gantt-col'), _dec2 = (0, _decorators.generateBindables)('GanttColumn'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer), _dec(_class = _dec2(_class = _dec3(_class = function GanttCol() {
  _classCallCheck(this, GanttCol);
}) || _class) || _class) || _class);