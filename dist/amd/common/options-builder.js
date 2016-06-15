define(['exports', 'aurelia-dependency-injection', './control-properties', './util'], function (exports, _aureliaDependencyInjection, _controlProperties, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OptionsBuilder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

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
});