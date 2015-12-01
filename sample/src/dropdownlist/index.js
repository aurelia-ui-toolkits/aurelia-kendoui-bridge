import {useView} from 'aurelia-framework';

@useView("/src/shared/showcase.html")
export class Index {

    configureRouter(config, router) {
        config.title = 'DropDownList';
        config.map([{
            route: ['','basic-use'],
            moduleId: './basic-use',
            nav: true,
            title: 'Basic use'
        }, {
            route: 'binding-to-remote-data',
            moduleId: './binding-to-remote-data',
            nav: true,
            title: 'Binding to remote data'
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
            route: 'cascading-dropdownlist',
            moduleId: './cascading-dropdownlist',
            nav: true,
            title: 'Cascading DropDownList'
        },  {
            route: 'api',
            moduleId: './api',
            nav: true,
            title: 'API'
        }]);

        this.router = router;
    }
}
