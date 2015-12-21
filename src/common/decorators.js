import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';


// creates a BindableProperty for every option defined
// in the option property of a Kendo control
export function generateBindables(controlName) {
  return function(target, key, descriptor) {
    // get all options defined in the Kendo control
    let options = jQuery.fn[controlName].widget.prototype.options;

    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let optionKeys = Object.keys(options);
    optionKeys.push('dataSource');

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: option
      };

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}
