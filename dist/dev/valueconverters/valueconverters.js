"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var kendoToStringValueConverter, kendoParseDateValueConverter, kendoParseIntValueConverter, kendoParseFloatValueConverter, kendoParseColorValueConverter, kendoStringifyValueConverter, kendoFormatValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("kendoToStringValueConverter", kendoToStringValueConverter = function () {
        function kendoToStringValueConverter() {
          _classCallCheck(this, kendoToStringValueConverter);
        }

        kendoToStringValueConverter.prototype.toView = function toView(value, format, language) {
          return kendo.toString(value, format, language);
        };

        return kendoToStringValueConverter;
      }());

      _export("kendoToStringValueConverter", kendoToStringValueConverter);

      _export("kendoParseDateValueConverter", kendoParseDateValueConverter = function () {
        function kendoParseDateValueConverter() {
          _classCallCheck(this, kendoParseDateValueConverter);
        }

        kendoParseDateValueConverter.prototype.toView = function toView(value, format, language) {
          return kendo.parseDate(value, format, language);
        };

        return kendoParseDateValueConverter;
      }());

      _export("kendoParseDateValueConverter", kendoParseDateValueConverter);

      _export("kendoParseIntValueConverter", kendoParseIntValueConverter = function () {
        function kendoParseIntValueConverter() {
          _classCallCheck(this, kendoParseIntValueConverter);
        }

        kendoParseIntValueConverter.prototype.toView = function toView(value, language) {
          return kendo.parseInt(value, language);
        };

        return kendoParseIntValueConverter;
      }());

      _export("kendoParseIntValueConverter", kendoParseIntValueConverter);

      _export("kendoParseFloatValueConverter", kendoParseFloatValueConverter = function () {
        function kendoParseFloatValueConverter() {
          _classCallCheck(this, kendoParseFloatValueConverter);
        }

        kendoParseFloatValueConverter.prototype.toView = function toView(value, language) {
          return kendo.parseFloat(value, language);
        };

        return kendoParseFloatValueConverter;
      }());

      _export("kendoParseFloatValueConverter", kendoParseFloatValueConverter);

      _export("kendoParseColorValueConverter", kendoParseColorValueConverter = function () {
        function kendoParseColorValueConverter() {
          _classCallCheck(this, kendoParseColorValueConverter);
        }

        kendoParseColorValueConverter.prototype.toView = function toView(value) {
          return kendo.parseColor(value);
        };

        return kendoParseColorValueConverter;
      }());

      _export("kendoParseColorValueConverter", kendoParseColorValueConverter);

      _export("kendoStringifyValueConverter", kendoStringifyValueConverter = function () {
        function kendoStringifyValueConverter() {
          _classCallCheck(this, kendoStringifyValueConverter);
        }

        kendoStringifyValueConverter.prototype.toView = function toView(obj) {
          return kendo.stringify(obj);
        };

        return kendoStringifyValueConverter;
      }());

      _export("kendoStringifyValueConverter", kendoStringifyValueConverter);

      _export("kendoFormatValueConverter", kendoFormatValueConverter = function () {
        function kendoFormatValueConverter() {
          _classCallCheck(this, kendoFormatValueConverter);
        }

        kendoFormatValueConverter.prototype.toView = function toView(value) {
          for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          params.unshift(value);

          return kendo.format.apply(this, params);
        };

        return kendoFormatValueConverter;
      }());

      _export("kendoFormatValueConverter", kendoFormatValueConverter);
    }
  };
});
//# sourceMappingURL=../dist/dev/valueconverters/valueconverters.js.map
