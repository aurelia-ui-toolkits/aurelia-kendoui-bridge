System.register(['./constants', './control-properties', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var constants, ControlProperties, Container, capitalMatcher;

  _export('addHyphenAndLower', addHyphenAndLower);

  _export('_hyphenate', _hyphenate);

  _export('_unhyphenate', _unhyphenate);

  _export('getBindablePropertyName', getBindablePropertyName);

  _export('getKendoPropertyName', getKendoPropertyName);

  _export('getEventsFromAttributes', getEventsFromAttributes);

  _export('pruneOptions', pruneOptions);

  _export('hasValue', hasValue);

  _export('useTemplates', useTemplates);

  _export('fireEvent', fireEvent);

  _export('fireKendoEvent', fireKendoEvent);

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
    var name = '' + constants.bindablePrefix + propertyName;

    return _unhyphenate(name);
  }

  function getKendoPropertyName(propertyName) {
    var withoutPrefix = propertyName.substring(1);

    return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
  }

  function getEventsFromAttributes(element) {
    var attributes = Array.prototype.slice.call(element.attributes);
    var events = [];

    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      var attributeName = attribute.name;
      if (!attributeName.startsWith(constants.eventPrefix)) continue;

      var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

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
    var controlProperties = (Container.instance || new Container()).get(ControlProperties);
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

    return fireEvent(element, '' + constants.eventPrefix + name, data);
  }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }, function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }],
    execute: function () {
      capitalMatcher = /([A-Z])/g;
    }
  };
});