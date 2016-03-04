const capitalMatcher = /([A-Z])/g;
import {constants} from './constants';

/**
* Collection of useful functions used in multiple parts of the plugin
*/
export class Util {

  /**
  * prepends hyphen and lowercases the input char
  * @param char the char to add an hyphen in front for
  */
  addHyphenAndLower(char: string): string {
    return '-' + char.toLowerCase();
  }

  /**
  * hyphenates a string
  * kTest -> k-test
  * @param name the string to hyphenate
  */
  _hyphenate(name: string): string {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, this.addHyphenAndLower);
  }

  /**
  * unhyphenate's a string
  * k-test -> kTest
  */
  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  /**
  * prepends prefix and unhyphenates the resulting string
  * test -> kTest
  */
  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;

    return this._unhyphenate(name);
  }

  /**
  * removes prefix and unhyphenates the resulting string
  * kTest -> test
  */
  getKendoPropertyName(propertyName: string): string {
    let withoutPrefix = propertyName.substring(1); // remove 'k'

    return (withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1));
  }

  /**
  * converts all attributes found on an element to matching Kendo events
  * returns a list of these Kendo events
  */
  getEventsFromAttributes(element: Element): string[] {
    let attributes = Array.prototype.slice.call(element.attributes);
    let events: string[] = [];

  	for (let i = 0; i < attributes.length; i++) {
      let attribute = attributes[i];
      let attributeName = attribute.name;
      if (!attributeName.startsWith(constants.eventPrefix)) continue;

      // kendo-my-event.trigger -> my-event.trigger
      let hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

      // my-event.trigger -> my-event
      let withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

      // my-event -> myEvent
      let camelCased = this._unhyphenate(withoutTriggerDelegate);

      events.push(camelCased);
    }

    return events;
  }


  /**
  * Implicitly setting options to "undefined" for a kendo control can break things.
  * this function prunes the supplied options object and removes values that
  * aren't set to something explicit (i.e. not null)
  * @param options the options object to prune the properties of
  */
  pruneOptions(options: any) {
    let returnOptions = {};

    for (let prop in options) {
      if (this.hasValue(options[prop])) {
        returnOptions[prop] = options[prop];
      }
    }

    return returnOptions;
  }

  hasValue(prop) {
    return typeof(prop) !== 'undefined' && prop !== null;
  }

  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  fireEvent(element: Element, name: string, data = {}) {
    let event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  /**
  * Fire DOM event on an element with the k-on prefix
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name, without k-on prefix
  * @param data Addition data to attach to an event
  */
  fireKendoEvent(element: Element, name: string, data = {}) {
    return this.fireEvent(element, `${constants.eventPrefix}${name}`, data);
  }

  /**
  * detection of template properties
  */
  isTemplateProperty(propertyName: string) {
    return propertyName.toLowerCase().indexOf('template') > -1;
  }
}
