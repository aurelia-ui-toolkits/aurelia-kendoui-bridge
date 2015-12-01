import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router) {
        config.title = 'Button';
        config.map([{
            route: ['', 'basic-use'],
            moduleId: './basic-use',
            nav: true,
            title: 'Basic dse'
        }, {
            route: 'images',
            moduleId: './images',
            nav: true,
            title: 'Images'
        }, {
            route: 'api',
            moduleId: './api',
            nav: true,
            title: 'API'
        }, ]);

        this.router = router;
    }
}
