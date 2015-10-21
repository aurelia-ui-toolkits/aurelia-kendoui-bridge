import 'github:twbs/bootstrap@3.3.5';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin');

  aurelia.start().then(a => a.setRoot('app'));
}
