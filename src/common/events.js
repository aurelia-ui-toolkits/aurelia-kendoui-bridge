function createEvent(name) {
  let event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

export function fireEvent(element, name) {
  let event = createEvent(name);
  element.dispatchEvent(event);
}
