System.register(['./events', './options', './template-compiler', './widget-base', './decorators'], function (_export) {
  'use strict';

  return {
    setters: [function (_events) {
      for (var _key in _events) {
        if (_key !== 'default') _export(_key, _events[_key]);
      }
    }, function (_options) {
      for (var _key2 in _options) {
        if (_key2 !== 'default') _export(_key2, _options[_key2]);
      }
    }, function (_templateCompiler) {
      for (var _key3 in _templateCompiler) {
        if (_key3 !== 'default') _export(_key3, _templateCompiler[_key3]);
      }
    }, function (_widgetBase) {
      for (var _key4 in _widgetBase) {
        if (_key4 !== 'default') _export(_key4, _widgetBase[_key4]);
      }
    }, function (_decorators) {
      for (var _key5 in _decorators) {
        if (_key5 !== 'default') _export(_key5, _decorators[_key5]);
      }
    }],
    execute: function () {}
  };
});