System.register(['./constants'], function (_export) {
  'use strict';

  var constants;

  _export('fireEvent', fireEvent);

  _export('fireKendoEvent', fireKendoEvent);

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, { 'detail': data });
    element.dispatchEvent(event);
  }

  function fireKendoEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    fireEvent(element, '' + constants.eventPrefix + name, data);
    return true;
  }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }],
    execute: function () {}
  };
});