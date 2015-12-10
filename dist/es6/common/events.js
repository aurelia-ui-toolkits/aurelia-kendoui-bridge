export function fireEvent(element, name, data = {}) {
  let event = new CustomEvent(name, { 'detail': data});
  element.dispatchEvent(event);
}
