import {Button as Widget} from 'src/button/button';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';

describe('Button', () => {
  let element;
  let widget;
  let container;
  let templatingEngine;

  beforeEach(() => {
    initialize();
    container = new Container();
    Container.instance = container;
    element = DOM.createElement('div');
    container.registerInstance(DOM.Element, element);
    templatingEngine = container.get(TemplatingEngine);
    widget = templatingEngine.createViewModelForUnitTest(Widget, null, {});
  });

  it('clears options in constructor', () => {
    expect(widget.options).toEqual({});
  });

  it('sets element in constructor', () => {
    expect(widget.element).toBe(element);
  });
});
