'use strict';

System.register(['./constants'], function (_export, _context) {
  "use strict";

  var constants, _typeof, capitalMatcher, Util;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_constants) {
      constants = _constants.constants;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      capitalMatcher = /([A-Z])/g;

      _export('Util', Util = function () {
        function Util() {
          _classCallCheck(this, Util);
        }

        Util.prototype.addHyphenAndLower = function addHyphenAndLower(char) {
          return '-' + char.toLowerCase();
        };

        Util.prototype._hyphenate = function _hyphenate(name) {
          return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, this.addHyphenAndLower);
        };

        Util.prototype._unhyphenate = function _unhyphenate(name) {
          return name.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          });
        };

        Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
          var name = '' + constants.bindablePrefix + propertyName;

          return this._unhyphenate(name);
        };

        Util.prototype.getKendoPropertyName = function getKendoPropertyName(propertyName) {
          var withoutPrefix = propertyName.substring(1);

          return withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1);
        };

        Util.prototype.getEventsFromAttributes = function getEventsFromAttributes(element) {
          var attributes = Array.prototype.slice.call(element.attributes);
          var events = [];

          for (var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            var attributeName = attribute.name;
            if (!attributeName.startsWith(constants.eventPrefix)) continue;

            var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

            var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

            var camelCased = this._unhyphenate(withoutTriggerDelegate);

            events.push(camelCased);
          }

          return events;
        };

        Util.prototype.pruneOptions = function pruneOptions(options) {
          var returnOptions = {};

          for (var prop in options) {
            if (this.hasValue(options[prop])) {
              returnOptions[prop] = options[prop];
            }
          }

          return returnOptions;
        };

        Util.prototype.hasValue = function hasValue(prop) {
          return typeof prop !== 'undefined' && prop !== null;
        };

        Util.prototype.fireEvent = function fireEvent(element, name) {
          var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          var event = new CustomEvent(name, {
            detail: data,
            bubbles: true
          });
          element.dispatchEvent(event);

          return event;
        };

        Util.prototype.fireKendoEvent = function fireKendoEvent(element, name) {
          var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          return this.fireEvent(element, '' + constants.eventPrefix + name, data);
        };

        Util.prototype.isTemplateProperty = function isTemplateProperty(propertyName) {
          return propertyName.toLowerCase().indexOf('template') > -1;
        };

        Util.prototype.isObject = function isObject(obj) {
          return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
        };

        Util.prototype.getChildrenVMs = function getChildrenVMs(element, cssSelector) {
          var elements = $(element).children(cssSelector);
          var viewModels = [];
          elements.each(function (index, elem) {
            if (elem.au && elem.au.controller) {
              viewModels.push(elem.au.controller.viewModel);
            } else {
              throw new Error('au property not found on element ' + elem.tagName + '. Did you load this custom element via <require> or via main.js?');
            }
          });
          return viewModels;
        };

        return Util;
      }());

      _export('Util', Util);
    }
  };
});
//# sourceMappingURL=../dist/dev/common/util.js.map
