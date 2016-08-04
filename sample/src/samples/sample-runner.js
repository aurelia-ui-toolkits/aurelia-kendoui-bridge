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
    // we cachebust so that css files can be removed from the <head>
    let cacheBust = Math.floor((Math.random() * 100000) + 1);
    sample.path = `${this.settings.gistProxy}file-cache-bust/${cacheBust}/${sample.gist}/app`;

    this.sample = sample;
    this.category = category;

    this.requires = '';
    if (category.requires) {
      category.requires.forEach(requireStatement => {
        this.requires += `${this.requires !== '' ? '\r\n' : ''}<require from="${requireStatement}"></require>`;
      });
    }

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
      this.sample.files = files;

      this.updateTabstrip(files);
    });
  }

  updateTabstrip(files) {
    this.tabstrip.remove(this.tabstrip.tabGroup.children());

    let keys = Object.keys(files);
    for (let i = 0; i < keys.length; i++) {
      let fileName = keys[i];
      let language;

      // look up extension, and what language to pass to PrismJS
      // for syntax highlighting
      let split = fileName.split('.');
      let ext = split[split.length - 1];
      switch (ext) {
      default:
      case 'html':
        language = 'html';
        break;
      case 'js':
        language = 'javascript';
        break;
      case 'css':
        language = 'css';
        break;
      case 'md':
        language = 'markdown';
        break;
      }

      this.tabstrip.append([{
        text: keys[i],
        content: '<au-code language="' + language + '" text.bind="sample.files[\'' + keys[i] + '\'].content"></au-code>'
      }]);

      this.tabstrip.select(0);
    }
  }

  restart() {
    let old = this.sample;
    this.sample = undefined;
    this.taskQueue.queueTask(() => {
      this.sample = old;
    });
  }

  detached() {
    this.sample = undefined;
    this.unsubscribe.dispose();
  }

  deactivate() {
    this.unloadSampleCSS();
  }

  unloadSampleCSS() {
    let links = Array.prototype.slice.call(document.querySelectorAll('link'));

    for(let i = 0; i < links.length; i++) {
      let link = links[i];
      if (link.href.startsWith('http://gist-serve.jeroenvinke.nl')) {
        link.parentNode.removeChild(link);
      }
    }
  }

  showImports() {
    this.importsWindow.open().center();
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }
}
