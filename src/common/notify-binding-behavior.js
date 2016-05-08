import {EventManager} from 'aurelia-binding';
import {inject} from 'aurelia-framework';

@inject(EventManager)
export class NotifyBindingBehavior {

  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  bind(binding, scope, observable, field) {
    if (!binding.updateSource) return;

    let targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    binding.targetObserver = targetObserver;

    targetObserver.originalHandler = binding.targetObserver.handler;

    // replace the element subscribe function with one that uses the correct events.
    let handler = this.eventManager.createElementHandler(['blur']);
    targetObserver.handler = handler;

    var intercept = binding.updateSource;
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
