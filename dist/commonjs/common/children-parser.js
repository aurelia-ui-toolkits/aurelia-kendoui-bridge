"use strict";

exports.__esModule = true;
exports.parseChildren = parseChildren;

function parseChildren(cssSelector, element, instruction) {
  var matchedElements = Array.prototype.slice.call(element.querySelectorAll(cssSelector));
  var objects = matchedElements.map(function (matchedElement) {
    var obj = {};

    for (var i = matchedElement.attributes.length - 1; i >= 0; i--) {
      var attr = matchedElement.attributes.item(i);
      obj[attr.name] = attr.value;
    }

    if (matchedElement.childNodes.length > 0) {
      obj.template = matchedElement.innerHTML;
    }

    return obj;
  });

  matchedElements.forEach(function (i) {
    return element.removeChild(i);
  });

  instruction.children = objects;
}