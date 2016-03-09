export class Index {
  configureRouter(config, router) {
    config.map([
      { name: 'default',    route: ['installation', ''],  moduleId: './instructions' },
      { name: 'core',       route: 'core',               moduleId: './instructions',           title: 'Core'},
      { name: 'jspm-git',    route: 'jspm-git',           moduleId: './instructions',           title: 'jspm-git'},
      { name: 'vendors',    route: 'vendors',            moduleId: './instructions',           title: 'Vendors'}
    ]);
  }
}
