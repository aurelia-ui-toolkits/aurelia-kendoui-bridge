import {fireEvent, fireKendoEvent} from 'src/common/events';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';

describe('Events', (a) => {
  it('creates event with correct name', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = fireEvent(elem, 'test');

    expect(event.type).toBe('test');
  });

  it('creates bubbling event', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = fireEvent(elem, 'test');

    expect(event.bubbles).toBe(true);
  });

  it('adds data to the detail property', () => {
    initialize();

    let elem = DOM.createElement('div');
    let detail = {
      a: 'b'
    };
    let event = fireEvent(elem, 'test', detail);

    expect(event.detail).toBe(detail);
  });

  it('fireKendoEvent returns event', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = fireEvent(elem, 'test');

    expect(event).not.toBeUndefined();
  });

  it('fireKendoEvent adds eventprefix', () => {
    initialize();

    let elem = DOM.createElement('div');
    let event = fireKendoEvent(elem, 'test');

    expect(event.type).toBe(`k-on-test`);
  });
});
