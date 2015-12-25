System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'k-on-',
        bindablePrefix: 'k-'
      };

      _export('constants', constants);
    }
  };
});