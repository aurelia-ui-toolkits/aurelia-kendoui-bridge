"use strict";

exports.__esModule = true;
exports.pruneOptions = pruneOptions;

function pruneOptions(options) {

  var returnOptions = {};

  for (var prop in options) {
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}