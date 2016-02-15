define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-binding', './control-properties', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaMetadata, _aureliaBinding, _controlProperties, _util) {
  'use strict';

  exports.__esModule = true;
  exports.generateBindables = generateBindables;

  function generateBindables(controlName) {
    return function (target, key, descriptor) {
      var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
      var controlProperties = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_controlProperties.ControlProperties);
      var optionKeys = controlProperties.getProperties(controlName);

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
          name: _util.getBindablePropertyName(option)
        };

        if (option === 'widget') {
          nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
        }

        var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    };
  }
});