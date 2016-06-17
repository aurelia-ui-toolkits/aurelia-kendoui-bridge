'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateBindables = generateBindables;
exports.delayed = delayed;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _controlProperties = require('./control-properties');

var _util = require('./util');

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
    optionKeys.push('noInit');

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

function delayed() {
  return function (target, key, descriptor) {
    var taskQueue = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_aureliaTaskQueue.TaskQueue);
    var ptr = descriptor.value;

    descriptor.value = function () {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      taskQueue.queueTask(function () {
        return ptr.apply(_this, args);
      });
    };

    return descriptor;
  };
}