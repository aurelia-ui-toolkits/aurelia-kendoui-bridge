import {constants} from './constants';

export function fireEvent(element, name, data = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

export function fireKendoEvent(element, name, data = {}) {
  return fireEvent(element, `${constants.eventPrefix}${name}`, data);
}
