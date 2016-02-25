define(["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var kendoToStringValueConverter = (function () {
    function kendoToStringValueConverter() {
      _classCallCheck(this, kendoToStringValueConverter);
    }

    kendoToStringValueConverter.prototype.toView = function toView(value, format, language) {
      return kendo.toString(value, format, language);
    };

    return kendoToStringValueConverter;
  })();

  exports.kendoToStringValueConverter = kendoToStringValueConverter;

  var kendoParseDateValueConverter = (function () {
    function kendoParseDateValueConverter() {
      _classCallCheck(this, kendoParseDateValueConverter);
    }

    kendoParseDateValueConverter.prototype.toView = function toView(value, format, language) {
      return kendo.parseDate(value, format, language);
    };

    return kendoParseDateValueConverter;
  })();

  exports.kendoParseDateValueConverter = kendoParseDateValueConverter;

  var kendoParseIntValueConverter = (function () {
    function kendoParseIntValueConverter() {
      _classCallCheck(this, kendoParseIntValueConverter);
    }

    kendoParseIntValueConverter.prototype.toView = function toView(value, language) {
      return kendo.parseInt(value, language);
    };

    return kendoParseIntValueConverter;
  })();

  exports.kendoParseIntValueConverter = kendoParseIntValueConverter;

  var kendoParseFloatValueConverter = (function () {
    function kendoParseFloatValueConverter() {
      _classCallCheck(this, kendoParseFloatValueConverter);
    }

    kendoParseFloatValueConverter.prototype.toView = function toView(value, language) {
      return kendo.parseFloat(value, language);
    };

    return kendoParseFloatValueConverter;
  })();

  exports.kendoParseFloatValueConverter = kendoParseFloatValueConverter;

  var kendoParseColorValueConverter = (function () {
    function kendoParseColorValueConverter() {
      _classCallCheck(this, kendoParseColorValueConverter);
    }

    kendoParseColorValueConverter.prototype.toView = function toView(value) {
      return kendo.parseColor(value);
    };

    return kendoParseColorValueConverter;
  })();

  exports.kendoParseColorValueConverter = kendoParseColorValueConverter;

  var kendoStringifyValueConverter = (function () {
    function kendoStringifyValueConverter() {
      _classCallCheck(this, kendoStringifyValueConverter);
    }

    kendoStringifyValueConverter.prototype.toView = function toView(obj) {
      return kendo.stringify(obj);
    };

    return kendoStringifyValueConverter;
  })();

  exports.kendoStringifyValueConverter = kendoStringifyValueConverter;

  var kendoFormatValueConverter = (function () {
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
  })();

  exports.kendoFormatValueConverter = kendoFormatValueConverter;
});