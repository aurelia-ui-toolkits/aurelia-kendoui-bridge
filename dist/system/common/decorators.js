System.register(['aurelia-templating', 'aurelia-metadata', 'aurelia-binding', './util'], function (_export) {
  'use strict';

  var BindableProperty, HtmlBehaviorResource, metadata, bindingMode, getBindablePropertyName;

  _export('generateBindables', generateBindables);

  function generateBindables(controlName) {
    return function (target, key, descriptor) {
      var options = jQuery.fn[controlName].widget.prototype.options;

      var behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
      var optionKeys = Object.keys(options);
      optionKeys.push('dataSource');
      optionKeys.push('widget');

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
          name: getBindablePropertyName(option)
        };

        if (option === 'widget') {
          nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
        }

        var prop = new BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    };
  }

  return {
    setters: [function (_aureliaTemplating) {
      BindableProperty = _aureliaTemplating.BindableProperty;
      HtmlBehaviorResource = _aureliaTemplating.HtmlBehaviorResource;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_util) {
      getBindablePropertyName = _util.getBindablePropertyName;
    }],
    execute: function () {}
  };
});