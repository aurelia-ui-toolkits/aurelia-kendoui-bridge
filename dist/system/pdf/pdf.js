System.register(['kendo.pdf.min', 'kendo.excel.min'], function (_export) {
  'use strict';

  var PDF;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_kendoPdfMin) {}, function (_kendoExcelMin) {}],
    execute: function () {
      PDF = function PDF() {
        _classCallCheck(this, PDF);
      };

      _export('PDF', PDF);
    }
  };
});