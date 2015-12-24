'use strict';

exports.__esModule = true;
exports.fireEvent = fireEvent;
exports.fireKendoEvent = fireKendoEvent;

var _constants = require('./constants');

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, { 'detail': data });
  element.dispatchEvent(event);
}

function fireKendoEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  fireEvent(element, '' + _constants.constants.eventPrefix + name, data);
  return true;
}