System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-binding', './control-properties', './util'], function (_export) {
  'use strict';

  var BindableProperty, HtmlBehaviorResource, Container, metadata, bindingMode, ControlProperties, getBindablePropertyName;

  _export('generateBindables', generateBindables);

  function generateBindables(controlName) {
    return function (target, key, descriptor) {
      var behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
      var controlProperties = (Container.instance || new Container()).get(ControlProperties);
      var optionKeys = controlProperties.getProperties(controlName);

      optionKeys.push('widget');

      for (var i = 0; i < optionKeys.length; i++) {
        var option = optionKeys[i];

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
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      getBindablePropertyName = _util.getBindablePropertyName;
    }],
    execute: function () {}
  };
});