System.register(['aurelia-binding', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var EventManager, inject, _dec, _class, NotifyBindingBehavior;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaBinding) {
      EventManager = _aureliaBinding.EventManager;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('NotifyBindingBehavior', NotifyBindingBehavior = (_dec = inject(EventManager), _dec(_class = function () {
        function NotifyBindingBehavior(eventManager) {
          _classCallCheck(this, NotifyBindingBehavior);

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

        return NotifyBindingBehavior;
      }()) || _class));

      _export('NotifyBindingBehavior', NotifyBindingBehavior);
    }
  };
});
//# sourceMappingURL=../dist/dev/common/notify-binding-behavior.js.map
