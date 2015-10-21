import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router) {
        config.title = 'Kendo UI Samples';
        config.map([{
            route: '',
            redirect: 'grid'
        }, {
            route: 'grid',
            moduleId: 'grid/index',
            nav: true,
            title: 'Grid'
        }, {
            route: 'button',
            moduleId: 'button/index',
            nav: true,
            title: 'Button'
        },  {
            route: 'autocomplete',
            moduleId: 'autocomplete/index',
            nav: true,
            title: 'Autocomplete'
        }, ]);

        this.router = router;
    }
}
