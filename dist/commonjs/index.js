'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaKendouiBridge = require('./aurelia-kendoui-bridge');

Object.keys(_aureliaKendouiBridge).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaKendouiBridge[key];
    }
  });
});