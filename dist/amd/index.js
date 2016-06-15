define(['exports', './aurelia-kendoui-bridge'], function (exports, _aureliaKendouiBridge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaKendouiBridge).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaKendouiBridge[key];
      }
    });
  });
});