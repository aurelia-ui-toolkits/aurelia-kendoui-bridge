import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {bindingMode} from 'aurelia-binding';
import {ControlProperties} from './control-properties';
import {Util} from './util';

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string, extraProperties = []) {
  return function(target, key, descriptor) {
    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let controlProperties = container.get(ControlProperties);
    let util = container.get(Util);
    let optionKeys = controlProperties.getProperties(controlName, extraProperties);

    optionKeys.push('widget');

    for (let i = 0; i < optionKeys.length; i++) {
      let option = optionKeys[i];

      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: util.getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
      }

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}
