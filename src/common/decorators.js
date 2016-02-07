import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {bindingMode} from 'aurelia-binding';
import {ControlProperties} from './control-properties';
import {getBindablePropertyName} from './util';
import {bindable} from 'aurelia-templating';

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string) {
  return function(target, key, descriptor) {
    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let controlProperties = (Container.instance || new Container()).get(ControlProperties);
    let optionKeys = controlProperties.getProperties(controlName);

    optionKeys.push('widget');

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
      }

      // if the option equals to template or ends with template
      // register the property as a templateproperty
      if (option === 'template') {
        registerTemplateProperty(target, option, descriptor, true);
      } else if (option.indexOf('Template') > -1) {
        registerTemplateProperty(target, option, descriptor, false);
      }

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

/**
* Marks a member as a template property - allowing it to be assigned by a k-template element
* it also registers the property as a @bindable
* @param isDefault Is this the default template property (most commonly used)?
*/
export function templateProperty(isDefault?) {
  return function(target, key, descriptor) {
    // Register the template property
    registerTemplateProperty(target, key, descriptor, isDefault);
    // Also register a bindable property to cut down on the number of decorators
    bindable(target, key, descriptor);
  };
}

function registerTemplateProperty(target, key, descriptor, isDefault) {
  // Register a template property with the ControlProperties instance
  let controlProperties = (Container.instance || new Container()).get(ControlProperties);
  let templateProps = controlProperties.getTemplateProperties(target);

  if (isDefault) {
    templateProps.defaultProperty = key;
  } else {
    templateProps.validProperties.push(key);
  }
}
