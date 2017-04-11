import {transient} from 'aurelia-dependency-injection';

@transient()
export class Observer {
  subscriptions = [];

  notify(evt, data) {
    for (let i = 0; i < this.subscriptions.length; i++) {
      if (this.subscriptions[i].event === evt) {
        this.subscriptions[i].callback(evt, data);
      }
    }
  }

  subscribe(evt, cb) {
    let subscription = { event: evt, callback: cb };

    this.subscriptions.push(subscription);

    return {
      dispose: () => this.unsubscribe(subscription)
    };
  }

  unsubscribe(subscription) {
    let index = this.subscriptions.indexOf(subscription);

    if (index > -1) {
      this.subscriptions.splice(index, 1);
    }
  }
}