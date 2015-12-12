System.register([], function (_export) {
  'use strict';

  _export('fireEvent', fireEvent);

  _export('fireKendoEvent', fireKendoEvent);

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, { 'detail': data });
    element.dispatchEvent(event);
  }

  function fireKendoEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    fireEvent(element, 'kendo-' + name, data);
    return true;
  }

  return {
    setters: [],
    execute: function () {}
  };
});