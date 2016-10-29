import {bindables} from './bindables';
import {inject} from 'aurelia-dependency-injection';
import {Util} from './util';

/***
* Available properties (merged together from several locations) are stored here per controlName
* so that this isn't done for each created wrapper instance
*/
@inject(Util)
export class ControlProperties {

  cache = {};

  constructor(util: Util) {
    this.util = util;
  }

  /**
  * Merges together available properties for a specific control
  * and stores this in a cache so that this is done only once per control
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  * @param extraProperties allows you to provide an extra list of available properties
  */
  getProperties(controlName: string, extraProperties = []): string[] {
    if (this.cache[controlName]) {
      return this.cache[controlName];
    }

    // get available properties of the options object inside a Kendo control
    let options1 = this.getWidgetProperties(controlName);
    // get available properties of the pre-generated bindables.json file
    let options2 = this.getGeneratedProperties(controlName);

    // merge together without duplicates
    let keys = options1.concat(options2.filter(item => options1.indexOf(item) < 0));
    keys = keys.concat(extraProperties.filter(item => keys.indexOf(item) < 0));

    this.cache[controlName] = keys;

    return keys;
  }


  /**
  * returns a list of properties of a Kendo control that has been pre-generated (into bindables.js)
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  */
  getGeneratedProperties(controlName: string) {
    if (!bindables[controlName]) {
      throw new Error(`${controlName} not found in generated bindables.js`);
    }

    return bindables[controlName];
  }

  /*
  * returns the intrinsic list of properties of a kendo control
  * returns an empty array if the control is not loaded
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  */
  getWidgetProperties(controlName: string): string[] {
    if (window.kendo && kendo.jQuery.fn[controlName]) {
      return Object.keys(kendo.jQuery.fn[controlName].widget.prototype.options);
    }

    return [];
  }

  /*
  * filters list of properties of a control by template property
  * @param controlName the name of the kendo control (kendoGrid, kendoButton)
  */
  getTemplateProperties(controlName: string): string[] {
    let properties = this.getProperties(controlName);

    let templates = properties.filter(prop => this.util.isTemplateProperty(prop));

    return templates;
  }
}
