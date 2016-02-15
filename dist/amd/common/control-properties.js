define(['exports', './bindables'], function (exports, _bindables) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ControlProperties = (function () {
    function ControlProperties() {
      _classCallCheck(this, ControlProperties);

      this.cache = [];
    }

    ControlProperties.prototype.getProperties = function getProperties(controlName) {
      if (this.cache[controlName]) {
        return this.cache[controlName];
      }

      var options1 = Object.keys(jQuery.fn[controlName].widget.prototype.options);

      var options2 = _bindables.bindables[controlName];

      var keys = options1.concat(options2.filter(function (item) {
        return options1.indexOf(item) < 0;
      }));

      keys.push('widget');

      this.cache[controlName] = keys;

      return keys;
    };

    return ControlProperties;
  })();

  exports.ControlProperties = ControlProperties;
});