import {bindables} from './bindables';

/***
* Available properties (merged together from several locations) are stored here per controlName
* so that this isn't done for each created wrapper instance
*/
export class ControlProperties {
  cache = [];

  /**
  * Merges together available properties for a specific control
  * and stores this in a cache so that this is done only once per control
  */
  getProperties(controlName) {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    // get available properties of the options object inside a Kendo control
    let options1 = Object.keys(jQuery.fn[controlName].widget.prototype.options);
    // get available properties of the pre-generated bindables.json file
    let options2 = bindables[controlName];
    // merge together without duplicates
    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));

    // we also want k-widget on all wrappers
    keys.push('widget');

    this.cache[controlName] = keys;

    return keys;
  }
}
