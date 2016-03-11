System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'k-on-',
        bindablePrefix: 'k-',
        attributePrefix: 'ak-',
        elementPrefix: 'ak-'
      };

      _export('constants', constants);
    }
  };
});