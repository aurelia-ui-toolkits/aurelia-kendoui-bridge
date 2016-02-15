System.register(['./bindables'], function (_export) {
  'use strict';

  var bindables, ControlProperties;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bindables) {
      bindables = _bindables.bindables;
    }],
    execute: function () {
      ControlProperties = (function () {
        function ControlProperties() {
          _classCallCheck(this, ControlProperties);

          this.cache = [];
        }

        ControlProperties.prototype.getProperties = function getProperties(controlName) {
          if (this.cache[controlName]) {
            return this.cache[controlName];
          }

          var options1 = Object.keys(jQuery.fn[controlName].widget.prototype.options);

          var options2 = bindables[controlName];

          var keys = options1.concat(options2.filter(function (item) {
            return options1.indexOf(item) < 0;
          }));

          keys.push('widget');

          this.cache[controlName] = keys;

          return keys;
        };

        return ControlProperties;
      })();

      _export('ControlProperties', ControlProperties);
    }
  };
});