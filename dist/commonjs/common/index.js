'use strict';

exports.__esModule = true;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _events = require('./events');

_defaults(exports, _interopExportWildcard(_events, _defaults));

var _options = require('./options');

_defaults(exports, _interopExportWildcard(_options, _defaults));

var _templateCompiler = require('./template-compiler');

_defaults(exports, _interopExportWildcard(_templateCompiler, _defaults));