import {useView, inject} from 'aurelia-framework';
import {Registry} from 'shared/registry';

@useView('shared/showcase.html')
@inject(Registry)
export class Index {

  constructor(registry) {
    this.registry = registry;
  }

  configureRouter(config, router) {
    this.router = router;

    return this.registry.load(config, 'drag-and-drop');
  }
}
