import {inject} from 'aurelia-dependency-injection';
import {ControlProperties} from './control-properties';
import {getBindablePropertyName, pruneOptions, hasValue} from './util';

/***
* Converts an object with bindable properties (with k- convention)
* into an object that can be passed to a Kendo control
*/
@inject(ControlProperties)
export class OptionsBuilder {

  constructor(controlProperties) {
    this.controlProperties = controlProperties;
  }

  getOptions(viewModel, className) {
    let options = {};

    for (let prop of this.controlProperties.getProperties(className)) {
      let value = viewModel[getBindablePropertyName(prop)];

      if (hasValue(value)) {
        if (prop.toLowerCase().indexOf('template') > -1) {
          options[prop] = () => value;
        } else {
          options[prop] = value;
        }
      }
    }

    return pruneOptions(options);
  }
}
