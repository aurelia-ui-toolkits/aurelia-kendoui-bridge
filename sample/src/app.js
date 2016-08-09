export class App {
  configureRouter(config, router) {
    config.title = 'Kendo UI Samples';

    config.map([
      { name: 'about',            route: 'about',             moduleId: 'about/about',                 title: 'About' },
      { name: 'catalog-index',    route: 'catalog-index',     moduleId: 'catalog-index/controls',      title: 'Catalog-index'},
      { name: 'documentation',    route: 'documentation',     moduleId: 'documentation/documentation', title: 'Documentation'},
      { name: 'help',             route: 'help',              moduleId: 'help/index',                  title: 'Help' },
      { name: 'home',             route: '',                  redirect: 'about/about' },
      { name: 'installation',     route: 'installation',      moduleId: 'installation/installation',   title: 'Installation' },
      { name: 'samples',          route: 'samples',           moduleId: 'samples/index',               title: 'Samples' },
      { name: 'gist-list',        route: 'gist-list',         moduleId: 'shared/gist-list',            title: 'Gist list' }
    ]);

    this.router = router;
  }
}