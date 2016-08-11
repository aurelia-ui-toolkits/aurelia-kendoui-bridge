'use strict';

System.register(['./bindables', 'aurelia-dependency-injection', './util'], function (_export, _context) {
  "use strict";

  var bindables, inject, Util, _dec, _class, ControlProperties;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_bindables) {
      bindables = _bindables.bindables;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {
      _export('ControlProperties', ControlProperties = (_dec = inject(Util), _dec(_class = function () {
        function ControlProperties(util) {
          _classCallCheck(this, ControlProperties);

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
          if (!bindables[controlName]) {
            throw new Error(controlName + ' not found in generated bindables.js');
          }

          return bindables[controlName];
        };

        ControlProperties.prototype.getWidgetProperties = function getWidgetProperties(controlName) {
          if (kendo && kendo.jQuery.fn[controlName]) {
            return Object.keys(kendo.jQuery.fn[controlName].widget.prototype.options);
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

        return ControlProperties;
      }()) || _class));

      _export('ControlProperties', ControlProperties);
    }
  };
});
//# sourceMappingURL=../dist/dev/common/control-properties.js.map
