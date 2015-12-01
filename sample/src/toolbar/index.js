import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router) {
        config.title = 'Toolbar';
        config.map([{
            route: ['', 'basic-use'],
            moduleId: './basic-use',
            nav: true,
            title: 'Basic Use'
        }, {
            route: 'customizing-with-editors',
            moduleId: './customizing-with-editors',
            nav: true,
            title: 'Customizing With Editors'
        }, {
            route: 'api',
            moduleId: './api',
            nav: true,
            title: 'API'
        }, ]);

        this.router = router;
    }
}
