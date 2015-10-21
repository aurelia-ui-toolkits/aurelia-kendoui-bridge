System.register([], function (_export) {
  'use strict';

  _export('fireEvent', fireEvent);

  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
  }

  return {
    setters: [],
    execute: function () {}
  };
});