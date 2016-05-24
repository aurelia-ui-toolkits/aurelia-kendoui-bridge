export class Index {
  configureRouter(config, router) {
    config.map([
      { name: 'default',           route: ['help', ''],         moduleId: './help' },
      { name: 'free-support',      route: ['free-support', ''], moduleId: './help',   title: 'Support'},
      { name: 'support-exchange',  route: 'support-exchange',   moduleId: './help',   title: 'Support Exchange'}
    ]);
  }
}
