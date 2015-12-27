export class App {
  configureRouter(config, router) {
    config.title = 'Kendo UI Samples';

    config.map([
      { name: 'about',            route: 'about',               moduleId: 'about/about',                 title: 'About' },
      { name: 'help',             route: 'help',                moduleId: 'help/help',                   title: 'Help' },
      { name: 'home',             route: '',                    redirect: 'samples' },
      { name: 'install',          route: 'installation/:page',  moduleId: 'installation-wizard/wizard',  title: 'Installation wizard', href: '#/installation/begin' },
      { name: 'project-status',   route: 'project-status',      moduleId: 'project-status/controls',     title: 'Project status'},
      { name: 'samples',          route: 'samples',             moduleId: 'samples/index',               title: 'Samples' },
      { name: 'test',             route: 'test',                moduleId: 'test/index',                  title: 'Test pages' }
    ]);

    this.router = router;
  }
}
