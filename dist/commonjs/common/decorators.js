'use strict';

exports.__esModule = true;
exports.generateBindables = generateBindables;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaBinding = require('aurelia-binding');

var _controlProperties = require('./control-properties');

var _util = require('./util');

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