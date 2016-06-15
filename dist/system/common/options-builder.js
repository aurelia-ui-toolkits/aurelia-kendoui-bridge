'use strict';

System.register(['aurelia-dependency-injection', './control-properties', './util'], function (_export, _context) {
  "use strict";

  var inject, ControlProperties, Util, _dec, _class, OptionsBuilder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {
      _export('OptionsBuilder', OptionsBuilder = (_dec = inject(ControlProperties, Util), _dec(_class = function () {
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
      }()) || _class));

      _export('OptionsBuilder', OptionsBuilder);
    }
  };
});