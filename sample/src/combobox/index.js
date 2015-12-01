import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router) {
        config.title = 'Combobox';
        config.map([{
            route: ['', 'basic-use'],
            moduleId: './basic-use',
            nav: true,
            title: 'Basic use'
        }, {
            route: 'server-filtering',
            moduleId: './server-filtering',
            nav: true,
            title: 'Server filtering'
        },  {
            route: 'virtualization',
            moduleId: './virtualization',
            nav: true,
            title: 'Virtualization'
        },  {
            route: 'grouping',
            moduleId: './grouping',
            nav: true,
            title: 'Grouping'
        },  {
            route: 'customizing-templates',
            moduleId: './customizing-templates',
            nav: true,
            title: 'Customizing templates'
        },  {
            route: 'cascading-combobox',
            moduleId: './cascading-combobox',
            nav: true,
            title: 'Cascading combobox'
        },  {
            route: 'api',
            moduleId: './api',
            nav: true,
            title: 'API'
        }]);

        this.router = router;
    }
}
