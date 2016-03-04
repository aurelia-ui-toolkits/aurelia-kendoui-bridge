System.register(['aurelia-dependency-injection', './control-properties', './util'], function (_export) {
  'use strict';

  var inject, ControlProperties, Util, OptionsBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {
      OptionsBuilder = (function () {
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

          return this.util.pruneOptions(options);
        };

        var _OptionsBuilder = OptionsBuilder;
        OptionsBuilder = inject(ControlProperties, Util)(OptionsBuilder) || OptionsBuilder;
        return OptionsBuilder;
      })();

      _export('OptionsBuilder', OptionsBuilder);
    }
  };
});