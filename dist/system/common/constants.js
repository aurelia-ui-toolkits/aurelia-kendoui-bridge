System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'kendo-'
      };

      _export('constants', constants);
    }
  };
});