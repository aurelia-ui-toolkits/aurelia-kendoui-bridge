define(['exports', 'aurelia-dependency-injection', './control-properties', './util'], function (exports, _aureliaDependencyInjection, _controlProperties, _util) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var OptionsBuilder = (function () {
    function OptionsBuilder(controlProperties) {
      _classCallCheck(this, _OptionsBuilder);

      this.controlProperties = controlProperties;
    }

    OptionsBuilder.prototype.getOptions = function getOptions(viewModel, className) {
      var _this = this;

      var options = {};

      var _loop = function () {
        if (_isArray) {
          if (_i >= _iterator.length) return 'break';
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) return 'break';
          _ref = _i.value;
        }

        var prop = _ref;

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

      for (var _iterator = this.controlProperties.getProperties(className), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        var _ret = _loop();

        if (_ret === 'break') break;
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
});