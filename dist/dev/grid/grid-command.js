System.register(['aurelia-templating', '../common/constants', '../common/decorators'], function (_export, _context) {
  "use strict";

  var customElement, constants, generateBindables, _dec, _dec2, _class, GridCommand;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }],
    execute: function () {
      _export('GridCommand', GridCommand = (_dec = customElement(constants.elementPrefix + 'grid-command'), _dec2 = generateBindables('GridColumnCommandItem'), _dec(_class = _dec2(_class = function GridCommand() {
        _classCallCheck(this, GridCommand);
      }) || _class) || _class));

      _export('GridCommand', GridCommand);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/grid-command.js.map
