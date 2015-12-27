import 'bootstrap';
import {ThemeManager} from 'shared/theme-manager';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

  aurelia.use.globalResources('shared/collapse-panel');
  aurelia.use.globalResources('shared/markdown');
  aurelia.use.globalResources('shared/logger');
  aurelia.use.globalResources('shared/au-code');

  aurelia.start()
  .then(au => au.setRoot('app'))
  .then(au => {
    let manager = au.container.get(ThemeManager);
    return manager.loadTheme('material');
  });
}
