import registry from './registry.json!json';
import {inject} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {Loader}  from 'aurelia-loader';

@inject(Loader)
export class SampleRunner {

  constructor(loader) {
    this.loader = loader;
  }

  activate(params, route) {
    let sampleName = route.navModel.config.sample;

    if(!sampleName) throw new Error("Route does not contain a 'sample' property");

    let split = sampleName.split('/');

    let sample = registry[split[0]][split[1]];

    sample.control = split[0];
    sample.sample = split[1];
    sample.path = `${sample.control}/${sample.sample}`;

    this.sample = sample;
  }

  attached() {
    let tabstrip = this.tabstrip.widget;

    // clear all tabstrip items
    tabstrip.remove(tabstrip.tabGroup.children());

    let files = this.sample.files;

    for(let key of Object.keys(files)) {

      let path = files[key];

      this.loader.loadText(path)
      .then(text => {
        tabstrip.append({
          text: key,
          content: text
        });
      });
    }


  }

  determineActivationStrategy(){
    return activationStrategy.replace;
  }
}
