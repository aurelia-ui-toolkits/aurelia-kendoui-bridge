System.register(['aurelia-dependency-injection', './control-properties', './util'], function (_export) {
  'use strict';

  var inject, ControlProperties, getBindablePropertyName, pruneOptions, hasValue, OptionsBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      getBindablePropertyName = _util.getBindablePropertyName;
      pruneOptions = _util.pruneOptions;
      hasValue = _util.hasValue;
    }],
    execute: function () {
      OptionsBuilder = (function () {
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

            var value = viewModel[getBindablePropertyName(prop)];

            if (hasValue(value)) {
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

          return pruneOptions(options);
        };

        OptionsBuilder.prototype.isTemplate = function isTemplate(propertyName) {
          return propertyName.toLowerCase().indexOf('template') > -1;
        };

        var _OptionsBuilder = OptionsBuilder;
        OptionsBuilder = inject(ControlProperties)(OptionsBuilder) || OptionsBuilder;
        return OptionsBuilder;
      })();

      _export('OptionsBuilder', OptionsBuilder);
    }
  };
});