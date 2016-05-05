define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-binding', './control-properties', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaMetadata, _aureliaBinding, _controlProperties, _util) {
  'use strict';

  exports.__esModule = true;
  exports.generateBindables = generateBindables;

  function generateBindables(controlName) {
    var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    return function (target, key, descriptor) {
      var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
      var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
      var controlProperties = container.get(_controlProperties.ControlProperties);
      var util = container.get(_util.Util);
      var optionKeys = controlProperties.getProperties(controlName, extraProperties);

      optionKeys.push('widget');
      optionKeys.push('options');

      for (var i = 0; i < optionKeys.length; i++) {
        var option = optionKeys[i];

        var nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
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