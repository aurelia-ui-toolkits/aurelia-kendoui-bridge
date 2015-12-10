System.register([], function (_export) {
  'use strict';

  _export('fireEvent', fireEvent);

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, { 'detail': data });
    element.dispatchEvent(event);
  }

  return {
    setters: [],
    execute: function () {}
  };
});