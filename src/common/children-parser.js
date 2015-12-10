export function parseChildren(cssSelector, element, instruction) {
  // find all elements matching the cssSelector
  let matchedElements = Array.prototype.slice.call(element.querySelectorAll(cssSelector));
  let objects = matchedElements.map(matchedElement => {
    // for each matching element, create an empty object
    let obj = {};

    // loop through each attribute and
    // add map it into the object
    for (let i = matchedElement.attributes.length - 1; i >= 0; i--) {
      let attr = matchedElement.attributes.item(i);
      obj[attr.name] = attr.value;
    }

    // checks if there are HTML tags inside of an element
    // and sets this content as the "template" of the object
    if (matchedElement.childNodes.length > 0) {
      obj.template = matchedElement.innerHTML;
    }

    return obj;
  });

  // Remove matched elements
  matchedElements.forEach(i => element.removeChild(i));

  // the instruction is the only object both parseChildren and the view-model have
  // access to. so we set the children on the instruction, and the view-model
  // can retreive it
  instruction.children = objects;
}
