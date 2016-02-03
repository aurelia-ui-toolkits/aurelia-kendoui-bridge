System.register([], function (_export) {
  'use strict';

  _export('pruneOptions', pruneOptions);

  function pruneOptions(options) {
    var returnOptions = {};

    for (var prop in options) {
      if (typeof options[prop] !== 'undefined' && options[prop] !== null) {
        returnOptions[prop] = options[prop];
      }
    }

    return returnOptions;
  }

  return {
    setters: [],
    execute: function () {}
  };
});