'use strict';

exports.__esModule = true;
exports.fireEvent = fireEvent;

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, { 'detail': data });
  element.dispatchEvent(event);
}