function createEvent(name) {  
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

export function fireEvent(element, name) {  
  var event = createEvent(name);
  element.dispatchEvent(event);
}