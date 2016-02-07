const capitalMatcher = /([A-Z])/g;
import {constants} from './constants';

/**
* prepends hyphen and lowercases the input char
* @param char the char to add an hyphen in front for
*/
export function addHyphenAndLower(char: string): string {
  return '-' + char.toLowerCase();
}

/**
* hyphenates a string
* kTest -> k-test
* @param name the string to hyphenate
*/
export function _hyphenate(name: string): string {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

/**
* unhyphenate's a string
* k-test -> kTest
*/
export function _unhyphenate(name: string): string {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
* prepends prefix and unhyphenates the resulting string
* test -> kTest
*/
export function getBindablePropertyName(propertyName: string): string {
  let name = `${constants.bindablePrefix}${propertyName}`;

  return _unhyphenate(name);
}

/**
* removes prefix and unhyphenates the resulting string
* kTest -> test
*/
export function getKendoPropertyName(propertyName: string): string {
  let withoutPrefix = propertyName.substring(1); // remove 'k'

  return (withoutPrefix.charAt(0).toLowerCase() + withoutPrefix.slice(1));
}

/**
* converts all attributes found on an element to matching Kendo events
* returns a list of these Kendo events
*/
export function getEventsFromAttributes(element: Element): string[] {
  let attributes = Array.prototype.slice.call(element.attributes);
  let events: string[] = [];

  for (let attribute of attributes) {
    let attributeName = attribute.name;
    if (!attributeName.startsWith(constants.eventPrefix)) continue;

    // kendo-my-event.trigger -> my-event.trigger
    let hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

    // my-event.trigger -> my-event
    let withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

    // my-event -> myEvent
    let camelCased = _unhyphenate(withoutTriggerDelegate);

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
export function pruneOptions(options: any) {
  let returnOptions = {};

  for (let prop in options) {
    if (hasValue(options[prop])) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

export function hasValue(prop) {
  return typeof(prop) !== 'undefined' && prop !== null;
}
