import {inject} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';
import {Loader}  from 'aurelia-loader';

@inject(Loader)
export class SampleRunner {

  constructor(loader) {
    this.loader = loader;
  }

  activate(params, route) {
    let sample = route.navModel.config.sample;

    if(!sample) throw new Error("Route does not contain a 'sample' property");

    this.sample = sample;
  }

  determineActivationStrategy(){
    return activationStrategy.replace;
  }
}
