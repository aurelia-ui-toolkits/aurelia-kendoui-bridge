define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.fireEvent = fireEvent;
  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
  }
});