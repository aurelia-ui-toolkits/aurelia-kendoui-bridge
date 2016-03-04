import {inject} from 'aurelia-dependency-injection';
import {ControlProperties} from './control-properties';
import {Util} from './util';

/***
* Converts an object with bindable properties (with k- convention)
* into an object that can be passed to a Kendo control
*/
@inject(ControlProperties, Util)
export class OptionsBuilder {

  constructor(controlProperties: ControlProperties, util: Util) {
    this.controlProperties = controlProperties;
    this.util = util;
  }

  /**
  * converts properties of view-model (with k- convention) to an object
  */
  getOptions(viewModel, className) {
    let options = {};
    let props = this.controlProperties.getProperties(className);

    for (let i = 0; i < props.length; i++) {
      let prop = props[i];
      let value = viewModel[this.util.getBindablePropertyName(prop)];

      if (this.util.hasValue(value)) {
        options[prop] = value;
      }
    }

    return this.util.pruneOptions(options);
  }
}
