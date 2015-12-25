import {useView} from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    this.router = router;

    config.title = 'Test pages';
    config.map([{
      route: ['', 'all-controls'],
      moduleId: './all-controls',
      nav: true,
      title: 'All controls'
    }, {
      route: 'virtualization-grid',
      moduleId: './virtualization-grid',
      nav: true,
      title: 'Grid virtualization'
    }]);
  }
}
