define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-binding', './control-properties', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaMetadata, _aureliaBinding, _controlProperties, _util) {
  'use strict';

  exports.__esModule = true;
  exports.generateBindables = generateBindables;

  function generateBindables(controlName) {
    return function (target, key, descriptor) {
      var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
      var controlProperties = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_controlProperties.ControlProperties);
      var optionKeys = controlProperties.getProperties(controlName);

      optionKeys.push('widget');

      for (var i = 0; i < optionKeys.length; i++) {
        var option = optionKeys[i];

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