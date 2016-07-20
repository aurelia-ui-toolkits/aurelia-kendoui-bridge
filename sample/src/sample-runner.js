import {inject, bindable} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TaskQueue} from 'aurelia-framework';

@inject(EventAggregator, TaskQueue)
export class SampleRunner {

  @bindable router;

  constructor(ea, taskQueue) {
    this.taskQueue = taskQueue;
    this.ea = ea;
  }

  activate(params, route) {
    let sample = route.navModel.config.sample;

    if (!sample) throw new Error('Route does not contain a \'sample\' property');

    this.sample = sample;

    if (this.sample.gist) {
      this.sample.gist = `https://gist.run/?id=${this.sample.gist}`;
    }

    this.unsubscribe = this.ea.subscribe('kendo:skinChange', () => this.restart());
  }

  restart() {
    let old = this.sample;
    this.sample = undefined;
    this.taskQueue.queueTask(() => {
      this.sample = old;
    });
  }

  detached() {
    this.unsubscribe.dispose();
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }
}
