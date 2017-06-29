import {EventManager} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';

@inject(EventManager)
export class NotifyBindingBehavior {
  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  bind(binding, scope, target, fieldName) {
    if (!binding.updateSource) return;

    // update values on blur event
    let targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    binding.targetObserver = targetObserver;
    targetObserver.originalHandler = binding.targetObserver.handler;
    let handler = this.eventManager.createElementHandler(['blur']);
    targetObserver.handler = handler;

    let observable = target || binding.source.bindingContext;
    let field = fieldName || binding.sourceExpression.expression.name;
    let intercept = binding.updateSource;

    // intercept updateSource function
    // to call .trigger('change', { field: field}) and set the dirty flag
    binding['intercepted-updateSource'] = intercept;
    binding.updateSource = function(value) {
      // handle change
      if (observable.set && observable.trigger) {
        // kendo recompiles templates after a change event
        // without this delay Aurelia's binding system gets confused as
        // some views are destroyed
        setTimeout(() =>
          observable.trigger.call(observable, 'change', { field: field }),
        100);

        if (observable.dirty === false) {
          observable.dirty = true;
        }
      }

      return intercept.call(binding, value);
    };
  }

  unbind(binding, scope) {
    if (!binding['intercepted-updateSource']) return;

    binding.updateSource = binding['intercepted-updateSource'];
    binding['intercepted-updateSource'] = null;
  }
}
