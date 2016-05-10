export class Index {
  configureRouter(config, router) {
    config.map([
      { name: 'default',    route: ['help', ''],         moduleId: './help' },
      { name: 'docs',       route: 'docs',               moduleId: './help',           title: 'Component Docs'},
      { name: 'support',    route: 'support',            moduleId: './help',           title: 'Support'}
    ]);
  }
}
