define(['exports', './constants'], function (exports, _constants) {
  'use strict';

  exports.__esModule = true;
  exports.addHyphenAndLower = addHyphenAndLower;
  exports._hyphenate = _hyphenate;
  exports._unhyphenate = _unhyphenate;
  exports.getEventsFromAttributes = getEventsFromAttributes;
  var capitalMatcher = /([A-Z])/g;

  function addHyphenAndLower(char) {
    return '-' + char.toLowerCase();
  }

  function _hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }

  function _unhyphenate(name) {
    return name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  function getEventsFromAttributes(element) {
    var attributes = Array.prototype.slice.call(element.attributes);
    var events = [];

    for (var _iterator = attributes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var attribute = _ref;

      var attributeName = attribute.name;
      if (!attributeName.startsWith(_constants.constants.eventPrefix)) continue;

      var hyphenatedEvent = attributeName.split(_constants.constants.eventPrefix)[1];

      var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

      var camelCased = _unhyphenate(withoutTriggerDelegate);

      events.push(camelCased);
    }

    return events;
  }
});