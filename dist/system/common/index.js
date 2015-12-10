System.register(['./events', './options', './template-compiler', './children-parser'], function (_export) {
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
    }, function (_childrenParser) {
      for (var _key4 in _childrenParser) {
        if (_key4 !== 'default') _export(_key4, _childrenParser[_key4]);
      }
    }],
    execute: function () {}
  };
});