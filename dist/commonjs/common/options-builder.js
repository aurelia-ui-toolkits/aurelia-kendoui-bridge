'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsBuilder = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _controlProperties = require('./control-properties');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OptionsBuilder = exports.OptionsBuilder = (_dec = (0, _aureliaDependencyInjection.inject)(_controlProperties.ControlProperties, _util.Util), _dec(_class = function () {
  function OptionsBuilder(controlProperties, util) {
    _classCallCheck(this, OptionsBuilder);

    this.controlProperties = controlProperties;
    this.util = util;
  }

  OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
    var options = {};
    var props = this.controlProperties.getProperties(className);

    if (viewModel.beforeOptionsBuild) {
      viewModel.beforeOptionsBuild(options);
    }

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = viewModel[this.util.getBindablePropertyName(prop)];

      if (this.util.hasValue(value)) {
        options[prop] = value;
      }
    }

    if (viewModel.afterOptionsBuild) {
      viewModel.afterOptionsBuild(options);
    }

    return this.util.pruneOptions(options);
  };

  return OptionsBuilder;
}()) || _class);