import {constants} from './constants';

export function fireEvent(element, name, data = {}) {
  let event = new CustomEvent(name, { 'detail': data});
  element.dispatchEvent(event);
}

export function fireKendoEvent(element, name, data = {}) {
  fireEvent(element, `${constants.eventPrefix}${name}`, data);
  return true;
}
