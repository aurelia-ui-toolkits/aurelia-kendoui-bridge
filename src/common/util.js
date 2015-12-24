const capitalMatcher = /([A-Z])/g;
import {constants} from './constants';

export function addHyphenAndLower(char) {
  return '-' + char.toLowerCase();
}

export function _hyphenate(name) {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

export function _unhyphenate(name) {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export function getBindablePropertyName(propertyName) {
  let name = `${constants.bindablePrefix}${propertyName}`;

  return _unhyphenate(name);
}

export function getEventsFromAttributes(element) {
  let attributes = Array.prototype.slice.call(element.attributes);
  let events = [];

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
