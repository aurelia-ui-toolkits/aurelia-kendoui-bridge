define(['exports', './constants', './control-properties', 'aurelia-dependency-injection'], function (exports, _constants, _controlProperties, _aureliaDependencyInjection) {
  'use strict';

  exports.__esModule = true;
  exports.addHyphenAndLower = addHyphenAndLower;
  exports._hyphenate = _hyphenate;
  exports._unhyphenate = _unhyphenate;
  exports.getBindablePropertyName = getBindablePropertyName;
  exports.getKendoPropertyName = getKendoPropertyName;
  exports.getEventsFromAttributes = getEventsFromAttributes;
  exports.pruneOptions = pruneOptions;
  exports.hasValue = hasValue;
  exports.useTemplates = useTemplates;
  exports.fireEvent = fireEvent;
  exports.fireKendoEvent = fireKendoEvent;
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

  function getBindablePropertyName(propertyName) {
    var name = '' + _constants.constants.bindablePrefix + propertyName;

    return _unhyphenate(name);
  }

  function getKendoPropertyName(propertyName) {
    var withoutPrefix = propertyName.substring(1);

    return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
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

  function pruneOptions(options) {
    var returnOptions = {};

    for (var prop in options) {
      if (hasValue(options[prop])) {
        returnOptions[prop] = options[prop];
      }
    }

    return returnOptions;
  }

  function hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  }

  function useTemplates(target, controlName, templates) {
    var controlProperties = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_controlProperties.ControlProperties);
    var templateProps = controlProperties.getTemplateProperties(controlName);

    templates.forEach(function (c) {
      if (templateProps.indexOf(c['for']) > -1) {
        target[getBindablePropertyName(c['for'])] = c.template;
      } else {
        throw new Error('Invalid template property name: "' + c['for'] + '", valid values are: ' + templateProps.join(', '));
      }
    });
  }

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  function fireKendoEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return fireEvent(element, '' + _constants.constants.eventPrefix + name, data);
  }
});