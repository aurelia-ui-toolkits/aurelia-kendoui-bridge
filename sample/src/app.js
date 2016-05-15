export class App {
  configureRouter(config, router) {
    config.title = 'Kendo UI Samples';

    config.map([
      { name: 'about',            route: 'about',                      moduleId: 'about/about',                 title: 'About' },
      { name: 'help',             route: 'help',                       moduleId: 'help/index',                  title: 'Help' },
      { name: 'home',             route: '',                           redirect: 'about/about' },
      { name: 'installation',     route: 'installation',               moduleId: 'installation/index',          title: 'Installation' },
      { name: 'catalog-index',    route: 'catalog-index',              moduleId: 'catalog-index/controls',      title: 'Catalog-index'},
      { name: 'samples',          route: 'samples',                    moduleId: 'samples/index',               title: 'Samples' }
    ]);

    this.router = router;
  }
}