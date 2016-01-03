export class App {
  configureRouter(config, router) {
    config.title = 'Kendo UI Samples';

    config.map([
      { name: 'about',            route: 'about',                      moduleId: 'about/about',                 title: 'About' },
      { name: 'help',             route: 'help',                       moduleId: 'help/help',                   title: 'Help' },
      { name: 'docs',             route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
      { name: 'home',             route: '',                           redirect: 'samples' },
      { name: 'installation',     route: 'installation',               moduleId: 'installation/index',          title: 'Installation' },
      { name: 'project-status',   route: 'project-status',             moduleId: 'project-status/controls',     title: 'Project status'},
      { name: 'samples',          route: 'samples',                    moduleId: 'samples/index',               title: 'Samples' },
      { name: 'test',             route: 'test',                       moduleId: 'test/index',                  title: 'Test pages' }
    ]);

    this.router = router;
  }
}
