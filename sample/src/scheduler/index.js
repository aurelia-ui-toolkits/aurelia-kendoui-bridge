import {useView} from 'aurelia-framework';

@useView("shared/showcase.html")
export class Index {

    configureRouter(config, router) {
        config.title = 'Scheduler';
        config.map([{
            route: ['', 'basic-use'],
            moduleId: './basic-use',
            nav: true,
            title: 'Basic use'
        },  {
            route: 'timeline-view',
            moduleId: './timeline-view',
            nav: true,
            title: 'Timeline view'
        },  {
            route: 'resources',
            moduleId: './resources',
            nav: true,
            title: 'Resources'
        },  {
            route: 'horizontal-grouping',
            moduleId: './horizontal-grouping',
            nav: true,
            title: 'Horizontal grouping'
        },  {
            route: 'vertical-grouping',
            moduleId: './vertical-grouping',
            nav: true,
            title: 'Vertical vrouping'
        }, {
            route: 'api',
            moduleId: './api',
            nav: true,
            title: 'API'
        }, ]);

        this.router = router;
    }
}
