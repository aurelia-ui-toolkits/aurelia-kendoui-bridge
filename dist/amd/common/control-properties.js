define(['exports', './bindables', 'aurelia-dependency-injection', './util'], function (exports, _bindables, _aureliaDependencyInjection, _util) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ControlProperties = (function () {
    function ControlProperties(util) {
      _classCallCheck(this, _ControlProperties);

      this.cache = {};

      this.util = util;
    }

    ControlProperties.prototype.getProperties = function getProperties(controlName) {
      var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      if (this.cache[controlName]) {
        return this.cache[controlName];
      }

      var options1 = this.getWidgetProperties(controlName);

      var options2 = this.getGeneratedProperties(controlName);

      var keys = options1.concat(options2.filter(function (item) {
        return options1.indexOf(item) < 0;
      }));
      keys = keys.concat(extraProperties.filter(function (item) {
        return keys.indexOf(item) < 0;
      }));

      this.cache[controlName] = keys;

      return keys;
    };

    ControlProperties.prototype.getGeneratedProperties = function getGeneratedProperties(controlName) {
      if (!_bindables.bindables[controlName]) {
        throw new Error(controlName + ' not found in generated bindables.js');
      }

      return _bindables.bindables[controlName];
    };

    ControlProperties.prototype.getWidgetProperties = function getWidgetProperties(controlName) {
      if (jQuery.fn[controlName]) {
        return Object.keys(jQuery.fn[controlName].widget.prototype.options);
      }

      return [];
    };

    ControlProperties.prototype.getTemplateProperties = function getTemplateProperties(controlName) {
      var _this = this;

      var properties = this.getProperties(controlName);

      var templates = properties.filter(function (prop) {
        return _this.util.isTemplateProperty(prop);
      });

      return templates;
    };

    var _ControlProperties = ControlProperties;
    ControlProperties = _aureliaDependencyInjection.inject(_util.Util)(ControlProperties) || ControlProperties;
    return ControlProperties;
  })();

  exports.ControlProperties = ControlProperties;
});