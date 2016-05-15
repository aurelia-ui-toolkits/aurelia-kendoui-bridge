System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-binding', 'aurelia-task-queue', './control-properties', './util'], function (_export) {
  'use strict';

  var BindableProperty, HtmlBehaviorResource, Container, metadata, bindingMode, TaskQueue, ControlProperties, Util;

  _export('generateBindables', generateBindables);

  _export('delayed', delayed);

  function generateBindables(controlName) {
    var extraProperties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    return function (target, key, descriptor) {
      var behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
      var container = Container.instance || new Container();
      var controlProperties = container.get(ControlProperties);
      var util = container.get(Util);
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
          nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
        }

        var prop = new BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    };
  }

  function delayed(targetFunction) {
    return function (target, key, descriptor) {
      var taskQueue = Container.instance.get(TaskQueue);
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
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {}
  };
});