define(['exports', 'aurelia-dependency-injection', './control-properties', './util'], function (exports, _aureliaDependencyInjection, _controlProperties, _util) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var OptionsBuilder = (function () {
    function OptionsBuilder(controlProperties, util) {
      _classCallCheck(this, _OptionsBuilder);

      this.controlProperties = controlProperties;
      this.util = util;
    }

    OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
      var options = {};
      var props = this.controlProperties.getProperties(className);

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

    var _OptionsBuilder = OptionsBuilder;
    OptionsBuilder = _aureliaDependencyInjection.inject(_controlProperties.ControlProperties, _util.Util)(OptionsBuilder) || OptionsBuilder;
    return OptionsBuilder;
  })();

  exports.OptionsBuilder = OptionsBuilder;
});