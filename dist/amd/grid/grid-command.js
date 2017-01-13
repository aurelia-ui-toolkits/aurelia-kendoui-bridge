define(['exports', 'aurelia-templating', '../common/constants', '../common/decorators'], function (exports, _aureliaTemplating, _constants, _decorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GridCommand = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var GridCommand = exports.GridCommand = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'grid-command'), _dec2 = (0, _decorators.generateBindables)('GridColumnCommandItem'), _dec(_class = _dec2(_class = function GridCommand() {
    _classCallCheck(this, GridCommand);
  }) || _class) || _class);
});