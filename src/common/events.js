export function fireEvent(element, name, data = {}) {
  let event = new CustomEvent(name, { 'detail': data});
  element.dispatchEvent(event);
}

export function fireKendoEvent(element, name, data = {}) {
  return fireEvent(element, `kendo-${name}`, data);
}
