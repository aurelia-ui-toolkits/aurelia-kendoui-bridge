export class App {
  configureRouter(config, router) {
    config.title = 'Kendo UI Samples';

    config.map([
      { name: 'about',            route: 'about',                      moduleId: 'about/about',                 title: 'About' },
      { name: 'help',             route: 'help',                       moduleId: 'help/help',                   title: 'Help' },
      { name: 'docs',             route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
      { name: 'home',             route: '',                           redirect: 'about/about' },
      { name: 'installation',     route: 'installation/:type',         moduleId: 'installation/index',          title: 'Installation' },
      { name: 'project-status',   route: 'project-status',             moduleId: 'project-status/controls',     title: 'Project status'},
      { name: 'samples',          route: 'samples',                    moduleId: 'samples/index',               title: 'Samples' }
    ]);

    this.router = router;
  }
}
