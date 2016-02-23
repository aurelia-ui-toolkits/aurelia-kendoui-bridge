import {inject} from 'aurelia-dependency-injection';
import {ControlProperties} from './control-properties';
import {getBindablePropertyName, pruneOptions, hasValue, isTemplateProperty} from './util';

/***
* Converts an object with bindable properties (with k- convention)
* into an object that can be passed to a Kendo control
*/
@inject(ControlProperties)
export class OptionsBuilder {

  constructor(controlProperties) {
    this.controlProperties = controlProperties;
  }

  /**
  * converts properties of view-model (with k- convention) to an object
  * that can be passed to a Kendo control. It also wraps templates into a function
  * so the Kendo templating system is not used
  */
  getOptions(viewModel, className) {
    let options = {};

    for (let prop of this.controlProperties.getProperties(className)) {
      let value = viewModel[getBindablePropertyName(prop)];

      if (hasValue(value)) {
        if (isTemplateProperty(prop)) {
          options[prop] = () => value;
        } else {
          options[prop] = value;
        }
      }
    }

    return pruneOptions(options);
  }
}
