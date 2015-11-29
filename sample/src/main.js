import 'github:twbs/bootstrap@3.3.6';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());


    aurelia.use.globalResources('shared/collapse-panel');
 	  aurelia.use.globalResources('shared/markdown');

    aurelia.start().then(a => a.setRoot('app'));
}
