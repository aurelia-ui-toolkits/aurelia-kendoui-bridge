import {pruneOptions} from './options';
import {fireKendoEvent} from './events';
import {getEventsFromAttributes, _hyphenate} from './util';

export class WidgetBase {
  constructor(controlName, element) {
    this.element = element;
    this.target = this.element;
    this.controlName = controlName;
  }

  _initialize() {
    let target = jQuery(this.target);
    this.ctor = target[this.controlName];
    let options = this._getOptions();

    this.widget = this.ctor.call(target, options).data(this.controlName);
  }

  _getOptions() {
    let options = this.getOptions();
    let eventOptions = this.getEventOptions();

    return Object.assign({}, this.options, pruneOptions(options), eventOptions);
  }

  getEventOptions() {
    let options = {};
    let allowedEvents = this.ctor.widget.prototype.events;
    let events = getEventsFromAttributes(this.element);

    events.forEach(event => {
      // throw error if this event does not exist
      if (!allowedEvents.includes(event)) {
        throw new Error(`${event} is not an event on the ${this.controlName} control`);
      }

      options[event] = e => fireKendoEvent(this.target, _hyphenate(event), e);
    });

    return options;
  }
}
