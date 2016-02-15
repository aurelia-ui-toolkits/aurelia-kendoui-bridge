System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'k-on-',
        bindablePrefix: 'k-',
        attributePrefix: 'k-',
        elementPrefix: 'k-'
      };

      _export('constants', constants);
    }
  };
});