'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var NotifyBindingBehavior = (function () {
  function NotifyBindingBehavior(eventManager) {
    _classCallCheck(this, _NotifyBindingBehavior);

    this.eventManager = eventManager;
  }

  NotifyBindingBehavior.prototype.bind = function bind(binding, scope, target, fieldName) {
    if (!binding.updateSource) return;

    var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    binding.targetObserver = targetObserver;
    targetObserver.originalHandler = binding.targetObserver.handler;
    var handler = this.eventManager.createElementHandler(['blur']);
    targetObserver.handler = handler;

    var observable = target || binding.source.bindingContext;
    var field = fieldName || binding.sourceExpression.expression.name;
    var intercept = binding.updateSource;

    binding['intercepted-updateSource'] = intercept;
    binding.updateSource = function (value) {
      if (observable.set && observable.trigger) {
        setTimeout(function () {
          return observable.trigger.call(observable, 'change', { field: field });
        }, 100);

        if (observable.dirty === false) {
          observable.dirty = true;
        }
      }

      return intercept.call(binding, value);
    };
  };

  NotifyBindingBehavior.prototype.unbind = function unbind(binding, scope) {
    if (!binding['intercepted-updateSource']) return;

    binding.updateSource = binding['intercepted-updateSource'];
    binding['intercepted-updateSource'] = null;
  };

  var _NotifyBindingBehavior = NotifyBindingBehavior;
  NotifyBindingBehavior = _aureliaDependencyInjection.inject(_aureliaBinding.EventManager)(NotifyBindingBehavior) || NotifyBindingBehavior;
  return NotifyBindingBehavior;
})();

exports.NotifyBindingBehavior = NotifyBindingBehavior;