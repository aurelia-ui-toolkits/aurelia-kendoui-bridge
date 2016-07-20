import {inject, bindable} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TaskQueue} from 'aurelia-framework';
import {Container} from 'aurelia-dependency-injection';
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
    this.router = Container.instance.get('SampleRouter');

    if (!sample) throw new Error('Route does not contain a \'sample\' property');
    if (!sample.gist) throw new Error('sample does not have a gist');

    this.routes = [];

    this.router.routes.forEach(r => {
      if (r.category === category) {
        this.routes.push(r);
      }
    });

    // app.js is the view-model of the gist
    // aurelia's <compose> automatically loads app.html
    sample.path = `${this.settings.gistProxy}file/${sample.gist}/app`;

    // we need to get all files from the gist to show it in
    // the code preview
    new HttpClient()
    .configure(x => {
      x.withBaseUrl(this.settings.gistProxy);
    })
    .get(`files/${sample.gist}`)
    .then(response => {
      let files = response.content;
      let keys = Object.keys(files);
      if (keys.indexOf('app.html') > -1) {
        sample.html = files['app.html'].content;
      }
      if (keys.indexOf('app.js') > -1) {
        sample.js = files['app.js'].content;
      }
      if (keys.indexOf('app.css') > -1) {
        sample.css = files['app.css'].content;
      }
    });

    this.sample = sample;

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
