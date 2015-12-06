import 'bootstrap';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro())
        .plugin('aurelia-prism-plugin');


    aurelia.use.globalResources('shared/collapse-panel');
 	  aurelia.use.globalResources('shared/markdown');

    aurelia.start().then(a => a.setRoot('app'));
}
