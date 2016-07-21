import {inject, bindable} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TaskQueue} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Settings} from '../settings';

@inject(EventAggregator, TaskQueue, Settings)
export class SampleRunner {

  @bindable router;

  constructor(ea, taskQueue, settings) {
    this.taskQueue = taskQueue;
    this.settings = settings;
    this.ea = ea;
  }

  activate(params, route) {
    let sample = route.navModel.config.sample;
    let category = route.navModel.config.category;
    this.router = route.navModel.router;

    if (!sample) throw new Error('Route does not contain a \'sample\' property');
    if (!sample.gist) throw new Error('sample does not have a gist');

    this.routes = this.router.routes.filter(r => r.category === category);

    // app.js is the view-model of the gist
    // aurelia's <compose> automatically loads app.html
    sample.path = `${this.settings.gistProxy}file/${sample.gist}/app`;

    this.sample = sample;
    this.category = category;

    this.unsubscribe = this.ea.subscribe('kendo:skinChange', () => this.restart());
  }

  attached() {
    // we need to get all files from the gist to show it in
    // the code preview
    new HttpClient()
    .configure(x => {
      x.withBaseUrl(this.settings.gistProxy);
    })
    .get(`files/${this.sample.gist}`)
    .then(response => {
      let files = response.content;
      let keys = Object.keys(files);
      if (keys.indexOf('app.html') > -1) {
        this.sample.html = files['app.html'].content;
      }
      if (keys.indexOf('app.js') > -1) {
        this.sample.js = files['app.js'].content;
      }
      if (keys.indexOf('app.css') > -1) {
        this.sample.css = files['app.css'].content;
      }
    });
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
