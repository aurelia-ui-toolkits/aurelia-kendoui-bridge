'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _controlProperties = require('./control-properties');

var _util = require('./util');

var OptionsBuilder = (function () {
  function OptionsBuilder(controlProperties) {
    _classCallCheck(this, _OptionsBuilder);

    this.controlProperties = controlProperties;
  }

  OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
    var _this = this;

    var options = {};
    var props = this.controlProperties.getProperties(className);

    var _loop = function (i) {
      var prop = props[i];
      var value = viewModel[_util.getBindablePropertyName(prop)];

      if (_util.hasValue(value)) {
        if (_this.isTemplate(prop)) {
          options[prop] = function () {
            return value;
          };
        } else {
          options[prop] = value;
        }
      }
    };

    for (var i = 0; i < props.length; i++) {
      _loop(i);
    }

    return _util.pruneOptions(options);
  };

  OptionsBuilder.prototype.isTemplate = function isTemplate(propertyName) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  };

  var _OptionsBuilder = OptionsBuilder;
  OptionsBuilder = _aureliaDependencyInjection.inject(_controlProperties.ControlProperties)(OptionsBuilder) || OptionsBuilder;
  return OptionsBuilder;
})();

exports.OptionsBuilder = OptionsBuilder;