import {getEventsFromAttributes} from 'src/common/util';
import {constants} from 'src/common/constants';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';

describe('Util', () => {
  beforeEach(() => {
    initialize();
  });

  it('getEventsFromAttributes ignores non-kendo attributes', () => {
    let element = DOM.createElement('div');
    element.setAttribute('id', '');
    element.setAttribute('name', '');
    element.setAttribute('kendo-my-event.trigger', '');

    let response = getEventsFromAttributes(element);
    expect(response.includes('id')).toBe(false);
    expect(response.includes('name')).toBe(false);
    expect(response.includes('myEvent')).toBe(true);
  });

  it('getEventsFromAttributes removes prefix', () => {
    let element = DOM.createElement('div');
    element.setAttribute(`${constants.eventPrefix}my-event`, '');

    let response = getEventsFromAttributes(element);
    expect(response.includes('myEvent')).toBe(true);
  });

  it('getEventsFromAttributes unhyphenates and camelcases', () => {
    let element = DOM.createElement('div');
    element.setAttribute('kendo-my-event', '');
    element.setAttribute('kendo-my-long-event-name', '');

    let response = getEventsFromAttributes(element);
    expect(response.includes('myEvent')).toBe(true);
    expect(response.includes('myLongEventName')).toBe(true);
  });

  it('getEventsFromAttributes removes trigger or delegates from the name', () => {
    let element = DOM.createElement('div');
    element.setAttribute('kendo-my-event.trigger', '');
    element.setAttribute('kendo-other-event.delegate', '');

    let response = getEventsFromAttributes(element);
    expect(response.includes('myEvent')).toBe(true);
    expect(response.includes('otherEvent')).toBe(true);
  });
});
