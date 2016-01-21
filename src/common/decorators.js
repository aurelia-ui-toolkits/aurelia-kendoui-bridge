import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {bindingMode} from 'aurelia-binding';
import {getBindablePropertyName} from './util';

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string) {
  return function(target, key, descriptor) {
    // get all options defined in the Kendo control
    let options = jQuery.fn[controlName].widget.prototype.options;

    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let optionKeys = Object.keys(options);
    optionKeys.push('dataSource');
    optionKeys.push('widget');

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: getBindablePropertyName(option),
        defaultBindingMode: (option === 'widget') ? bindingMode.twoWay : bindingMode.oneWay
      };

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}
