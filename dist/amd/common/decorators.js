define(['exports', 'aurelia-templating', 'aurelia-metadata'], function (exports, _aureliaTemplating, _aureliaMetadata) {
  'use strict';

  exports.__esModule = true;
  exports.generateBindables = generateBindables;

  function generateBindables(controlName) {
    return function (target, key, descriptor) {
      var options = jQuery.fn[controlName].widget.prototype.options;

      var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
      var optionKeys = Object.keys(options);
      optionKeys.push('dataSource');

      for (var _iterator = optionKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var option = _ref;

        var nameOrConfigOrTarget = {
          name: option
        };

        var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    };
  }
});