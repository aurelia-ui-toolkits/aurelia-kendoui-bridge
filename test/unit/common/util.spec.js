import '../setup';
import {Util} from 'src/common/util';
import {TemplatingEngine} from 'aurelia-templating';
import {constants} from 'src/common/constants';
import {initialize} from 'aurelia-pal-browser';
import {Container} from 'aurelia-dependency-injection';
import {DOM} from 'aurelia-pal';

describe('Util', () => {
  let sut;
  let container;
  let templatingEngine;

  beforeEach(() => {
    initialize();

    container = new Container();
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(Util);
  });

  it('getEventsFromAttributes ignores non-kendo attributes', () => {
    let element = DOM.createElement('div');
    element.setAttribute('id', '');
    element.setAttribute('name', '');
    element.setAttribute(`${constants.eventPrefix}my-event.trigger`, '');

    let response = sut.getEventsFromAttributes(element);
    expect(response.includes('id')).toBe(false);
    expect(response.includes('name')).toBe(false);
    expect(response.includes('myEvent')).toBe(true);
  });

  it('getEventsFromAttributes removes prefix', () => {
    let element = DOM.createElement('div');
    element.setAttribute(`${constants.eventPrefix}my-event`, '');

    let response = sut.getEventsFromAttributes(element);
    expect(response.includes('myEvent')).toBe(true);
  });

  it('getEventsFromAttributes unhyphenates and camelcases', () => {
    let element = DOM.createElement('div');
    element.setAttribute(`${constants.eventPrefix}my-event`, '');
    element.setAttribute(`${constants.eventPrefix}my-long-event-name`, '');

    let response = sut.getEventsFromAttributes(element);
    expect(response.includes('myEvent')).toBe(true);
    expect(response.includes('myLongEventName')).toBe(true);
  });

  it('getEventsFromAttributes removes trigger or delegates from the name', () => {
    let element = DOM.createElement('div');
    element.setAttribute(`${constants.eventPrefix}my-event.trigger`, '');
    element.setAttribute(`${constants.eventPrefix}other-event.delegate`, '');

    let response = sut.getEventsFromAttributes(element);
    expect(response.includes('myEvent')).toBe(true);
    expect(response.includes('otherEvent')).toBe(true);
  });

  it('getBindablePropertyName() applies prefix', () => {
    expect(sut.getBindablePropertyName('test').toLowerCase()).toBe(`ktest`);
  });

  it('getBindablePropertyName() lowercases first letter', () => {
    let firstLetter = sut.getBindablePropertyName('test')[0];
    expect(firstLetter).toBe(firstLetter.toLowerCase());
  });

  it('getBindablePropertyName() uppercases second letter', () => {
    let secondLetter = sut.getBindablePropertyName('test')[1];
    expect(secondLetter).toBe(secondLetter.toUpperCase());
  });

  it('_hyphenate() hyphenates correctly', () => {
    expect(sut._hyphenate('kMyProp')).toBe('k-my-prop');
    expect(sut._hyphenate('abcdMyProp')).toBe('abcd-my-prop');
    expect(sut._hyphenate('myProp')).toBe('my-prop');
  });

  it('_unhyphenate() unhyphenates correctly', () => {
    expect(sut._unhyphenate('k-my-prop')).toBe('kMyProp');
    expect(sut._unhyphenate('abcd-my-prop')).toBe('abcdMyProp');
    expect(sut._unhyphenate('my-prop')).toBe('myProp');
  });

  it('addHyphenAndLower adds hyphen and lowercases the char', () => {
    expect(sut.addHyphenAndLower('k')).toBe('-k');
    expect(sut.addHyphenAndLower('K')).toBe('-k');
  });

  it('getKendoPropertyName', () => {
    expect(sut.getKendoPropertyName('kTemplate')).toBe('template');
    expect(sut.getKendoPropertyName('kPropertyName')).toBe('propertyName');
  });

  it('pruneOptions removes null properties', () => {
    let pruned = sut.pruneOptions({
      a: null,
      b: '1',
      c: 0,
      d: undefined
    });

    expect(pruned.hasOwnProperty('a')).toBe(false);
    expect(pruned.b).toBe('1');
    expect(pruned.c).toBe(0);
    expect(pruned.hasOwnProperty('d')).toBe(false);
  });

  it('creates event with correct name', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = sut.fireEvent(elem, 'test');

    expect(event.type).toBe('test');
  });

  it('creates bubbling event', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = sut.fireEvent(elem, 'test');

    expect(event.bubbles).toBe(true);
  });

  it('adds data to the detail property', () => {
    initialize();

    let elem = DOM.createElement('div');
    let detail = {
      a: 'b'
    };
    let event = sut.fireEvent(elem, 'test', detail);

    expect(event.detail).toBe(detail);
  });

  it('fireKendoEvent returns event', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = sut.fireEvent(elem, 'test');

    expect(event).not.toBeUndefined();
  });

  it('fireKendoEvent adds eventprefix', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = sut.fireKendoEvent(elem, 'test');

    expect(event.type).toBe(`k-on-test`);
  });

  it('finds templates by conventions', () => {
    expect(sut.isTemplateProperty('test')).toBe(false);
    expect(sut.isTemplateProperty('testTemplate')).toBe(true);
    expect(sut.isTemplateProperty('template')).toBe(true);
  });

  it('isObject detects objects correctly', () => {
    expect(sut.isObject({})).toBe(true);
    expect(sut.isObject(null)).toBe(false);
    expect(sut.isObject(undefined)).toBe(false);
    expect(sut.isObject('foo')).toBe(false);
    expect(sut.isObject(15)).toBe(false);
  });
});
